<template>
    <div class="textContainer">
        <div>
            <Markdown :source= "mdSource" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Text',
    props: {
        mdSource: String
    },
    // mounted() {
    //     console.log(this.mdSource)
    // }
}
</script>
<style scoped>
    .textContainer {
        font-size: 1rem;
        background-color: #f6f8fa;
        padding: 10px 20px;
        border-radius: 3px;
        margin: 1rem 0;
    }

    .textContainer >>> p, .textContainer >>> ul, .textContainer >>> ol{
        margin: 0;
        margin-top: .8rem;
        padding: 0;
    }
    .textContainer >>> p:first-child {
        margin-top: 0;
    }
    .textContainer >>> li  {
        margin-bottom: .2rem;
        margin-left: 1rem;
    }
</style>