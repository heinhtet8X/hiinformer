declare enum Status {
    Default = "default",
    Success = "success",
    Warnig = "warning",
    Info = "info",
    Danger = "danger"
}
type ToastStatus = Status | "default" | "success" | "warning" | "info" | "danger";
type Toast = {
    status?: ToastStatus;
    title: string;
    message: string;
    timeout?: number | 3;
    multiple?: boolean | true;
};
declare const useToast: () => {
    add: (toast: Toast) => void;
};

export { Status, type Toast, type ToastStatus, useToast };
