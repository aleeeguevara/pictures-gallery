<template>
  <div class="panel">
    <h2 class="panel-title" @dblclick="visible = !visible">{{ title }}</h2>
    <transition  name="toggle-fade">
      <div
        class="panel-content"
        v-show="visible"
        @click="showbtn = !showbtn"
        @keypress="showbtn = !showbtn"
      >
        <slot></slot>
        <Btn-component
          type="button"
          label="Remove"
          v-show="showbtn"
          @btnActive="handleClickDelete()"
          :confirmation="false"
          myStyle="danger"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import BtnComponent from './Btn.vue';

export default {
  name: 'PanelComponent',
  props: ['title'],
  data() {
    return {
      visible: true,
      showbtn: false,
    };
  },
  components: {
    BtnComponent,
  },
  methods: {
    handleClickDelete() {
      this.$emit('deleteClick');
    },
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
  .message{
    color: #fff;
    display: flex;
    justify-content: center;
  }
  .toggle-fade-enter, .toggle-fade-leave-active {
    opacity: 0;
  }

  .toggle-fade-enter-active, .toggle-fade-leave-active {
    transition: opacity .4s;
  }
</style>
