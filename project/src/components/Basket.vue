<script setup>
import '../assets/css/basket.css'
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'
import {useRouter} from 'vue-router'
import VueCookies from "vue-cookies";

let token = VueCookies.get('token');
if (!token) {
  window.location = '/';
}

const router = useRouter()

let carts = [];
let allPrice = 0;
let countProducts = 0;

await axios.get('https://jurapro.bhuser.ru/api-shop/cart', {
  headers: { Authorization: `Bearer ${token}` }
}).then(response => {
  carts = response.data.data;
  carts.forEach(el => {
    el.count = 1;
    allPrice += el.price;
    countProducts += el.count;
  })
}).catch(error => {})

let order = async () => {
  await axios.post('https://jurapro.bhuser.ru/api-shop/order', {}, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(response => {
    router.push({ name:'confirmation'})
  })
};

let deleteProduct = async (id) => {
  await axios.delete(`https://jurapro.bhuser.ru/api-shop/cart/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(response => {
    location.reload()
  })
};

</script>

<template>
  <Header />
  <section class="basket">
    <h3>Корзина</h3>
    <div class="basket_products">
      <div class="basket_products_box">
        <div class="basket_products_details" v-for="cart in carts">
          <div class="basket_products_details">
            <div class="basket_products_imgDetails"></div>
            <div class="basket_products_informationDetails">
              <span>{{cart.name}}</span>
              <h5>Описание: {{cart.description}}</h5>
              <div class="basket_products_detailsQuantity">
                <button class="basket_products_imgDetailsMinus">-</button>
                <span>{{ cart.count }}</span>
                <button class="basket_products_imgDetailsAddition">+</button>
              </div>
            </div>
          </div>
          <span>{{cart.price}}₽</span>
          <button @click="deleteProduct(cart.id)">Удалить</button>
        </div>
      </div>
      <div class="basket_products_decor">
        <div class="basket_products_decorInfo">
          <span>К оплате: {{ allPrice }}₽.</span>
          <span>Количество товаров: {{countProducts}} шт.</span>
          <span>Доставка: Бесплатно.</span>
          <span>Адрес:Город Томск,XXXXXXXXXXXXXXXX.</span>
          <span>Оплата: Картой.</span>
          <span>Visa :795443******9832 09/25.</span>
          <button class="basket_products_decorBtn" @click="order()">Оплатить заказ</button>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

