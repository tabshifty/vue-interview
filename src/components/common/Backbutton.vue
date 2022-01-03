<template>
    <div class="btnBox">
        <button v-show="show" @click="back">
            <i class="iconfont">&#xe7ef;</i>
        </button>
    </div>
</template>

<script>
const scrollGap = 150
let setScrollTop
export default {
    name: 'Backbutton',
    data() {
        return {
            scrollTop: 0,
            height: 0,
            scrollHeight: 0
        }
    },
    mounted() {
        this.scrollTop = window.scrollY
        setScrollTop =() => {
            if ((this.scrollTop > scrollGap && window.scrollY > scrollGap) || (this.scrollTop < scrollGap && window.scrollY < scrollGap)) return
            this.scrollTop = window.scrollY
        }
        window.addEventListener('scroll', setScrollTop)
        window.addEventListener('resize', setScrollTop)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', setScrollTop)
        window.removeEventListener('resize', setScrollTop)
    },
    computed: {
        show(){
            return this.scrollTop > scrollGap && (document.documentElement.scrollHeight - document.documentElement.clientHeight) > scrollGap
        }
    },
    methods: {
        back() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>
<style scoped>
    .btnBox {
        position: fixed;
        bottom: 2.5rem;
        right: 1%;
        text-align: center;
    }
    .btnBox > button {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 3rem;
        background-color: rgb(221, 211, 198);
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .btnBox {
            display: none;
        }
    }
</style>