import { injectStyles } from "../../styles/injector";

export enum Status {
  Default = "default",
  Success = "success",
  Warning = "warning",
  Warnig = "warning",
  Info = "info",
  Danger = "danger",
}

export enum Position {
  TopStart = "top-start",
  TopEnd = "top-end",
  TopCenter = "top-center",
  BottomStart = "bottom-start",
  BottomEnd = "bottom-end",
  BottomCenter = "bottom-center",
}

export type ToastStatus =
  | Status
  | "default"
  | "success"
  | "warning"
  | "info"
  | "danger";

export type ToastPosition =
  | Position
  | "top-start"
  | "top-end"
  | "top-center"
  | "bottom-start"
  | "bottom-end"
  | "bottom-center";

export type Toast = {
  status?: ToastStatus;
  title: string;
  message: string;
  timeout?: number | 3;
  multiple?: boolean;
  position?: ToastPosition;
};

let count: number = 0;
export const useToast = () => {
  injectStyles();
  const add = (toast: Toast): void => {

    ++count;
    const toastMain = document.querySelector<HTMLElement>(".toast-main");
    const documentBody = document.querySelector<HTMLElement>("body");
    const timeout: number = toast.timeout ?? 5;
    const toastId: string = `targetToast${count}`;
    const multiple: boolean = toast.multiple ?? true;
    const position = toast.position ?? "top-end";

    let toastAlertClass: string = toast.status ?? "default";

    const icon = swithIcon(toast.status);

    const alertHtmlTags: string = `<div id="${toastId}" class="toast toast-${toastAlertClass} toast-container">
                <div class="toast-body">
                  <div class="toast-img-overlay">
                    ${icon}
                  </div>
                  <div class="toast-content">
                    <h6 class="toast-content-title">${toast.title}</h6>
                    <p class="toast-content-message">
                      ${toast.message}
                    </p>
                  </div>

                  <button class="toast-close-btn" data-target-id="${toastId}" aria-label="Close notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>`;

    if (!toastMain) {
      if (documentBody) {
        documentBody.insertAdjacentHTML(
          "beforeend",
          `<div class="toast-main toast-${position}">${alertHtmlTags}</div>`
        );
      }
    } else {
      toastMain.className = `toast-main toast-${position}`;
      if (!multiple) {
        toastMain.innerHTML = alertHtmlTags;
      } else {
        toastMain.insertAdjacentHTML("beforeend", alertHtmlTags);
      }
    }

    const newToast = document.getElementById(toastId) as HTMLElement | null;
    if (newToast) {
      const closeBtn = newToast.querySelector(
        ".toast-close-btn"
      ) as HTMLElement | null;

      if (closeBtn) {
        // Manual close
        closeBtn.addEventListener(
          "click",
          async () => await makeCloseToast(toastId)
        );

        if (timeout > 0) {
          setTimeout(() => makeCloseToast(toastId), timeout * 1000);
        }
      }
    }
  };

  const makeCloseToast = async (elementId: string): Promise<void> => {
    const targetElement = document.getElementById(
      elementId
    ) as HTMLElement | null;

    const toastMain = document.querySelector<HTMLElement>(".toast-main");

    if (targetElement) {
      targetElement.classList.add("fade-out");

      targetElement.addEventListener(
        "animationend",
        () => {
          targetElement.remove();

          if (toastMain) {
            toastMain.classList.add("bump-up");
            setTimeout(() => {
              toastMain.classList.remove("bump-up");
            }, 300); // match transition duration
          }
        },
        { once: true }
      );
    }
  };

  const swithIcon = (status: ToastStatus | undefined): string => {
    let icon: string;
    switch (status) {
      case "success":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
        break;

      case "info":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
        break;

      case "danger":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
        break;

      case "warning":
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
        break;

      default:
        icon =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>';
        break;
    }

    return icon;
  };

  return {
    add,
  };
};

