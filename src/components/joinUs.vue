<template>
    <div class="trends">
        <img class="img" src="../assets/banner-about.jpg" alt="">
        <div class="container ">
            <div class="mar30" v-for="(item,i) in data.list" :key="'i'">
                <h2>岗位名称：{{item.name}}</h2>
                <p class=" margin_b_30">
                    <p class="margin_b_30 font_w color88">岗位职责：</p>
                    <p class="color88" v-html="item.duty"></p>
                </p>
                <p class=" margin_b_30 color88">
                    <p class="margin_b_30 font_w">任职资格：</p>
                    <p class="color88" v-html="item.qualification"></p>
                </p>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from './footer.vue'
import CooperateAssembly from './cooperateAssembly.vue'
import { reactive, onMounted } from 'vue';
import { useStore } from 'vuex' 
const store = useStore()  
const data = reactive(store.state.joinUs)
onMounted(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

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