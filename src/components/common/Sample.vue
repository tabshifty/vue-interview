<template>
    <div class="sampleBlock">
        <div class="frameWrapper">
            <div class="loading" v-show="show" :style="`height: ${height - 22}px`">

            </div>
            <iframe :src="sampleSrc" :height="height" frameborder="0">
            </iframe>
        </div>
    </div>
</template>

<script>
let timer = 0
export default {
    name: 'sample',
    data() {
        return {
            height: 200,
            show: true
        }
    },
    props: {
        sampleSrc: {
            type: String,
            required: true
        }
    },
    created() {
        window.addEventListener('message', (evt) => {
            const { height } = evt.data
            if (!height) return
            if (height < 200) return (this.show = false)
            setTimeout(() => {
                this.height = height + 28;
                this.show = false
            }, 1000 + timer - Date.now())
        })
    },
    computed: {
        pixelHeight() {
            return this.height + 'px'
        }
    },
    mounted() {
        timer = Date.now()
    }
}
</script>

<style scoped>
    .sampleBlock {
        position: relative;
    }
    
    .frameWrapper {
        position: relative;
        max-width: 80ch;
        min-width: 20ch;
        margin-top: 20px;
        overflow: hidden;
    }

    .loading {
        position: absolute;
        width: calc(100% - 27px);
        box-sizing: border-box;
        top: 11px;
        left: 16px;
        background: linear-gradient(45deg, #fcfdfd, #a17787, #23a6d5, #1a352f);
        background-size: 400% 400%;
        animation: gradient 7s ease infinite;
        border-radius: 6px;
        z-index: 10;
    }

    iframe {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid rgb(71, 67, 67);
        border-left: 6px solid #2b6c92;
        padding: 10px;
        overflow: scroll;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>