<template>
  <div>
    <v-simple-table class="mx-auto-my-5">
      <template #default>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td><v-img :src="item.image" aspect-ratio="1.7" /></td>
            <td>
              <v-btn
                :disabled="item.quantity == 1"
                success
                @click="decQuantity(item)"
                style="background-color: rgb(211, 25, 25)"
                >-</v-btn
              >

              <v-btn>{{ item.quantity }}</v-btn>
              <v-btn
                success
                @click="incQuantity(item)"
                style="background-color: rgb(40, 173, 40)"
                >+</v-btn
              >
            </td>
            <td>{{ item.price }}</td>
            <td>
              <v-btn depressed color="primary" @click="remove_item(item)">
                Remove Items
              </v-btn>
            </td>
          </tr>
          <tr v-if="!items.length">
            <td colspan="5" style="text-align: center; background-color: gray">
              Cart is empty
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div v-if="items.length">Total : {{ total }}</div>
  </div>
</template>
  
  <script>
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      items: "user/CART_ITEM",
      total: "user/TOTAL_AMOUNT",
    }),
  },
  methods: {
    ...mapActions({
      remove_to_cart: "user/remove_item",
      incQuantity: "user/inc_quantity",
      decQuantity: "user/dec_quantity",
    }),

    remove_item(item) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.remove_to_cart(item);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>