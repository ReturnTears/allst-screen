<template>
    <div class="screenNav">
        <h1>{{msg}}</h1>
        <div class="task-div">
            <router-link to="/task">
                <span class="title">任务(总任务/当月)</span>
            </router-link>
            <div>
                <all-task />
            </div>
            <div>
                <mon-task />
            </div>
        </div>
        <div>
            <router-link to="/labour">
                <span class="title">员工统计</span>
            </router-link>
        </div>
        <div>
            <router-link to="/daily">
                <span class="title">当日生产任务</span>
            </router-link>
        </div>
        <div>
            <router-link to="/realtime">
                <span class="title">实时信息</span>
            </router-link>
        </div>
        <div>
            <router-link to="/bim">
                <span class="title">BIM</span>
            </router-link>
        </div>
        <div>
            <router-link to="/video">
                <span class="title">视频监控</span>
            </router-link>
        </div>
        <div>
            <router-link to="/material">
                <span class="title">原材料统计</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import TasksIndex from "@/containers/tasktotal/tasksIndex";
    import AllTask from "@/containers/tasktotal/all/allTask";
    import MonTask from "@/containers/tasktotal/mon/monTask";
    export default {
        name: "ScreenNav",
        components: {MonTask, AllTask, TasksIndex},
        data() {
            return {
                msg: "大屏布局页面"
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .task-div {
        width: 100%;
        overflow-x: auto;
    }
    .task-div {
        height: 600px;
        white-space: nowrap;
        font-size: 0;
    }
</style>
