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
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
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

<style scoped>
.t-title{
    width: 100%;
    height: 165px;
    color: rgba(255,255,255,.7);
    border: 1px solid #80848f;
}
.datas{
    width: 100%;
}
.data-title{
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.data-title:nth-child(1){
    font-weight: bolder;
    margin-top: 5px;
}
.data-title>li{
    float: left;
    width: 180px;
    height: 40px;
    text-align: center;
    margin: 0 10px;
   border: 1px solid #80848f;  
    border-radius: 1px;
}
.data-title:nth-child(2){
    height: 65px;
    line-height: 65px;
    margin: 5px 0;
}
.data-title:nth-child(2)>li{
    height: 65px;
    box-sizing: border-box;
}
.data-title:nth-child(3)>li{
    box-sizing: border-box;
    border: 1px solid #80848f; 
    border-radius: 6px;
    cursor: pointer;
}
.chart{
    width: 100%;
    min-height: 500px;
    margin-top: 15px;
    
    color: rgba(255,255,255,.7);
}
</style>
