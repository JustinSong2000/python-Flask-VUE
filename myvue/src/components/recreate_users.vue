<template>
<div>
  <p>请输入用户数量</p>
  <input v-model="o_User" placeholder="输入正常用户数:"><br>
  <input v-model="level1_User" placeholder="输入1级羊毛党用户数:"><br>
  <input v-model="level2_User" placeholder="输入2级羊毛党用户数:"><br>
  <input v-model="level3_User" placeholder="输入3级羊毛党用户数:"><br>
  <!--  <p>{{message}}</p>-->
  <el-button @click="onsubmit()">提交</el-button><br>
  <el-button @click="addrouter1()">返回</el-button>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "recreate_users",
  data(){
    return{
      o_User:'',
      level1_User:'',
      level2_User:'',
      level3_User:''
    }
  },
  methods:{
    gettl(){
      const path = 'http://localhost:5000/recreate_users'
      axios.get(path)
        .then((res) => {
          this.o_User = res.data.data.o_User
          this.level1_User = res.data.data.level1_User
          this.level2_User = res.data.data.level2_User
          this.level3_User = res.data.data.level3_User
          console.log(this.message)
        })
    },
    translation(payload){
      const path = 'http://127.0.0.1:5000/recreate_users'
      axios.post(path, payload)
        .then(()=>{
          this.gettl()
          console.log(payload)
          this.tips = 'submit success'
          this.showMessage = true
        })
    },
    onsubmit(){
      const payload = {
        o_User: this.o_User,
        level1_User: this.level1_User,
        level2_User: this.level2_User,
        level3_User: this.level3_User
      }
      this.translation(payload)
    },
    addrouter1(){
      this.$router.push('./')
    }
  }
}
</script>

<style scoped>

</style>
