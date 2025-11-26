# simple-js-notifier

A lightweight, dependency-free notification library.

This package provides a simple `notify()` function to show "toast" style notifications on your webpage. It has zero dependencies and injects its own styles, so there's no need to import any CSS.

## Installation

```bash
npm install simple-js-notifier
```

## API

The package exports a single function: `notify()`.

### `notify(message, type, duration)`

#### 1. `message`

- **Description:** The text content you want to display in the notification.
- **Type:** `string`
- **Required:** Yes
- **Example:** `'Profile saved successfully!'`

#### 2. `type`

- **Description:** The style of the notification, which controls its color.
- **Type:** `string`
- **Required:** No
- **Default Value:** `'info'`
- **Possible Values:**
  - `'success'` (green background, white text)
  - `'error'` (red background, white text)
  - `'warning'` (yellow background, black text)
  - `'info'` (blue background, white text)
- **Example:** `notify('An error occurred.', 'error')`

#### 3. `duration`

- **Description:** How long the notification should be visible, in milliseconds.
- **Type:** `number`
- **Required:** No
- **Default Value:** `3000` (3 seconds)
- **Example:** `notify('This will last 10 seconds.', 'info', 10000)`


## How to Use

### 1. Import the package

How you import depends on your project setup.

#### A) In a modern project with a bundler (like Vite, Webpack, etc.):

```javascript
// Import the named export
import { notify } from 'simple-js-notifier';

// Or import the default export
import notify from 'simple-js-notifier';
```

#### B) Directly in an HTML file (using ES Modules):

```html
<script type="module">
  // 1. Import the function
  import { notify } from './node_modules/simple-js-notifier/index.js';

  // 2. Make it available to your buttons
  window.notify = notify;
</script>
```

### 2. Call the function

You can call the function from any JavaScript event.

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

## Repository

- 📦 [NPM Package](https://www.npmjs.com/package/simple-js-notifier)
- 🔗 [GitHub Repository](https://github.com/meshubhamashish/simple-js-notifier)
- 🎮 [Live Demo - CodeSandbox](https://codesandbox.io/p/sandbox/simple-js-notifier-qtvmqg)

## Browser Support

Works in all modern browsers that support ES6.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request to the [GitHub repository](https://github.com/meshubhamashish/simple-js-notifier).

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/meshubhamashish/simple-js-notifier/issues).
