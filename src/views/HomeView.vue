<template>
  <div class="home">
    <Carousel></Carousel>
    <Searchbar></Searchbar>
    <Productslist></Productslist>
    <Cart></Cart>
    <About></About>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import SearchBar from '@/components/Searchbar.vue'
import Productslist from '@/components/Productslist.vue'
import Cart from '@/components/Cart.vue'
import About from '@/components/About.vue';
import Searchbar from '@/components/Searchbar.vue';



export default {
  name: 'HomeView',
  components: {
    Carousel,
    SearchBar,
    Productslist,
    Cart,
    About,
    Searchbar
}
}
</script>
