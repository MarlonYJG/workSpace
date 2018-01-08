<template>
  <div>
    <p>单设备日均使用时长</p>
    <div id="day-chart" class="equip">

    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data(){
    return {
      myChart:'',
      option : {
          title: {
              "x": '50%',
              "y": '40%',
              textAlign: "center",
              "textStyle": {
                  "fontWeight": 'bold',
                  "fontSize": 32,
                  "color": '#13C766'
              },
              subtext:'使用时长',
              "subtextStyle": {
                  "fontWeight": 'normal',
                  "fontSize": 17,
                  "color": '#00A8F7'
              },
              text:''
            //   left:130,
            //   itemGap:20
          },
          series: [
              {
                  "name": ' ',
                  "type": 'pie',
                  "radius": ['57%', '86%'],
                  "avoidLabelOverlap": false,
                  "startAngle": 225,
                  "itemStyle":{
                      "normal":{
                          "borderColor":"transparent",
                          "borderWidth":"20"
                      },
                      "emphasis":{
                          "borderColor":"transparent",
                          "borderWidth":"20"
                      }
                  },
                  "hoverAnimation": false,
                  "legendHoverLink": false,
                  "label": {
                      "normal": {
                          "show": false,
                          "position": 'center'
                      },
                      "emphasis": {
                          "show": true,
                          "textStyle": {
                              "fontSize": '30',
                              "fontWeight": 'bold'
                          }
                      }
                  },
                  "labelLine": {
                      "normal": {
                          "show": false
                      }
                  },
                  "data": [{
                      "value": 75,
                      "name": '',
                      "itemStyle": {
                          normal: {
                              color: 'rgba(0,173,254,1)'
                          }
                      }
                  }, {
                      "value": 25,
                      "name": '2',
                      "itemStyle": {
                          normal: {
                              color: "transparent"
                          }
                      }
                  }]
              },
              {
                  "name": '',
                  "type": 'pie',
                  "radius": ['58%', '85%'],
                  "avoidLabelOverlap": false,
                  "startAngle": 314.5,
                  "color": ["#073757","#27deee","transparent"],
                  "hoverAnimation": false,
                  "legendHoverLink": false,
                  "clockwise": false,
                  "itemStyle":{
                      "normal":{
                          "borderColor":"transparent",
                          "borderWidth":"20"
                      },
                      "emphasis":{
                          "borderColor":"transparent",
                          "borderWidth":"20"
                      }
                  }
                  ,
                  "z":10,
                  "label": {
                      "normal": {
                          "show": false,
                          "position": 'center'
                      },
                      "emphasis": {
                          "show": true,
                          "textStyle": {
                              "fontSize": '30',
                              "fontWeight": 'bold'
                          }
                      }
                  },
                  "labelLine": {
                      "normal": {
                          "show": false
                      }
                  },
                  "data": [
                      {
                          name:'',
                          itemStyle:{
                              normal:{
                                  color:'transparent'
                              }
                          }
                      },
                      {
                          //"value": (100 - 70) * 266 / 360,
                          "name": '',
                          "itemStyle": {
                              normal: {
                                  color: '#063250'
                              }
                          }

                      },
                      {
                          //"value": 100 - (100 - 70) * 266 / 360,
                          "name": '',
                          "itemStyle": {
                              normal: {
                                  color: '#27deee'
                              }
                          }
                      },
                      {
                          //
                          name:'',
                          "itemStyle": {
                              normal: {
                                  color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                      offset: 0,
                                      color: 'rgba(0,173,254,1)'
                                  }, {
                                      offset: 1,
                                      color: '#063c5e'
                                  }])
                              }
                          }
                      },
                      {
                          //
                          name:'',
                          value:25,
                          "itemStyle": {
                              normal: {
                                  color: 'transparent'
                              }
                          }
                      }
                  ]
              }
          ]
      }
    }
  },
  watch: {
      
  },
  computed: {
      dayTime(){
        return this.$store.getters.getDataTime;
      }
  },
  methods:{
    drawPie:function(id){
      this.myChart = echarts.init(document.getElementById(id));
      this.option.title.textStyle.color='#13C766';
      this.option.title.subtext='日均使用时长';
      //随机数
          this.a();
           
    },
    a:function(){
            var value_ = (100 - (this.dayTime)) * 266 / 360;
          this.option.title.text = (this.dayTime) +"%";

          this.option.series[1].data[0].value=0.3;
          this.option.series[1].data[1].value = value_;
          this.option.series[1].data[2].value = 0.2;
          this.option.series[1].data[3].value = (75 - value_-1);

          this.myChart.setOption(this.option,true);
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.drawPie('day-chart');
    })

    this.$store.dispatch('getPostTime');//获取数据

    setInterval(()=>{
        // console.log(this.dayTime)
        this.a()
    },1000)
   

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
