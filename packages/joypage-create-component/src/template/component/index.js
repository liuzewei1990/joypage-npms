const _@CONST_COMPONENT_NAME@ = () => import(/* webpackChunkName: "work.ui" */ /* webpackPrefetch:true */ "./component.vue");

const @CONST_COMPONENT_NAME@ = Object.assign(_@CONST_COMPONENT_NAME@, {
    install: (app) => {
        app.component("@CONST_COMPONENT_NAME@", _@CONST_COMPONENT_NAME@);
    }
});

export default @CONST_COMPONENT_NAME@;
