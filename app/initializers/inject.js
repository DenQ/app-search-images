export function initialize(application) {
  ['controller', 'component', 'route'].forEach((injectionTarget) => {
    application.inject(injectionTarget, 'currentRoute', 'service:currentRoute');
  });
}

export default {
  name: 'inject',
  initialize,
};
