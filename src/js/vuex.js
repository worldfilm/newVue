import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);
const state={
    isLogin:false,
    cart:{
      cartInfos:{
       total_price:0,
       total_nums:0
      },
      cartList:{curIndex:0},
  },
};
const mutations={};
for(let item in state){
    mutations[item]=(state,value)=>{
        state[item]=value
    }
}
export default new Vuex.Store({
    state,
    mutations
})
