<script setup>
import '../assets/css/confirmation.css'
import VueCookies from "vue-cookies";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import {useRouter} from 'vue-router'

if (!VueCookies.get('token')) {
  window.location = '/';
}

const router = useRouter()

</script>

<template>
  <Header />
  <section class="confirmation">
    <div class="confirmation_img"></div>
    <h3>Оплата прошла успешно</h3>
    <button class="press_activation basket_products_decorB" @click="router.push({ name:'home'})">Вернуть на главную страницу</button>
  </section>
  <Footer />
</template>



