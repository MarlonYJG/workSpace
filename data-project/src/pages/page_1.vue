<template>
  <div class="router-pages">
      <div class="t-title">
          <div class="datas">
              <ul class="data-title">
                  <li>1,000,000</li>
                  <li>0</li>
                  <li>15000</li>
                  <li>00:00:30</li>
              </ul>
              <ul class="data-title">
                  <router-link v-for="(item,index) in proList" tag="li" :to="{path:item.path}" :key="index">{{ item.name }}</router-link>
              </ul>
          </div>
      </div>

      <div class="chart">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            proList:[
                {
                    name:'累计下载量',
                    path:'download_chart'
                },
                {
                    name:'可疑设备',
                    path:'equipment_chart'
                },
                {
                    name:'近七日下载量',
                    path:'week_chart'
                },
                {
                    name:'单设备日均使用时长',
                    path:'day_chart'
                }
            ]
        }
    },
    mounted(){
       
    }
}
</script>

<style>
.t-title{
    width: 100%;
    height: 165px;
    border: 1px solid #495060;
}
.datas{
    width: 100%;
    height: 82px;
   border: 1px solid #495060; 
}
.data-title{
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.data-title:nth-child(1){
    font-weight: bolder;
}
.data-title>li{
    float: left;
    width: 200px;
    height: 40px;
    text-align: center;
}
.data-title:nth-child(2)>li{
    box-sizing: border-box;
    border: 1px solid #495060; 
    border-radius: 6px;
}
.chart{
    border: 1px solid red;
    width: 100%;
    min-height: 500px;
    margin-top: 15px;
}
</style>
