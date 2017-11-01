<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">注册登录</a> |
                <a href="#">帮助中心</a> |
                <a href="#">安全中心</a> |
                <a href="#">服务大厅</a>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo"></div>
        </div>


        <div style="min-height: 940px;border:1px solid #495060;">
          <div class="left-nav">
            <ul class="nav">
              <router-link v-for="(item,index) in products" :key="index" tag="li" :to="{path:item.path}">{{item.pName}}</router-link>
            </ul>
          </div>
          <div class="right-nav">
             <div class="change-title">
               <div class="changes">
                 <div class="title">产品名称</div>
                 <ul>
                   
                 </ul>
               </div>
               <div class="changes">
                 <div class="title">产品型号</div>
                 <ul>
                   
                 </ul>
               </div>
             </div>
             <!-- 路由切换页面 -->
             <keep-alive>
               <router-view></router-view>
             </keep-alive>
             
          </div>
        </div>

        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
      return {
        products:[
          {
            pName:'应用概述',
            path:'page_1'
          },
          {
            pName:'用户趋势',
            path:'page_2'
          },
          {
            pName:'渠道分析',
            path:'page_3'
          },
          {
            pName:'留存分析',
            path:'page_4'
          },
          {
            pName:'用户质量评估',
            path:'page_5'
          },
          {
            pName:'数据探索',
            path:'page_6'
          }
        ]
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-x: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
}
.layout-ceiling-main{
    float: right;
    margin-right: 15px;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
/* 主体样式 */
.left-nav{
  box-sizing: border-box;
  float: left;
  width: 25%;
  min-height: 799px;
  border: 1px solid #495060;
  margin-right: 5px;
}
.right-nav{
  float: left;
  width: 74.6%;
}
.Submenu{
  height: 34px;
}
/* 左侧导航 */
.nav{

}
.nav>li{
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-bottom: 1px solid #495060;
  margin: 0;
}
/* 右侧选择 */
.change-title{
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding-left: 15px;
  border: 1px solid #495060;
  margin-top: 5px;
}
.changes{
  box-sizing: border-box;
  float: left;
  width: 200px;
  height: 45px;
}
.title{
  box-sizing: border-box;
  height: 23px;
  line-height: 23px;
  margin: 10px;
  padding-left: 10px;
  border-radius: 8px;
  border: 1px solid #495060;
}
/* 路由切换展示页面 */
.router-pages{
  box-sizing: border-box;
  width: 100%;
  min-height: 500px;
  margin-top: 15px;
  border: 1px solid #495060; 
}
</style>
