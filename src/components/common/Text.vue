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
        background-color: rgb(193, 225, 226);
        padding: 10px 20px;
        margin: 1rem 0;
    }

    .textContainer >>> p {
        margin: 0;
        margin-top: 5px;
        padding: 0;
    }
    .textContainer >>> p:first-child {
        margin-top: 0;
    }
    .textContainer >>> ul {
        margin: 0;
        padding: 0;
    }
    .textContainer >>> li  {
        margin-left: 1rem;
    }
</style>