<template>
  <div>
    <div class="tabel">
        <p>启用次数</p>
        <div id="start">

        </div>
    </div>

    <div class="tabel">
      <p>设备分布</p>
      <div id="distribution">
          <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom" :mapStyle="dark" :plugin="plugin" :events="events"></el-amap>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
    data(){
        return {
            zoom: 5,
            center: [121.59996, 31.197646],
            dark:'fresh',
            plugin: [{//比例尺组件
                pName: 'ToolBar',
                events: {
                    init(instance) {
                        // console.log(instance);
                    }
                }
            }],
            events:{//marker组件
                init(map) {
                    AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                        const marker = new SimpleMarker({//创建SimpleMarker实例
                        iconLabel: 'A',//前景文字
                        iconTheme: 'default',//图标主题
                        iconStyle: 'lightgray',//背景图标样式
                        map: map,
                        position: map.getCenter()
                        });
                    });
                }
            },
            chart: null,
        }
    },
    computed: {//关联vuex中的数据（动态）
        chartsObj(){
            return this.$store.getters.getChartsObj;
        }
    },
    methods:{
        darwEch:function(id){
            this.chart = echarts.init(document.getElementById(id))
            this.chart.setOption({
                backgroundColor: '#404A59',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            backgroundColor: '#333'
                        }
                    }
                },
                xAxis: {
                    data: this.chartsObj.category,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                legend: {
                    data: ['平均启用次数', '24小时启用次数'],
                    textStyle: {
                        color: '#ccc'
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                series:[
                    {
                        name: '平均启用次数',
                        type: 'line',
                        smooth: true,
                        showAllSymbol: true,
                        symbol: 'emptyCircle',
                        symbolSize: 5,
                        data: this.chartsObj.lineData
                    },
                    {
                        name: '24小时启用次数',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#14c8d4'},
                                        {offset: 1, color: '#43eec6'}
                                    ]
                                )
                            }
                        },
                        data: this.chartsObj.barData
                    },
                    {
                        name: '预计开启次数',
                        type: 'bar',
                        barGap: '-100%',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                        {offset: 1, color: 'rgba(20,200,212,0)'}
                                    ]
                                )
                            }
                        },
                        z: -12,
                        data: this.chartsObj.lineData
                    },
                    {
                        name: 'dotted',
                        type: 'pictorialBar',
                        symbol: 'rect',
                        itemStyle: {
                            normal: {
                                color: '#404A59'
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: [12, 4],
                        symbolMargin: 1,
                        z: -10,
                        data: this.chartsObj.lineData
                    }
                ]
            });
        },
        moke:function(){
            var that=this;
            setInterval(function(){
                that.chartsObj.lineData.forEach(function(i,item,arr){
                    arr[item]=i+(Math.random()*100-50);
                });
                that.chartsObj.barData.forEach(function(i,item,arr){
                    arr[item]=i+(Math.random()*(50-5+1));
                });
                // console.log(Math.random()*100-50);
                that.darwEch("start");
            },2000);
        }
        
    },
    activated(){
        // this.darwEch("start");
    },
    mounted(){
        this.$nextTick(function() {
            this.darwEch("start");
            // this.moke();
        });
        // console.log(this.chartsObj)
       
    }
}
</script>

<style scoped>
/* 图表 */
.tabel{
    width: 100%;
    height: 290px;
  border: 1px solid #80848f;  
    margin-top: 15px; 
}
.tabel:nth-child(2){
    height: 380px;
}
.tabel p{
    text-align: center;
   border: 1px solid #80848f;
   margin: 5px 10px;
}
.tabel>div{
    width: 100%;
    height: 263px;
    margin: 5px 10px;
}
.tabel:nth-child(2)>div{
    height: 358px;
}
.tabel:nth-child(3){
    height: 400px;
}
.tabel:nth-child(3)>div{
    height: 375px;
}
</style>
