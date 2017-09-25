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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F4F3F8;
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
    min-height: 500px;
    text-align: left;
    background: #fff;
    border: 1px solid #eee;
  }
</style>
