<template>
  <div class="form">
    <h1 class="center" v-if="!id">Register</h1>
    <h1 class="center" v-else>Editing</h1>

    <form @submit.prevent="createPicture()">
      <div class="control">
        <label for="title">Title
          <input
            name="title"
            v-validate data-vv-rules="required|min:3|max:30"
            id="title"
            autocomplete="off"
            v-model="photo.titulo"
          >
          <p v-show="errors.has('title')" class="warn">{{ errors.first('title') }}</p>
        </label>
      </div>

      <div class="control">
        <label for="url">Url
          <input
            id="url"
            name="url"
            autocomplete="off"
            v-model="photo.url"
            v-validate data-vv-rules="required"
          >
          <p v-show="errors.has('url')" class="warn">{{ errors.first('url') }}</p>
        </label>
        <ImgResponsive v-show="photo.url" :image="photo.url" :title="photo.titulo"/>
      </div>

      <div class="control">
        <label for="description">Description
          <textarea
            id="description"
            name="description"
            autocomplete="off"
            v-model="photo.descricao"
            v-validate data-vv-rules="required"
          >
          </textarea>
           <p v-show="errors.has('description')" class="warn">{{ errors.first('description') }}</p>
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
      id: this.$route.params.id,
    };
  },
  methods: {
    async createPicture() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        try {
          const req = await this.service.register(this.photo);

          if (req.status === 200) {
            if (this.id) this.$router.push({ name: 'home' });
            this.photo = new Photo();
          }
        } catch (error) {
          console.log(error);
        }
      }
    },

  },
  created() {
    this.service = new FotoService(this.$resource);

    if (this.id) {
      (async () => {
        const data = await this.service.getDataById(this.id);
        this.photo = data;
      })();
    }
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
