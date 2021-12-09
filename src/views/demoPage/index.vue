<template>
  <div>
      {{ msg }}
      <child1
        @changeData="changeData"
        @another="anotherEvent"
        @other="otherEvent"
        ></child1>
    <hr />
    <child-com1
      :foo="foo"
      :boo="boo"
      :coo="coo"
      :doo="doo"
      title="前端工匠"
    ></child-com1>
    <hr />
    <Left></Left>
    <hr />
    <Right></Right>
  </div>
</template>

<script>
import Child1 from "@/containers/demo/listener/child1.vue";
const childCom1 = () => import("@/containers/demo/attr/childCom1.vue");
import Left from "@/containers/demo/eventbus/left.vue";
import Right from "@/containers/demo/eventbus/right.vue";

export default {
    name: 'DemoPage',
    components: {Child1,childCom1,Left,Right},
    data() {
        return {
            msg: "DemoPage",
            firstMsg: "祖组件",
            foo: "Javascript",
            boo: "Html",
            coo: "CSS",
            doo: "Vue"
        }
    },
    methods: {
        changeData(params) {
            this.firstMsg = params;
            console.log(this.firstMsg)
        },
        anotherEvent() {
            console.log("another");
        },
        otherEvent() {
            console.log("other");
        }
    }
}
</script>

<style>

</style>