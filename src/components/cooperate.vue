<template>
    <div class="trends">
        <img class="img" src="../assets/banner-about.jpg" alt="">
        <CooperateAssembly></CooperateAssembly>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from './footer.vue'
import CooperateAssembly from './cooperateAssembly.vue'
import { reactive ,onMounted} from 'vue';
onMounted(()=>{
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