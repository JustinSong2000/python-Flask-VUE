<template>
  <div>
    <!--相当于编写html的内容-->
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      stripe
      style="width: 100%"
      align="center"
      border class="data_table">
      <el-table-column
        prop="id"
        label="客户id"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="score"
        label="得分"
        width="180">
      </el-table-column>
      <el-table-column
        prop="level"
        label="羊毛党等级"
        width="180">
      </el-table-column>
    </el-table>
    <el-button align="center" @click="addrouter1()">返回</el-button>
    <el-pagination class="fy"
                   layout="prev, pager, next"
                   @current-change="current_change"
                   :total=total
                   background
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "score",
  data() {
    return {
      total : 1000,
      pagesize : 10,
      currentPage : 1,
      tableData: []
    }
  },
  mounted() {
    const path = 'http://localhost:5000/score'
    axios.get(path)
      .then((res) => {
        for (var i = 0; i < res['data'].length; i++) {
          var list = {
            id: res.data[i][0],
            score: res.data[i][1],
            level: res.data[i][2]
          };
          this.tableData.push(list);
        }
        this.total = res['data'].length;
      })
  },
  methods:{
    addrouter1(){
      this.$router.push('./')
    },
    current_change:function(currentPage){
      this.currentPage = currentPage;
    }
  }
}
</script>

<style scoped>
  .fl{
    float: right;
    margin-right:20px;
  }
  .fy{
    text-align:center;
    margin-top:30px;
  }
  .title{
    height:100%;
  }
</style>
