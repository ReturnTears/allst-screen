<template>
    <div class="tasks">
        <h3>{{msg}}</h3>
        <div>
            <div style="width: 50%; height: 300px; border:1px solid rgb(180,180,180)" id="echarts1"></div>
        </div>
        <router-link to="/task/all">总任务</router-link>
        <router-link to="/task/mon">月任务</router-link>
        <router-view/>
    </div>
</template>

<script>
    // echarts
    import echarts from 'echarts'
    export default {
        name: "tasksIndex",
        data() {
            return {
                msg: "任务统计页面",
                // echarts1表示总任务统计
                echarts1_option: {
                    backgroundColor: 'green',
                    title: {
                        text: '总任务量'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        },
        methods: {

        },
        // 生命周期函数
        mounted() {
            let myChart = echarts.init(document.getElementById('echarts1'));
            myChart.setOption(this.echarts1_option);
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
