<template>
  <div id="header">
    <div class="greeting">{{ gretting }}</div>
    <div class="date" v-html="currentDate"></div>
  </div>
</template>

<script>
import moment from 'moment';

let abbrev = moment().format('a');

export default {
  name: 'date',

  props: {
    name: {
      type: String,
      default: 'NightHawk'
    }
  },

  components: {

  },

  data() {
    return {
      abbrev: abbrev
    }
  },

  methods: {},

  computed: {
    gretting() {
      let period = this.abbrev === 'am' ? 'Morning' : 'Afternoon';
      return `Good ${ period }, ${ this.name }`;
    },
    currentDate() {
      let day = moment().format('dddd');
      let date = moment().format('MMM Do YY');

      let html = `<div class="line large">It's ${ day }</div>\n`;
      html += `<div class="line">${ date }</div>`;

      return html;
    }
  }
}
</script>

<style lang="scss">
#header {
  // position in parent component
  position: relative;
  top: 20%;
  transform: translateY(-50%);
  z-index: 10;

  .greeting {
    width: 100%;
    font-size: 1.2rem;
    font-weight: normal;
    color: #fff;
  }

  .date {
    margin-top: 25px;
    .line {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #fff;
      text-align: center;

      &.large {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }
  }
}
</style>
