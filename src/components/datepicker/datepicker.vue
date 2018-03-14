<template>
  <div class="date-picker">
    <div class="date">
      <label for="dateInput" class="label">
        <span class="icon-calendar"></span><span style="margin-left: 5px">Select Due</span>
      </label>
      <input type="date" class="input" id="dateInput" v-model="dueDate">
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    label: {
      type: String,
      default: 'Date'
    }
  },

  data() {
    return {
      dueDate: '',
    }
  },

  computed: {
    date() {
      return this.dueDate && moment(this.dueDate).format('MMM DD YYYY');
    }
  }
}
</script>

<style lang="scss">
.date-picker {

  .date {
    display: flex;
    position: relative;
    width: 100%;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: #fff;
    }
  }

    .input {
      flex: 1;
      display: inline-block;
      position: relative;
      padding: 7px 15px;
      border: none;
      outline: none;
      color: #fff;
      font-family: 'Roboto Slab' !important;
      font-weight: bold;
      font-size: 15px;
      text-align: left;
      line-height: 18px;
      background: transparent;
      box-shadow: 0 1px 10px -6px rgba(0, 0, 0, 0.3);
    }

    .label {
      display: inline-block;
      flex: 0 0 auto;
      padding: 7px 15px;
      font-size: 15px;
      line-height: 18px;
      color: #fff;
      font-weight: bold;
      vertical-align: middle;

      span {
        vertical-align: middle;
      }
    }
}
</style>
