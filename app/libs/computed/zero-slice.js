import Ember from 'ember';

const { computed } = Ember;

export default function computedZeroSlice(path, size) {
  return computed(path, function() {
    const model = this.get(path);
    return model.slice(0, size);
  });
}
