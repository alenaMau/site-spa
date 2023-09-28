<script setup>
import '../assets/css/catalog.css'
import Header from './Header.vue';
import Footer from './Footer.vue';
import VueCookies from "vue-cookies";
import axios from "axios";

let token = VueCookies.get('token');

let products = [];

await axios.get('https://jurapro.bhuser.ru/api-shop/products', {
}).then(response => {
  products = response.data.data;
});

let addToBasket = (id) => {
  axios.post(`https://jurapro.bhuser.ru/api-shop/cart/${id}`, {
    product_id: id,
  }, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(response => {
    console.log(response.data.data.message)
  }).catch(error => {});
}
</script>

<template>
  <Header />
  <section class="catalog_item">
    <h3>Каталог товаров</h3>
    <div class="catalog_item_horizontally">
      <div class="catalog_item_box" v-for="product in products">
        <div class="catalog_item_imgBox">
          <span class="catalog_item_price">{{product.price}}₽</span>
        </div>
        <span class="catalog_item_name">{{product.name}}</span>
        <button v-if="token" class="catalog_item_button press_activation" @click="addToBasket(product.id)">Добавить</button>
      </div>
    </div>
  </section>
  <Footer />
</template>


