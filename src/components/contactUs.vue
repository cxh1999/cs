<template>
    <div class="">
        <img class="img" src="../assets/banner-about.jpg" alt="">
        <Footer></Footer>
    </div>
</template>
<script setup>
import Footer from './footer.vue'
import { reactive ,onMounted} from 'vue';
onMounted(()=>{
    document.body.scrollTop = 0
 document.documentElement.scrollTop = 0
})

</script>
<style scoped lang="scss">

.img {
        width: 100%;
    }
</style>