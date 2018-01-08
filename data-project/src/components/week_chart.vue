<template>
  <div class="equip">
    <p>近七日下载量</p>
    <div id="week-chart" class="equip">

    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data(){
    return {
      option:{},
      myChart:''
    }
  },
  computed: {
    picObj(){
        return this.$store.getters.getPicObj;
    }  
  },
  methods:{
    drawPie:function(id){
      this.myChart = echarts.init(document.getElementById(id))
      this.option = {
          title : {
              text: '',
              subtext: '纯属虚构',
              x:'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'right',
              data:this.picObj.legendTitle
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '33%'],
                  label: {
                      normal: {
                          position: 'inner'
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:this.picObj.dataIn
              },
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['40%', '55%'],
                  label: {
                      normal: {
                          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                          backgroundColor: '#1c2438',
                          borderColor: '#80848f',
                          borderWidth: 1,
                          borderRadius: 4,
                          shadowBlur:3,
                          shadowOffsetX: 2,
                          shadowOffsetY: 2,
                        //   shadowColor: '#999',
                          padding: [0, 7],
                          rich: {
                              a: {
                                  color: '#999',
                                  lineHeight: 22,
                                  align: 'center'
                              },
                              abg: {
                                  backgroundColor: '#1c2438',
                                  width: '100%',
                                  align: 'right',
                                  height: 22,
                                  borderRadius: [4, 4, 0, 0]
                              },
                              hr: {
                                  borderColor: '#aaa',
                                  width: '100%',
                                  borderWidth: 0.1,
                                  height: 0
                              },
                              b: {
                                  fontSize: 16,
                                  lineHeight: 33
                              },
                              per: {
                                  color: '#eee',
                                  backgroundColor: '#334455',
                                  padding: [2, 4],
                                  borderRadius: 2
                              }
                          }
                      }
                  },
                  data:this.picObj.dataOut
              }
          ]
      };
      this.myChart.setOption(this.option);
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.drawPie('week-chart');
    })
    // console.log(this.picObj);
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
