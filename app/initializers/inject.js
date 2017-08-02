export function initialize(application) {
  ['controller', 'component', 'route'].forEach((injectionTarget) => {
    application.inject(injectionTarget, 'currentRoute', 'service:currentRoute');
    application.inject(injectionTarget, 'actionData', 'service:action-data');
  });
}

export default {
  name: 'inject',
  initialize,
};
