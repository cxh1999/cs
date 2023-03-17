<template>
    <div class="trends">
        <img class="img" src="../assets/banner-about.jpg" alt="">
        <div class=" container">
            <div class="margin_b_60" v-for="(item,i) in data.list" :key='i'>
                <h2>{{item.title}}</h2>
                <p class="color88"> {{item.msg}}</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from './footer.vue'
import { reactive ,onMounted} from 'vue';
import { useStore } from 'vuex' 
const store = useStore()  
onMounted(()=>{
    document.body.scrollTop = 0
 document.documentElement.scrollTop = 0
})
const data = reactive(store.state.trends)
</script>
<style scoped lang="scss">
.container {
    width: 1170px;
    margin: 0 auto;
    padding: 100px 15px 15px 15px;
}
.img {
        width: 100%;
    }
</style>