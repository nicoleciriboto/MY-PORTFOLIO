import {Sun, Moon} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isMobile = window.innerWidth <= 640;
        if (savedTheme) {
            if (savedTheme === "dark") {
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark");
            }
        } else if (isMobile) {
            // Default to dark mode on mobile
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={toggleTheme} 
        className={cn("fixed max-sm:right-15 top-3 right-2 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden cursor-pointer"
        )}>
            
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-300" />}
        </button>
    )
}
