<template>
    <div class="content">
        <p v-if="show">
            <ul>
                <li v-for="(item, index) in list" :key="item.path" :id="item.anchor" @click="expand(index)">
                    <router-link :to='item.anchor?`${$route.path}#${item.anchor}`:`${$route.path}/${item.path}`'>
                        <i class="iconfont">{{ item.anchor ? showStatus[index] ? '&#xe87e;':' &#xe8d4;' : '&#xe6c3;'}}</i>
                        {{ item.content }} 
                    </router-link>
                    <!-- what if in vue 2 -->
                    <Text v-show="showStatus[index]" v-if="item.anchor" :mdSource="item.description" />
                </li>
            </ul>
        </p>
        <router-view></router-view>
        <!-- <div class="backBtn" v-if="!show"><router-link :to="$route.matched[0].path" tag="button">Back to list</router-link></div> -->
        <Backbutton />
    </div>
</template>

<script>
// import list from '@/textConfig/css/list.js'
import Text from '@/components/common/Text.vue'
import Backbutton from '@/components/common/Backbutton.vue'

export default {
    name: "Wrapper",
    props: {
        list:{
            type: Array,
            default(){
                return []
            }
        },
        
    },
    data() {
        return {
            showStatus: Array(this.list.length).fill(false)
        }
    },
    components: {
        Text,
        Backbutton
    },
    mounted() {
           
        console.log(this.$route)
    },
    methods: {
        expand(index){
            this.showStatus[index] = !this.showStatus[index]
        }
    },
    
    computed: {
        show() {
            return this.$route.name
        }
    }
}
</script>

<style scoped>
    .content {
        margin: 0 auto;
        width: 80%;
        max-width: 1000px;
        margin-top: 4rem;
        padding-bottom: 6rem;
    }
    .backBtn {
        display: inline-block;
        background-color: aqua;
        padding: 5px 10px;
        font-size: .8rem;
        border-radius: 1rem;
    }
    ul, ol , li {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    a, .backBtn > a {
        text-decoration: none;
    }
    .iconfont {
        font-size: 1rem;
    }
    @media screen and (max-width: 768px){
        .content {
            width: 95%;
        }
    }
</style>