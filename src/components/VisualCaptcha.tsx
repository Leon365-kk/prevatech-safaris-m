import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface VisualCaptchaProps {
  onCodeGenerated: (code: string) => void;
  width?: number;
  height?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

const VisualCaptcha = ({ 
  onCodeGenerated, 
  width = 200, 
  height = 60, 
  difficulty = 'medium' 
}: VisualCaptchaProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentCode, setCurrentCode] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Generate random alphanumeric code
  const generateCode = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Generate random color
  const getRandomColor = (min: number, max: number): string => {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Draw captcha on canvas
  const drawCaptcha = (code: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);

    // Add noise lines based on difficulty
    const lineCount = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 5 : 8;
    for (let i = 0; i < lineCount; i++) {
      ctx.strokeStyle = getRandomColor(180, 220);
      ctx.lineWidth = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    // Add noise dots
    const dotCount = difficulty === 'easy' ? 20 : difficulty === 'medium' ? 40 : 60;
    for (let i = 0; i < dotCount; i++) {
      ctx.fillStyle = getRandomColor(150, 200);
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 2 + 1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Draw captcha text
    const fontSize = difficulty === 'easy' ? 28 : difficulty === 'medium' ? 24 : 20;
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    
    // Calculate text position
    const textWidth = ctx.measureText(code).width;
    const startX = (width - textWidth) / 2;
    const startY = height / 2 + fontSize / 3;

    // Draw each character with random styling
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const charX = startX + (i * textWidth / code.length);
      
      // Random color for each character
      ctx.fillStyle = getRandomColor(0, 100);
      
      // Random rotation
      ctx.save();
      ctx.translate(charX + fontSize / 4, startY);
      ctx.rotate((Math.random() - 0.5) * (difficulty === 'easy' ? 0.1 : difficulty === 'medium' ? 0.2 : 0.3));
      
      // Draw character
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // Add more noise lines on top
    for (let i = 0; i < 2; i++) {
      ctx.strokeStyle = getRandomColor(100, 150);
      ctx.lineWidth = Math.random() * 1.5 + 0.5;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }
  };

  // Generate new captcha
  const generateNewCaptcha = async () => {
    setIsRefreshing(true);
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newCode = generateCode(6);
    setCurrentCode(newCode);
    drawCaptcha(newCode);
    onCodeGenerated(newCode);
    setIsRefreshing(false);
  };

  // Initialize captcha on mount
  useEffect(() => {
    generateNewCaptcha();
  }, []);

  // Regenerate when difficulty changes
  useEffect(() => {
    generateNewCaptcha();
  }, [difficulty]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-block">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border-2 border-gray-300 rounded-lg shadow-sm bg-white"
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* Refresh button overlay */}
        <Button
          size="sm"
          variant="outline"
          onClick={generateNewCaptcha}
          disabled={isRefreshing}
          className="absolute -top-2 -right-2 h-8 w-8 p-0 bg-white shadow-md hover:bg-gray-50"
          title="Generate new code"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        </Button>
      </div>
      
      <div className="text-xs text-muted-foreground text-center">
        <p>Enter the 6 characters shown above</p>
        <p className="mt-1">Case-insensitive • Numbers & letters only</p>
      </div>
    </div>
  );
};

export default VisualCaptcha;
