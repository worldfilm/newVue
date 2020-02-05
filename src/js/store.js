import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curIndexId: 0,
    cartInfos:{
      total_price:0,
      total_nums:0
    },
    cartList:[],
  },
  mutations: {
    add_db (state,item) {//组件里commit调用此方法
      let list=state.cartList
      let id=state.curIndexId
      if(list.length==0){
        list.push(item.item)
      }
        // list[item.index]=item.item
      for(let i in list){
        if(i==item.index){
          // state.cartList.push(item.item)
           state.cartList[i].num++
        }
        if(list[i].id!=id){
          state.cartList[item.index]=item.item
        }
      }
    },
    reduce_db(state){
      let list=state.cart.cartList
      let id=state.cart.cartList.curIndexId
        for(let i in list){
          if(list[i].id==id){
             state.cart.cartList[i].num--
          }
        }
    },
    clear_local(state){
      // let list=state.cart.cartList
      // for(let i in list){
      //   list[i].id=0
      // }
      // this.state.cart.cartList=list
      // debugger
      // this.state.cart.cartList=[]
      state.cart.cartList=[]
      state.cart.cartList.curIndexId=0
      // return state.cart.cartList
    },
    check_db(){

    },
    create_db(){

    },
  },
  actions: {
    add_db (context,item){//组件里dispatch调用此方法
      context.commit('add_db',item)
    },
    delete_db(context){
      context.commit('add_db')
    },
    reduce_db(context){
      context.commit('reduce_db')
    },
    clear_local(context){
      context.commit('clear_local')
    },
    check_db(context){
      context.commit('check_db')
    },
    create_db(context){
      context.commit('create_db')
    },
  },
  getters: {
    getCartList: (state) => {
      return state.cartList
    }
  }
})
