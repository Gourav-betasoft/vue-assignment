<template>
    <div>
      <v-simple-table class="mx-auto-my-5">
        <template #default>
          <thead>
            <tr>
              <th>
                Item Name
              </th>
              <th>
                Quantity
              </th>
              <th>
                PRICE
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}</td>
              <td>
                <v-btn
                  depressed
                  color="primary"
                  @click="remove_to_cart(item)"
                >
                  Remove Items
                </v-btn>
              </td>
            </tr>
            <tr v-if="!items.length">
              <td colspan="4">
                Cart is empty
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div v-if="items.length">
        Total : {{ total }}
      </div>
    </div>
  </template>
  
  <script>
  import {mapActions, mapGetters} from "vuex"
    export default {
         data () {
         return {}
         },
         computed:{
          ...mapGetters({
              items:"user/CART_ITEM" , total:"user/TOTAL_AMOUNT"})
         },
         methods:{
          ...mapActions({remove_to_cart:"user/remove_item",})
         },
      };
  </script>