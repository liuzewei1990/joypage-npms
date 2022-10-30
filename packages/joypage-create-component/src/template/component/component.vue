<template>
  <section>
    <module-a></module-a>
  </section>
</template>

<script>
  import { service, api } from "@work/base";
  import ModuleA from "./modules/ModuleA.vue";

  export default {
    name: "@CONST_COMPONENT_NAME@",
    components: { ModuleA },
    /**
     * ons: 需要暴露的事件列表
     * 其他组件可以通过 this.work.emit("模块名", { type: "action", data:xxx }); 与该组件进行通讯
     */
    ons: ["action"],
    inject: ["work"],
    computed: {},
    watch: {},
    data() {
      return {};
    },
    created() {},
    activated() {},
    methods: {}
  };
</script>

<style lang="less" scoped></style>
