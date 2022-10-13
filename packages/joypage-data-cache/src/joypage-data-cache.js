import { ___dataCache___, storageSave, clear, getPrototypes, getKey, getDataCacheTarget } from "./utils.js";

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["lodash"], factory);
  } else if (typeof exports === "object") {
    // Node, CommonJS-like
    module.exports = factory(require("lodash"));
  } else {
    // Browser globals (root is window)
    root.vueDataCache = factory(root._);
  }
})(this, function (_) {
  const mixin = {
    // 在data初始化之前，将持久化的数据还原
    beforeCreate() {
      const _this = this;
      const vmOptionsData = this.$options.data;
      if (typeof vmOptionsData !== "function" || this.$options.dataCache === undefined) return;
      // 查看是否有缓存
      const cacheData = ___dataCache___[getKey(_this.$route.path, _this.$options.dataCacheKey)];
      this.$options.data = function () {
        let data = vmOptionsData.apply(this, arguments);
        // 合并缓存数据
        cacheData && (data = _.defaultsDeep(cacheData, data));
        return data;
      };
    },

    // 注册触发持久化目标的监听
    created() {
      if (!this.$route) return;

      // 支持实例与混入的混合使用
      const dataCacheOptions = getPrototypes(this.$options)
        .filter((x) => x.dataCache)
        .map((x) => x.dataCache);
      if (dataCacheOptions.length === 0) return;

      // 收集持久化配置
      let { target, exclude } = getDataCacheTarget(this, dataCacheOptions);

      let currDataCache = {};
      const cacheKey = getKey(this.$route.path, this.$options.dataCacheKey);
      const temp = _(target).difference(exclude).uniq().compact().value(); // 排除完全一致的属性

      // watch所有属性进行保存
      temp.forEach((key) => {
        _.set(currDataCache, key, _.get(this, key));
        this.$watch(
          key,
          (val) => {
            _.set(currDataCache, key, val);
            ___dataCache___[cacheKey] = _.omit(currDataCache, exclude); // 排除被包含的属性
            storageSave(___dataCache___);
          },
          { deep: true }
        );
      });
      ___dataCache___[cacheKey] = _.omit(currDataCache, exclude); // 排除被包含的属性
      storageSave(___dataCache___);
    }
  };

  function install(Vue) {
    Vue.mixin(mixin);
  }

  return { mixin, clear, install };
});
