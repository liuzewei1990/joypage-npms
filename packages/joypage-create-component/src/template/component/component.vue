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
