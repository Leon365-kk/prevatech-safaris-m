import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  DollarSign,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import { PackageAvailability, getAvailabilityForDate, getAvailableDatesInMonth } from '@/lib/availability-data';

interface AvailabilityCalendarProps {
  packageAvailability: PackageAvailability;
  onDateSelect?: (date: Date, availability: any) => void;
  selectedDate?: Date;
}

const AvailabilityCalendar = ({ 
  packageAvailability, 
  onDateSelect, 
  selectedDate 
}: AvailabilityCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };
  
  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const availability = getAvailabilityForDate(packageAvailability, clickedDate);
    
    if (availability?.available && onDateSelect) {
      onDateSelect(clickedDate, availability);
    }
  };
  
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const availability = getAvailabilityForDate(packageAvailability, date);
      const isSelected = selectedDate?.toDateString() === date.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();
      const isPast = date < new Date() && !isToday;
      
      let dayClasses = 'h-10 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-colors relative ';
      
      if (isPast) {
        dayClasses += 'bg-muted/30 border-muted text-muted-foreground cursor-not-allowed ';
      } else if (!availability?.available) {
        dayClasses += 'bg-red-50 border-red-200 text-red-600 cursor-not-allowed ';
      } else if (isSelected) {
        dayClasses += 'bg-primary border-primary text-primary-foreground ';
      } else if (isToday) {
        dayClasses += 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 ';
      } else {
        dayClasses += 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 ';
      }
      
      days.push(
        <div
          key={day}
          className={dayClasses}
          onClick={() => !isPast && handleDateClick(day)}
        >
          <span className="text-sm font-medium">{day}</span>
          {availability && !isPast && (
            <div className="absolute bottom-1">
              {availability.available ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <XCircle className="w-3 h-3 text-red-500" />
              )}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  const getAvailabilityStats = () => {
    const availableDates = getAvailableDatesInMonth(
      packageAvailability, 
      currentMonth.getFullYear(), 
      currentMonth.getMonth()
    );
    const totalDays = getDaysInMonth(currentMonth);
    const pastDays = new Date().getDate() < totalDays && 
                    currentMonth.getMonth() === new Date().getMonth() && 
                    currentMonth.getFullYear() === new Date().getFullYear() 
                    ? new Date().getDate() - 1 : 0;
    
    return {
      available: availableDates.length,
      total: totalDays - pastDays,
      percentage: Math.round((availableDates.length / (totalDays - pastDays)) * 100)
    };
  };
  
  const stats = getAvailabilityStats();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Availability Calendar
          </div>
          <div className="text-sm text-muted-foreground">
            {stats.available} of {stats.total} dates available ({stats.percentage}%)
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Month Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth('prev')}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h3 className="text-lg font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth('next')}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Week Days */}
        <div className="grid grid-cols-7 gap-1">
          {weekDays.map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {renderCalendarDays()}
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-50 border border-green-200 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-50 border border-red-200 rounded"></div>
            <span>Unavailable</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-muted/30 border border-muted rounded"></div>
            <span>Past</span>
          </div>
        </div>
        
        {/* Selected Date Info */}
        {selectedDate && (() => {
          const availability = getAvailabilityForDate(packageAvailability, selectedDate);
          return availability ? (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${availability.available ? 'text-green-600' : 'text-red-600'}`} />
                  <span>{availability.available ? 'Available' : 'Unavailable'}</span>
                </div>
                {availability.available && (
                  <>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{availability.groupSize || 0}/{availability.maxGroupSize} booked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span>${availability.price}/person</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>{availability.season} season</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : null;
        })()}
      </CardContent>
    </Card>
  );
};

export default AvailabilityCalendar;
