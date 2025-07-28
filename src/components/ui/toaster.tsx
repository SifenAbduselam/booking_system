import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

/**
 * Toaster component that renders active toasts using Radix UI and custom logic from `useToast` hook.
 */
export function Toaster() {
  // Retrieve the current list of toasts from custom toast hook
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {/* Render each toast in the list */}
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {/* Optional action button (e.g. Undo) */}
          {action}
          {/* Close button (X) */}
          <ToastClose />
        </Toast>
      ))}

      {/* Toast container/view manager */}
      <ToastViewport />
    </ToastProvider>
  );
}
