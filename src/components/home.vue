<template>
    <div class="home">
    <Head-com></Head-com>
    <Banner-com>   
      <List-com slot="swip1"></List-com>
    </Banner-com>
    <Log-com></Log-com>
    <Banner-com>   
      <Swiper-com slot="swip2"></Swiper-com>
    </Banner-com>
    <Conent-com/></Conent-com>
    </div>
</template>
<script>
import Head from '../home/head.vue'
import Banner from '../home/banner.vue'
import List from '../home/list.vue'
import Log from '../home/log.vue'
import Swipers from '../home/swipers.vue'
import Conent from '../home/conent.vue'
export default {
    components:{
        'Head-com':Head,
        'Banner-com':Banner,
        'List-com':List,
        'Log-com':Log,
        'Swiper-com':Swipers,
        'Conent-com':Conent
    },
    data () {
        return {
                
        }
    },
    created() {
       this.$axios({
      method:"post",
      url:"/api/index/modulelist.do?_=1550659582942",
      data:{
       navId:"110",
        platform:"",
        prevTime:""
      },
      headers:{
        "content-type": "application/json"
      }
      //如果需要携带COOkie验证的时候
     // withCredentials: true,
    }).then((res)=>{
      console.log(res)
    })
    },
}
</script>
<style lang="">
   
</style>