import { injectStyles } from "../../styles/injector";

export enum BtnColor {
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}

export type Btn = {
  show?: boolean;
  label?: string;
  className?: string;
  readonly color?: BtnColor;
};

export type Confirm = {
  option: {
    message: string;
    header: string;
    closeBtn?: Btn;
    acceptBtn?: Btn;
    bodyHTML?: string;
    closeMaskHide?: boolean;
    closeBgScroll?: boolean;
  };
  accept: () => void;
  reject: () => void;
};

export const useConfirm = () => {
  injectStyles();
  const use = (confirm: Confirm): void => {
    const { option, accept, reject } = confirm;

    const {
      header,
      message,
      closeBtn,
      acceptBtn,
      bodyHTML,
      closeMaskHide = true,
      closeBgScroll = true,
    } = option;

    const isShowCloseBtn = closeBtn?.show ?? true;
    const isShowAcceptBtn = acceptBtn?.show ?? true;

    const confirmMain = document.querySelector(".confirm-main");
    const documentBody = document.querySelector("body");

    const alertHtmlTags = `<div class="dialog dialog-container">
            <div class="dialog-box">
                <div class="dialog-header">
                    ${header ?? ""}
                </div>

                <div class="dialog-body">
                    ${bodyHTML ? bodyHTML : message}
                </div>
                <div class="dialog-footer">
                    ${
                      isShowCloseBtn
                        ? `<button type="button" class="dialog-btn dialog-btn-close ${
                            closeBtn?.color ?? ""
                          }">
                        ${closeBtn?.label ?? "Cancel"}
                    </button>`
                        : ""
                    }

                    ${
                      isShowAcceptBtn
                        ? `<button type="button" class="dialog-btn dialog-btn-confirm ${
                            acceptBtn?.color ?? ""
                          }">
                        ${acceptBtn?.label ?? "Okay"}
                    </button>`
                        : ""
                    }
                </div>
            </div>
        </div> `;

    if (!confirmMain) {
      if (documentBody) {
        documentBody.insertAdjacentHTML(
          "beforeend",
          `<div class="confirm-main">${alertHtmlTags}</div>`
        );
      }
    } else {
      confirmMain.innerHTML = alertHtmlTags;
    }

    if (closeBgScroll) {
      if (documentBody) {
        documentBody.classList.add("hide-scrollable");
      }
    }

    const cancelBtn = document.querySelector(".dialog-btn-close");
    const confirmBtn = document.querySelector(".dialog-btn-confirm");

    const onAccept = async () => {
      accept();
      closeConfirmBox();
    };

    const onReject = async () => {
      reject();
      closeConfirmBox();
    };

    const closeConfirmBox = async () => {
      const confirmMainElement = document.querySelector(".confirm-main");
      if (confirmMainElement) {
        const dialogElement = confirmMainElement.querySelector(".dialog-box");
        if (dialogElement) {
          dialogElement.classList.add("fade-out");
        }

        setTimeout(() => {
          confirmMainElement.innerHTML = "";
        }, 200);
      }

      if (documentBody) {
        documentBody.classList.remove("hide-scrollable");
      }
    };

    if (confirmBtn) {
      confirmBtn.addEventListener("click", onAccept);
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", onReject);
    }

    if (closeMaskHide) {
      const dialogContainer = document.querySelector(".dialog-container");
      if (dialogContainer) {
        dialogContainer.addEventListener("click", (event) => {
          if (event.target === dialogContainer) {
            onReject();
          }
        });
      }
    }
  };

  return {
    use,
  };
};
