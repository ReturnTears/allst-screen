<template>
    <div class="mon">
        <h3>{{msg}}</h3>
        <div id="mon" style="width: 26%; height: 220px;"></div>
    </div>
</template>

<script>
    // echarts
    import echarts from 'echarts'
    // qs
    import qs from "qs"
    export default {
        name: "monTask",
        data() {
            return {
                msg: "当月任务量",
                listTasks: '',
                currMon1: this.getCurrentMonthFirstDay(),
                currMon2: this.getCurrentMonthLastDay(),
                mon_option1: {
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
                            name:'月任务量',
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
                                {value: 16, name:'已完成'},
                                {value: 24, name:'未完成'}
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            // 异步加载数据
            getMonDatas() {
                this.$axios.post("http://localhost:10001/screen/api/screen/screenAllTasksInfo/listCurr", qs.stringify({
                    receiv_start_time: this.currMon1,
                    receiv_end_time: this.currMon2
                }))
                .then(res => {
                    this.listTasks = res.data.data[0];
                    let mon_option = {
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
                                name:'月任务量',
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
                                    {value: this.listTasks.currFinishTasks, name:'已完成'},
                                    {value: this.listTasks.currTasks - this.listTasks.currFinishTasks, name:'未完成'}
                                ]
                            }
                        ]
                    };
                    // 初始化echarts实例
                    let myChart = echarts.init(document.getElementById('mon'));
                    myChart.setOption(mon_option, false, false);
                })
                .catch(error => {
                    console.log("获取数据失败, 原因:" + error)
                })
            },
            // 获取当月的第一天
            getCurrentMonthFirstDay() {
                let date = new Date();
                date.setDate(1);
                let month = parseInt(date.getMonth() + 1);
                let day = date.getDate();
                if (month < 10) {
                    month = '0' + month
                }
                if (day < 10) {
                    day = '0' + day
                }
                return date.getFullYear() + '-' + month + '-' + day;
            },
            // 获取当月的最后一天
            getCurrentMonthLastDay() {
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                month = month < 10 ? '0' + month : month;
                let day = new Date(year, month, 0);
                return  year + '-' + month + '-' + day.getDate()
            }
        },
        // 生命周期函数
        mounted() {
            // this.getMonDatas();

            // 测试用
            let myChart = echarts.init(document.getElementById('mon'));
            myChart.setOption(this.mon_option1, false, false);
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
