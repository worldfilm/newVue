<template>
    <div class="cart">
        <h4>购物车信息</h4>
        <table class="table table-hover table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(cart,index) in cartList' v-if="cart.id">
                    <td>{{cart.id}}</td>
                    <td>{{cart.name}}</td>
                    <td>{{cart.price}}</td>
                    <td>{{cart.num}}</td>
                    <td>{{cart.price*cart.num}}</td>
                    <td>
                        <div @click='action_cart(index,"add_db")' class="btn btn-info">+</div>
                        <div @click='action_cart(index,"reduce_db")' class="btn btn-warning">-</div>
                        <div @click='action_cart(index,"delete_db")' class="btn btn-danger" title='删除'>x</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
      computed: {
          cartList() {
              return this.$store.getters.getCartList
          }
      },

      methods: {
          /**
           * 购物车加减删操作
           * @param  {number} index 当前操作的索引
           * @param  {string} type  对应的mutations值
           * @param  {string} type=add_db  增加
           * @param  {string} type=reduce_db  减少
           * @param  {string} type=delete_db  删除
           */
          action_cart(index, type) {
              //先更新当前索引
              // this.$store.dispatch('update_cur_shop_status', {
              //     index
              // });

              //执行更新state动作
              all.store.dispatch(type);
          }
      },
      mounted() {

      }
    }
</script>
<style scoped >
        th{
            text-align: center;
        }
</style>
