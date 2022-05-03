<template>
  <div id="container">
   <label for="search">
      <input
        type="search"
        placeholder="Filter by author"
        class="filter"
        id="search"
        @input="filter = $event.target.value"
      >
    </label>
    <div id="containerCards">
      <div class="card" v-for="(image, index) in FilterPics" :key="index">
        <PanelComponent :title="image.titulo">
            <Img-responsive
              :image="image.url" :title="image.titulo"
            />
        </PanelComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ImgResponsive from './ImgResponsive.vue';
import PanelComponent from './Panel.vue';

export default {
  name: 'CardComponent',
  data() {
    return {
      images: [],
      filter: '',
    };
  },
  methods: {
    async getPictures() {
      const req = await this.$http.get('http://localhost:3000/v1/fotos', {
        headers: {
          contentType: 'application/json',
        },
      });
      const data = await req.json();
      this.images = data;
    },
  },
  created() {
    this.getPictures();
  },
  components: {
    PanelComponent,
    ImgResponsive,

  },
  computed: {

    FilterPics() {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), 'i');
        const data = this.images.filter((img) => exp.test(img.author));
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
</style>
