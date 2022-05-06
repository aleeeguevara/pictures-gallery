<template>
  <div class="form">
    <h1 class="center">Register</h1>

    <form @submit.prevent="createPicture()">
      <div class="control">
        <label for="title">Title
          <input id="title" autocomplete="off" v-model.lazy="photo.titulo">
          <p v-show="warn" class="warn">Please fill required field</p>
        </label>
      </div>

      <div class="control">
        <label for="url">Url
          <input id="url" autocomplete="off" v-model.lazy="photo.url">
          <p v-show="warn" class="warn">Please fill required field</p>
        </label>
        <ImgResponsive v-show="photo.url" :image="photo.url" :title="photo.titulo"/>
      </div>

      <div class="control">
        <label for="description">Description
          <textarea
            id="description"
            autocomplete="off"
            v-model="photo.descricao"
          >
          </textarea>
           <p v-show="warn" class="warn">Please fill required field</p>
        </label>
      </div>

      <div class="center buttons">
        <router-link :to="{name: 'home'}"><Btncomponent label="Return" type="button"/></router-link>
        <Btncomponent label="Save" type="submit"/>
      </div>

    </form>
  </div>
</template>

<script>

import ImgResponsive from './ImgResponsive.vue';
import Btncomponent from './Btn.vue';
import Photo from '../domain/photo/Photo';
import FotoService from '../domain/photo/PhotoService';

export default {
  name: 'RegisterComponent',
  components: {
    ImgResponsive,
    Btncomponent,
  },
  data() {
    return {
      photo: new Photo(),
      warn: false,
    };
  },
  methods: {
    async createPicture() {
      const data = this.photo;
      if (data.url && data.titulo && data.descricao) {
        try {
          const req = await this.service.register(data);

          if (req.status === 200) {
            this.photo = new Photo();
            this.warn = false;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        this.warn = true;
      }
    },
  },
  created() {
    this.service = new FotoService(this.$resource);
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

  .warn {
    color: firebrick;
    font-size: 15px;
  }
</style>
