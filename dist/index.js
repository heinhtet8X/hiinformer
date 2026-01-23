"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BtnColor: () => BtnColor,
  Position: () => Position,
  Status: () => Status,
  useConfirm: () => useConfirm,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/core/toast/toast.ts
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["Default"] = "default";
  Status2["Success"] = "success";
  Status2["Warnig"] = "warning";
  Status2["Info"] = "info";
  Status2["Danger"] = "danger";
  return Status2;
})(Status || {});
var Position = /* @__PURE__ */ ((Position2) => {
  Position2["TopStart"] = "top-start";
  Position2["TopEnd"] = "top-end";
  Position2["TopCenter"] = "top-center";
  Position2["BottomStart"] = "bottom-start";
  Position2["BottomEnd"] = "bottom-end";
  Position2["BottomCenter"] = "bottom-center";
  return Position2;
})(Position || {});
var count = 0;
var useToast = () => {
  const add = (toast) => {
    var _a, _b, _c, _d;
    ++count;
    const toastMain = document.querySelector(".toast-main");
    const documentBody = document.querySelector("body");
    const timeout = (_a = toast.timeout) != null ? _a : 5;
    const toastId = `targetToast${count}`;
    const multiple = (_b = toast.multiple) != null ? _b : true;
    const position = (_c = toast.position) != null ? _c : "top-end";
    let toastAlertClass = (_d = toast.status) != null ? _d : "default";
    const icon = swithIcon(toast.status);
    const alertHtmlTags = `<div id="${toastId}" class="toast toast-${toastAlertClass} toast-container">
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

                  <button class="toast-close-btn" data-target-id="${toastId}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                      />
                    </svg>
                  </button>
                </div>
              </div>`;
    if (!toastMain) {
      if (documentBody) {
        documentBody.insertAdjacentHTML(
          "beforeend",
          `<div class="toast-main toast-${position} theme-default">${alertHtmlTags}</div>`
        );
      }
    } else {
      if (!multiple) {
        if (!toastMain.classList.contains(`toast-${position}`)) {
          toastMain.classList.add(`toast-${position}`);
        }
        toastMain.innerHTML = alertHtmlTags;
      } else {
        toastMain.insertAdjacentHTML("beforeend", alertHtmlTags);
      }
    }
    const newToast = document.getElementById(toastId);
    if (newToast) {
      const closeBtn = newToast.querySelector(
        ".toast-close-btn"
      );
      if (closeBtn) {
        closeBtn.addEventListener(
          "click",
          () => __async(null, null, function* () {
            return yield makeCloseToast(toastId);
          })
        );
        if (timeout > 0) {
          setTimeout(() => makeCloseToast(toastId), timeout * 1e3);
        }
      }
    }
  };
  const makeCloseToast = (elementId) => __async(null, null, function* () {
    const targetElement = document.getElementById(
      elementId
    );
    const toastMain = document.querySelector(".toast-main");
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
            }, 300);
          }
        },
        { once: true }
      );
    }
  });
  const swithIcon = (status) => {
    var icon;
    switch (status) {
      case "success":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"/><path d="M3.03 13.078a2.5 2.5 0 0 1 0-2.157c.14-.294.38-.576.86-1.14c.192-.225.288-.337.368-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583c.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197c.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861c.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064c.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524M4.894 17.581a2.5 2.5 0 0 0 1.525 1.524c.308.11.677.139 1.416.197c.294.024.44.036.582.064a2.5 2.5 0 0 1 .908.376c.12.08.232.175.456.367c.564.48.846.72 1.14.861a2.5 2.5 0 0 0 2.157 0c.295-.14.577-.38 1.14-.861a5 5 0 0 1 .457-.367a2.5 2.5 0 0 1 .908-.376c.141-.028.288-.04.582-.064c.739-.058 1.108-.088 1.416-.197a2.5 2.5 0 0 0 1.525-1.524c.109-.308.138-.678.197-1.416c.023-.294.035-.441.063-.583c.064-.324.192-.633.376-.907c.08-.12.176-.232.367-.457c.48-.564.721-.846.862-1.14a2.5 2.5 0 0 0 0-2.157"/></g></svg>';
        break;
      case "info":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"/><circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg>';
        break;
      case "danger":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.5 15l3-3m0 3l-3-3m11.5-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"/></svg>';
        break;
      case "warning":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.31 9C8.594 5 9.967 3 12 3c2.31 0 3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572c-.951-1.364-.163-3.165 1.648-6.428M12 8v5"/><circle cx="12" cy="16" r="1" fill="currentColor"/></g></svg>';
        break;
      default:
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="m12 5.5l-.54.52l.01.011zM8.962 18.91l-.465.59zm6.076 0l-.464-.588zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm11.128-5.38a.75.75 0 1 0 1.06-1.062zM2.75 9.136c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275zm7.812-6.66l2 1.998l1.06-1.06l-2-2z"/></svg>';
        break;
    }
    return icon;
  };
  return {
    add
  };
};

// src/core/confirm/confirm.ts
var BtnColor = /* @__PURE__ */ ((BtnColor2) => {
  BtnColor2["PRIMARY"] = "primary";
  BtnColor2["SUCCESS"] = "success";
  BtnColor2["DANGER"] = "danger";
  BtnColor2["WARNING"] = "warning";
  return BtnColor2;
})(BtnColor || {});
var useConfirm = () => {
  const use = (confirm) => {
    var _a, _b, _c, _d, _e, _f;
    const { option, accept, reject } = confirm;
    const {
      header,
      message,
      closeBtn,
      acceptBtn,
      bodyHTML,
      closeMaskHide = true,
      closeBgScroll = true
    } = option;
    const isShowCloseBtn = (_a = closeBtn == null ? void 0 : closeBtn.show) != null ? _a : true;
    const isShowAcceptBtn = (_b = acceptBtn == null ? void 0 : acceptBtn.show) != null ? _b : true;
    const confirmMain = document.querySelector(".confirm-main");
    const documentBody = document.querySelector("body");
    const alertHtmlTags = `<div class="dialog dialog-container">
            <div class="dialog-box">
                <div class="dialog-header">
                    ${header != null ? header : ""}
                </div>

                <div class="dialog-body">
                    ${bodyHTML ? bodyHTML : message}
                </div>
                <div class="dialog-footer">
                    ${isShowCloseBtn ? `<button type="button" class="dialog-btn dialog-btn-close ${(_c = closeBtn == null ? void 0 : closeBtn.color) != null ? _c : ""}">
                        ${(_d = closeBtn == null ? void 0 : closeBtn.label) != null ? _d : "Cancel"}
                    </button>` : ""}

                    ${isShowAcceptBtn ? `<button type="button" class="dialog-btn dialog-btn-confirm ${(_e = acceptBtn == null ? void 0 : acceptBtn.color) != null ? _e : ""}">
                        ${(_f = acceptBtn == null ? void 0 : acceptBtn.label) != null ? _f : "Okay"}
                    </button>` : ""}
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
    const onAccept = () => __async(null, null, function* () {
      accept();
      closeConfirmBox();
    });
    const onReject = () => __async(null, null, function* () {
      reject();
      closeConfirmBox();
    });
    const closeConfirmBox = () => __async(null, null, function* () {
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
    });
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
    use
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BtnColor,
  Position,
  Status,
  useConfirm,
  useToast
});
