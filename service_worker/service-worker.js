self.addEventListener('push', (event) => {
    console.info('push', event);

    const message = event.data ? event.data.text() : '(・∀・)';

    event.waitUntil(
        self.registration.showNotification('プッシュ通知だお', {
            body: message,
            icon: 'https://avatars0.githubusercontent.com/u/11845218?v=3&s=460',
            tag: 'push-notification-tag'
        })
    );
});