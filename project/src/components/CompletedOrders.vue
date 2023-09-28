<script setup>
import '../assets/css/completedorders.css'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import VueCookies from "vue-cookies";

if (!VueCookies.get('token')) {
  window.location = '/';
}

</script>


<template>
  <Header />
    <section class="completedOrders">
      <h3>Оформленные заказы</h3>
      <div class="completedOrders_item">
        <div class="completedOrders_item_products">

        </div>
      </div>
    </section>
  <Footer />
</template>

