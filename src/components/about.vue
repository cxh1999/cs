<template>
    <div class="about">
        <img class="img" src="../assets/banner-about.jpg" alt="">
        <div class=" container">
            <div class="margin-b-60">
                <h2>{{data.title}}</h2>
                <p class="color88">{{data.msg}}
                </p>
            </div>
            <img v-for="(item, i) in data.list" :key="i" :src="item.src" class="listImg" alt="">

        </div>
        <div class=" bgfa pad_t_30">
            <div class="container">
                <h2>企业发展历程</h2>
                <p>{{ data.developMsg }}</p>
            </div>
            <div class="container2 flex ">
                <div class="card bgfff" v-for="(item,i) in data.lslist" :key="i">
                    <h3>{{ item.time }}</h3>
                    <p class="font_w font_14">{{item.title}}</p>
                    <p class="font_12 color88">{{item.msg}}</p>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from './footer.vue'
import { reactive,onMounted } from 'vue';
import { useStore } from 'vuex' 
const store = useStore()  
onMounted(()=>{
    document.body.scrollTop = 0
 document.documentElement.scrollTop = 0
})
const data = reactive(store.state.aboutPage)
</script>
<style scoped lang="scss">
.container {
    width: 1170px;
    margin: 0 auto;
    padding: 100px 15px 15px 15px;
}
.container2{
    width: 1170px;
    margin: 0 auto;
    padding: 0 15px 15px 0;
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
.card{
    padding: 50px;
    height: 320px;
    box-sizing: border-box;
    border-right: 1px solid rgba(202, 200, 200, 0.295);
}
.card:last-child{
    border: none;
}
</style>