<template>
  <div class="quality">
      <div class="quality-table" id="quality">

     </div>
     <div class="quality-list">
       <p>数据详情</p>
       <div id="quality-list">
         
       </div>
     </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {};
  },
  methods: {
    quality: function() {
      var myChart = echarts.init(document.getElementById("quality"));

      var option = {
        backgroundColor: "#495060",
        title: {
          text: "用户质量评估",
          textStyle: {
            fontWeight: "normal",
            fontSize: 16,
            color: "#F1F1F3"
          },
          left: "6%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["少年", "青年", "中年", "老年"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: "#57617B"
              }
            }
          }
        ],
        series: [
          {
            name: "少年",
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(137, 189, 27, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(137, 189, 27, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(137,189,27)"
              }
            },
            data: [
              96.3,
              96.4,
              97.5,
              95.6,
              98.1,
              94.8,
              89.6,
              94.1,
              80.1,
              52.4,
              75.8,
              94.7
            ]
          },
          {
            name: "青年",
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 136, 212, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 136, 212, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(0,136,212)"
              }
            },
            data: [
              97.3,
              99.2,
              99.3,
              100.0,
              99.6,
              90.6,
              80.0,
              91.5,
              69.8,
              67.5,
              90.4,
              84.9
            ]
          },
          {
            name: "中年",
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(219, 50, 51, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(219, 50, 51, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(219,50,51)"
              }
            },
            data: [
              84.2,
              81.0,
              67.5,
              72.1,
              43.7,
              88.5,
              91.9,
              101.8,
              79.7,
              87.6,
              92.9,
              0
            ]
          },
          {
            name: "老年",
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(19, 50, 51, 0.3)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(19, 50, 51, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(19,50,51)"
              }
            },
            data: [
              64.2,
              31.0,
              47.5,
              22.1,
              53.7,
              68.5,
              71.9,
              11.8,
              79.7,
              47.6,
              72.9,
              45
            ]
          }
        ]
      };

      myChart.setOption(option);
    },
    qualityList: function() {
      var myChart1 = echarts.init(document.getElementById("quality-list"));
      var myColor = [
        "#eb2100",
        "#eb3600",
        "#d0570e",
        "#d0a00e",
        "#34da62",
        "#00e9db",
        "#00c0e9",
        "#0096f3"
      ];
      var option1 = {
        backgroundColor: "#495060",
        grid: {
          left: "11%",
          top: "12%",
          right: "0%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "27",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16"
              }
            },
            data: [ "5", "4", "3", "2", "1"]
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16"
              }
            },
            data: [
              
              "12566",
              "12566",
              "12566",
              "12566",
              "12566"
            ]
          },
          {
            name: "单位：件",
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "16"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [ 33, 44, 78, 59, 15],
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: function(param) {
                  return param.value + "%";
                },
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16"
                }
              }
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            z: 2
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [ 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "#495060",
                barBorderRadius: 5
              }
            },
            z: 1
          },
          {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
            barGap: "-100%",
            data: [ 100, 100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 5
              }
            },
            z: 0
          },
          {
            name: "外圆",
            type: "scatter",
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                opacity: 1
              }
            },
            z: 2
          }
        ]
      };
      myChart1.setOption(option1);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.quality();
      this.qualityList();
    });
  }
};
</script>

<style>
.quality {
  height: 500px;
  border: 1px solid #80848f;
}
.quality-table {
  height: 500px;
}
.quality-list {
  height: 300px;
}
.quality-list > p {
  border: 1px solid #80848f;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.quality-list > div{
  height: 400px;
}
</style>
