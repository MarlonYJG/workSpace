<!--
 * @Author: Marlon
 * @Date: 2020-11-20 14:27:54
 * @LastEditors: Marlon
 * @LastEditTime: 2020-11-22 22:45:34
 * @Description: 
-->
<template>
  <div>
    <Main :propData='initData'/>
  </div>
</template>

<script>
import Main from '../packages/line/src/main'
export default {
    data(){
      return {
        initData: 'hello 你好'
      }
    },
    components:{
      Main
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
