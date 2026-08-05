# Toast Notifications

A lightweight, non-intrusive toast notification system for displaying user feedback messages.

## Overview

The toast module provides an easy way to display temporary notification messages to users with different status types and positions. Messages can be customized with titles, content, display duration, and positioning options.

## Features

- 💎 **Glass UI (Glassmorphism)**: Modern, translucent glass theme with subtle glowing status accents.
- 📦 **Single Zero-Setup Package**: Styles are automatically injected on demand! No manual CSS imports or link tags required.
- ⚡ **Universal Framework Support**: Works seamlessly out-of-the-box in React, Next.js, Vue, Angular, Svelte, and Vanilla JS.

## Usage

### Via npm Package (Zero Setup)

```typescript
import { useToast } from "hiinformer";

// Styles are automatically injected on demand! No CSS imports needed.
const { add } = useToast();

add({
  title: "Success",
  message: "Your changes have been saved.",
});
```

### Via Browser (Global Script)

```html
<!DOCTYPE html>
<html>
  <body>
    <!-- No external CSS link required! -->
    <script src="path/to/dist/index.global.js"></script>
    <script>
      const { useToast } = window.notify;
      const { add } = useToast();

      add({
        title: "Success",
        message: "Your changes have been saved.",
      });
    </script>
  </body>
</html>
```

### CommonJS

```javascript
const { useToast } = require("hiinformer");

const { add } = useToast();

add({
  title: "Success",
  message: "Your changes have been saved.",
});
```

### ES Modules

```javascript
import { useToast } from "hiinformer";

const { add } = useToast();

add({
  title: "Success",
  message: "Your changes have been saved.",
});
```

# Confirm Dialogs

A flexible confirmation dialog component for user confirmations before important actions with smooth fade-in and fade-out animations.

## Overview

The confirm module provides an easy way to display confirmation dialogs to users with customizable titles, messages, buttons, and actions. Dialogs support multiple button color themes, background scroll control, and smooth animations.

## Usage

### Via npm Package

```typescript
import { useConfirm } from "hiinformer";

const { use } = useConfirm();

use({
  option: {
    header: "Delete Item",
    message: "Are you sure you want to delete this item?",
    acceptBtn: { label: "Delete" },
    closeBtn: { label: "Cancel" },
  },
  accept: () => console.log("Deleted"),
  reject: () => console.log("Cancelled"),
});
```

### Via Browser (Global Script)

Include the library in your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="path/to/dist/styles/main.css" />
  </head>
  <body>
    <script src="path/to/dist/index.global.js"></script>
    <script>
      const { useConfirm } = window.notify;
      const { use } = useConfirm();

      use({
        option: {
          header: "Delete Item",
          message: "Are you sure you want to delete this item?",
        },
        accept: () => console.log("Accepted"),
        reject: () => console.log("Rejected"),
      });
    </script>
  </body>
</html>
```

### CommonJS

```javascript
const { useConfirm } = require("hiinformer");

const { use } = useConfirm();

use({
  option: {
    header: "Confirm",
    message: "Do you want to proceed?",
  },
  accept: () => console.log("Accepted"),
  reject: () => console.log("Rejected"),
});
```

### ES Modules

```javascript
import { useConfirm } from "hiinformer";

const { use } = useConfirm();

use({
  option: {
    header: "Confirm",
    message: "Do you want to proceed?",
  },
  accept: () => console.log("Accepted"),
  reject: () => console.log("Rejected"),
});
```


## 🎨 CSS Theme & Color Customization Guidelines

You can easily customize all status colors, glass container fills, backdrop blurs, and corner radius by overriding **CSS Custom Properties (Variables)** in your stylesheet or `<style>` block:

```css
:root {
  /* Brand Status Colors */
  --h-primary-color: #6366f1;
  --h-primary-glow: rgba(99, 102, 241, 0.35);
  
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

| Variable | Description | Default |
| :--- | :--- | :--- |
| `--h-primary-color` | Accent color for default toasts & primary confirm buttons | `#6366f1` |
| `--h-success-color` | Success toast status & accept button theme | `#10b981` |
| `--h-warning-color` | Warning toast status theme | `#f59e0b` |
| `--h-danger-color` | Danger toast status & alert action theme | `#ef4444` |
| `--h-info-color` | Info toast status theme | `#06b6d4` |
| `--h-toast-container-color` | Translucent glass background fill color | `rgba(255, 255, 255, 0.72)` |
| `--h-glass-blur` | Backdrop blur filter for toast cards | `blur(16px) saturate(180%)` |
| `--h-backdrop-blur` | Backdrop blur filter for confirm modal overlay | `blur(4px)` |
| `--h-border-radius` | Corner radius for glass containers | `16px` |

## API Reference

### Toast Notifications

For detailed API reference and examples for toast notifications, visit:

📖 **[Toast Documentation](https://github.com/heinhtet8X/hiinformer/tree/main/src/core/toast)**

### Confirm Dialogs

For detailed API reference and examples for confirm dialogs, visit:

📖 **[Confirm Documentation](https://github.com/heinhtet8X/hiinformer/tree/main/src/core/confirm)**

