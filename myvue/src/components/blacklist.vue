<template>
<div>
  <p>请输入权值</p>
  <input v-model="RN" placeholder="输入实名制权值:"><br>
  <input v-model="ActiveD" placeholder="输入活跃天数权值:"><br>
  <input v-model="MOU" placeholder="输入月均通话时长权值:"><br>
  <input v-model="DOU" placeholder="输入平均流量权值:"><br>
  <input v-model="PhoneCT" placeholder="输入本月通话时长权值:"><br>
  <input v-model="MouseE" placeholder="输入点击次数权值:"><br>
  <input v-model="div" placeholder="输入总阈值:"><br>
  <!--  <p>{{message}}</p>-->
  <el-button @click="onsubmit()">提交</el-button>
</div>
</template>


<script>
import axios from 'axios'

export default {
  name: "blacklist",
  data(){
    return{
      RN:'',
      ActiveD:'',
      MOU:'',
      DOU:'',
      PhoneCT:'',
      MouseE:'',
      div:''
    }
  },
  methods: {
    gettl() {
      const path = 'http://localhost:5000/SetParam'
      axios.get(path)
        .then((res) => {
          this.RN = res.data.data.RN
          this.ActiveD = res.data.data.ActiveD
          this.MOU = res.data.data.MOU
          this.DOU = res.data.data.DOU
          this.PhoneCT = res.data.data.PhoneCT
          this.MouseE = res.data.data.MouseE
          this.div = res.data.data.div
          console.log(this.message)
        })
    },
    translation(payload){
      const path = 'http://127.0.0.1:5000/SetParam'
      axios.post(path, payload)
        .then(() => {
          this.gettl()
          console.log(payload)
          this.tips = 'submit success'
          this.showMessage = true
        })
    },
    onsubmit(){
      const payload = {
        RN: this.RN,
        ActiveD: this.ActiveD,
        MOU: this.MOU,
        DOU: this.DOU,
        PhoneCT: this.PhoneCT,
        MouseE: this.MouseE,
        div: this.div
      }
      this.translation(payload)
    }
  }
}
</script>

<style scoped>

</style>
