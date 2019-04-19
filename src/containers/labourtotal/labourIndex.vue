<template>
    <div class="labour">
        <h3>{{msg}}</h3>
        <div style="width:40%; height:480px; border:1px solid rgb(120,180,180)" id="labour"></div>
    </div>
</template>

<script>
    // echarts
    import echarts from 'echarts'
    export default {
        name: "labourIndex",
        data() {
            return {
                msg: "员工统计",
                labour_option2: '',
                totalPosition: '',  // 按职位统计员工人数
                commLabours: [],    // 普通员工统计
                buildersLabour: [], // 施工员统计
                safetyLabour: [],   // 安全员统计
                supervisor:[],      // 监理统计
                labour_option1: {
                    barGap:'1%', // 控制柱子的间隔
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['普通员工', '施工员','安全员','监理']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis:  [
                        {
                            type: 'category',
                            data: ['普工','焊工','叉车工','电工','龙门吊操作员']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '普通员工',
                            type: 'bar',
                            barWidth: 48,
                            stack: '统计',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [12, 12, 12, 12, 12+3]
                        },
                        {
                            name: '施工员',
                            type: 'bar',
                            barWidth: 48,
                            stack: '统计',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [12, 13, 11, 14, "5"]
                        },
                        {
                            name: '安全员',
                            type: 'bar',
                            barWidth: 48,
                            stack: '统计',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [20, 18, 19, 23, 29]
                        },
                        {
                            name: '监理',
                            type: 'bar',
                            barWidth: 48,
                            stack: '统计',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [15, 21, 21, 15, 19]
                        }
                    ]
                }
            }
        },
        // 方法
        methods: {
            // 异步获取数据
            getLabourDatas() {
                this.$axios.get("http://localhost:10001/screen/api/screen/screenAllTasksInfo/workersOfPosi")
                    .then(res => {
                        this.totalPosition = res.data.data;
                        // console.log(this.totalPosition);
                        let labour_option = {
                            // barGap:'1%', // 控制柱子的间隔
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            legend: {
                                data: ['普通员工', '施工员','安全员','监理']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis:  [
                                {
                                    type: 'category',
                                    data: ['普工','焊工','叉车工','电工','龙门吊操作员']
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'
                                }
                            ],
                            series: [
                                {
                                    name: '普通员工',
                                    type: 'bar',
                                    barWidth: 80,           // 控制柱子的宽度,只设置其中一个,当该对象值为空时,其他的柱状会恢复原来的宽度
                                    stack: '统计',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'insideTop'
                                        }
                                    },
                                    data: this.totalPosition[0]
                                },
                                {
                                    name: '施工员',
                                    type: 'bar',
                                    stack: '统计',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'insideTop'
                                        }
                                    },
                                    data: this.totalPosition[1]
                                },
                                {
                                    name: '安全员',
                                    type: 'bar',
                                    stack: '统计',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'insideTop'
                                        }
                                    },
                                    data: this.totalPosition[2]
                                },
                                {
                                    name: '监理',
                                    type: 'bar',
                                    stack: '统计',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'insideTop'
                                        }
                                    },
                                    data: this.totalPosition[3]
                                }
                            ]
                        };
                        let myChart = echarts.init(document.getElementById('labour'));
                        myChart.setOption(labour_option, false, false);
                    })
                    .catch(error => {
                        console.log("获取数据失败，原因: " + error);
                    });
            }
        },
        // 生命周期函数
        mounted() {
            // this.getLabourDatas();
            let myChart = echarts.init(document.getElementById('labour'));
            myChart.setOption(this.labour_option1);
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
