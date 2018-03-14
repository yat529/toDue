<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    // Header,
  },

  data() {
    return {
      // name: 'Tony'
    }
  },

  methods: {
    // 
  },

  created() {
    // 
  }
}
</script>

<style lang="scss">
@import url('assets/icon.css');

#app {
  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toggle {
  position: absolute;
  left: 50%;
  bottom: 35px;
  width: 35px;
  height: 35px;
  transform: translate(-50%, -50%);
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    // animation: indicate 1.5s ease-in-out infinite;
  }

  
}

@keyframes indicate {
  0% {
    transform: scale(0) translate(-50%, -50%);
  }
  50% {
    transform: scale(1.1) translate(-50%, -50%);
  }
  100% {
    transform: scale(0) translate(-50%, -50%);
  }
}
</style>
