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
  methods:{
    drawPie:function(id){
      this.myChart = echarts.init(document.getElementById(id))
      this.option = {
          title : {
              text: '近七日下载量',
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
              data:['知乎','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '30%'],

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
                  data:[
                      {value:335, name:'知乎', selected:true},
                      {value:679, name:'微博'},
                      {value:1548, name:'豆瓣'}
                  ]
              },
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['40%', '55%'],
                  label: {
                      normal: {
                          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                          backgroundColor: '#eee',
                          borderColor: '#aaa',
                          borderWidth: 1,
                          borderRadius: 4,
                          // shadowBlur:3,
                          // shadowOffsetX: 2,
                          // shadowOffsetY: 2,
                          // shadowColor: '#999',
                          // padding: [0, 7],
                          rich: {
                              a: {
                                  color: '#999',
                                  lineHeight: 22,
                                  align: 'center'
                              },
                              // abg: {
                              //     backgroundColor: '#333',
                              //     width: '100%',
                              //     align: 'right',
                              //     height: 22,
                              //     borderRadius: [4, 4, 0, 0]
                              // },
                              hr: {
                                  borderColor: '#aaa',
                                  width: '100%',
                                  borderWidth: 0.5,
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
                  data:[
                      {value:335, name:'知乎'},
                      {value:310, name:'微博'},
                      {value:234, name:'微博'},
                      {value:135, name:'微博'},
                      {value:1048, name:'百度'},
                      {value:251, name:'谷歌'},
                      {value:147, name:'必应'},
                      {value:102, name:'其他'}
                  ]
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
