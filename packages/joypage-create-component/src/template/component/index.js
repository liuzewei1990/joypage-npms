import * as Vue from "vue";
const _@CONST_COMPONENT_NAME@ = Vue.defineAsyncComponent(() => import(/* webpackChunkName: "async" */ /* webpackPrefetch:true */ "./component.vue"));

const @CONST_COMPONENT_NAME@ = Object.assign(_@CONST_COMPONENT_NAME@, {
    install: (app) => {
        app.component(_@CONST_COMPONENT_NAME@.name, _@CONST_COMPONENT_NAME@);
    }
});

export default @CONST_COMPONENT_NAME@;
