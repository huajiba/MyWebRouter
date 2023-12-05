<script setup></script>
<template>
  <div>
    <h1>Vue Router 文档</h1>
    <router-link to="/guide">
      <button>教程</button>
    </router-link>
    <router-link to="/api">
      <button>API参考</button>
    </router-link>
    
    <div id="box">
      展示
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  #box{
    height: 300px;
    border: 2px solid orange;
  }
  .active button {
    background-color: green;
    color: white;
  }
</style>