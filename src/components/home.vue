<template>
   <div class="homeModel" >
    <el-carousel trigger="click" height="1070px" class="margin_b_60">
      <el-carousel-item v-for="item in data.list" :key="item">
        <img :src="item.src" alt="轮播图" class="img">
      </el-carousel-item>
    </el-carousel>
    <HomeBody></HomeBody>
    <Footer></Footer>
  </div>
</template>
<script setup>
import HomeBody from './homeBody.vue';
import Footer from './footer.vue'
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex' 
const store = useStore()  
const data = reactive({
    list:store.state.Rotation
})
</script>
<style scoped>
 .homeModel{
  height: 100%;
 }
 .img{
  width: 1920px
 }
</style>