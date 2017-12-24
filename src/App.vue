<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  background: #F4F3F8;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* reset css*/
ul,li{
  list-style: none;
}
h2,h3{
  font-size: 14px;
  font-weight: normal;
}
button{
  font-family: '微软雅黑';
}

/* common style*/
.subcontent{
  margin: 20px;
  padding: 40px;
  min-height: 544px;
  text-align: left;
  background: #fff;
  border: 1px solid #eee;
}
.topbar .el-col:last-child{
  text-align: right;
}
</style>
