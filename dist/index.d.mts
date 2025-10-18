declare enum Status {
    Default = "default",
    Success = "success",
    Warnig = "warning",
    Info = "info",
    Danger = "danger"
}
declare enum Position {
    TopStart = "top-start",
    TopEnd = "top-end",
    TopCenter = "top-center",
    BottomStart = "bottom-start",
    BottomEnd = "bottom-end",
    BottomCenter = "bottom-center"
}
type ToastStatus = Status | "default" | "success" | "warning" | "info" | "danger";
type ToastPosition = Position | "top-start" | "top-end" | "top-center" | "bottom-start" | "bottom-end" | "bottom-center";
type Toast = {
    status?: ToastStatus;
    title: string;
    message: string;
    timeout?: number | 3;
    multiple?: boolean;
    position?: ToastPosition;
};
declare const useToast: () => {
    add: (toast: Toast) => void;
};

export { Position, Status, type Toast, type ToastPosition, type ToastStatus, useToast };
