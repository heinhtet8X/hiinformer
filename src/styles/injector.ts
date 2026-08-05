export const injectStyles = (): void => {
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
  --h-border-radius: 16px;
  --h-border-width: 1px;
  --h-toast-padding: 16px 20px;
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

.toast-img-overlay {
  animation: iconSmoothIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
}

@keyframes iconSmoothIn {
  from {
    transform: scale(0.85);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
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

/* Toast Styles */
.toast-main {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 360px;
  max-width: 440px;
  z-index: var(--main-z-index);
  padding: 12px;
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
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast.toast-container {
  border-radius: var(--h-border-radius);
  padding: var(--h-toast-padding);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: var(--h-glass-blur);
  -webkit-backdrop-filter: var(--h-glass-blur);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 20px 35px -10px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.toast.toast-container:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 24px 40px -10px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.7) inset;
}

.toast.toast-default.toast-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(243, 244, 254, 0.7));
  border: 1px solid rgba(99, 102, 241, 0.25);
  box-shadow: 0 12px 30px -5px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.toast.toast-success.toast-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(236, 253, 245, 0.7));
  border: 1px solid rgba(16, 185, 129, 0.25);
  box-shadow: 0 12px 30px -5px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.toast.toast-warning.toast-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 251, 235, 0.7));
  border: 1px solid rgba(245, 158, 11, 0.25);
  box-shadow: 0 12px 30px -5px rgba(245, 158, 11, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.toast.toast-info.toast-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(236, 254, 255, 0.7));
  border: 1px solid rgba(6, 182, 212, 0.25);
  box-shadow: 0 12px 30px -5px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.toast.toast-danger.toast-container {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(254, 242, 242, 0.7));
  border: 1px solid rgba(239, 68, 68, 0.25);
  box-shadow: 0 12px 30px -5px rgba(239, 68, 68, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.toast.toast-container > .toast-body {
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  min-height: 100%;
}

.toast.toast-container > .toast-body > .toast-img-overlay {
  width: 38px;
  height: 38px;
  min-width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.toast.toast-default.toast-container > .toast-body > .toast-img-overlay {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-primary-glow);
}

.toast.toast-success.toast-container > .toast-body > .toast-img-overlay {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-success-glow);
}

.toast.toast-info.toast-container > .toast-body > .toast-img-overlay {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-info-glow);
}

.toast.toast-warning.toast-container > .toast-body > .toast-img-overlay {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-warning-glow);
}

.toast.toast-danger.toast-container > .toast-body > .toast-img-overlay {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-danger-glow);
}

.toast.toast-container > .toast-body > .toast-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.toast.toast-container > .toast-body > .toast-content > .toast-content-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0f172a;
  text-transform: capitalize;
}

.toast.toast-container > .toast-body > .toast-content > .toast-content-message {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.45;
  color: #475569;
}

.toast.toast-container > .toast-body > .toast-close-btn {
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
  padding: 0;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  color: #64748b;
  transition: background 0.2s ease, color 0.2s ease;
}

.toast.toast-container > .toast-body > .toast-close-btn:hover {
  background: rgba(15, 23, 42, 0.12);
  color: #0f172a;
}

.toast.toast-container > .toast-body > .toast-close-btn:active {
  background: rgba(15, 23, 42, 0.18);
}

/* Confirm Dialog Styles */
body.hide-scrollable {
  overflow: hidden;
}

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

.dialog.show {
  opacity: 1;
  pointer-events: auto;
}

.dialog.dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.dialog > .dialog-box {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.82));
  backdrop-filter: blur(20px) saturate(190%);
  -webkit-backdrop-filter: blur(20px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 25px 50px -12px rgba(15, 23, 42, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  width: 100%;
  max-width: var(--h-dialog-box-width);
  margin: auto;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
}

.dialog > .dialog-box > .dialog-header {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0f172a;
  padding: 24px 24px 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dialog > .dialog-box > .dialog-body {
  max-height: 380px;
  overflow-y: auto;
  padding: 0px 24px 20px 24px;
  font-size: 14.5px;
  font-weight: 400;
  line-height: 1.6;
  color: #475569;
}

.dialog > .dialog-box > .dialog-body > .dialog-status-icon {
  text-align: center;
  margin-bottom: 12px;
}

.dialog > .dialog-box > .dialog-body > .dialog-status-icon > svg {
  width: 64px;
  height: 64px;
  color: var(--h-primary-color);
}

.dialog > .dialog-box > .dialog-footer {
  padding: 12px 24px 24px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn {
  height: 40px;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--h-font-family);
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: var(--btn-confirm-radius);
  transition: background 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close {
  background: rgba(241, 245, 249, 0.8);
  color: #475569;
  border: 1px solid rgba(203, 213, 225, 0.6);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close:hover {
  background: rgba(226, 232, 240, 0.95);
  color: #0f172a;
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close:active {
  background: rgba(203, 213, 225, 0.95);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-success-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.primary,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.primary {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-primary-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.success,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.success {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-success-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.warning,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-warning-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn-close.danger,
.dialog > .dialog-box > .dialog-footer > .dialog-btn-confirm.danger {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--h-danger-glow);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn:hover {
  filter: brightness(1.1);
}

.dialog > .dialog-box > .dialog-footer > .dialog-btn:active {
  filter: brightness(0.95);
}
  `;

  const styleTag = document.createElement("style");
  styleTag.id = "hiinformer-styles";
  styleTag.textContent = styleContent;
  document.head.appendChild(styleTag);
};
