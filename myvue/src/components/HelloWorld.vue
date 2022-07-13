<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
      <el-form action='http://127.0.0.1:5000/SetParam' method="POST">
      <label>是否实名制：</label><input type="text" name="RN"><br>
      <label>活跃天数：</label><input type="text" name="ActiveD"><br>
      <label>MOU：</label><input type="text" name="MOU"><br>
      <label>DOU：</label><input type="text" name="DOU"><br>
      <label>通话时长：</label><input type="text" name="PhoneCT"><br>
      <label>点击次数：</label><input type="text" name="MouseE"><br>
      <label>最终阈值：</label><input type="text" name="div"><br>
      <el-button type="primary" class="submit_btn">提交信息</el-button>
    </el-form>
      </section>
    </transition>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "Hello",
  data: function() {
    return {
      serverResponse: 'resp'
    }
  },
  methods: {
    getData() {
      var that = this;
      // 对应 Python 提供的接口，这里的地址填写下面服务器运行的地址，本地则为127.0.0.1，外网则为 your_ip_address
      const path = 'http://127.0.0.1:5000/SetParam';
      axios.post(path).then(function (response) {
        // 这里服务器返回的 response 为一个 json object，可通过如下方法需要转成 json 字符串
        // 可以直接通过 response.data 取key-value
        // 坑一：这里不能直接使用 this 指针，不然找不到对象
        var msg = response.data.msg;
        // 坑二：这里直接按类型解析，若再通过 JSON.stringify(msg) 转，会得到带双引号的字串
        that.serverResponse = msg;

        alert('Success ' + response.status + ', ' + response.data + ', ' + msg);
      }).catch(function (error) {
        alert('Error ' + error);
      })
    }
  }
}

</script>

<style lang="less" scoped>
@import '../style/mixin';
.login_page{
  background-color: #324057;
}
.manage_tip{
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p{
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer{
  .wh(320px, 210px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn{
    width: 100%;
    font-size: 16px;
  }
}
.tip{
  font-size: 12px;
  color: red;
}
.form-fade-enter-active, .form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
