<template>
  <div class="home">
      <h3>Vuex购物车demo</h3>
      <List/>
      <Cart/>
      <Info/>
  </div>
</template>

<script>
import Info from '@/components/Info.vue';
import List from '@/components/List.vue';
import Cart from '@/components/Cart.vue';
export default {
  components: {
    List,Info,Cart
  },
  data() {
    return {}
  }
};
</script>
<style  scoped>
.home {}
</style>
