<template>
    <div>
        <h3>{{msg}}</h3>
        <div id="all" style="width: 26%; height: 220px;"></div>
    </div>
</template>

<script>
    // echarts
    import echarts from 'echarts'
    export default {
        name: "allTask",
        data() {
            return {
                msg: "总任务页面",
                listTasks: {},
                all_option: {
                    backgroundColor: 'pink',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        align: 'auto',
                        data:['已完成','未完成']
                    },
                    series: [
                        {
                            type:'pie',
                            name:'总任务量',
                            radius: ['30%', '55%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value: 12, name:'已完成'},
                                {value: 20, name:'未完成'}
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            // 异步加载数据
            getAllDatas() {
                this.$axios.get("http://localhost:10001/screen/api/screen/screenAllTasksInfo/listTasks")
                    .then(res => {
                        this.listTasks = res.data.data[0];
                        let all_option = {
                            backgroundColor: 'pink',
                                tooltip: {
                                trigger: 'item',
                                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                                orient: 'horizontal',
                                align: 'auto',
                                data:['已完成','未完成']
                            },
                            series: [
                                {
                                    type:'pie',
                                    name:'总任务量',
                                    radius: ['30%', '55%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'left'
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '20',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:[
                                        {value: this.listTasks.finishTask, name:'已完成'},
                                        {value: this.listTasks.totalTask - this.listTasks.finishTask, name:'未完成'}
                                    ]
                                }
                            ]
                        };
                        // 初始化echarts实例
                        let myChart = echarts.init(document.getElementById('all'));
                        myChart.setOption(all_option, false, false);
                    })
                    .catch(error => {
                        console.log("获取数据失败, 原因:" + error)
                    })
            }
        },
        // 生命周期函数
        mounted() {
            // this.getAllDatas();

            // 测试用
            let myChart = echarts.init(document.getElementById('all'));
            myChart.setOption(this.all_option, false, false);
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
