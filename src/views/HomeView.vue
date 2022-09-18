<template>
  <div class="home">
    <Carousel class="carousel" v-slot="{currentSlide}">
      <Slide v-for="(slide,index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index +1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt=""> 
        </div>
      </Slide>
    </Carousel>
    <!-- <Searchbar></Searchbar>
    <Productslist></Productslist>
    <Cart></Cart>
    <About></About> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Slide from '@/components/Slide.vue'
import SearchBar from '@/components/Searchbar.vue'
import Productslist from '@/components/Productslist.vue'
import Cart from '@/components/Cart.vue'
import About from '@/components/About.vue';
import Searchbar from '@/components/Searchbar.vue';



export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    SearchBar,
    Productslist,
    Cart,
    About,
    Searchbar
},



setup() {
  const carouselSlides = ["bg-1","bg-2","bg-3"];

  return {carouselSlides};

},
};
</script>

<style scoped>
  .carousel{
    position: relative;
    max-height:100vh;
    height:100vh;
  }

  .slide-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
  }

  img{
    min-width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
    
  
</style>
