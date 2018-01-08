<template>
  <div class="channel">
      <div id="channel"></div>
	  <rander-table></rander-table>
  </div>
</template>

<script>
import echarts from 'echarts'
import RanderTable from '../components/base/randerTable'

export default {
	components: {
		RanderTable
	},
  data () {
    return {
      chart:null,
      dataAll:[389, 259, 262, 324, 232, 176, 196, 214, 133, 370],
      yAxisData:['App Store','360手机助手','91助手','安卓市场','腾讯应用宝','百度手机助手','豌豆荚','华为应用市场','中兴应用市场','OPPO软件商店']
    }
  },
  methods: {
    channel:function(id){
      this.chart = echarts.init(document.getElementById('channel'))
      this.chart.setOption({
        backgroundColor: '#495060',
	    title:[
	        {text:"网络占比",x: '2%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}},
	        {text:"各渠道占比TOP10",x: '40%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}},
	        {text:"年龄占比",x: '2%', y: '50%',textStyle:{color:"#fff",fontSize:"14"}},
	    ],
	    grid: [
	        {x: '50%', y: '7%', width: '45%', height: '90%'},
	    ],
	    tooltip: {
	        formatter: '{b} ({c})'
	    },
	    xAxis: [
	        {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
	    ],
	    yAxis: [
	         {  gridIndex: 0, interval:0,data:this.yAxisData.reverse(),
	            axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
	            axisLine: {show:true,lineStyle:{color:"#6173a3"}},
	        }
	    ],
	    series: [
	        {
	            name: '网络占比',
	            type: 'pie',
	            radius : '30%',
	            center: ['22%', '25%'],
	            color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
	            data:[
	                {value:335, name:'4G'},
	                {value:310, name:'3G'},
	                {value:234, name:'5G'},
	                {value:135, name:'2G'},
	                {value:105, name:'其他'},
	            ],
	            labelLine:{normal:{show:false}},
	            itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
	        },
	        {
	            name: '年龄占比',
	            type: 'pie',
	            radius : '30%',
	            center: ['22%', '75%'],
	            color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
	            labelLine:{normal:{show:false}},
	            data:[
	                {value:335, name:'25岁~35岁'},
	                {value:310, name:'35岁~45岁'},
	                {value:234, name:'45岁以上'},
	                {value:135, name:'18岁~25岁'},
	            ],
	            itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
	        },
	        {
	            name: '各渠道占比TOP10',
	            type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
	            itemStyle:{normal:{color:'#86c9f4'}},
	            label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
	            data: this.dataAll.sort(),
	        },
	        
	    ]
      })
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.channel('channel');
    })
  }
}
</script>

<style scoped>
.channel{
  height: 850px;
 border: 1px solid #80848f; 
}
.channel div:nth-child(1){
  height: 450px;
  
}
.channel div:nth-child(2){
	margin-top: 15px;
}
</style>
