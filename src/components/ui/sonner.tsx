import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

// Custom Toaster component that integrates theme and styling
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme(); // fallback to 'system' if undefined

  return (
    <Sonner
      // Dynamically apply current theme (light, dark, or system)
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          // Toast container styling
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",

          // Optional description text styling
          description: "group-[.toast]:text-muted-foreground",

          // Action button inside toast
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",

          // Cancel/secondary button inside toast
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} // Pass additional props like position, duration, etc.
    />
  );
};

export { Toaster, toast };
