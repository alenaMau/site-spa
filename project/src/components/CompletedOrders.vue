<script setup>
import '../assets/css/completedorders.css'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import VueCookies from "vue-cookies";
import axios from "axios";

let token = VueCookies.get('token')
if (!token) {
  window.location = '/';
}

let orders = [];

await axios.get('https://jurapro.bhuser.ru/api-shop/order', {
  headers: { Authorization: `Bearer ${token}` }
}).then(response => {
  let data = response.data.data;
  data.forEach(el => {
    el.products.forEach(elem => {
      orders.push(elem)
    })
  });
})
</script>


<template>
  <Header />
    <section class="completedOrders">
      <h3>Оформленные заказы</h3>
      <div class="completedOrders_item">
        <div class="completedOrders_item_products" v-for="order in orders">
          <h3>{{order}}</h3>
        </div>
      </div>
    </section>
  <Footer />
</template>

