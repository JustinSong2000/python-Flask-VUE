<template>
  <div>
    <form action='http://127.0.0.1:5000/SetParam' method="POST">
      是否实名制: <input type="text" name="username" />
      <button type="submit">提交信息</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Change"
}
</script>

<style scoped>

</style>
