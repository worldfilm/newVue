<template>
    <div class="list">
        <h4>商品信息</h4>
        <table class="table table-hover table-bordered table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(item,index) in shopList'>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.num}}</td>
                    <td>
                        <div @click='add_db(item,index)' class="btn btn-info">{{item.num ? '+' : '加入购物车'}}</div>
                        <div @click='reduce_db(item)' class="btn btn-warning" v-if='item.num && item.num>0'>-</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default{
      data() {
          return {
              shopList: [{
                  id: 1,
                  name: '鱼香肉丝',
                  price: 12,
                  num:0,
              }, {
                  id: 2,
                  name: '宫保鸡丁',
                  price: 14,
                  num:0,
              }, {
                  id: 3,
                  name: '土豆丝',
                  price: 10,
                  num:0,
              }, {
                  id: 4,
                  name: '米饭',
                  price: 2,
                  num:0,
              }]
          }
      },
      mounted() {
          /**
           * 初始化时把购物车的菜品数量绑定到菜品列表中
           */
           // var list = this.shopList;
          // var list = all.store.state.cart.cartList;
          // for (var i = 0; i < this.shop_list.length; i++) {
          //     for (var j = 0; j < list.length; j++) {
          //         if (list[j].id == this.shop_list[i].id) {
          //
          //             //这种赋值属性的方式，初始化完成时，无法从state同步到列表
          //             this.$set(this.shop_list[i], 'num', list[j].num);
          //
          //             //通过直接赋值对象，造成对象引用，从而改变state时,达到自动同步列表数据目的
          //             // all.store.state.cart.cartList={this.shop_list, i, list[j]}
          //             break;
          //         }
          //     }
          // }
          // all.store.state.cart.cartList=this.shop_list
          // console.log(this.shop_list[0].num);
          // console.log(this.shop_list[1].num);
      },
      methods: {
          /**
           * 点击菜品列表中的加号
           */
          add_db(item,index) {
            // this.$store.commit('add_db')//提交到mutations同步操作
            // this.$store.dispatch('add_db')//提交到actions异步操作
            // console.log('count='+this.$store.state.count)
            // this.$store.state.cart.cartList=this.shopList
              let id = item.id;
              //检测是否存在购物车中,如果存在修改state.curState为true,并设置state.curIndex为当前菜品在购物车中的索引
              // let list=this.shopList;
              // for(let i in list){
                // if (list[i].id== id) {
                //   list[i].num=list[i].num+1
                // }
              // }
              // this.$store.state.cart.cartList[index]=item
              this.$store.state.curIndexId=id
              // this.$set(item,id,index)
              // console.log(this.$store.state.cart.cartList);
               this.$store.dispatch('add_db',{item,index});
              //如果存在,先自增当前菜品中的num，再设置购物车的数量
              //如果不存在，直接往购物车中push一个新的菜品
              // if (all.store.state.cart.curIndex != -1) {
              //     console.log('add_db');
                  // all.store.dispatch('add_db');
              // } else {
              //     console.log('create_db');
              //     this.$set(shop, 'num', 1);
              //     // this.$store.dispatch('create_db', {
              //     //     shop
              //     // });
              // }
          },

          /**
           * 点击菜品列表中的减号
           */
          reduce_db(shop) {
              var id = shop.id;
              this.$store.dispatch('check_db', {
                  id
              });
              shop.num = parseInt(shop.num);
              this.$store.dispatch('reduce_db');
          }
      }
    }
</script>
<style scoped >
        th{
            text-align: center;
        }
</style>
