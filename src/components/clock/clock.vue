<template>
  <div id="clock">
    <div class="wrapper">
      <div class="circle">
        <div class="hour needle" :style="hourNeddle"></div>
        <div class="minute needle" :style="minuteNeddle"></div>
        <div class="second needle" :style="secondNeddle"></div>
      </div>
    </div>
    <!-- optional - show current time above the clock -->
    <div class="display">
      {{ hour }}
      <span class="blinker stop"></span>
      {{ minute }}
      <span class="blinker"></span>
      {{ second }}
      </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      second: moment().format('s'),
      minute: moment().format('m'),
      hour:moment().format('h'),
    }
  },

  methods: {
    updateSeconds() {
      setInterval(() => {
        this.second = parseInt(moment().format('ss'));
        this.minute = parseInt(moment().format('m'));
        this.hour = parseInt(moment().format('h'));
      }, 1000);
    }
  },

  computed: {
    secondNeddle() {
      return `transform: rotate(${ this.second * 6 }deg) translateX(-50%)`;
    },
    minuteNeddle() {
      return `transform: rotate(${ this.minute * 6 }deg) translateX(-50%)`;
    },
    hourNeddle() {
      return `transform: rotate(${ ((this.minute / 60) + this.hour) * 30 }deg) translateX(-50%)`;
    }
  },

  created() {
    this.updateSeconds();
  }
}
</script>

<style lang="scss">
$clockBG: tan;

#clock {
  // positioned in parent component
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // main clock styling
  .wrapper {
    
    .circle {
      position: relative;
      width: 150px;
      height: 150px;
      background: transparent;
      border: 3px solid #fff;
      border-radius: 50%;
      background: $clockBG;
      box-shadow: 0 1px 10px -5px rgba(0, 0, 0, 0.3);

      // center circle
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: #fff;
      }

      // bg gradient
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 6px);    // include border width
        height: calc(100% + 6px);   // include border width
        transform: translateX(-50%) rotate(-45deg);
        transform-origin: top;
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
        // border: 1px solid #fff;
        z-index: -1;
      }

      .needle {
        position: absolute;
        bottom: 50%;
        left: 50%;
        background: #fff;
        border-radius: 1px;
        transform: translateX(-50%);
        transform-origin: bottom left;
      }

      .hour {
        width: 2px;
        height: 45px;
      }

      .minute {
        width: 2px;
        height: 55px;
      }

      .second {
        width: 1px;
        height: 60px;
      }
    }
  }

  // optional feature, absolute positioned
  .display {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -100%);
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-align: center;

    .blinker {
      display: inline-block;
      position: relative;
      width: 7px;
      height: 14px;

      &:after {
        content: ":";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 14px;
        animation: blink 1s linear infinite;
      }

      &.stop:after {
        animation: none;
      }

      @keyframes blink {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
      }
    }
  }
}
</style>
