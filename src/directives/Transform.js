/* eslint-disable no-param-reassign */
import Vue from 'vue';

Vue.directive('my-transform', {
  bind(el, binding) {
    let current = 0;
    let effect;

    el.addEventListener('dblclick', () => {
      const increment = binding.value || 90;

      if (!binding.arg || binding.arg === 'rotate') {
        if (binding.modifiers.reverse) {
          current -= increment;
        } else {
          current += increment;
        }
        effect = `rotate(${current}deg)`;
      } else if (binding.arg === 'scale' && current === 0) {
        current += increment;
        effect = `scale(${current})`;
      } else {
        current = 1;
        effect = `scale(${current})`;
      }
      el.style.transform = effect;
      if (binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    });
  },
});
