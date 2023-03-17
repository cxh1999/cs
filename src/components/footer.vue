<template>
    <div class="container">
        <div class="address">
            <h3>{{data.title}}</h3>
            <h5>{{ data.address }}</h5>
            <p><img src="../assets/dianhua.png" alt="">{{ data.phone }}</p>
            <p><img src="../assets/xin-xianxing.png"> {{ data.email }}</p>
        </div>
        
    </div>
    <div class="center">{{ data.ipAddrss }}</div>
</template>
<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex' 
const store = useStore()  
const data = reactive(store.state.footer)
</script>
<style scoped>
.container {
    width: 1170px;
    margin: 0 auto;

}
.address{
    padding: 20px;
    
}
 h3 {
        color: #515769;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        color: #888888;
        margin-bottom: 15px;
    }
    
    .center{
        text-align: center;
        padding: 0 0 50px;
        font-size: 13px;
        color: #515769;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgb(126 126 126 / 34%);
    }

</style>