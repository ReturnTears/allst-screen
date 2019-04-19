<template>
    <div class="realtime">
        {{msg}}
        <div style="width: 100%; height: 480px;border:1px solid rgb(180,180,180)" id="realtime">

        </div>
    </div>
</template>

<script>
    export default {
        name: "realtimeIndex",
        data() {
            return {
                msg: "实时数据展示",
                path: "ws://localhost:9999/wsClient/{token}",
                socket: ""
            }
        },
        // 自定义方法
        methods: {
            // 建立长连接
            initWebSocket: function() {
              if (typeof (WebSocket) === "undefined") {
                  alert("您的浏览器不支持socket")
              } else {
                  this.socket = new WebSocket(this.path);
                  this.socket.onopen = this.open;
                  this.socket.onerror = this.error;
                  this.socket.onmessage = this.getMessage

              }
            },
            // 获取实时数据, 调用websocket数据接口
            getRealTimeData() {

            },
            open: function () {
                console.log("socket连接成功")
            },
            error: function () {
                console.log("连接错误")
            },
            getMessage: function (msg) {
                console.log(msg.data)
            },
            send: function () {
                this.socket.send(params)
            },
            close: function () {
                console.log("socket已经关闭")
            }
        },
        // 生命周期函数
        mounted() {
            this.initWebSocket();
        },
        destroyed() {
            this.socket.onclose = this.close;
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
