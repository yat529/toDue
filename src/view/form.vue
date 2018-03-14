<template>
  <div id="form" ref="formData">
    <h1 class="title">What to due?</h1>
    <Datepicker class="datepicker" ref="datepicker"></Datepicker>
    <div class="textarea">
      <span class="icon icon-pencil"></span>
      <textarea name="formContent" id="formContent" rows="8" placeholder="Things to due" v-model="content"></textarea>
    </div>

    <div class="button" @click="saveToDue">
      <span class="icon icon-check"></span><span>Add</span>
    </div>

    <router-link class="toggle" to="/list"></router-link>
  </div>
</template>

<script>
import Datepicker from '@/components/datepicker/datepicker';

export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      content: '',
      toDue: {
        dueDate: '',
        content: ''
      },
      toDueList: []
    }
  },

  methods: {
    saveToDue() {
      // get duedate from child datepicker component
      this.toDue.dueDate = this.$refs.datepicker.dueDate;
      this.toDue.content = this.content;
      this.toDueList.push(this.toDue);
      // clear textarea
      this.content = '';

      // send data to server
      let url = `/api/duedate/${ this.toDue.dueDate }/content/${ this.toDue.content }`;
      this.axios.get(url)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss">
#form {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: tan;

  .title {
    margin: 20% auto 0 auto;
    width: 80%;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
  }

  .datepicker {
    position: relative;
    margin: 20% auto 0 auto;
    width: 80%;
  }

  .textarea {
    position: relative;
    margin: 30px auto 0 auto;
    width: 80%;
    color: white;

    .icon {
      display: block;
      position: absolute;
      top: 17px;
      left: 17px;
      width: 15px;
      height: 15px;
      font-size: 15px;
      color: #333333;
    }

    textarea {
      padding: 15px 10px 15px 45px;
      width: 100%;
      border: none;
      outline: none;
      color: #333333;
      font-family: 'Roboto Slab' !important;
      font-size: 15px;
      line-height: 18px;
      box-shadow: 0 1px 10px -6px rgba(0, 0, 0, 0.3);

      &:focus {
        box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .button {
    position: relative;
    margin: 30px auto 0 auto;
    width: 150px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #61b2a7;

    span {
      vertical-align: baseline;
      color: #fff;
    }

    .icon {
      margin-right: 5px;
    }
  }
}
</style>

