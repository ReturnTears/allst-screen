<template>
    <div class="daily">
        <h3>{{msg}}</h3>
        <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="seqNum" label="序号" width="54">
                <template slot-scope="scope">
                    <span>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bridgeName" label="桥名" width="279"></el-table-column>
            <el-table-column prop="beamNumber" label="梁片名称" width="279"></el-table-column>
            <el-table-column prop="holeNumber" label="第几孔" width="100"></el-table-column>
            <el-table-column prop="bridgeBeamNumber" label="第几片" width="100"></el-table-column>
            <el-table-column prop="status" :formatter="numTransfer" label="状态" width="100"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "dailyIndex",
        data() {
            return {
                msg: "当日生产数据",
                dataSets: [],       // 生产用
                tableData: [        // 测试用
                    {
                        seqNum: '1',
                        bridgeName: 'K200.500～K350.800+桥名-02',
                        beamNumber: '5-696-24-91-中梁',
                        holeNumber: '25',
                        bridgeBeamNumber: '92',
                        status: '待生产'
                    },
                    {
                        seqNum: '2',
                        bridgeName: 'K200.500～K350.800+桥名-05',
                        beamNumber: '5-696-24-91-中梁',
                        holeNumber: '28',
                        bridgeBeamNumber: '95',
                        status: '生产中'
                    },
                    {
                        seqNum: '3',
                        bridgeName: 'K200.500～K350.800+桥名-22',
                        beamNumber: '5-696-24-91-中梁',
                        holeNumber: '45',
                        bridgeBeamNumber: '112',
                        status: '已完成'
                    }
                ]
            }
        },
        // 方法
        methods: {
            // 数字转换方法
            numTransfer(val) {
                // 梁片生产计划状态(1.待领取 2.已领取 3.待生产 4.生产中 5.已完成)
                let status = val.status;
                if (status === '1') {
                    return "待领取";
                } else if (status === '2') {
                    return "已领取";
                } else if (status === '3') {
                    return "待生产";
                } else if (status === '4') {
                    return "生产中";
                } else {
                    return "已完成";
                }
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            // 异步加载数据
            getDailyDatas() {
                this.$axios.get("http://localhost:10001/screen/api/screen/screenBeamProductionInfo/listPage", {
                    params: {
                        stats: 1,
                        pageNum: '1',
                        pageSize: '10',
                        cretTime: '2019-04-09'
                    }
                })
                .then(res => {
                    this.dataSets = res.data.data;
                })
                .catch(error => {
                    console.log("获取数据失败, 原因:" + error)
                })
            }
        },
        // 生命周期函数
        mounted() {
            // this.getDailyDatas();
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
