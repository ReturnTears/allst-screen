<template>
    <div class="material">
        <h3>{{msg}}</h3>
        <div style="width:50%; height:300px; border:1px rgb(180,180,180)" id="material"></div>
    </div>
</template>

<script>
    // echarts
    import echarts from 'echarts'
    export default {
        name: "materialIndex",
        data() {
            return {
                msg: "原材料数据统计",
                listMaterial: [],
                listUsed: [],
                colMaterial: ['product', '总量', '已使用', '库存'],
                material_option: {          // 测试用
                    legend: {},
                    tooltip: {},
                    dataset: {
                        dimensions: this.colMaterial,
                        source: [
                            {product: '钢筋(/吨)', '总量': '40', '已使用': '10', '库存': '30'},
                            {product: '砼(/立方)', '总量': '50', '已使用': '30', '库存': '20'},
                            {product: '其他', '总量': '40', '已使用': '15', '库存': '25'}
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    series: [
                        {type: 'bar'},
                        {type: 'bar'},
                        {type: 'bar'}
                    ]
                }
            }
        },
        methods: {
            // 将大数组等量拆分 未使用
            split_array(arr, len) {
                let arr_length = arr.length;
                let newArr = [];
                for (let i = 0; i < arr_length; i += len) {
                    newArr.push(arr.slice(i, i + len));
                }
                return newArr;
            },
            // 获取已使用材料
            getUsedDatas() {
                this.$axios.get("http://localhost:10001/screen/api/screen/screenAllTasksInfo/materialOfUsed")
                    .then(res => {
                        this.listUsed = res.data.data;
                        console.log(this.listUsed);
                        return this.listUsed;
                    })
                    .catch(error => {console.log("获取数据失败, 原因:" + error)})
            },
            // 异步获取数据(先获取库存、再获取已使用)
            getMaterialDatas() {
                this.$axios.get("http://localhost:10001/screen/api/screen/screenAllTasksInfo/materialOfType")
                    .then(res => {
                        this.listMaterial = res.data.data;
                        const col1Data = this.listMaterial[0];
                        const col2Data = this.listMaterial[1];
                        const col3Data = this.listMaterial[2];
                        let material_option = {
                            legend: {},
                            tooltip: {},
                            dataset: {
                                dimensions: this.colMaterial,
                                    source: [
                                    {product: '钢筋(/吨)', '总量': col1Data.nums + this.listUsed[0].nums, '已使用': this.listUsed[0].nums, '库存': col1Data.nums},
                                    {product: '砼(/立方)', '总量': col2Data.nums + this.listUsed[0].nums, '已使用': this.listUsed[0].nums, '库存': col2Data.nums},
                                    {product: '其他', '总量': col3Data.nums + this.listUsed[0].nums, '已使用': this.listUsed[0].nums, '库存': col3Data.nums}
                                ]
                            },
                            xAxis: {type: 'category'},
                            yAxis: {},
                            series: [
                                {type: 'bar'},
                                {type: 'bar'},
                                {type: 'bar'}
                            ]
                        };
                        // 初始化echarts实例
                        let myChart = echarts.init(document.getElementById('material'));
                        myChart.setOption(material_option, false, false);
                    })
                    .catch(error => {
                        console.log("获取数据失败, 原因:" + error)
                    })
            }
        },
        // 生命周期函数
        mounted() {
            // this.getUsedDatas();
            // this.getMaterialDatas();

            // 测试用
            // 初始化echarts实例
            let myChart = echarts.init(document.getElementById('material'));
            myChart.setOption(this.material_option, false, false);
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>
