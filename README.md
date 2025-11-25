# simple-js-notifier

A lightweight, dependency-free notification library for displaying elegant toast-style notifications on your webpage.

## Features

- ✨ **Zero Dependencies** - No external libraries required
- 📦 **Lightweight** - Minimal file size for fast loading
- 🎨 **Self-Contained Styles** - Styles are injected automatically, no CSS imports needed
- 🎯 **Simple API** - Single function with intuitive parameters
- ⏱️ **Customizable Duration** - Control how long notifications appear
- 🎭 **Multiple Styles** - Built-in support for success, error, warning, and info notifications
- 📱 **Responsive Design** - Works seamlessly across all device sizes
- 🔧 **Framework Agnostic** - Use with vanilla JavaScript, React, Vue, Angular, or any framework

## Installation

```bash
npm install simple-js-notifier
```

## Quick Start

```javascript
import { notify } from 'simple-js-notifier';

// Display a simple notification
notify('Profile saved successfully!', 'success');
```

## API Reference

### `notify(message, type, duration)`

Displays a notification toast on the screen.

#### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `message` | `string` | Yes | — | The text content to display in the notification |
| `type` | `string` | No | `'info'` | The notification style/type. Options: `'success'`, `'error'`, `'warning'`, `'info'` |
| `duration` | `number` | No | `3000` | How long the notification is visible, in milliseconds |

#### Notification Types

- **`'success'`** - Green background with white text (ideal for successful operations)
- **`'error'`** - Red background with white text (ideal for errors)
- **`'warning'`** - Yellow background with black text (ideal for warnings)
- **`'info'`** - Blue background with white text (ideal for information)

## Usage Examples

### Import Methods

Choose whichever import style works best for your project:

```javascript
// Named export
import { notify } from 'simple-js-notifier';

// Default export
import notify from 'simple-js-notifier';
```

### In React Applications

```javascript
import { notify } from 'simple-js-notifier';

function MyComponent() {
  return (
    <button onClick={() => notify('Item added to cart!', 'success')}>
      Add to Cart
    </button>
  );
}
```

### In Vanilla JavaScript

```html
<script type="module">
  import { notify } from './node_modules/simple-js-notifier/index.js';
  
  window.notify = notify; // Make available globally
</script>

<button onclick="notify('Button clicked!', 'info')">Click Me</button>
```

### Common Use Cases

**Success Notification**
```javascript
notify('Profile saved successfully!', 'success', 3000);
```

**Error Handling**
```javascript
notify('An error occurred. Please try again.', 'error', 4000);
```

**Warning Alert**
```javascript
notify('This action cannot be undone.', 'warning', 5000);
```

**Information Message**
```javascript
notify('New update available', 'info');
```

**Default Notification (Info Type)**
```javascript
notify('This is a sample message');
```

```javascript
  // Show an error message with a default 3-second duration
  <button onClick={() => {notify('This is Error Message', 'error')}}> Error </button>

  // Show a success message with a 4-second duration
  <button onClick={() => {notify('This is Success Message', 'success', 4000)}}> Success </button>

  // Show a warning message with a 5-second duration
  <button onClick={() => {notify('This is Warning Message', 'warning', 5000)}}> Warning </button>

  // Show a info message with a default 3-second duration
  <button onClick={() => {notify('This is Info Message', 'info')}}> Info </button>

  // Show a sample message with default type info and a default 3-second duration
  <button onClick={() => {notify('This is sample Message')}}> Info </button>
```

## Live Demo

Try the library in action:
- **CodeSandbox**: [simple-js-notifier Demo](https://codesandbox.io/p/sandbox/simple-js-notifier-qtvmqg)

## Browser Support

Works on all modern browsers that support ES6 modules:
- Chrome/Edge 61+
- Firefox 67+
- Safari 11+
- Opera 48+

## Size & Performance

- Minified: ~2KB
- Gzipped: ~1KB
- Zero runtime dependencies

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests on [GitHub](https://github.com/meshubhamashish/simple-js-notifier).

## License

MIT

## Repository

- **GitHub**: [meshubhamashish/simple-js-notifier](https://github.com/meshubhamashish/simple-js-notifier)
- **npm**: [@meshubhamashish/simple-js-notifier](https://www.npmjs.com/package/simple-js-notifier)

---

**Questions or Issues?** Feel free to open an issue on [GitHub Issues](https://github.com/meshubhamashish/simple-js-notifier/issues).