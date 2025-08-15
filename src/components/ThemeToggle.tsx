import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 p-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0.5 bg-background rounded-full"
        animate={{
          clipPath: theme === 'dark' 
            ? 'circle(10px at 36px 50%)' 
            : 'circle(10px at 10px 50%)'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 26 : 2,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ top: '4px' }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-white" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;