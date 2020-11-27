<!--
 * @Author: Marlon
 * @Date: 2020-11-22 22:45:50
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 23:02:06
 * @Description: 
-->
<template>
  <div class="container">
    <div>图表库</div>
    <div>{{ msg }}</div>
    <div>{{ propData }}</div>
  </div>
</template>

<script>
export default {
  name: "ELine",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  props: {
    propData: {
      type: String,
      default: "我是默认值",
    },
  },
};
</script>

<style lang="scss">
.container {
  text-align: center;
}
</style>