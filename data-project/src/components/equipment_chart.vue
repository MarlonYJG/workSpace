<template>
  <div id="chart">
    <p>设备分布图</p>
    <div id="equip" class="equip">

    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js';
export default {
    data() {
      return {
        myChart:null,
        option:{},
        series:[{
          coordinateSystem:"geo",
          data:[
            {name: "上海", value: [121.4648, 31.2891, 100]},
            {name: "广州", value: [113.5107, 23.2196, 70]},
            {name: "哈尔滨", value: [127.9688, 45.368, 30]},
            {name: "青岛", value: [120.4651, 36.3373, 50]},
            {name: "南昌", value: [116.0046, 28.6633, 20]},
            {name: "银川", value: [106.3586, 38.1775, 10]},
            {name: "拉萨", value: [91.1865, 30.1465, 80]},
            {name: "西安", value: [109.1162, 34.2004, 55]},
            {name: "乌鲁木齐", value: [87.9236, 43.5883, 90]}
          ],
          itemStyle:{
            normal:{
              color:"#f00",
              show:false
            }
          },
          label:{
            emphasis:{
              show:true
            },
            normal:{
              formatter:"{b}",
              offset:[5,0],
              position:"right",
              show:true
            }
          },
          rippleEffect:{
            brushType:"stroke",
            period:4,
            scale:4
          },
          symbol:"circle",
          type:"effectScatter",
          zlevel:2
        }],
        
      }
    },
    methods: {
      drawPie (id) {
        this.myChart = echarts.init(document.getElementById(id))
        this.option = {
          backgroundColor: '#404a59',
          visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            textStyle: {
                color: '#fff'
            }
          },
          geo: {
              map: 'china',
              // center: [104.114129, 37.550339],
              // zoom: ,
              label: {
                  emphasis: {
                      show: false
                  }
              },
              roam: true,
              layoutCenter: ['50%', '53%'],
              layoutSize: "108%",
              itemStyle: {
                  normal: {
                      color: 'rgba(51, 69, 89, .5)',
                      borderColor: 'rgba(100,149,237,1)'
                  },
                  emphasis: {
                      color: 'rgba(37, 43, 61, .5)'
                  }
              }
          },
          series:this.series
        }
        this.myChart.setOption(this.option);
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawPie('equip');
      })
    }
}
</script>

<style scoped>
p{
  height: 30px;
  padding: 6px;
  text-align: center;
}
.equip{
  height: 675px;
}
</style>
