// 表格中
<el-table-column prop="channelName" :formatter="getChannelName" header-align="center" align="center" label="销售渠道"></el-table-column>

// methods中


<script>
import axios from "axios";

export default {
  name: "bl",
  data(){
    return{
      result :[],
      tableData :[{
        id:"",
        is_n:"",
        level:""
      }],
    }
},
getChannelName(row) {
  const path = 'http://localhost:5000/black'
  axios.get(path)
    .then((res) => {
      this.result = res
  for (let i in this.result) {
    if (this.result.id == row.channelId) {
      return this.tableTreeDdataPlatform.content[i].channelName
    }
  }
},
// 其中this.tableTreeDdataPlatform.content是获取到的字典数据
</script>

<style scoped>


</style>
