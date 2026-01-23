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