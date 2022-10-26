module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "vue/multi-word-component-names": 0,
    "vue/valid-v-for": 0,
    "vue/max-attributes-per-line": [
      0,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-alert": 0, //禁止使用alert confirm prompt
    "comma-dangle": [1, "never"], // 是否允许对象中出现结尾逗号
    "no-cond-assign": 1, //条件语句的条件中不允许出现赋值运算符
    "no-constant-condition": 0, //条件语句的条件中不允许出现恒定不变的量
    "no-control-regex": 1, //正则表达式中不允许出现控制字符
    "no-dupe-args": 2, //函数定义的时候不允许出现重复的参数
    "no-dupe-keys": 0, //对象中不允许出现重复的键
    "no-empty": 1, //不允许出现空的代码块
    "no-octal": 0, //不允许使用八进制字面值
    "no-undef": 0, //不允许未声明的变量
    "no-unused-vars": 0,
    "no-useless-escape": 0,
    "no-prototype-builtins": 0,
    "no-useless-catch": 0
  }
};
