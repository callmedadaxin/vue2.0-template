<template>
	<div class="container">
		<scroll-list :api="api" type="post" class="scroll-list-demo">
      <template slot="item" scope="item">
        <li class="item" @click="test"><img :src="item.data.src" alt=""></li>
      </template>
    </scroll-list>
	</div>
</template>

<script>
import ScrollList from 'lib/scroll_list';

export default {
  data () {
    return {
      api: 'list'
    };
  },

  methods: {
    test() {
      console.log('item-click');
    }
  },

  components: {
    ScrollList
  }
};
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
}

.page{
  width: 100%;
  height: 100%;
}

.scroll-list-demo{

  .item{
    flex: 0 0 50%;
    padding: 5px;

    img{
      width: 100%;
    }
  }
}
</style>