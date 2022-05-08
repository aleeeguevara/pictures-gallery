<template>
  <div id="container">
    <p class="message">{{ message }}</p>
   <label for="search">
      <input
        type="search"
        placeholder="Filter by author"
        class="filter"
        id="search"
        @input="filter = $event.target.value"
      >
    </label>
    <div id="containerCards" v-if="!error">
      <div class="card" v-for="(image, index) in FilterPics" :key="index">
        <PanelComponent
          :images="images"
          :title="image.titulo"
          :id="image._id"
          v-my-transform:scale.animate='1.2'
          @deleteClick="removePicture(image)"
        >
          <Img-responsive
            :image="image.url" :title="image.titulo"
          />
        </PanelComponent>
      </div>
    </div>
      <div v-else>
        <h2 class="title-error">{{ error }}</h2>
      </div>
  </div>
</template>

<script>
import ImgResponsive from './ImgResponsive.vue';
import PanelComponent from './Panel.vue';
import PhotoService from '../domain/photo/PhotoService';

export default {
  name: 'CardComponent',
  data() {
    return {
      images: [],
      filter: '',
      message: '',
      error: false,
    };
  },
  methods: {
    async removePicture(image) {
      try {
        // eslint-disable-next-line no-underscore-dangle
        const req = await this.service.delete(image._id);
        if (req.status === 200) {
          this.message = 'Pictured removed successfully';
          const index = this.images.indexOf(image);
          this.images.splice(index, 1);
          this.message = '';
        }
      } catch (err) {
        this.message = err.message;
      }
    },
  },
  created() {
    this.service = new PhotoService(this.$resource);
    (async () => {
      try {
        const data = await this.service.list();
        this.images = data;
      } catch (err) {
        this.error = err.message;
      }
    })();
  },
  components: {
    PanelComponent,
    ImgResponsive,

  },
  computed: {

    FilterPics() {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), 'i');
        const data = this.images.filter((img) => exp.test(img.titulo));
        return data;
      }
      return this.images;
    },
  },
};
</script>

<style scoped>
  #containerCards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  #container {
    box-sizing: border-box;

  }
  .filter{
    width: 100%;
    padding: .5rem 1rem;
    margin: 2rem;
    color: #fff;
  }

  .message{
    color: #fff;
    display: flex;
    justify-content: center;
  }

  .title-error{
    color: red;
  }
</style>
