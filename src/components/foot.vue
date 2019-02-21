<template>
  <ul class="foot">
    <li v-for="item in rout">
      <router-link :to="item.path">
        <span class="iconfont" v-html="item.icon">&#xe771;</span>
        <b>{{item.con}}</b>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      rout: [
        { con: "首页", icon: "&#xe878;", path: "/home" },
        { con: "购物车", icon: "&#xe615;", path: "/shopcart" },
        { con: "我的", icon: "&#xe612;", path: "/my" }
      ]
    };
  }
};
</script>
<style scoped>
.foot {
  width: 100%;
  height: 1rem;
  display: flex;
  position: fixed;
  bottom: 0;
  background: #fff;
}
.foot > li {
  width: 100%;
  height: 100%;
}
.foot > li > a {
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.foot > li > a > span {
  display: block;
  width: 100%;
  height: 0.6;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.36rem;
}
.foot > li > a > b {
  display: block;
  width: 100%;
  height: 0.4;
  text-align: center;
  line-height: 0.4rem;
}
.foot > li > .router-link-active {
  color: cornflowerblue;
}
</style>