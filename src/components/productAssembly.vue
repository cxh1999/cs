<template>
    <div class="body3">
        <div class="container ">
            <div class="mar30">
                <h2>产品服务</h2>
                <p>{{ data.msg }}</p>
            </div>
            <div class="row">
                <div class="masonry-grid-item" v-for="(item, i) in data.body3list" :key="i">
                    <div class="flex">
                        <img class="full-width " :src="item.url" alt="Portfolio Image" data-wow-duration=".3"
                            data-wow-delay=".3s"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                    </div>
                    <h2>{{ item.title }} <span class="eng">{{ item.eng }}</span></h2>
                    <p class="msg">{{ item.msg }}
                    </p>
                    <a class="link" @click="goDetails(item)">了解详情</a>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex' 
const store = useStore() 
const router = useRouter()
const data = reactive(store.state.product)
const activeClick = (e) => {
    data.active = e
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

.msg {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
}


.body3 {
    padding: 80px 0 40px;

    h2 {
        color: #515769;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        color: #888888;
        margin-bottom: 15px;
    }

    .mar30 {
        margin: 30px;
    }

    .eng {
        font-size: 12px;
        color: #b0b0b3;
    }

    .row {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .masonry-grid-item {
        padding: 17px;
        margin: 0 0 30px;
        width: 350px !important;
        flex: inherit !important;
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