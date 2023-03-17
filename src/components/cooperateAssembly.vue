<template>
    <div class="body4  ">
        <div class="container ">
            <div class="margin_b_60">
                <h2>合作伙伴</h2>
                <p class="color88">{{ data.msg }}</p>
            </div>
            <div class="row">
                <div v-for="(item, i) in data.cooperateList" :key="i" class="card margin_b_30">
                <img :src="item.src" alt="合资企业logo" class="cooperateLogo">
            </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex' 
const store = useStore()  
onMounted(()=>{
    document.body.scrollTop = 0
 document.documentElement.scrollTop = 0
})
const data = reactive(store.state.cooperate)
</script>
<style scoped lang="scss">
.container {
    width: 1170px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.body4 {
    background: #fafafa;
    padding: 100px 0 100px;

    .container {
        overflow: auto;
        position: relative;
        
    }

    .container::-webkit-scrollbar {
        height: 5px;
        display: none;
    }

    .container::-webkit-scrollbar-thumb {
        border-radius: 0px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
        width: 100px;
    }

    .container::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
        width: 100px;
    }

    .cooperateLogo {
        width: 160px;
        height: 150px;
        margin:0 30px;
    }
    .card{
        width:  230px
    }
}



</style>