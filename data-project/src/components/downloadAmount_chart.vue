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
                        console.log(instance);
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
            category:["2017-11-2", "2017-11-3", "2017-11-4", "2017-11-5", "2017-11-6", "2017-11-7", "2017-11-8", "2017-11-9", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21"],
            dottedBase:1511231340206,
            lineData:[235.59034200383263, 345.7848878311589, 301.86529490920351, 217.08871028925958, 178.32669852860411, 233.87594412671245, 230.10389735106668, 376.1255737168191, 380.9695579197111, 392.39143847431197, 396.0215788220616, 345.36442109387298, 363.19945770489153, 357.78295661317236, 344.39300526522604, 335.35929609098412, 316.45766883752384, 390.1558884558292, 387.02664076633303, 391.71497549438516],
            barData:[101.83012734537962, 201.53825252526971, 204.47073769074697, 110.51162506162747, 120.745269917398439, 350.00061626732007, 109.73324080435174, 289.6188222841112, 376.44650618279712, 366.62167672724283, 319.57450447772864, 316.696338853527237, 388.9558282479843, 288.75865937825296, 393.39638243885884, 319.10586780328858, 225.29240430332918, 339.7349983550872, 385.9016724254795, 383.21668134054892],
            color:['#a6c84c', '#ffa022', '#46bee9'],
            series:[],
        }
    },
    methods:{
        darwEch:function(id){
            this.chart = echarts.init(document.getElementById(id))
            this.chart.setOption({
                backgroundColor: '#0f375f',
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
                    data: this.category,
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
                        data: this.lineData
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
                        data: this.barData
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
                        data: this.lineData
                    },
                    {
                        name: 'dotted',
                        type: 'pictorialBar',
                        symbol: 'rect',
                        itemStyle: {
                            normal: {
                                color: '#0f375f'
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: [12, 4],
                        symbolMargin: 1,
                        z: -10,
                        data: this.lineData
                    }
                ]
            });
        },
        moke:function(){
            var that=this;
            setInterval(function(){
                that.lineData.forEach(function(i,item,arr){
                    arr[item]=i+(Math.random()*100-50);
                });
                that.barData.forEach(function(i,item,arr){
                    arr[item]=i+(Math.random()*(50-5+1));
                });
                console.log(Math.random()*100-50);
                that.darwEch("start");
            },3000);
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
       
    }
}
</script>

<style scoped>
/* 图表 */
.tabel{
    width: 100%;
    height: 290px;
    border: 1px solid #495060;
    margin-top: 15px; 
}
.tabel:nth-child(2){
    height: 380px;
}
.tabel p{
    text-align: center;
    height: 25px;
    line-height: 25px;
   border: 1px solid #495060;
}
.tabel>div{
    width: 100%;
    height: 263px;
    padding: 5px 10px;
   
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
