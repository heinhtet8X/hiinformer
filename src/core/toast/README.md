# Toast Notifications

A lightweight, non-intrusive toast notification system for displaying user feedback messages.

## Overview

The toast module provides an easy way to display temporary notification messages to users with different status types and positions. Messages can be customized with titles, content, display duration, and positioning options.

## Usage

### Via npm Package

```typescript
import { useToast } from "hiinformer";

const { add } = useToast();

add({
  title: "Success",
  message: "Your changes have been saved.",
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

## API Reference

### `useToast()`

Returns an object containing toast management functions.

```typescript
const { add } = useToast();
```

#### Returns

- `add(toast: Toast)`: Adds a new toast notification to the display

---

### Toast Configuration

#### Type: `Toast`

```typescript
type Toast = {
  status?: ToastStatus;
  title: string;
  message: string;
  timeout?: number | 3;
  multiple?: boolean;
  position?: ToastPosition;
};
```

#### Properties

| Property   | Type            | Default     | Description                                                  |
| ---------- | --------------- | ----------- | ------------------------------------------------------------ |
| `status`   | `ToastStatus`   | `"default"` | Visual status type of the toast                              |
| `title`    | `string`        | _required_  | The title/heading of the toast                               |
| `message`  | `string`        | _required_  | The main message content of the toast                        |
| `timeout`  | `number`        | `5`         | Duration in seconds before auto-close (0 = never auto-close) |
| `multiple` | `boolean`       | `true`      | Allow multiple toasts or replace existing ones               |
| `position` | `ToastPosition` | `"top-end"` | Position where the toast appears on screen                   |

---

### Status Types

The `Status` enum defines the available toast status types:

```typescript
enum Status {
  Default = "default",
  Success = "success",
  Warning = "warning",
  Info = "info",
  Danger = "danger",
}
```

#### Status Values

| Status      | Use Case                   | Icon                |
| ----------- | -------------------------- | ------------------- |
| `"default"` | Generic/neutral messages   | Bell icon           |
| `"success"` | Successful operations      | Checkmark icon      |
| `"warning"` | Warning messages           | Alert triangle icon |
| `"info"`    | Informational messages     | Info circle icon    |
| `"danger"`  | Error or critical messages | Error icon          |

---

### Position Types

The `Position` enum defines available toast positions on the screen:

```typescript
enum Position {
  TopStart = "top-start",
  TopEnd = "top-end",
  TopCenter = "top-center",
  BottomStart = "bottom-start",
  BottomEnd = "bottom-end",
  BottomCenter = "bottom-center",
}
```

#### Position Values

| Position          | Location                   |
| ----------------- | -------------------------- |
| `"top-start"`     | Top-left corner            |
| `"top-end"`       | Top-right corner (default) |
| `"top-center"`    | Top center                 |
| `"bottom-start"`  | Bottom-left corner         |
| `"bottom-end"`    | Bottom-right corner        |
| `"bottom-center"` | Bottom center              |

---

## Examples

### Success Toast

```typescript
const { add } = useToast();

add({
  status: "success",
  title: "Success",
  message: "Operation completed successfully!",
  timeout: 3,
  position: "top-end",
});
```

### Error Toast with No Auto-Close

```typescript
add({
  status: "danger",
  title: "Error",
  message: "Something went wrong. Please try again.",
  timeout: 0, // Never auto-close
  position: "top-center",
});
```

### Info Toast at Bottom-Left

```typescript
add({
  status: "info",
  title: "Information",
  message: "Please note this important update.",
  timeout: 5,
  position: "bottom-start",
});
```

### Warning Toast with Multiple Notifications Disabled

```typescript
add({
  status: "warning",
  title: "Warning",
  message: "This action cannot be undone.",
  timeout: 4,
  multiple: false, // Replace previous toast
});
```

---

## Features

### Auto-Close

Toasts automatically dismiss after the specified timeout (default: 5 seconds). Set `timeout` to `0` to disable auto-close.

### Manual Close

Users can manually close a toast by clicking the close button (×) in the top-right of the toast.

### Multiple Toasts

By default, multiple toasts can be displayed simultaneously (`multiple: true`). Set to `false` to replace the previous toast.

<!-- ### Animations

Toasts feature smooth animations:
- **Fade In Down**: Toast enters from top with fade effect
- **Fade Out**: Toast exits with fade-out animation
- **Fade Up**: New animations available for fade-up entry effect
- **Bump Up**: Remaining toasts shift up when one is removed -->

---

## Styling

Toasts can be customized through CSS variables:

```css
:root {
  --h-primary-color: #000000;
  --h-success-color: #00dc63;
  --h-warning-color: #f5a442;
  --h-danger-color: #ed3232;
  --h-info-color: #329fed;
  --h-toast-container-color: #ffffff;
}
```

The toast system automatically applies theme classes based on the status:

- `.toast-default`
- `.toast-success`
- `.toast-warning`
- `.toast-info`
- `.toast-danger`

---

## Type Definitions

### ToastStatus

```typescript
type ToastStatus =
  | Status
  | "default"
  | "success"
  | "warning"
  | "info"
  | "danger";
```

### ToastPosition

```typescript
type ToastPosition =
  | Position
  | "top-start"
  | "top-end"
  | "top-center"
  | "bottom-start"
  | "bottom-end"
  | "bottom-center";
```

---

## Notes

- The toast system creates a single container (`.toast-main`) for all toasts on the page
- Each toast receives a unique ID for tracking and removal
- Toasts are rendered directly into the DOM without requiring a wrapper element
- Close button triggers smooth fade-out animation before DOM removal
