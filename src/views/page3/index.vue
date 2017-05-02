<template>
  <div class="container">
    <full-page 
      @direction="direction"
      @animation-end="onAnimationEnd"
      @leave-page="onLeavePage" 
      @begin-to-page="onBeginToPage"> 
      <div class="pages"><span @click="test">1</span></div>
      <div class="pages">
        <span class="animated" 
          data-show="bounceIn" 
          data-hide="bounceOut">
          2
        </span>
      </div>
      <div class="pages">
        <span class="animated" 
          data-show="zoomIn" 
          >
          3
        </span>
      </div>
      <div class="pages"><span>4</span></div>
    </full-page>
    <div class="switch">
      <button>{{direction}}</button>
    </div>
  </div>
</template>

<script>
import FullPage from 'lib/fullpage';

export default {
  data () {
    return {
      api: 'list',
      direction: 'vertical',
    };
  },

  methods: {
    test() {
      console.log('item-click');
    },

    onAnimationEnd() {
      console.log('end');
    },

    onLeavePage(index) {
      console.log(index);
    },

    onBeginToPage(index) {
      console.log(index);
    }
  },

  components: {
    FullPage
  }
};
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
}

.pages{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    display: inline-block;
    padding: 20px;
    border: 1px solid red;
  }
}
</style>