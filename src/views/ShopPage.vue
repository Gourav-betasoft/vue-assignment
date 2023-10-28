<template>
  <div>
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCT</th>
            <th>ITEM NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in allItems" :key="item.id">
            <td>
              {{ item.id }}
            </td>
            <td >
              <v-img :src="item.image" aspect-ratio="1.7"/>
            </td>
            <td>{{ item.name }}</td>
            
            <td>
              <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >VIEW</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >{{ item.name }}</v-toolbar>
            <v-card-text>
                <img :src="item.image" 
                style="width:20px ,position:center">
                <v-rating>
                 
                </v-rating>
                
               <h2>Name:{{ item.name }}</h2> 
                <h2>Price:{{ item.price }}</h2> 
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false" style="background-color: red; color:white"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
              <v-btn success @click="handleItem(item)" style="background-color: rgb(232, 235, 63);"> ADD TO CART </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
  
  <script>
import { mapActions, mapGetters } from "vuex";
import Swal from 'sweetalert2'
export default {
  name: "ShopPage",
  components: {},
  data() {
    return {
      IsloggedIn: "false",
      allItems: [
        {
          id: 1,
          name: "Earphones",
          price: 200,
          image: "/static/apple-earphone.jpg",
          stock:10,
        },
        {
          id: 2,
          name: "Headphones",
          price: 500,
          image: "/static/headphonee.webp",
          stock:9,
        },
        {
          id: 3,
          name: "Ipad",
          price: 5000,
          image: "/static/ipad.jpg",
          stock:8,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      cartLength: "user/CART_LENGTH",
    }),
  },
  methods: {
    ...mapActions({
      add_to_cart: "user/add_item"
    }),
    handleItem(item) {
      if (!item.quantity) item.quantity = 1;
      this.add_to_cart(item);
      Swal.fire("Item added to cart")
    },
  },
};
</script>