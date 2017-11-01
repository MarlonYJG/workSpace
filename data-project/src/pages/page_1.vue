<template>
  <div class="router-pages">
      <div class="t-title">
          <h3>应用概述</h3>
          <div class="datas">
              <ul class="data-title">
                  <li>1,000,000</li>
                  <li>0</li>
                  <li>15000</li>
                  <li>00:00:30</li>
              </ul>
              <ul class="data-title">
                  <li>累计下载量</li>
                  <li>可疑设备</li>
                  <li>近七日下载量</li>
                  <li>单设备日均使用时长</li>
              </ul>
              
          </div>
      </div>

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
import AMap from 'vue-amap';
// let amapManager = new VueAMap.AMapManager();
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
            chart_map:null,
            category:["2017-11-2", "2017-11-3", "2017-11-4", "2017-11-5", "2017-11-6", "2017-11-7", "2017-11-8", "2017-11-9", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21"],
            dottedBase:1511231340206,
            lineData:[235.59034200383263, 345.7848878311589, 301.86529490920351, 217.08871028925958, 178.32669852860411, 233.87594412671245, 230.10389735106668, 376.1255737168191, 380.9695579197111, 392.39143847431197, 396.0215788220616, 345.36442109387298, 363.19945770489153, 357.78295661317236, 344.39300526522604, 335.35929609098412, 316.45766883752384, 390.1558884558292, 387.02664076633303, 391.71497549438516],
            barData:[101.83012734537962, 201.53825252526971, 204.47073769074697, 110.51162506162747, 120.745269917398439, 350.00061626732007, 109.73324080435174, 289.6188222841112, 376.44650618279712, 366.62167672724283, 319.57450447772864, 316.696338853527237, 388.9558282479843, 288.75865937825296, 393.39638243885884, 319.10586780328858, 225.29240430332918, 339.7349983550872, 385.9016724254795, 383.21668134054892],
            geoCoordMap:{
                            '上海': [121.4648, 31.2891],
                            '东莞': [113.8953, 22.901],
                            '东营': [118.7073, 37.5513],
                            '中山': [113.4229, 22.478],
                            '临汾': [111.4783, 36.1615],
                            '临沂': [118.3118, 35.2936],
                            '丹东': [124.541, 40.4242],
                            '丽水': [119.5642, 28.1854],
                            '乌鲁木齐': [87.9236, 43.5883],
                            '佛山': [112.8955, 23.1097],
                            '保定': [115.0488, 39.0948],
                            '兰州': [103.5901, 36.3043],
                            '包头': [110.3467, 41.4899],
                            '北京': [116.4551, 40.2539],
                            '北海': [109.314, 21.6211],
                            '南京': [118.8062, 31.9208],
                            '南宁': [108.479, 23.1152],
                            '南昌': [116.0046, 28.6633],
                            '南通': [121.1023, 32.1625],
                            '厦门': [118.1689, 24.6478],
                            '台州': [121.1353, 28.6688],
                            '合肥': [117.29, 32.0581],
                            '呼和浩特': [111.4124, 40.4901],
                            '咸阳': [108.4131, 34.8706],
                            '哈尔滨': [127.9688, 45.368],
                            '唐山': [118.4766, 39.6826],
                            '嘉兴': [120.9155, 30.6354],
                            '大同': [113.7854, 39.8035],
                            '大连': [122.2229, 39.4409],
                            '天津': [117.4219, 39.4189],
                            '太原': [112.3352, 37.9413],
                            '威海': [121.9482, 37.1393],
                            '宁波': [121.5967, 29.6466],
                            '宝鸡': [107.1826, 34.3433],
                            '宿迁': [118.5535, 33.7775],
                            '常州': [119.4543, 31.5582],
                            '广州': [113.5107, 23.2196],
                            '廊坊': [116.521, 39.0509],
                            '延安': [109.1052, 36.4252],
                            '张家口': [115.1477, 40.8527],
                            '徐州': [117.5208, 34.3268],
                            '德州': [116.6858, 37.2107],
                            '惠州': [114.6204, 23.1647],
                            '成都': [103.9526, 30.7617],
                            '扬州': [119.4653, 32.8162],
                            '承德': [117.5757, 41.4075],
                            '拉萨': [91.1865, 30.1465],
                            '无锡': [120.3442, 31.5527],
                            '日照': [119.2786, 35.5023],
                            '昆明': [102.9199, 25.4663],
                            '杭州': [119.5313, 29.8773],
                            '枣庄': [117.323, 34.8926],
                            '柳州': [109.3799, 24.9774],
                            '株洲': [113.5327, 27.0319],
                            '武汉': [114.3896, 30.6628],
                            '汕头': [117.1692, 23.3405],
                            '江门': [112.6318, 22.1484],
                            '沈阳': [123.1238, 42.1216],
                            '沧州': [116.8286, 38.2104],
                            '河源': [114.917, 23.9722],
                            '泉州': [118.3228, 25.1147],
                            '泰安': [117.0264, 36.0516],
                            '泰州': [120.0586, 32.5525],
                            '济南': [117.1582, 36.8701],
                            '济宁': [116.8286, 35.3375],
                            '海口': [110.3893, 19.8516],
                            '淄博': [118.0371, 36.6064],
                            '淮安': [118.927, 33.4039],
                            '深圳': [114.5435, 22.5439],
                            '清远': [112.9175, 24.3292],
                            '温州': [120.498, 27.8119],
                            '渭南': [109.7864, 35.0299],
                            '湖州': [119.8608, 30.7782],
                            '湘潭': [112.5439, 27.7075],
                            '滨州': [117.8174, 37.4963],
                            '潍坊': [119.0918, 36.524],
                            '烟台': [120.7397, 37.5128],
                            '玉溪': [101.9312, 23.8898],
                            '珠海': [113.7305, 22.1155],
                            '盐城': [120.2234, 33.5577],
                            '盘锦': [121.9482, 41.0449],
                            '石家庄': [114.4995, 38.1006],
                            '福州': [119.4543, 25.9222],
                            '秦皇岛': [119.2126, 40.0232],
                            '绍兴': [120.564, 29.7565],
                            '聊城': [115.9167, 36.4032],
                            '肇庆': [112.1265, 23.5822],
                            '舟山': [122.2559, 30.2234],
                            '苏州': [120.6519, 31.3989],
                            '莱芜': [117.6526, 36.2714],
                            '菏泽': [115.6201, 35.2057],
                            '营口': [122.4316, 40.4297],
                            '葫芦岛': [120.1575, 40.578],
                            '衡水': [115.8838, 37.7161],
                            '衢州': [118.6853, 28.8666],
                            '西宁': [101.4038, 36.8207],
                            '西安': [109.1162, 34.2004],
                            '贵阳': [106.6992, 26.7682],
                            '连云港': [119.1248, 34.552],
                            '邢台': [114.8071, 37.2821],
                            '邯郸': [114.4775, 36.535],
                            '郑州': [113.4668, 34.6234],
                            '鄂尔多斯': [108.9734, 39.2487],
                            '重庆': [107.7539, 30.1904],
                            '金华': [120.0037, 29.1028],
                            '铜川': [109.0393, 35.1947],
                            '银川': [106.3586, 38.1775],
                            '镇江': [119.4763, 31.9702],
                            '长春': [125.8154, 44.2584],
                            '长沙': [113.0823, 28.2568],
                            '长治': [112.8625, 36.4746],
                            '阳泉': [113.4778, 38.0951],
                            '青岛': [120.4651, 36.3373],
                            '韶关': [113.7964, 24.7028]
                        },
            BJData:[
                        [{
                            name: '上海',
                            value: 100
                        }],
                        [{
                            name: '广州',
                            value: 70
                        }],
                        [{
                            name: '哈尔滨',
                            value: 30
                        }],
                        [{
                            name: '青岛',
                            value: 50
                        }],
                        [{
                            name: '南昌',
                            value: 20
                        }],
                        [{
                            name: '银川',
                            value: 10
                        }],
                        [{
                            name: '拉萨',
                            value: 80
                        }],
                        [{
                            name: '西安',
                            value: 55
                        }],
                        [{
                            name: '乌鲁木齐',
                            value: 90
                        }]
                    ],
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
            })
        },
        darwMap:function(id){
            console.log(id)
            // [[this.BJData]].forEach(function(item, i) {
            //     console.log(this)
            //     this.series.push(
            //         {
            //             type: 'effectScatter',
            //             coordinateSystem: 'geo',
            //             zlevel: 2,
            //             rippleEffect: {
            //                 period: 4,
            //                 brushType: 'stroke',
            //                 scale: 4
            //             },
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     position: 'right',
            //                     offset: [5, 0],
            //                     formatter: '{b}'
            //                 },
            //                 emphasis: {
            //                     show: true
            //                 }
            //             },
            //             symbol: 'circle',
            //             symbolSize: function(val) {
            //                 return 4 + val[2] / 10;
            //             },
            //             itemStyle: {
            //                 normal: {
            //                     show: false,
            //                     color: '#f00'
            //                 }
            //             },
            //             data: item[0].map(function(dataItem) {
            //                 return {
            //                     name: dataItem[0].name,
            //                     value: this.geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            //                 };
            //             }),
            //         }
            //     );
            // });
            // this.chart_map = echarts.init(document.getElementById(id))
            // this.chart_map.setOption({
            //     backgroundColor: '#404a59',

            //     visualMap: {
            //         min: 0,
            //         max: 100,
            //         calculable: true,
            //         color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            //         textStyle: {
            //             color: '#fff'
            //         }
            //     },
            //     geo: {
            //         map: 'china',
            //         label: {
            //             emphasis: {
            //                 show: false
            //             }
            //         },
            //         roam: true,
            //         layoutCenter: ['50%', '53%'],
            //         layoutSize: "108%",
            //         itemStyle: {
            //             normal: {
            //                 color: 'rgba(51, 69, 89, .5)',
            //                 borderColor: 'rgba(100,149,237,1)'
            //             },
            //             emphasis: {
            //                 color: 'rgba(37, 43, 61, .5)'
            //             }
            //         }
            //     },
            //     series: this.series
            // })
        }
    },
    mounted(){
        console.log(123123213)
        this.$nextTick(function() {
            this.darwEch("start");
            this.darwMap("distribution");
        })
    }
}
</script>

<style scoped>
.t-title{
    width: 100%;
    height: 104px;
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
/* 图表 */
.tabel{
    width: 100%;
    height: 290px;
    border: 1px solid #495060;
    margin-top: 15px; 
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
.tabel:nth-child(3){
    height: 400px;
}
.tabel:nth-child(3)>div{
    height: 375px;
}
</style>
