# hiinformer 💎

> Ultra-sleek Glass UI toast notifications and confirm dialogs in a zero-config single package.

[![npm version](https://img.shields.io/npm/v/hiinformer.svg?style=flat-svg)](https://www.npmjs.com/package/hiinformer)
[![license](https://img.shields.io/npm/l/hiinformer.svg?style=flat-svg)](https://github.com/heinhtet8X/hiinformer/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/hiinformer?style=flat-svg)](https://bundlephobia.com/package/hiinformer)

---

## ✨ Features

- 💎 **Glass UI (Glassmorphism)**: Modern translucent glass cards, status-glowing accents, and backdrop blur.
- 📦 **Single Zero-Setup Package**: Styles automatically injected on-demand into `<head>`. Zero CSS imports or `<link>` tags required!
- ⚡ **Universal Framework Support**: Works out-of-the-box in **React, Next.js (SSR safe), Vue, Nuxt, Angular, Svelte, and Vanilla JS/HTML**.
- 🌀 **Silky Smooth Fluid Motion**: Apple-grade smooth entrance, exit, and stacking transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
- 🎨 **CSS Theme Customization**: Easily customize all colors, glass fill, blur density, and corner radius via CSS variables.
- 🎯 **Modern Vector SVGs**: High-precision vector icons for all status types (`default`, `success`, `info`, `warning`, `danger`).

---

## 📦 Installation

```bash
npm install hiinformer
```

```bash
yarn add hiinformer
```

```bash
pnpm add hiinformer
```

---

## 🚀 Quick Start

### 1. ES Modules (React / Next.js / Vue / Angular / Svelte)

```typescript
import { useToast, useConfirm } from "hiinformer";

// Styles are automatically injected on demand! No CSS imports needed.
const toast = useToast();

toast.add({
  status: "success",
  title: "Changes Saved!",
  message: "Your profile preferences have been updated.",
});
```

### 2. Browser HTML Script Tag (Zero Config)

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <button id="btn">Show Toast</button>

  <!-- Single JS bundle (No CSS link tag required!) -->
  <script src="https://cdn.jsdelivr.net/npm/hiinformer@latest/dist/index.global.js"></script>
  <script>
    document.getElementById('btn').addEventListener('click', () => {
      notify.useToast().add({
        status: 'info',
        title: 'Welcome!',
        message: 'Glass UI Toast in static HTML.',
        position: 'top-end'
      });
    });
  </script>
</body>
</html>
```

### 3. CommonJS (Node / Express)

```javascript
const { useToast, useConfirm } = require("hiinformer");

useToast().add({
  status: "default",
  title: "Notification",
  message: "System running smoothly.",
});
```

---

## 🔔 Toast Notifications API (`useToast`)

### Example Usage Across All Statuses

```typescript
import { useToast, Status, Position } from "hiinformer";

const toast = useToast();

// 1. Success Toast
toast.add({
  status: "success", // or Status.Success
  title: "Operation Completed",
  message: "File uploaded successfully.",
  position: "top-end",
  timeout: 3,
});

// 2. Info Toast
toast.add({
  status: "info",
  title: "New Update",
  message: "Version 3.0 Glass UI is now available.",
  position: "top-center",
  timeout: 4,
});

// 3. Warning Toast
toast.add({
  status: "warning",
  title: "Storage Limit Warning",
  message: "Your account is approaching 90% quota limit.",
  position: "bottom-end",
  timeout: 5,
});

// 4. Danger Toast
toast.add({
  status: "danger",
  title: "Authentication Failed",
  message: "Invalid credentials. Please try again.",
  position: "bottom-center",
  timeout: 5,
});

// 5. Default / Primary Toast
toast.add({
  status: "default",
  title: "System Notice",
  message: "Scheduled maintenance tonight at 12:00 AM.",
  position: "top-start",
  timeout: 3,
});
```

### Toast Options Reference

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Required** | Toast header title string |
| `message` | `string` | **Required** | Main notification message text |
| `status` | `'default' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'default'` | Status theme and icon type |
| `position` | `'top-end' \| 'top-center' \| 'top-start' \| 'bottom-end' \| 'bottom-center' \| 'bottom-start'` | `'top-end'` | Screen position overlay |
| `timeout` | `number` | `5` | Auto-dismiss duration in seconds (`0` for sticky) |
| `multiple` | `boolean` | `true` | Allow multiple stacked toasts or replace active toast |

---

## 💬 Confirm Dialogs API (`useConfirm`)

### Example Usage

```typescript
import { useConfirm, BtnColor } from "hiinformer";

const confirm = useConfirm();

confirm.use({
  option: {
    header: "Delete Account",
    message: "Are you sure you want to permanently delete your account? This action cannot be undone.",
    closeBtn: {
      show: true,
      label: "Keep Account",
    },
    acceptBtn: {
      show: true,
      label: "Delete Permanently",
      color: BtnColor.DANGER, // 'danger' | 'primary' | 'success' | 'warning'
    },
    closeMaskHide: true,
    closeBgScroll: true,
  },
  accept: () => {
    console.log("✅ User clicked Accept");
  },
  reject: () => {
    console.log("❌ User clicked Cancel or closed modal");
  },
});
```

### Confirm Options Reference

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `option.header` | `string` | `""` | Dialog title header |
| `option.message` | `string` | `""` | Dialog body message text |
| `option.bodyHTML` | `string` | `undefined` | Custom HTML body content (replaces `message` if provided) |
| `option.closeBtn` | `{ show?: boolean, label?: string, color?: string }` | `{ show: true, label: "Cancel" }` | Cancel button configuration |
| `option.acceptBtn` | `{ show?: boolean, label?: string, color?: BtnColor }` | `{ show: true, label: "Okay", color: "success" }` | Accept button configuration (`'primary'`, `'success'`, `'warning'`, `'danger'`) |
| `option.closeMaskHide` | `boolean` | `true` | Dismiss dialog when clicking backdrop overlay |
| `option.closeBgScroll` | `boolean` | `true` | Lock page scroll while confirm dialog is active |
| `accept` | `() => void` | **Required** | Callback function when Accept button is clicked |
| `reject` | `() => void` | **Required** | Callback function when Cancel/Close is clicked |

---

## 🎨 CSS Theme & Color Customization Guidelines

All Glass UI styles use **CSS Custom Properties (Variables)**. You can easily customize status colors, glass container fills, backdrop blurs, and corner radius by overriding these variables in your CSS or `<style>` block:

```css
/* Add to your CSS stylesheet or <style> block */
:root {
  /* Status Brand Colors */
  --h-primary-color: #8b5cf6;
  --h-primary-glow: rgba(139, 92, 246, 0.35);
  
  --h-success-color: #10b981;
  --h-warning-color: #f59e0b;
  --h-danger-color: #ef4444;
  --h-info-color: #06b6d4;

  /* Glass Fill & Backdrop Blur */
  --h-toast-container-color: rgba(255, 255, 255, 0.72);
  --h-glass-blur: blur(16px) saturate(180%);
  --h-backdrop-color: rgba(15, 23, 42, 0.25);
  --h-backdrop-blur: blur(4px);

  /* Corner Radius & Dimensions */
  --h-border-radius: 16px;
  --h-dialog-box-width: 440px;
}
```

### CSS Variables Reference

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--h-primary-color` | Primary brand accent & default toast color | `#6366f1` |
| `--h-success-color` | Success notification & accept button theme | `#10b981` |
| `--h-warning-color` | Warning notification status color | `#f59e0b` |
| `--h-danger-color` | Danger notification & alert action theme | `#ef4444` |
| `--h-info-color` | Info notification status color | `#06b6d4` |
| `--h-toast-container-color` | Translucent glass background fill color | `rgba(255, 255, 255, 0.72)` |
| `--h-glass-blur` | Backdrop blur filter for toast cards | `blur(16px) saturate(180%)` |
| `--h-backdrop-blur` | Backdrop blur filter for confirm modal overlay | `blur(4px)` |
| `--h-border-radius` | Corner radius for glass containers | `16px` |

---

## 💻 Interactive Live Demo

Experience all Glass UI status toasts, position switchers, confirm modal themes, and live theme presets by running or opening the live demo:

```bash
open demo/index.html
```

---

## 📄 License

MIT © [Hein Htet Aung](https://github.com/heinhtet8X)
