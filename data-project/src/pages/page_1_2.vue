<template>
  <div class="users">
     <div class="users-table" id="users">

     </div>
     <div class="users-list">
       <p>数据详情</p>
       <b-table></b-table>
     </div>
  </div>
</template>

<script>
import echarts from "echarts";

import BTable from '../components/base/btable'

export default {
  components: {
   BTable
  },
  data() {
    return {
      chart: null
    };
  },
  methods: {
    users: function(id) {
      this.chart = echarts.init(document.getElementById(id));
      this.chart.setOption({
        backgroundColor: "#404A59",
        color: ["#ffd285", "#ff733f", "#ec4863"],

        title: [
          {
            text: "用户趋势分布周报",
            left: "1%",
            top: "6%",
            textStyle: {
              color: "#fff"
            }
          },
          {
            text: "用户趋势占比",
            left: "83%",
            top: "6%",
            textAlign: "center",
            textStyle: {
              color: "#fff"
            }
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          x: 300,
          top: "7%",
          textStyle: {
            color: "#ffd285"
          },
          data: ["少年", "青年", "中年", "老年"]
        },
        grid: {
          left: "1%",
          right: "35%",
          top: "16%",
          bottom: "6%",
          containLabel: true
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#FF4500"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          type: "value"
        },
        series: [
          {
            name: "少年",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [90, 50, 39, 50, 120, 82, 80]
          },
          {
            name: "青年",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [70, 50, 50, 87, 90, 80, 70]
          },
          {
            name: "中年",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [290, 200, 20, 132, 15, 200, 90]
          },
          {
            name: "老年",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#87CEFA"
              }
            },
            data: [20, 100, 80, 250, 230, 180, 90]
          },

          {
            type: "pie",
            center: ["83%", "33%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 335,
                name: "用户趋势占比",
                itemStyle: {
                  normal: {
                    color: "#ffd285"
                  }
                },
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      color: "#ffd285",
                      fontSize: 20
                    }
                  }
                }
              },
              {
                value: 180,
                name: "占位",
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#87CEFA"
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#ffd285"
                    },
                    formatter: "\n中年人"
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            center: ["83%", "72%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 435,
                name: "用户趋势占比",
                itemStyle: {
                  normal: {
                    color: "#ff733f"
                  }
                },
                label: {
                  normal: {
                    formatter: "{d} %",
                    textStyle: {
                      color: "#ff733f",
                      fontSize: 20
                    }
                  }
                }
              },
              {
                value: 100,
                name: "占位",
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#87CEFA"
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#FF4500"
                    },
                    formatter: "\n青年人"
                  }
                }
              }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.users("users");
    });
  }
};
</script>

<style scoped>
.users {
 overflow: hidden;
}
.users-table {
  height: 500px;
  
  border: 1px solid #80848f; 

}
.users-list {
  margin-top: 10px;
  height: 375px;
}
.users-list>p{
  border: 1px solid #80848f; 
  height: 25px;
  line-height: 25px;
  text-align: center;
  color: rgba(255,255,255,.7);
;
}
</style>
