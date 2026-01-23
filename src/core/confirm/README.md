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

## API Reference

### `useConfirm()`

Returns an object containing confirm management functions.

```typescript
const { use } = useConfirm();
```

#### Returns

- `use(confirm: Confirm)`: Displays a new confirmation dialog

---

### Confirm Configuration

#### Type: `Confirm`

```typescript
type Confirm = {
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
```

#### Properties

| Property       | Type      | Default | Description                                  |
| -------------- | --------- | ------- | -------------------------------------------- |
| `message`      | `string`  | _required_ | The main message content of the dialog       |
| `header`       | `string`  | _required_ | The title/heading of the dialog              |
| `closeBtn`     | `Btn`     | _optional_ | Close/Cancel button configuration            |
| `acceptBtn`    | `Btn`     | _optional_ | Accept/Confirm button configuration          |
| `bodyHTML`     | `string`  | _optional_ | Custom HTML for message body                 |
| `closeMaskHide` | `boolean` | `true`  | Allow closing by clicking overlay            |
| `closeBgScroll` | `boolean` | `true`  | Disable background scrolling when open       |
| `accept`       | `function` | _required_ | Callback when accept button is clicked       |
| `reject`       | `function` | _required_ | Callback when reject/cancel is clicked       |

---

### Button Type

The `Btn` type defines button configuration:

```typescript
type Btn = {
  show?: boolean;
  label?: string;
  className?: string;
  readonly color?: BtnColor;
};
```

#### Button Properties

| Property    | Type       | Default | Description              |
| ----------- | ---------- | ------- | ------------------------ |
| `show`      | `boolean`  | `true`  | Show or hide the button  |
| `label`     | `string`   | -       | Button text label        |
| `className` | `string`   | -       | Custom CSS class         |
| `color`     | `BtnColor` | -       | Button color variant     |

---

### Button Colors

The `BtnColor` enum defines available button color themes:

```typescript
enum BtnColor {
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}
```

#### Color Values

| Color     | Use Case                   | Style         |
| --------- | -------------------------- | ------------- |
| `"primary"` | Default/primary actions  | Blue         |
| `"success"` | Successful operations    | Green        |
| `"danger"`  | Destructive/delete actions | Red          |
| `"warning"` | Warning actions            | Orange       |

---

## Examples

### Basic Confirmation

```typescript
const { use } = useConfirm();

use({
  option: {
    header: "Delete Item",
    message: "Are you sure you want to delete this item?",
  },
  accept: () => console.log("Confirmed"),
  reject: () => console.log("Cancelled"),
});
```

### With Custom HTML Content

```typescript
use({
  option: {
    header: "Delete Record",
    message: "Are you sure?",
    bodyHTML:
      '<p><strong>This action cannot be undone.</strong></p><p>All associated data will be permanently deleted.</p>',
  },
  accept: () => deleteRecord(),
  reject: () => console.log("Cancelled"),
});
```

### With Colored Buttons

```typescript
use({
  option: {
    header: "Delete Item",
    message: "Are you sure you want to delete this item?",
    closeBtn: {
      show: true,
      label: "Cancel",
      color: BtnColor.PRIMARY,
    },
    acceptBtn: {
      show: true,
      label: "Delete",
      color: BtnColor.DANGER,
    },
  },
  accept: () => console.log("Item deleted"),
  reject: () => console.log("Cancelled"),
});
```

### Single Button Dialog

```typescript
use({
  option: {
    header: "Information",
    message: "This is a notification.",
    closeBtn: { show: false },
    acceptBtn: {
      show: true,
      label: "OK",
    },
  },
  accept: () => console.log("Acknowledged"),
  reject: () => {},
});
```

### Force User Choice

```typescript
use({
  option: {
    header: "Important",
    message: "You must choose an option.",
    closeMaskHide: false,
    closeBtn: { show: true },
    acceptBtn: { show: true },
  },
  accept: () => console.log("Accepted"),
  reject: () => console.log("Rejected"),
});
```

### Enable Background Scrolling

```typescript
use({
  option: {
    header: "Confirmation",
    message: "Do you agree?",
    closeBgScroll: false,
  },
  accept: () => console.log("Accepted"),
  reject: () => console.log("Rejected"),
});
```

---

## Features

### Animations

Dialogs feature smooth fade animations:

- **Fade In**: Dialog enters with 0.3s fade animation
- **Fade Out**: Dialog exits with 0.3s fade animation
- All transitions use `ease-in-out` timing function

### Background Control

Control background behavior when dialog is open:

- **`closeBgScroll: true`** (default): Disable background scrolling
- **`closeBgScroll: false`**: Allow background scrolling

### Dialog Closure

Users can close the dialog by:

1. Clicking the **Accept** button
2. Clicking the **Cancel/Close** button
3. Clicking the **overlay** (if `closeMaskHide: true`)

### Callbacks

Separate callbacks for user actions:

- **`accept()`**: Called when accept button is clicked
- **`reject()`**: Called when cancel button or overlay is clicked

---

## Styling

Confirm dialogs use the following CSS classes:

### CSS Classes

| Class               | Purpose                  |
| ------------------- | ------------------------ |
| `.confirm-main`     | Dialog container wrapper |
| `.dialog`           | Main dialog element      |
| `.dialog-container` | Dialog container         |
| `.dialog-box`       | Dialog box               |
| `.dialog-header`    | Header section           |
| `.dialog-body`      | Message body section     |
| `.dialog-footer`    | Buttons footer section   |
| `.dialog-btn`       | Base button class        |
| `.dialog-btn-close` | Cancel button            |
| `.dialog-btn-confirm` | Accept button          |
| `.fade-out`         | Fade-out animation       |

### CSS Variables

Customize styling with CSS variables:

```css
:root {
  --h-backdrop-color: rgba(121, 121, 121, 0.24);
  --h-success-color: #00dc63;
  --h-danger-color: #ed3232;
  --h-warning-color: #f5a442;
  --h-gray-color: #ececec;
  --h-btn-radius: 8px;
}
```

---

## Type Definitions

### ConfirmStatus

```typescript
type BtnColor = "primary" | "success" | "danger" | "warning";
```

---

## Notes

- Only one confirm dialog can be displayed at a time (reuses `.confirm-main` element)
- HTML in `bodyHTML` is inserted as `innerHTML` - sanitize if needed
- Background scrolling is controlled via `hide-scrollable` class on body element
- Dialog animations use CSS keyframes for smooth transitions
- Callbacks are triggered before dialog fade-out animation

---
