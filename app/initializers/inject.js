export function initialize(application) {
  ['controller', 'component', 'route'].forEach((injectionTarget) => {
    application.inject(injectionTarget, 'currentRoute', 'service:currentRoute');
    application.inject(injectionTarget, 'actionData', 'service:action-data');
  });
  ['serializer'].forEach((injectionTarget) => {
    application.inject(injectionTarget, 'scope', 'service:scope');
  });
}

export default {
  name: 'inject',
  initialize,
};
