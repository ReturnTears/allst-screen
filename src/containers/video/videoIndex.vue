<template>
    <div class="video">
        <h3>{{msg}}</h3>

    </div>
</template>

<script>
    export default {
        name: "videoIndex",
        data() {
            return {
                msg: "视频监控页面"
            }
        },
        methods: {
            // 异步获取监控视频数据
            getVideoData() {

            }
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
