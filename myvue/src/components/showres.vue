<template>
<!--  <div>-->
<!--    <p>共有用户 {{result}} 名，其中：</p><br>-->
<!--    <p>黑名单中用户：{{total}}名</p><p>     实际羊毛党人数： {{real_d_h}}名</p><br>-->
<!--    <p>黑名单中存在{{abnormal}}名正常用户，{{total-abnormal}}名羊毛党用户，丢失{{real_d_h-total+abnormal}}名羊毛党</p>-->
<!--    <p>计算出正常用户有：{{result-total}}名</p><p>     实际正常用户：{{real_o_u}}名</p><br>-->
<!--    <p>误杀率：{{mistaken}}</p><p>     丢失率：{{loss}}</p>-->
<!--&lt;!&ndash;    <p>{{total}}</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <p>{{result}}</p>&ndash;&gt;-->
<!--  </div>-->
  <div>
    <head-top></head-top>
    <section class="data_section">
      <header class="section_title">计算结果</header>
      <el-row :gutter="20" style="margin-bottom: 10px;">
<!--        <el-col :span="4"><div class="data_list today_head"><span class="data_num head">用户总数：</span></div></el-col>-->
        <el-col :span="4"><div class="data_list"><span class="data_num">{{total}}</span> 黑名单用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{abnormal}}</span> 黑名单中正常用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{total-abnormal}}</span> 黑名单中羊毛党用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{real_d_h-total+abnormal}}</span> 丢失羊毛党个数</div></el-col>
      </el-row>
      <header class="section_title">实际数据</header>
      <el-row :gutter="20">
<!--        <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>-->
        <el-col :span="4"><div class="data_list"><span class="data_num">{{result}}</span> 总用户数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{real_d_h}}</span> 实际羊毛党人数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{real_o_u}}</span> 实际正常用户数</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{mistaken}}</span> 误杀率</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{loss}}</span> 丢失率</div></el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "showres",
  data(){
    return{
      //误杀率
      mistaken : "",
      // 总共多少人
      result : "",
      // 发现羊毛党总人数
      total : "",
      // 实际正常用户有
      real_o_u : '',
      // 实际羊毛党用户有
      real_d_h : '',
      // 丢失率
      loss : "",
      // 黑名单中正常用户
      abnormal : ""
    }
  },
    mounted(){
      const path = 'http://localhost:5000/show_res'
      axios.get(path)
        .then((res) => {
          this.abnormal = res['data'][0];
          this.result = res['data'][1];
          this.mistaken = res['data'][3];
          this.total = res['data'][7];
          this.real_o_u = res['data'][4];
          this.real_d_h = res['data'][5];
          this.loss = res['data'][6];
        })
      // const path1 = 'http://localhost:5000/score'
      // axios.get(path1)
      //   .then((res) => {
      //     this.total = res['data'].length;
      //   })
      // result = (total-mistaken) / total
    }
}
</script>

<style lang="less">
@import '../style/mixin';
.data_section{
  padding: 20px;
  margin-bottom: 40px;
  .section_title{
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list{
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #E5E9F2;
    .data_num{
      color: #333;
      font-size: 26px;

    }
    .head{
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head{
    background: #FF9800;
  }
  .all_head{
    background: #20A0FF;
  }
}
.wan{
  .sc(16px, #333)
}
</style>
