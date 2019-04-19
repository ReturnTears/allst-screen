import Vue from 'vue'
import Router from 'vue-router'
import ScreenNav from '@/components/ScreenNav'
// container
import NotFound from '@/containers/notFound/notFoundIndex'
import Bim from '@/containers/bim/bimIndex'
import DailyProdTask from '@/containers/dailyprodtask/dailyIndex'
import LabourTotal from '@/containers/labourtotal/labourIndex'
import MaterialTotal from '@/containers/materialtotal/materialIndex'
import RealTime from '@/containers/realtime/realtimeIndex'
import TaskTotal from '@/containers/tasktotal/tasksIndex'
import AllTask from '@/containers/tasktotal/all/allTask'
import MonTask from '@/containers/tasktotal/mon/monTask'
import VideoPage from '@/containers/video/videoIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/nav',
      name: 'ScreenNav',
      component: ScreenNav
    },
    {
      path: '/bim',
      name: 'Bim',
      component: Bim
    },
    {
      path: '/daily',
      name: 'DailyProdTask',
      component: DailyProdTask
    },
    {
      path: '/labour',
      name: 'LabourTotal',
      component: LabourTotal
    },
    {
      path: '/material',
      name: 'MaterialTotal',
      component: MaterialTotal
    },
    {
      path: '/realtime',
      name: 'RealTime',
      component: RealTime
    },
    {
      path: '/task',
      name: 'TaskTotal',
      redirect: '/task/all',
      component: TaskTotal,
      children: [
        {
          path: "all",
          component: AllTask
        },
        {
          path: "mon",
          component: MonTask
        }
      ]
    },
    {
      path: '/video',
      name: 'VideoPage',
      component: VideoPage
    }
  ]
})
