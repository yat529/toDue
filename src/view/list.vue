<template>
  <div id="list">

    <h1 class="title">todue List</h1>

    <div class="list-wrapper">  
      <ul>
        <li class="list-item" v-for="item in dataList" :key="item.id" >
          <div class="body">
            <div class="duedate">{{ item.duedate }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
          <div class="countdown" @click="toggleControl(item)">
            <div class="wrapper" v-html="countdown(item.duedate)"></div>
          </div>
          <div class="backplate" :class="item.showControls? 'active' : ''">
            <span class="finish icon-check" @click="haveDone(item)"></span>
            <span class="cancel icon-close" @click="toggleControl(item)"></span>
          </div>
        </li>
      </ul>
    </div>

    <router-link class="toggle" to="/"></router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';


export default {
  components: {},

  data() {
    return {
      dataList: [],
    }
  },

  methods: {
    countdown(date) {
      let regex = /([^\s]*\d+[^\s]*)/;
      let dayago = /(day[s]? ago)/;
      let countdown = moment(date).fromNow().toString();
      if(regex.test(countdown)) {
        return countdown
                .replace(regex, '<span class="number">$1</span>')
                .replace(dayago, '<span class="daysago">$1</span>');
      }
    },
    toggleControl(item) {
      item.showControls = !item.showControls;
    },
    haveDone(item) {
      this.dataList.splice(this.dataList.indexOf(item), 1);
    }
  },

  computed: {
    
  },

  created() {
    let that = this;
    that.axios.get('/api/list')
      .then(function (response) {
        that.dataList = response.data;
        that.dataList.forEach(item => {
          if(!item.showControls) {
            Vue.set(item, 'showControls', false);
          }
          if(!item.done) {
            Vue.set(item, 'done', false);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss">
#list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #555555;

  .title {
    margin-top: 80px;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
  }

  .list-wrapper {
    width: 80%;
    margin: 40px auto 0 auto;
    height: 360px;
    overflow: auto;

    ul {
      width: 100%;

      .list-item {
        position: relative;
        width: 100%;
        height: 75px;
        margin-bottom: 15px;
        padding: 5px 60px 5px 15px;
        background:tan;

        .body {
          width: 100%;
          padding-right: 15px;
          text-align: left;

          .duedate {
            position: relative;
            width: 100%;
            height: 25px;
            padding-left: 10px;
            line-height: 25px;
            font-size: 13px;

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              width: 3px;
              height: 13px;
              border-radius: 2px;
              background: #fff;
              transform: translateY(-60%);
            }
          }

          .content {
            font-size: 16px;
            word-wrap: break-word;
          }
        }

        .countdown {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 60px;
          background: #fff;

          .wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 55px;
            transform: translate(-50%, -50%);
            font-size: 13px;
          }

          .number {
            display: block;
            width: 100%;
            padding: 5px;
            font-size: 1.2rem;              
          }

          .daysago {
            display: block;
            width: 100%;
            padding: 0 10px;
          }
        }

        .backplate {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.1s ease-in-out;

          &.active {
            opacity: 1;
            transform: translateY(0);
          }

          .finish,
          .cancel {
            display: inline-block;
            position: absolute;
            top: 50%;
            font-size: 2.5rem;
            transform: translateY(-50%);
          }

          .finish {
            left: 45px;
            color: #10a310;
          }

          .cancel {
            right: 45px;
            color: #eb4141;
          }
        }
      }
    }
  }
}
</style>

