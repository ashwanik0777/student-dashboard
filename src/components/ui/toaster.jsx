import { useToast } from "../../hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../../components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast 
          key={id} 
          variant={variant}
          className={`
            group pointer-events-auto relative flex w-full items-center 
            justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 
            shadow-lg transition-all
            ${variant === 'destructive' 
              ? 'bg-destructive text-destructive-foreground' 
              : 'bg-background text-foreground'
            }
          `}
          {...props}
        >
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && (
              <ToastDescription className="text-sm opacity-90">
                {description}
              </ToastDescription>
            )}
          </div>
          {action}
          <ToastClose className="absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100" />
        </Toast>
      ))}
      <ToastViewport className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
    </ToastProvider>
  );
}