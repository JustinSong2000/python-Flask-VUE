<template>
  <div>
    <head-top></head-top>
    <visitor-pie :pieData="pieData"></visitor-pie>
  </div>
</template>

<script>
import UserPie from '@/components/UserPie'
import axios from "axios";

export default {
  name: "piepage",
  data(){
    return{
      pieData: {}
    }
  },
  components: {
    visitorPie,
  },mounted(){
    this.initData();
  },
  methods: {
    initData(){
      const path = 'http://localhost:5000/show_res'
      axios.get(path)
        .then((res) => {
          var list = {
            normal: res['data'][4],
            abnormal: res['data'][5]
          }
          this.pieData.push(list);
        })
    }

  }
}
</script>

<style scoped>

</style>
