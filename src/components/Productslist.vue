<template>
  <h1>This is Products List Show Case Section</h1>
  <h3>Products List</h3>
  <div class="parentcontainer">

    <div class="container">
      <div class="catagory">အမျိုးအစားရွေးချယ်ပါ</div>

      <div class="button">
        <button class="btndesign">All</button>
        <button class="btndesign">Fish Products</button>
        <button class="btndesign">Fruits</button>
      </div>

      
      <div class="row pt-2 lists">
        <div class="col-6 col-sm-4 col-lg-3" v-for="product in products" :key="product.id">
            
          <div class="mb-2 listitems">
              <img :src="product.image" class="img pt-2" alt="productimage">
              <div class="label">
                <div>{{product.name}}</div>
                <div style="color:blue">{{product.price}} Kyats <span class="carticons"></span></div>
              </div>
          </div>

        </div>
      </div>

    </div>
</div>
  
  
  <hr>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/config"
import { ref } from '@vue/reactivity';

export default {
  setup(){
    let products = ref([]);
    let load = async()=>{
      let response = await getDocs(collection(db,"Product"));
      console.log(response.docs);

      products.value = response.docs.map(doc=>{
        return{id:doc.id, ...doc.data()}
        // console.log(doc.data())
      })
      console.log(products.value);
    }
    load();

    return{load,products}

  }
}
</script>

<style>
 
.parentcontainer{
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 100%;
}

.catagory{
  width: 100%;
  height: 35px;

  font-size: 16px;
  text-align: left;
  font-weight: 600;

  padding: 5px 0 0 10px;
}

.button{
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btndesign{
  margin: 0 10px;
  padding: 5px 30px;
  border-radius: 18px;
  background: steelblue;
  color: white;
}

.img{
  width: 200px;
  height: 150px;
  border-radius: 25px;
}

.label{
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-align: left;

  padding:5px 50px 0 20px;

  position: relative;
}

.carticons{
  background: grey;
  padding: 15px 15px;
  margin-right: 5px;

  position: absolute;
  top: 20px;
  right: 15px;
}

@media only screen and (max-width: 400px) {
  .container{
    font-size: 12px;
    
  }
  .btndesign{
    padding: 5px 15px;
    margin: 0 10px;
  }
  .img{
    width:100px;
    height: 75px;
    border-radius: 15px;
    padding: 0;
    margin: 0;
  }
  .label{
    font-size: 13px;
  }
 
  .carticons{
    padding: 10px 10px;
  }
}
</style>