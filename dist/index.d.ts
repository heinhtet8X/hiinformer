declare enum Status {
    Default = "default",
    Success = "success",
    Warnig = "warning",
    Info = "info",
    Danger = "danger"
}
type Toast = {
    status: Status;
    title: string;
    message: string;
    timeout: number;
    multiple: boolean;
};
declare const useToast: () => {
    add: (toast: Toast) => void;
};

export { Status, type Toast, useToast };
