/* eslint-disable no-param-reassign */
import Vue from 'vue';

Vue.directive('my-transform', {
  bind(el, binding) {
    let current = 0;
    el.addEventListener('dblclick', () => {
      const increment = binding.value || 90;

      if (binding.modifiers.reverse) {
        current -= increment;
      } else {
        current += increment;
      }
      el.style.transform = `rotate(${current}deg)`;

      if (binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    });
  },
});
