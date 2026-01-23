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

### Toast Notifications

For detailed API reference and examples for toast notifications, visit:

📖 **[Toast Documentation](https://github.com/heinhtet8X/hiinformer/tree/main/src/core/toast)**

### Confirm Dialogs

For detailed API reference and examples for confirm dialogs, visit:

📖 **[Confirm Documentation](https://github.com/heinhtet8X/hiinformer/tree/main/src/core/confirm)**
