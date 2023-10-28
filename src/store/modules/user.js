
export default {
    namespaced: true,
    state: {
      index: 0,
      cart: [],
    },
    getters: {
      TAKE_INDEX: (state) => state.index,
      CART_ITEM: (state) => state.cart,
      CART_LENGTH:(state) =>state.cart.length,
      TOTAL_AMOUNT: (state) => {
        let amount = 0;
        for(let item of state.cart){
          amount+=(item.price*item.quantity)
        }
        return amount;
      }
    },
    mutations: {
     
      ADD_TO_CART: function (state, payload) {
        let index = -1;
        for (let i = 0; i < state.cart.length; i++) {
          let found = state.cart[i].id == payload.id;
          if (found) {
            index = i;
            break;
          }
        }
  
        if (index == -1) {
          state.cart.push(payload);
        } else {
          const item=JSON.parse(JSON.stringify(state.cart[index]));
          item.quantity+=payload.quantity;
          state.cart.splice(index,1);
          state.cart.splice(index,0,item);
        }
      },
      REMOVE_FROM_CART(state,payload) {
        const index = state.cart.indexOf(payload);
        state.cart.splice(index,1); 
    },
    INC_QUANTITY:(state,payload) =>{
       let index=state.cart.indexOf(payload);
       const item=JSON.parse(JSON.stringify(state.cart[index]));
       item.quantity+=1;
       state.cart.splice(index,1);
       state.cart.splice(index,0,item);
    },
    DEC_QUANTITY:(state,payload) => {
      let index=state.cart.indexOf(payload);
      const item=JSON.parse(JSON.stringify(state.cart[index]));
      if(item.quantity==1){
        return;
      }
      item.quantity-=1;
      state.cart.splice(index,1);
      state.cart.splice(index,0,item);
    },
  },
    
    actions: {
      Index_increment: function ({ commit }) {
        commit("INCREASE_INDEX");
      },
      Index_decrement: function ({ commit }) {
        commit("DECREASE_INDEX");
      },
      add_item: function ({ commit }, payload) {
        commit("ADD_TO_CART", payload);
      },
      remove_item: function ({ commit }, payload) {
        commit("REMOVE_FROM_CART", payload);
      },
      inc_quantity:function({commit},payload){
        commit("INC_QUANTITY",payload)
      },
      dec_quantity:function({commit},payload){
        commit("DEC_QUANTITY",payload)
      },
   
      
    }
    };
  