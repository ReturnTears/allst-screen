<template>
    <div class="notFound">
        <h3>{{error}}</h3>
    </div>
</template>

<script>
    export default {
        name: "notFoundIndex",
        data() {
            return {
                error: "您找的页面飞走了..."
            }
        },
        // 方法
        methods: {

        },
        // 生命周期函数
        mounted() {

        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
