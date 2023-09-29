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

let ordersIds = [];

await axios.get('https://jurapro.bhuser.ru/api-shop/order', {
  headers: { Authorization: `Bearer ${token}` }
}).then(response => {
  let data = response.data.data;
  data.forEach(el => {
    el.products.forEach(elem => {
      ordersIds.push(elem)
    })
  });
});

let products = [];
await axios.get('https://jurapro.bhuser.ru/api-shop/products', {
}).then(response => {
  products = response.data.data;
});


let totalPriceAllTime = 0;
let normalizedProducts = [];
for (let i = 0; i < ordersIds.length; i++) {
  for (let j = 0; j < products.length; j++) {
    if (ordersIds[i] === products[j].id) {
      normalizedProducts.push(products[j]);
      totalPriceAllTime += products[j].price;
    }
  }
}
</script>


<template>
  <Header />
    <section class="completedOrders">
      <h3>Оформленные заказы</h3>
      <span>Стоимость оформленных товаров за все время: <b>{{totalPriceAllTime}}</b>₽</span>
      <div class="completedOrders_item">
        <div class="completedOrders_item_products">
          <div class="catalog_item_box" v-for="product in normalizedProducts">
            <div class="catalog_item_imgBox">
              <span class="catalog_item_price">{{product.price}}₽</span>
            </div>
            <span class="catalog_item_name">{{product.name}}</span>
          </div>
        </div>
      </div>
    </section>
  <Footer />
</template>

