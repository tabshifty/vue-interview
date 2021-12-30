<template>
    <div class="banner">
        <div class="bannerBox" :style="`background-color: ${bgColor}`">
            <div class="home btn" @click="backHome">
                <i class="iconfont">&#xe6b8;</i>
            </div>
            <div class="bannerText">{{ content }}</div>
            <div class="back btn" @click="back">
                <i class="iconfont">&#xe7fe;</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        content: String,
        bgColor: {
            type:String,
            default: '#FFFFFF'
        }
    },
    methods: {
        backHome() {
            this.$router.replace('/')
        },
        back() {
            this.$router.back()
        }
    }
}
</script>
<style scoped>
    .banner {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9;
    }
    .bannerBox {
        display: flex;
        height: 2.7rem;
        box-shadow: 0 0 1px 1px rgb(141, 101, 101);
    }
    .bannerBox {
        text-align: center;
        align-items: center;
    }
     div.btn {
        width: 4rem;
        cursor: pointer;
    }
    
    .bannerText {
        flex: 2
    }

</style>