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

// src/styles/injector.ts
var injectStyles = () => {
  if (typeof document === "undefined") return;
  if (document.getElementById("hiinformer-styles")) return;
  const styleContent = `
:root {
  /* Brand & Status Colors */
  --h-primary-color: #6366f1;
  --h-primary-glow: rgba(99, 102, 241, 0.35);
  
  --h-success-color: #10b981;
  --h-success-glow: rgba(16, 185, 129, 0.35);
  
  --h-warning-color: #f59e0b;
  --h-warning-glow: rgba(245, 158, 11, 0.35);
  
  --h-danger-color: #ef4444;
  --h-danger-glow: rgba(239, 68, 68, 0.35);
  
  --h-info-color: #06b6d4;
  --h-info-glow: rgba(6, 182, 212, 0.35);
  
  /* Glass UI Fill & Backdrop */
  --h-toast-container-color: rgba(255, 255, 255, 0.72);
  --h-glass-border-color: rgba(255, 255, 255, 0.6);
  --h-glass-blur: blur(16px) saturate(180%);
  --h-glass-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 20px -5px rgba(255, 255, 255, 0.5) inset;
  
  /* Modal Glass Backdrop */
  --h-backdrop-color: rgba(15, 23, 42, 0.25);
  --h-backdrop-blur: blur(4px);
  --h-dialog-box-width: 440px;

  /* Typography & Layout */
  --h-font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --h-border-radius: 18px;
  --h-border-width: 1px;
  --h-toast-padding: 18px 22px;
  --btn-confirm-radius: 12px;

  /* Z-Index */
  --main-z-index: 99999;
}

/* Animations */
.toast {
  animation: glassSmoothIn 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast.toast-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 70%
  );
  pointer-events: none;
  animation: glassShimmer 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
}

.fade-out {
  animation: glassSmoothOut 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.fade-out-up {
  animation: glassSmoothOutUp 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.bump-up {
  animation: bumpUpSmooth 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes glassSmoothIn {
  from {
    opacity: 0;
    transform: translateY(-16px) scale(0.97);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}

@keyframes glassShimmer {
  0% { left: -150%; }
  100% { left: 150%; }
}

@keyframes glassSmoothOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateY(12px) scale(0.96);
    filter: blur(6px);
  }
}

@keyframes glassSmoothOutUp {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateY(-16px) scale(0.96);
    filter: blur(6px);
  }
}

@keyframes bumpUpSmooth {
  from { transform: translateY(20px); }
  to { transform: translateY(0px); }
}

@keyframes fadeInConfirmOverlay {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: var(--h-backdrop-blur);
  }
}

@keyframes fadeInConfirmBox {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.96);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}

@keyframes fadeOutConfirmBox {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
    filter: blur(6px);
  }
}

.dialog {
  animation: fadeInConfirmOverlay 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog.dialog-container .dialog-box {
  animation: fadeInConfirmBox 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog.dialog-container .dialog-box.fade-out {
  animation: fadeOutConfirmBox 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Toast Container Layout */
.toast-main {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 380px;
  max-width: 480px;
  z-index: var(--main-z-index);
  padding: 14px;
  pointer-events: none;
}

.toast-main > * {
  pointer-events: auto;
}

.toast-main.toast-top-start { left: 20px; top: 20px; }
.toast-main.toast-top-end { right: 20px; top: 20px; }
.toast-main.toast-top-center { top: 20px; left: 50%; transform: translateX(-50%); }
.toast-main.toast-bottom-start { left: 20px; bottom: 20px; }
.toast-main.toast-bottom-end { right: 20px; bottom: 20px; }
.toast-main.toast-bottom-center { bottom: 20px; left: 50%; transform: translateX(-50%); }

.toast {
  font-family: var(--h-font-family);
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast.toast-container {
  border-radius: 18px;
  padding: 18px 22px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  position: relative;
  box-shadow: 0 12px 30px -6px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.toast.toast-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.12);
}

.toast.toast-container .toast-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.toast.toast-container .toast-header .toast-title-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toast.toast-container .toast-header .toast-title-group .toast-icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  min-width: 24px;
}

.toast.toast-container .toast-header .toast-title-group .toast-content-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.3;
}

.toast.toast-container .toast-header .toast-close-btn {
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  padding: 0;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  opacity: 0.75;
  transition: opacity 0.2s ease, background 0.2s ease;
}

.toast.toast-container .toast-header .toast-close-btn:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.06);
}

.toast.toast-container .toast-body {
  margin-top: 10px;
}

.toast.toast-container .toast-body .toast-content-message {
  margin: 0;
  font-size: 14.2px;
  line-height: 1.58;
  font-weight: 450;
  letter-spacing: -0.005em;
}

/* Status Themes */
.toast.toast-success.toast-container {
  background: linear-gradient(135deg, rgba(220, 252, 231, 0.92), rgba(209, 250, 229, 0.85));
  border: 1px solid rgba(134, 239, 172, 0.75);
}
.toast.toast-success.toast-container .toast-content-title { color: #14532d; }
.toast.toast-success.toast-container .toast-content-message { color: #166534; }
.toast.toast-success.toast-container .toast-icon-badge,
.toast.toast-success.toast-container .toast-close-btn { color: #15803d; }

.toast.toast-info.toast-container {
  background: linear-gradient(135deg, rgba(224, 242, 254, 0.92), rgba(207, 250, 254, 0.85));
  border: 1px solid rgba(186, 230, 253, 0.75);
}
.toast.toast-info.toast-container .toast-content-title { color: #0c4a6e; }
.toast.toast-info.toast-container .toast-content-message { color: #0369a1; }
.toast.toast-info.toast-container .toast-icon-badge,
.toast.toast-info.toast-container .toast-close-btn { color: #0284c7; }

.toast.toast-warning.toast-container {
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.92), rgba(254, 249, 195, 0.85));
  border: 1px solid rgba(253, 230, 138, 0.75);
}
.toast.toast-warning.toast-container .toast-content-title { color: #78350f; }
.toast.toast-warning.toast-container .toast-content-message { color: #92400e; }
.toast.toast-warning.toast-container .toast-icon-badge,
.toast.toast-warning.toast-container .toast-close-btn { color: #d97706; }

.toast.toast-danger.toast-container {
  background: linear-gradient(135deg, rgba(254, 226, 226, 0.92), rgba(255, 228, 230, 0.85));
  border: 1px solid rgba(254, 202, 202, 0.75);
}
.toast.toast-danger.toast-container .toast-content-title { color: #7f1d1d; }
.toast.toast-danger.toast-container .toast-content-message { color: #991b1b; }
.toast.toast-danger.toast-container .toast-icon-badge,
.toast.toast-danger.toast-container .toast-close-btn { color: #dc2626; }

.toast.toast-default.toast-container {
  background: linear-gradient(135deg, rgba(238, 242, 255, 0.92), rgba(243, 244, 254, 0.85));
  border: 1px solid rgba(199, 210, 254, 0.75);
}
.toast.toast-default.toast-container .toast-content-title { color: #1e1b4b; }
.toast.toast-default.toast-container .toast-content-message { color: #3730a3; }
.toast.toast-default.toast-container .toast-icon-badge,
.toast.toast-default.toast-container .toast-close-btn { color: #4f46e5; }

/* Confirm Dialog Styles */
body.hide-scrollable { overflow: hidden; }

.dialog {
  background-color: var(--h-backdrop-color);
  backdrop-filter: var(--h-backdrop-blur);
  -webkit-backdrop-filter: var(--h-backdrop-blur);
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  font-family: var(--h-font-family);
  line-height: 1.5em;
  z-index: var(--main-z-index);
  transition: all 0.3s ease;
}

.dialog.show { opacity: 1; pointer-events: auto; }
.dialog.dialog-container { display: flex; justify-content: center; align-items: center; padding: 20px; }

.dialog > .dialog-box {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.82));
  backdrop-filter: blur(20px) saturate(190%);
  -webkit-backdrop-filter: blur(20px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  width: 100%; max-width: var(--h-dialog-box-width);
  margin: auto; border-radius: 20px; overflow: hidden; box-sizing: border-box;
}

.dialog > .dialog-box > .dialog-header {
  font-size: 19px; font-weight: 700; letter-spacing: -0.01em; color: #0f172a;
  padding: 24px 24px 12px 24px; display: flex; align-items: center; gap: 8px;
}

.dialog > .dialog-box > .dialog-body {
  max-height: 380px; overflow-y: auto; padding: 0px 24px 20px 24px;
  font-size: 14.5px; font-weight: 400; line-height: 1.6; color: #475569;
}

.dialog > .dialog-box > .dialog-body > .dialog-status-icon { text-align: center; margin-bottom: 12px; }
.dialog > .dialog-box > .dialog-body > .dialog-status-icon > svg { width: 64px; height: 64px; color: var(--h-primary-color); }

.dialog > .dialog-box > .dialog-footer {
  padding: 12px 24px 24px 24px; display: flex; align-items: center; justify-content: flex-end; gap: 10px;
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn {
  height: 40px; padding: 0px 20px; font-size: 14px; font-weight: 600;
  font-family: var(--h-font-family); cursor: pointer; outline: none; border: none;
  border-radius: var(--btn-confirm-radius);
  transition: background 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  display: inline-flex; align-items: center; justify-content: center;
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close {
  background: rgba(241, 245, 249, 0.8); color: #475569; border: 1px solid rgba(203, 213, 225, 0.6);
}
.dialog > .dialog-box > .dialog-footer > .dialog-btn-close:hover { background: rgba(226, 232, 240, 0.95); color: #0f172a; }
.dialog > .dialog-box > .dialog-footer > .dialog-btn-close:active { background: rgba(203, 213, 225, 0.95); }

.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm {
  background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; box-shadow: 0 4px 14px var(--h-success-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.primary,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.primary {
  background: linear-gradient(135deg, #6366f1, #4f46e5); color: #ffffff; box-shadow: 0 4px 14px var(--h-primary-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.success,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.success {
  background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; box-shadow: 0 4px 14px var(--h-success-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.warning,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.warning {
  background: linear-gradient(135deg, #f59e0b, #d97706); color: #ffffff; box-shadow: 0 4px 14px var(--h-warning-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.danger,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.danger {
  background: linear-gradient(135deg, #ef4444, #dc2626); color: #ffffff; box-shadow: 0 4px 14px var(--h-danger-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn:hover { filter: brightness(1.1); }
.dialog > .dialog-box > .dialog-footer > .dialog-btn:active { filter: brightness(0.95); }
  `;
  const styleTag = document.createElement("style");
  styleTag.id = "hiinformer-styles";
  styleTag.textContent = styleContent;
  document.head.appendChild(styleTag);
};

// src/core/toast/toast.ts
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["Default"] = "default";
  Status2["Success"] = "success";
  Status2["Warning"] = "warning";
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
  injectStyles();
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
                <div class="toast-header">
                  <div class="toast-title-group">
                    <span class="toast-icon-badge">${icon}</span>
                    <h6 class="toast-content-title">${toast.title}</h6>
                  </div>
                  <button class="toast-close-btn" data-target-id="${toastId}" aria-label="Close notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
                <div class="toast-body">
                  <p class="toast-content-message">
                    ${toast.message}
                  </p>
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
    let icon;
    switch (status) {
      case "success":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>';
        break;
      case "info":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
        break;
      case "danger":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
        break;
      case "warning":
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
        break;
      default:
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>';
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
  injectStyles();
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
