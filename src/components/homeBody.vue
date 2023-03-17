<template>
    <div class="content-lg container">
        <div class=" row body1">
            <div class="masonry-grid-item">
                <div class="margin-b-60">
                    <h2>{{ data.body5list[0].title }} </h2>
                    <p>{{ data.body5list[0].msg }}</p>
                    <a class="link" @click="goDetails(data.body5list[0])">了解详情</a>
                </div>
                <div class="flex">
                    <img class="full-width" :src="data.body5list[0].url" alt="Portfolio Image" data-wow-duration=".3"
                        data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                </div>
            </div>
            <div class="masonry-grid-item">
                <div class="flex">
                    <img class="full-width " :src="data.body5list[1].url" alt="Portfolio Image" data-wow-duration=".3"
                        data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                </div>
                <h2>{{ data.body5list[1].title }}</h2>
                <p>{{ data.body5list[1].msg }}</p>
                <a class="link" @click="goDetails(data.body5list[1])">了解详情</a>
            </div>
            <div class="masonry-grid-item">
                <div class=" margin-b-60">
                    <h2>{{ data.body5list[2].title }}</h2>
                    <p>{{ data.body5list[2].msg }}</p>
                    <a class="link" @click="goDetails(data.body5list[2])">了解详情</a>
                </div>
                <div class="flex">
                    <img class="full-width" :src="data.body5list[2].url" alt="Portfolio Image" data-wow-duration=".3"
                        data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                </div>
            </div>
        </div>

    </div>
    <div class=" body2">
        <div class="container row">
            <div class="masonry-grid-item">
                <h2>关于我们</h2>
                <p>{{ data.homeAboutMsg }}</p>
                <a class="link" @click="goAbout('/about')">了解详情</a>
            </div>
            <div class="masonry-grid-item">
                <div v-for="(item, i) in data.body4list" :key="i" class="card"
                    :class="data.active == item.id ? 'cardActive' : ''" @click="activeClick(item.id)">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.msg }}</p>
                </div>
            </div>
        </div>
    </div>
    <ProductAssembly />
    <CooperateAssembly></CooperateAssembly>
</template>
<script setup>
import ProductAssembly from './productAssembly.vue'
import CooperateAssembly from './cooperateAssembly.vue'
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex' 
import { useRouter } from 'vue-router'
const store = useStore()  
const router = useRouter()
onMounted(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
const data = reactive({
    active: 0,
    body4list: store.state.homeAbout,
    homeAboutMsg:store.state.homeAboutMsg,
    body5list:store.state.homeAboutImgText, 
})
const activeClick = (e) => {
    data.active = e
}
const goAbout = (res) => {
    router.push(res)
}
const goDetails = (e) => {
    router.push({ path: '/details', query: { data: JSON.stringify(e) } })
}
</script>
<style scoped lang="scss">
.container {
    width: 1170px;
    margin: 0 auto;
}

.row {
    display: flex;
}

.body1 {
    padding-bottom: 50px;
}

.body2 {
    background: #fafafa;
    padding: 100px 0 50px;

    h3 {
        color: #515769;
    }

    p {
        width: 75%;
    }

    .card {
        background: #ffffff;
        color: #000;
        padding: 15px;
        width: 450px;
        height: 60px;
        margin: 0 0 10px auto;
        box-shadow: 0px 1px 0px 1px #d3d4d538;
        transition: height 1s;
        -webkit-transition: height 1s;
        cursor: pointer;
        overflow: hidden;

        p {
            margin-top: 31px !important;
        }
    }

    .cardActive {
        height: 150px;
        background-color: #17bed2;

        h3 {
            color: #fff !important;
        }

        p {
            color: #fff !important;

        }
    }

    .masonry-grid-item {
        padding: 0 30px;
    }
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
        margin-right: 30px;
    }
}

.masonry-grid-item {
    flex: 1;

    p {
        font-size: 15px;
        font-weight: 400;
        color: #888888;
        margin-bottom: 15px;
    }

    .link {
        font-size: 13px;
        font-weight: 600;
        color: #81848f;
    }

    .margin-b-60 {
        margin-bottom: 60px
    }


}

.full-width {
    margin: 0 auto;
    width: 350px;
}

.link {
    position: relative;
    cursor: pointer;
}

.link::after {
    content: '';
    top: 8px;
    right: -15px;
    background: #17bed2;
    position: absolute;
    width: 10px;
    height: 2px;
}
</style>