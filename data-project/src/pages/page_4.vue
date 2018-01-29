<template>
 <div class="transac-pages">
     <div class="transactions">
       <p>交易分析趋势图</p>
       <div id="transac">

       </div>
     </div>
     <div class="transactions-rate">
       <div id="order"></div>
       <div id="pay"></div>
     </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    transac: function() {
      var myChart = echarts.init(document.getElementById("transac"));
      var xData = (function() {
        var data = [];
        for (var i = 1; i < 13; i++) {
          data.push(i + "月份");
        }
        return data;
      })();
      var option = {
        backgroundColor: "#161627",
        title: {
          text: "",
          subtext: "BY Marlon.yjg",
          x: "4%",

          textStyle: {
            color: "#fff",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: "4%",
          top: "11%",
          textStyle: {
            color: "#90979c"
          },
          data: ["下单", "支付", "平均"]
        },

        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5"
            },
            textStyle: {
              color: "#fff"
            },
            borderColor: "#90979c"
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: "下单",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(255,144,128,1)",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  },
                  position: "insideTop",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              709,
              1917,
              2455,
              2610,
              1719,
              1433,
              1544,
              3285,
              5208,
              3372,
              2484,
              4078
            ]
          },

          {
            name: "支付",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "rgba(0,191,183,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              327,
              1776,
              507,
              1200,
              800,
              482,
              204,
              1390,
              1001,
              951,
              381,
              220
            ]
          },
          {
            name: "总数",
            type: "line",
            stack: "总量",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "rgba(252,230,48,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              1036,
              3693,
              2962,
              3810,
              2519,
              1915,
              1748,
              4675,
              6209,
              4323,
              2865,
              4298
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    order: function() {
      var myChart1 = echarts.init(document.getElementById("order"));
      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-"),
            Math.round(value)
          ]
        };
      }

      var data = [];
      var now = +new Date(2016, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var value = Math.random() * 1000;
      for (var i = 0; i < 50; i++) {
        data.push(randomData());
      }

      var option1 = {
        backgroundColor: "#161627",
        title: {
          text: "下单设备"
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }
        ]
      };

      setInterval(function() {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }

        myChart1.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 1000);
      myChart1.setOption(option1);
    },
    pay: function() {
      var myChart2 = echarts.init(document.getElementById("pay"));
      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-"),
            Math.round(value)
          ]
        };
      }

      var data = [];
      var now = +new Date(2016, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var value = Math.random() * 1000;
      for (var i = 0; i < 50; i++) {
        data.push(randomData());
      }

      var option2 = {
        backgroundColor: "#161627",
        title: {
          text: "支付订单数"
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }
        ]
      };

      setInterval(function() {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }

        myChart2.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 1000);
      myChart2.setOption(option2);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.transac();
      this.order();
      this.pay();
    });
  }
};
</script>

<style scoped>
.transac-pages {
  height: 500px;
}
.transactions {
  height: 500px;
  width: 100%;
  border: 1px solid red;
}
.transactions div {
  height: 450px;
  margin: 5px;
  padding: 10px 5px;
  border: 1px solid #fff;
}
.transactions-rate {
  height: 390px;
  border: 1px solid red;
}
.transactions-rate div {
  float: left;
  height: 380px;
  width: 49%;
  margin: 5px;
  padding: 10px 5px;
  border: 1px solid #fff;
}
</style>
