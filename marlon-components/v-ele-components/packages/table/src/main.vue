<!--
 * @Author: Marlon
 * @Date: 2020-11-22 21:47:18
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 21:52:13
 * @Description: 
-->
<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
  </div>
</template>

<script>
export default {
  name: 'EleTable',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
      propData: {
          type: String,
          default: '我是默认值'
      }
  }
}
</script>

<style lang="scss">
.container{
    text-align: center;
}
</style>