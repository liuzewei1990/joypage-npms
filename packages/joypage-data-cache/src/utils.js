export const ___dataCacheKey___ = "___dataCache___";
export const ___dataCache___ = dataCacheInit();

/**
 * 获取对象的所有的原型链对象
 * @param {Object} obj 目标
 * @returns 原型链数组
 */
export const getPrototypes = function getPrototypes(obj) {
  const res = [obj];
  while (res[res.length - 1].__proto__) {
    res.push(res[res.length - 1].__proto__);
  }
  return res;
};

/**
 * 获取缓存用的key，添加key配置支持
 */
export const getKey = function getKey(path, key) {
  if (_.isNil(key)) {
    return path;
  }
  return `${path}____${key}`;
};

/**
 * 初始化持久化对象的方法
 */
export const dataCacheInit = function dataCacheInit() {
  const cache = sessionStorage.getItem(___dataCacheKey___);
  return cache ? JSON.parse(cache) : {};
};

/**
 * 清空指定地址的持久化数据
 * 不传参时，清空全部
 * @param {String} path 路由地址
 */
export const clear = function clear(path) {
  if (path) {
    delete ___dataCache___[path];
    // 清除当前画面使用了dataCacheKey的组件的缓存
    const key = getKey(path, "");
    Object.keys(___dataCache___).forEach((x) => {
      if (x.startsWith(key)) {
        delete ___dataCache___[x];
      }
    });
    sessionStorage.setItem(___dataCacheKey___, JSON.stringify(___dataCache___));
  } else {
    sessionStorage.removeItem(___dataCacheKey___);
    ___dataCache___ = dataCacheInit();
  }
};

export const getDataCacheTarget = function (vm, dataCacheOptions = []) {
  const target = [];
  const exclude = [];

  const map = (value) => {
    if (typeof value == "boolean" && value) {
      target.push(...Object.keys(vm.$data));
    } else if (value instanceof Array) {
      target.push(...value);
    } else if (typeof value == "object" && value.enabled != false) {
      target.push(...(value.target ? value.target : Object.keys(vm.$data)));
      value.exclude && exclude.push(...value.exclude);
    }
  };
  dataCacheOptions.forEach(map);

  return { target, exclude };
};

export const storageSave = function (___dataCache___) {
  sessionStorage.setItem(___dataCacheKey___, JSON.stringify(___dataCache___));
};
