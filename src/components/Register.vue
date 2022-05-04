<template>
  <div class="form">
    <h1 class="center">Register</h1>

    <form @submit="createPicture()">
      <div class="control">
        <label for="title">Title
          <input id="title" autocomplete="off" @input="title = $event.target.value">
        </label>
      </div>

      <div class="control">
        <label for="url">Url
          <input id="url" autocomplete="off" @input="url = $event.target.value">
        </label>
        <ImgResponsive v-show="url" :image="url" :title="title"/>
      </div>

      <div class="control">
        <label for="description">Description
          <textarea
            @input="desc = $event.target.value"
            id="description"
            autocomplete="off"
          >
          </textarea>
        </label>
      </div>

      <div class="center buttons">
        <Btncomponent label="Save" type="submit"/>
        <router-link to="/"><Btncomponent label="Return" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImgResponsive from './ImgResponsive.vue';
import Btncomponent from './Btn.vue';

export default {
  name: 'RegisterComponent',
  components: {
    ImgResponsive,
    Btncomponent,
  },
  data() {
    return {
      title: '',
      url: '',
      desc: '',
    };
  },
  methods: {
    async createPicture() {
      const data = {
        titulo: this.title,
        url: this.url,
        descricao: this.desc,
      };
      if (this.title && this.url && this.desc) {
        await this.$http.post('http://localhost:3000/v1/fotos', data);
      }
    },
  },
};

</script>
<style scoped>
  .form {
    max-width: 600px;
    margin: 0 auto;
        box-sizing: border-box;
  }
  .center {
    text-align: center;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .control label {
    display: flex;
    color: #8c8a92;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    margin: 1rem 0;
  }
  input, textarea{
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #8c8a92;
    margin: 1rem 0;
    color: #8c8a92;
    font-size: inherit;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>
