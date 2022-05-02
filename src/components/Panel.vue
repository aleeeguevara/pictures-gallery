<template>
  <div class="panel">
    <h2 class="panel-title" @dblclick="visible = !visible">{{ title }}</h2>
    <transition  name="toggle-fade">
      <div class="panel-content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PanelComponent',
  props: ['title'],
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style scoped>
 .panel {
    border: solid 2px grey;
    display: flex;
    flex-direction: column;
    margin: 10px;
    box-shadow: 5px 5px 10px rgb(24, 23, 23);
    vertical-align: top;
    text-align: center;
    width: 300px;
    max-height: 250px;
  }

  .panel-title {
    box-sizing: border-box;
    text-align: center;
    border: solid 2px;
    background: #333;
    padding: 10px;
    width: 100%;
    cursor: pointer;
  }

  .toggle-fade-enter, .toggle-fade-leave-active {
    opacity: 0;
  }

  .toggle-fade-enter-active, .toggle-fade-leave-active {
    transition: opacity .4s;
  }
</style>
