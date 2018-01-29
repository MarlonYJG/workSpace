<template>
  <div class="access-rate">
     <div class="access-rates">
       <p>交易分析趋势图</p>
       <div id="rate">

       </div>
     </div>
     <div class="accesses-rate">
        <rate-table></rate-table>
     </div>
  </div>
</template>

<script>
import echarts from "echarts";
import RateTable from "../components/base/ratetable";
export default {
  components: {
    RateTable
  },
  data() {
    return {};
  },
  methods: {
    rate: function() {
      var myChart = echarts.init(document.getElementById("rate"));
      var colors = ["#5793f3", "#d14a61", "#675bba","#ff9900","#ed3f14","#19be6b"];

      var option = {
        color: colors,

        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross" }
        },
        grid: {
          right: "30%"
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["受访人数占比", "受访比率", "时长占比",'停留时长','离开占比']
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            data: [
              "首页",
              "目录",
              "搜索",
              "导航栏",
              "订单页",
              "订单查询",
              "粉丝查询",
              "视频播放",
              "表单提交",
              "个人中心",
              "个人资料",
              "高级权限",
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "页面受访比率",
            min: 0,
            max: 100,
            position: "right",
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value} %"
            }
          },
          {
            type: "value",
            name: "受访总时长占比",
            min: 0,
            max: 100,
            position: "right",
            offset: 90,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: "{value} %"
            }
          },
          {
            type: "value",
            name: "平均停留时长",
            min: 0,
            max: 250,
            position: "right",
            offset: 180,
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: "{value} 分钟"
            }
          },
          {
            type: "value",
            name: "离开应用",
            min: 0,
            max: 100,
            position: "right",
            offset: 250,
            axisLine: {
              lineStyle: {
                color: colors[3]
              }
            },
            axisLabel: {
              formatter: "{value} %"
            }
          },

          {
            type: "value",
            name: "页面受访人数",
            min: 0,
            max: 25000,
            position: "left",
            axisLine: {
              lineStyle: {
                color: colors[4]
              }
            },
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "受访人数占比",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              35.6,
              62.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "受访比率",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              75.6,
              82.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "时长占比",
            type: "line",
            yAxisIndex: 2,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          },
          {
            name: "停留时长",
            type: "line",
            yAxisIndex: 2,
            data: [
              22.0,
              23.2,
              33.3,
              44.5,
              62.3,
              130.2,
              230.3,
              233.4,
              233.0,
              163.5,
              132.0,
              63.2
            ]
          },
          {
            name: "离开占比",
            type: "line",
            yAxisIndex: 2,
            data: [
              21.0,
              12.2,
              13.3,
              14.5,
              16.3,
              10.2,
              20.3,
              33.4,
             43.0,
              76.5,
              92.0,
              65.2
            ]
          }
        ]
      };

      myChart.setOption(option);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rate();
    });
  }
};
</script>

<style scoped>
.access-rate {
  height: 500px;
}
.access-rates {
  height: 500px;
  width: 100%;
  border: 1px solid red;
}
.access-rates div {
  height: 450px;
  margin: 5px;
  padding: 10px 5px;
  border: 1px solid #fff;
}
.accesses-rate {
  height: 390px;
  border: 1px solid red;
}
</style>
