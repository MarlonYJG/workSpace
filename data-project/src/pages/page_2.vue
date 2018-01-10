<template>
  <div class="user-explore">
      <div>
        <div class="user">
          <p>性别分布</p>
          <div class="user-distributed" id="gender">
            1
          </div>
        </div>
        <div class="user">
          <p>年龄分布</p>
          <div class="user-distributed" id="age">
            2
          </div>
        </div>
      </div>
      <div>
        <div class="user">
          <p>人群特征</p>
          <div class="user-distributed" id="crowd">
            1
          </div>
        </div>
        <div class="user">
          <p>TGL指数</p>
          <div class="user-distributed" id="tgl">
            2
          </div>
        </div>
      </div>
      <div class="phone">
        <p>移动设备偏好</p>
        <div id="phone">

        </div>
      </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      dataBJ: [
        [
          190,
          90,
          60,
          50,
          100,
          60,
          100,
          20,
          50,
          60,
          40,
          41,
          15,
          56,
          63,
          21,
          25,
          25,
          16
        ]
      ],
      dataSH: [
        [
          20,
          30,
          70,
          100,
          20,
          10,
          10,
          50,
          80,
          90,
          50,
          60,
          56,
          55,
          48,
          80,
          90,
          89,
          15
        ]
      ],
      lineStyle: {
        normal: {
          width: 1,
          opacity: 1
        }
      }
    };
  },
  methods: {
    gender: function() {
      var myChart = echarts.init(document.getElementById("gender"));

      var option = {
        backgroundColor: "#161627",
        title: {
          text: "",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["男生", "女生", "未知"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "男生" },
              { value: 310, name: "女生" },
              { value: 234, name: "未知" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    age: function() {
      var myChart1 = echarts.init(document.getElementById("age"));
      var option1 = {
        backgroundColor: "#161627",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12
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
            data: ["<19", "19~25", "26~35", "36~45", "46~55", ">55"],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              margin: 15,
              textStyle: {
                color: "#078ceb",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12
              }
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: true
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 0.2
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            // type : 'category',
            // data : ['10','20','30','40'],
            axisLabel: {
              textStyle: {
                color: "#a8aab0",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#fff"],
                opacity: 0.06
              }
            }
          }
        ],
        series: [
          {
            name: "年龄分布",
            type: "bar",
            barWidth: "40%",
            data: [10, 20, 30, 44, 55, 60]
          }
        ],
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: "{c}"
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(17, 168,171, 1)"
              },
              {
                offset: 1,
                color: "rgba(17, 168,171, 0.1)"
              }
            ]),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10
          }
        }
      };
      myChart1.setOption(option1);
    },
    crowd: function() {
      var myChart2 = echarts.init(document.getElementById("crowd"));
      var option2 = {
        backgroundColor: "#161627",
        title: {
          text: "",
          left: "center",
          textStyle: {
            color: "#eee"
          }
        },
        legend: {
          bottom: 5,
          data: ["男性", "女性"],
          itemGap: 200,
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          selectedMode: "single"
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
          indicator: [
            { name: "个人美容", max: 300 },
            { name: "手机工具", max: 250 },
            { name: "工作", max: 300 },
            { name: "商旅出行", max: 100 },
            { name: "资讯", max: 200 },
            { name: "健康", max: 100 },
            { name: "教育", max: 100 },
            { name: "娱乐", max: 100 },
            { name: "网购", max: 100 },
            { name: "生活", max: 100 },
            { name: "通讯", max: 100 },
            { name: "影音", max: 100 },
            { name: "金融理财", max: 100 },
            { name: "母婴", max: 100 },
            { name: "社交", max: 100 },
            { name: "汽车", max: 100 },
            { name: "阅读", max: 100 },
            { name: "房产", max: 100 },
            { name: "家居", max: 100 }
          ],
          shape: "circle",
          splitNumber: 5,
          name: {
            textStyle: {
              color: "rgb(238, 197, 102)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(238, 197, 102, 0.1)",
                "rgba(238, 197, 102, 0.2)",
                "rgba(238, 197, 102, 0.4)",
                "rgba(238, 197, 102, 0.6)",
                "rgba(238, 197, 102, 0.8)",
                "rgba(238, 197, 102, 1)"
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        series: [
          {
            name: "男性",
            type: "radar",
            lineStyle: this.lineStyle,
            data: this.dataBJ,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#F9713C"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          },
          {
            name: "女性",
            type: "radar",
            lineStyle: this.lineStyle,
            data: this.dataSH,
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#B3E4A1"
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.05
              }
            }
          }
        ]
      };

      myChart2.setOption(option2);
    },
    tgl: function() {
      var myChart3 = echarts.init(document.getElementById("tgl"));
      var option3 = {
        backgroundColor: "#161627",
        title: {
          text: "",
          subtext: ""
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["男性", "女性"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ["阅读", "社交", "网购", "健康", "资讯", "教育"]
        },
        series: [
          {
            name: "男性",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            // label: {
            //   normal: {
            //     show: true,
            //     position: "right",
            //     // "formatter": [1,2,3,4,5,6,7,8,9,0],
            //     textStyle: {
            //       color: "#bcbfff" //color of value
            //     }
            //   }
            // },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#43a6f7" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#02f3ff" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "女性",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            //             label: {
            //   normal: {
            //     show: true,
            //     position: "right",
            //     // "formatter": [1,2,3,4,5,6,7,8,9,0],
            //     textStyle: {
            //       color: "#bcbfff" //color of value
            //     }
            //   }
            // },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#f5cb62" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#fbff0f" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            }
          }
        ]
      };
      myChart3.setOption(option3);
    },
    phone: function() {
      var myChart4 = echarts.init(document.getElementById("phone"));
      var option4 = {
        backgroundColor: "#161627",
        legend: {
          data: ["左边数据", "右边数据"],
          bottom: 0,
          center: true,
          textStyle: {
            color: "#fff",
            textAlign: "center"
          },
          itemGap: 0,
          itemWidth: 0
        },
        grid: [
          {
            show: true,
            left: "4%",
            top: 10,
            bottom: 100,
            containLabel: true,
            width: "48%"
          },
          {
            show: false,
            left: "50.5%",
            top: 10,
            bottom: 100,
            width: "0%"
          },
          {
            show: true,
            right: "4%",
            top: 10,
            bottom: 100,
            containLabel: true,
            width: "48%"
          }
        ],
        xAxis: [
          {
            splitNumber: 2,
            type: "value",
            inverse: true,
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            },
            position: "bottom",
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ccc",
                fontSize: 12
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#57617f",
                width: 1,
                type: "solid"
              }
            }
          },
          {
            gridIndex: 1,
            show: true
          },
          {
            gridIndex: 2,
            splitNumber: 2,
            type: "value",
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            },
            position: "bottom",
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ccc",
                fontSize: 12
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#57617f",
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            inverse: true,
            position: "right",
            
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: []
          },
          {
            gridIndex: 1,
            type: "category",
            inverse: true,
            position: "left",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              align: "center"
            },
            data: ["大于56岁", "46岁~55岁", "36岁~45岁", "26岁~35岁", "18岁~25岁"]
          },
          {
            gridIndex: 2,
            type: "category",
            inverse: true,
            position: "left",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: []
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barGap: 2,
            barWidth: "15",
            stack: "入",
            itemStyle: {
              normal: {
                color: "#73B7FF"
              }
            },
            data: ["6666", "5700", "5600", "4000", "2500"]
          },
          {
            name: "",
            type: "bar",
            barGap: 2,
            barWidth: "15",
            stack: "入",
            itemStyle: {
              normal: {
                color: "#2B81FE"
              }
            },
            data: ["6666", "5700", "5600", "4000", "2500"],
            label: {
              normal: {
                show: true,
                position: "right",
                // "formatter": [1,2,3,4,5,6,7,8,9,0],
                textStyle: {
                  color: "#fff" //color of value
                }
              }
            }
          },
          {
            name: "",
            type: "bar",
            barGap: 2,
            barWidth: "15",
            stack: "出",
            itemStyle: {
              normal: {
                color: "#FFA300"
              }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: ["6000", "5700", "5600", "4000", "2500"]
          },
          {
            name: "",
            type: "bar",
            barGap: 2,
            barWidth: "15",
            stack: "出",
            itemStyle: {
              normal: {
                color: "#05D37E"
              }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: ["6000", "5700", "5600", "4000", "2500"],
            label: {
              normal: {
                show: true,
                position: "left",
                // "formatter": [1,2,3,4,5,6,7,8,9,0],
                textStyle: {
                  color: "#fff" //color of value
                }
              }
            }
          }
        ]
      };
      myChart4.setOption(option4);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.gender();
      this.age();
      this.crowd();
      this.tgl();
      this.phone();
    });
  }
};
</script>

<style lang="less" scoped>
@border-color: rgba(255, 255, 255, 0.7);
@borders: 1px solid #80848f;

.user-explore {
  border: @borders;
  overflow: hidden;
  color: @border-color;
  box-sizing: border-box;
}

.user-explore > div {
  overflow: hidden;
  //  border: @borders;
}
.user {
  overflow: hidden;
  float: left;
  width: 50%;
  p {
    text-align: center;
  }
}
.user-distributed {
  height: 380px;
  border: @borders;
  box-sizing: border-box;
  margin: 2px 5px;
}
.phone {
  border: @borders;
  height: 250px;
  p {
    text-align: center;
    border: @borders;
    margin: 5px;
  }
  div{
    height: 300px;
  }
}
</style>
