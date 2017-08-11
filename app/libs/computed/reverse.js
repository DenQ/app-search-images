import Ember from 'ember';

const { computed } = Ember;

export default function computedReverse(sortedField, path = 'model') {
  return computed.sort(path, function(a, b) {
    const first = Number(a.get(sortedField));
    const two = Number(b.get(sortedField));
    if (first < two) {
      return 1;
    } else if (first > two) {
      return -1;
    } else {
      return 0;
    }
  });
}
