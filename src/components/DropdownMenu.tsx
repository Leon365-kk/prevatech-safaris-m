import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownMenuProps {
  title: string;
  items: { name: string; href: string; description?: string }[];
}

const DropdownMenu = ({ title, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors h-8"
      >
        {title}
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <Card className="absolute top-full left-0 mt-2 w-64 shadow-lg border bg-background/95 backdrop-blur-sm z-50">
          <CardContent className="p-2">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium text-sm group-hover:text-primary transition-colors">
                  {item.name}
                </div>
                {item.description && (
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors">
                    {item.description}
                  </div>
                )}
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DropdownMenu;
