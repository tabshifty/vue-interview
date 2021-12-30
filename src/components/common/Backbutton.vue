<template>
    <div class="btnBox">
        <button v-show="show" @click="back">
            <i class="iconfont">&#xe7ef;</i>
        </button>
    </div>
</template>

<script>

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
        // this.scrollTop = this.scrollTop > 200 && window.scrollY > 200 ? this.scrollTop : window.scrollY
        this.$nextTick(() => {
            this.height = document.documentElement.clientHeight
            this.scrollHeight = document.documentElement.scrollHeight
        })
        this.scrollTop = window.scrollY
        const setScrollTop =() => {
            console.log(this.scrollTop, window.scrollY)
            if ((this.scrollTop > 100 && window.scrollY > 100) || (this.scrollTop < 100 && window.scrollY < 100)) return
            this.scrollTop = window.scrollY
        }
        window.onscroll = setScrollTop
        window.onresize = () => {
            setScrollTop()
            this.height = document.documentElement.clientHeight
            this.scrollHeight = document.documentElement.scrollHeight
        }
    },
    computed: {
        show(){
            return this.scrollTop > 100 && (this.scrollHeight - this.height) > 100
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