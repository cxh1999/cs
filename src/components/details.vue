<template>
    <div class="about">
        <img class="img" src="../assets/banner-about.jpg" alt="">
        <div class=" container">
            <div class="margin-b-60">
                <h2>{{data.prams.title}}</h2>
                <p class="color88"> {{data.prams.msg}}</p>
            </div>
            <img v-for="(item, i) in data.prams.src" :key="i" :src="item.url" class="listImg" alt="">
        </div>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from './footer.vue'
import { reactive,onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(()=>{
    document.body.scrollTop = 0
 document.documentElement.scrollTop = 0
})
const data = reactive({
    prams:JSON.parse(route.query.data)
})
onMounted(()=>{
    console.log(data)
})
</script>
<style scoped lang="scss">
.container {
    width: 1170px;
    margin: 0 auto;
    padding: 100px 15px 15px 15px;
}

.margin-b-60 {
    margin-bottom: 60px;
}

.about {
    .img {
        width: 100%;
    }
}

.listImg {
    width: 100%;
    margin-bottom: 20px;
}

</style>