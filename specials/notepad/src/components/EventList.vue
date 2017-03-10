<template>
  <div class="event-content">
    <div class="event-tab" @click="changeCollapse(0, $event)">未完成
      <span :class="{'close-span': !collapse[0].show}"></span>
    </div>
    <div class="event-box" :style="{'height':'auto','display':'block'}">
      <ul>
        <li class="event-list" v-for="value in getToDo">
          <input type="checkbox" :key="value.id" @click="moveToDone(value.id)">
          <div>{{value.content}}</div>
          <button class="cancel-btn" @click="moveCancel(value.id)">取消</button>
        </li>
      </ul>
    </div>

    <div class="event-tab" @click="changeCollapse(1, $event)">已完成
      <span :class="{'close-span': !collapse[1].show}"></span>
    </div>
    <div class="event-box">
      <ul>
        <li class="event-list" v-for="value in getDone">
          <input type="checkbox" :key="value.id" checked @click="moveToDo(value.id)">
          <div>{{value.content}}</div>
          <span class="event-time">{{value.time}}</span>
        </li>
      </ul>
    </div>

    <div class="event-tab" @click="changeCollapse(2, $event)">已取消
      <span :class="{'close-span': !collapse[2].show}"></span>
    </div>
    <div class="event-box" :class="{'event-box-hide': false}">
      <ul>
        <li class="event-list" v-for="value in getCancel">
          <div class="event-delete">{{value.content}}</div>
          <button class="cancel-btn" @click="moveToDo(value.id)">恢复</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { EVENT_DONE, EVENT_TODO, EVENT_CANCEL } from '../store/note'

export default {
  data() {
    return {
      collapse: [
        {
          show: true,
        },
        {
          show: true,
        },
        {
          show: true,
        },
      ],
    }
  },
  computed: {
    // ...mapState({ note: state => state.note }),
    ...mapState(['note']),
    ...mapGetters(['getToDo', 'getDone', 'getCancel']),

    // getToDo() {
    //   // debugger
    //   // console.log(this.state)
    //   return this.todos(1)
    // },
    // getDone() {
    //   return this.todos(2)
    // },
    // getCancel() {
    //   return this.todos(3)
    // },
  },
  methods: {
    ...mapActions([EVENT_DONE, EVENT_TODO, EVENT_CANCEL]),

    moveToDone(id) { // 移至已完成
      this.EVENT_DONE(id)
      // this.$store.dispatch('eventdone', id)
    },
    moveToDo(id) { // 移至未完成
      this.EVENT_TODO(id)
      // this.$store.dispatch('eventtodo', id)
    },
    moveCancel(id) { // 移至已取消
      this.EVENT_CANCEL(id)
      // this.$store.dispatch('eventcancel', id)
    },

    changeCollapse(num, event) {
      const show = this.collapse[num].show
      if (show) {
        this.closeCollapse(event)
      } else {
        this.openCollapse(event)
      }
      this.collapse[num].show = !show
    },
    closeCollapse(e) { // 关闭折叠面板
      const ulElement = e.currentTarget.nextElementSibling
      const children = ulElement.getElementsByTagName('ul')[0]
      ulElement.style.height = children.offsetHeight + 'px'
      setTimeout(function () {
        ulElement.style.height = '0px'
        setTimeout(function () {
          ulElement.style.display = 'none'
        }, 300)
      }, 10)
    },
    openCollapse(e) { // 打开折叠面板
      const ulElement = e.currentTarget.nextElementSibling
      const children = ulElement.getElementsByTagName('ul')[0]
      ulElement.style.display = 'block'
      ulElement.style.height = children.offsetHeight + 'px'
      setTimeout(function () {
        ulElement.style.height = 'auto'
      }, 300)
    },
  },
}
</script>

<style lang="scss">
.event-content {
  .event-tab {
    position: relative;
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    background: #00a2ff;
    span {
      position: absolute;
      right: 20px;
      top: 15px;
      width: 10px;
      height: 10px;
      content: '';
      border: {
        top: 3px solid #fff;
        right: 3px solid #fff;
      }
      transform: rotate(135deg);
      transition: transform .3s;
      &.close-span {
        transform: rotate(45deg);
      }
    }
  }
  .event-box {
    list-style: none;
    overflow: hidden;
    border: {
      left: 1px solid #eee;
      right: 1px solid #eee;
    }
    transition: height .3s;
    .event-list {
      position: relative;
      min-height: 44px;
      line-height: 25px;
      padding: 10px 100px 10px 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      input[type=checkbox] {
        position: absolute;
        left: 15px;
        top: 12px;
        width: 20px;
        height: 20px;
      }
      .cancel-btn {
        position: absolute;
        right: 10px;
        top: 7px;
        width: 50px;
        height: 30px;
        line-height: 30px;
        padding: 0;
        background: #fff;
        border: 1px solid #c0ccda;
        color: #1f2d3d;
        font-size: 12px;
      }
      .event-time {
        position: absolute;
        right: 10px;
        top: 0;
        line-height: 44px;
        font-size: 12px;
        color: #aaa;
      }
      .event-delete {
        text-decoration: line-through;
        color: #999;

      }
    }
  }
}
</style>
