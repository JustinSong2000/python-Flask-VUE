<template>
  <div class="UserPie">
    <div id="UserPie" class="" style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export default {
  mounted(){
    this.myChart = echarts.init(document.getElementById('UserPie'));
    this.initData();
  },
  props: ['pieData'],
  methods: {
    initData(){
      const option = {
        title : {
          text: '用户分布',
          subtext: '',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['正常用户','羊毛党用户']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:this.pieData.dh, name:'羊毛党'},
              {value:this.pieData.ou, name:'正常用户'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      this.myChart.setOption(option);
    }
  },
  watch: {
    pieData: function (){
      this.initData()
    }
  }
}
</script>


<style lang="less">
@import '../style/mixin';
.visitorpie{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
