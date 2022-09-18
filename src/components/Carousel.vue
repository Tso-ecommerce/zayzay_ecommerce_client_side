<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"/>

    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>

      <div class="toogle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>

      <!-- Pagination -->
        <div class="pagination">
          <span v-for="(slide,index) in getSlideCount" :key="index" :class="{active:index + 1 === currentSlide }">{{slide}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";

export default {
  setup() {
    const currentSlide = ref(1);

    const getSlideCount = ref(null);

    //next slide

    const nextSlide = ()=>{
      if (currentSlide.value===getSlideCount.value){
        currentSlide.value += 1;
        return;
      }
      currentSlide.value +=1;
    }

    //prev slide

    const prevSlide = ()=>{
      if(currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    }

    onMounted(()=>{
      getSlideCount.value = document.querySelectorAll(".slide").length;
    })

    return {currentSlide,nextSlide,prevSlide,getSlideCount};
  },
}
</script>

<style>
  .navigate{
    padding:0 20px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle-page{
    display: flex;
    flex: 1;
    /* position: absolute; */
  }

  .right{
    justify-content: flex-end;
  }

  .left i,.right i{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #6347c7;
    color: black;
  }

  .pagination{
    position: absolute;
    bottom : 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }

  span{
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px p rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  }
  
  .active{
    background-color: #6347c7;
  }
</style>