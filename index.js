/**
 * Simple JS Notifier
 * A lightweight, dependency-free notification library.
 */

(function injectStyles() {
    const styleId = 'simple-notify-styles';

    if (document.getElementById(styleId)) {
        return;
    }

    const styles = `
        .simple-notify-container {
            position: fixed;
            right: 15px;
            top: 15px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .simple-notify-notification {
            padding: 12px 18px;
            border-radius: 5px;
            margin-bottom: 10px;
            color: #fff;
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: rgba(0,0,0,0.9);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: all 0.3s ease-out;
            opacity: 0;
            transform: translateX(100%);
        }

        .simple-notify-notification.show {
            opacity: 1;
            transform: translateX(0);
        }

        .simple-notify-notification.success {
            background: #28a745;
            color: #fff;
        }

        .simple-notify-notification.error {
            background: #dc3545;
            color: #fff;
        }

        .simple-notify-notification.warning {
            background: #ffc107;
            color: #000;
        }

        .simple-notify-notification.info {
            background: #17a2b8;
            color: #fff;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.type = 'text/css';
    styleElement.innerHTML = styles;

    document.head.appendChild(styleElement);
}());

/**
 * Gets or creates the main notification container.
 * @returns {HTMLElement} The notification container element
 */
function getNotifyContainer() {
    const containerId = 'simple-notify-container-root';
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.className = 'simple-notify-container';
        document.body.appendChild(container);
    }

    return container;
}

/**
 * Displays a notification message.
 * @param {string} message The message to display.
 * @param {string} type The type of notification (e.g., 'success', 'error', 'warning', 'info').
 * @param {number} [duration=3000] How long to display the message in ms.
 */
export function notify(message, type = 'info', duration = 3000) {
    const container = getNotifyContainer();

    const notifyElement = document.createElement('div');

    notifyElement.className = `simple-notify-notification ${type}`;
    notifyElement.textContent = message;

    container.prepend(notifyElement);

    setTimeout(() => {
        notifyElement.classList.add('show');
    }, 10);

    setTimeout(() => {
        notifyElement.classList.remove('show');
        
        notifyElement.addEventListener('transitionend', () => {
            notifyElement.remove();
        });

        setTimeout(() => {
            if (notifyElement) {
                notifyElement.remove();
            }
        }, 500);

    }, duration);
}

export default notify;