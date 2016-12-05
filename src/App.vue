<template>
  <div id="app">
    <Header></Header>
    <Navbar class="navbar"></Navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Header from './components/header'

export default {
  name: 'app',
  components: {
    Navbar,Header
  }
}
</script>

<style lang="less">
#app {
  overflow: auto;
  .navbar{
    float: left;
    width: 10%;
    padding-bottom: 2000px;
    margin-bottom: -2000px;
    text-align: center;
    background-color: #324057;
  }
  .view{
    padding-bottom: 2000px;
    margin-bottom: -2000px;
    width: 90%;
    float: right;
    display: inline-block; 
  }
}
</style>
