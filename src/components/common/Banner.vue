<template>
    <div class="banner">
        <div class="bannerBox" :style="`background-color: ${bgColor}`">
            <div class="bannerText">{{ content }}</div>
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
    }
}
</script>
<style scoped>
    .banner {
        position: fixed;
        top: 0;
        z-index: 9;
    }
    .bannerBox {
        display: flex;
        width: 100vw;
        height: 2.7rem;
        box-shadow: 0 0 1px 1px rgb(141, 101, 101);
    }
    .bannerBox {
        justify-content: center;
        align-items: center;
    }
</style>