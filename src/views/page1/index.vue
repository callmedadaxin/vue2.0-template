<template>
	<div>
		page1
		<foo></foo>
	</div>
</template>

<script>
import Foo from 'foo';
import { get } from 'common/js/api';

export default {
  data () {
    return {

    };
  },

  components: {
  	Foo
  },

  created() {
    get('user').then(r => {
      console.log(r);
    })

    get('list').then(r => {
      console.log(r);
    })
  }
};
</script>

<style lang="css" scoped>
</style>