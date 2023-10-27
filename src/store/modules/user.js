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
      INCREASE_INDEX: function (state) {
        state.index += 1;
      },
      DECREASE_INDEX: function (state) {
        if (state.index > 0) state.index -= 1;
      },
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
          state.cart[index].quantity ++;
        }
      },
      REMOVE_FROM_CART(state,payload) {
        const index = state.cart.indexOf(payload);
        console.log("index", index, payload)
        if(index > -1)
        state.cart.splice(index,1);
        
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
    }
    };
  