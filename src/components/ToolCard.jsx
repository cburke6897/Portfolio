import { useState, useEffect } from "react";
import StackIcon from "tech-stack-icons";

function ToolCard({ icon: Icon, iconSrc, stackIconName, title, description, onClick }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none rounded-br-none p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer flex flex-row items-start gap-3" onClick={onClick}>
      <div className="shrink-0 w-10 h-10 flex items-center justify-center">
        {stackIconName ? (
          <StackIcon 
            name={stackIconName}
            className="w-10 h-10 group-hover:scale-110 transition-transform" 
          />
        ) : Icon ? (
          <Icon className="h-10 w-10 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        ) : iconSrc ? (
          <img 
            src={iconSrc} 
            alt={title} 
            className="h-10 w-10 group-hover:scale-110 transition-transform"
          />
        ) : null}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ToolCard;
