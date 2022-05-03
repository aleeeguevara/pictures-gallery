<template>
  <div>
    <button :type="type" class="btn" :class="btnStyle" @click="triggerAction()">{{ label }}</button>
  </div>
</template>

<script>

export default {
  name: 'BtnComponent',

  props: {

    type: {
      required: true,
      type: String,
    },

    label: {
      required: true,
      type: String,
    },

    confirmation: Boolean,

    myStyle: String,
  },

  methods: {
    triggerAction() {
      if (this.confirmation) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Do you really want to delete this?')) {
          this.$emit('btnActive');
        }
        return;
      }
      this.$emit('btnActive');
    },
  },
  computed: {
    btnStyle() {
      if (this.myStyle === 'danger') return 'btn-danger';
      return 'btn-default';
    },
  },
};
</script>

<style scoped>
  .btn {
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }
  .btn-danger{
   background-color: firebrick;
   color: white;
  }

  .btn-default {
    background-color: blueviolet;
    color: white;
   }
</style>
