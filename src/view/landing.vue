<template>
  <div id="home">  
    <Header :name="name"></Header>
    <Clock></Clock>
    <keep-alive>
      <router-link class="toggle" to="/form"></router-link>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/header';
import Clock from '@/components/clock/clock';

export default {
  name: 'landingPage',

  data() {
    return {
      name: 'Tony'
    }
  },

  components: {
    Header,
    Clock,
  }
}
</script>

<style lang="scss">
$BG: #61b2a7;

#home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $BG;
}
</style>
