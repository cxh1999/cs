<template>
    <div :class="data.topHeight>20?'menuModel2':'menuModel'">
        <header class="headerStyle" >
        <img src="../assets/logo1.png" class="logo1" alt="重庆川思信息技术有限公司logo">
        <div class="list"> 
            <div @click="skip(item.url)" class="listChild" v-for="(item,i) in data.list" :key="item.id">{{item.text}}</div>
        </div>
    </header>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()
const data = reactive({
    webTitle: '川思信息技术有限公司',
    topHeight:0,
    list:[
        {text:'首页',id:1,url:'/home'},
        {text:'关于我们',id:2,url:'/about'},
        {text:'行业动态',id:3,url:"/trends"},
        {text:'产品服务',id:4,url:'/product'},
        {text:'合作伙伴',id:5,url:'/cooperate'},
        {text:'加入我们',id:6,url:'/joinUs'},
        {text:'联系我们',id:7,url:'/contactUs'},
    ]
})
onMounted(() => {
  window.addEventListener("scroll", scrollTop, true);
});
const scrollTop = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  data.topHeight = Math.floor(scroll / Math.floor(document.body.scrollHeight/173));
  
}

const skip = (result)=>{
    router.push(result)
}
</script>
<style lang="scss" scoped>
    .menuModel{
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.342);
        position: fixed;
        top: 0;
        z-index: 9;
        border-radius: 4px;
        height: 95px;
        line-height: 95px;
        color: #ffffff;
    }
    .menuModel2{
        width: 100%;
        border-bottom:1px solid rgb(126 126 126 / 34%);
        position: fixed;
        top: 0;
        z-index: 9;
        border-radius: 4px;
        height: 95px;
        line-height: 95px;
        background-color: #ffffff;
        color: #000000;
    }
    .headerStyle{
        margin: 0 auto;
        width: 1170px;
        display: flex;
        margin: 0 auto;
        line-height: 95px;
        align-items: center;
        
    }
   
    .logo1{
        height: 35px;
    }
    .list{
        font-weight: 600;
        font-size: 15px;
        flex: 1;
        display: inline-flex;
        justify-content: flex-end;
        cursor: pointer;
        .listChild{
            padding: 0 25px;
            position: relative;
            
        }
    }
    .listChild:hover::after {
    content: '';
    top:50%;
    left: 5px;
    transform: translate(-5px);
    background: #17bed2;
    position: absolute;
    width: 10px;
    height: 2px;
    
    }
</style>