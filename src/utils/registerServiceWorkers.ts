const registerServiceWorker = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator)
        navigator.serviceWorker.register('../../app/service.js');
    });
  }
};

export default registerServiceWorker;
