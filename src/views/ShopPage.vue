<template>
    <div>
      <!-- INDEX : {{  SHOW_INDEX }} 
     <br>
     ROOT_INDEX : {{  SHOW_ROOT }}
     <br>  -->
  
      <!-- <br>
      <span> -->
      <!-- <v-icon large >
        mdi-cart 1
        </v-icon> -->
      <!-- <hr>
     <br>
      </span>  -->
      <!-- <v-btn @click="index_increment" style="background-color: rgb(37, 192, 231);">Index_Increment</v-btn>
     
     <v-btn @click="index_decrement" style="background-color: rgb(221, 55, 55);">Index_Decrement</v-btn>
   
     <v-btn @click="modify()" style="background-color: rgb(55, 221, 91);">Update Root</v-btn> -->
  
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th>Picture</th>
              <th>ITEM NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in allItems"
              :key="item.id"
            >
              <td>
                <v-img
                  :src="item.image"
                  aspect-ratio="1.7"
                />
              </td>
              <td>{{ item.name }}</td>
              <td>
                <v-btn
                  success
                  @click="handleItem(item)"
                >
                  ADD TO CART
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    name: "HomeView",
    components: {},
    data() {
      return {
        allItems: [
          {
            id: 1,
            name: "earphones",
            price: 200,
            image: "/static/apple-earphone.jpg",
          },
          {
            id: 2,
            name: "headphones",
            price: 500,
            image: "/static/headphone.jpg",
          },
          {
            id: 3,
            name: "ipad",
            price: 5000,
            image: "/static/ipad.jpg",
          },
        ],
      };
    },
    computed: {
      ...mapGetters({
        SHOW_INDEX: "user/TAKE_INDEX",
        SHOW_ROOT: "TAKE_INDEX",
        cartLENGTH: "user/CART_LENGTH",
      }),
    },
    methods: {
      ...mapActions({
        index_increment: "user/Index_increment",
        index_decrement: "user/Index_decrement",
        modify: "modifyIndex",
        add_to_cart: "user/add_item",
      }),
      handleItem(item) {
        if (!item.quantity) item.quantity = 1;
        this.add_to_cart(item);
      },
    },
  };
  </script>