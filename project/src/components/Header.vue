<script setup>
import '../assets/css/header.css'
import VueCookies from 'vue-cookies'
import axios from "axios";

let showButton = false;
if (window.location.pathname.length > 1) {
  showButton = true
}

let token = VueCookies.get('token');

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

let logout = () => {
  axios.get('https://jurapro.bhuser.ru/api-shop/logout', config).then(response => {
    if (response.data.data.message === 'logout') {
      VueCookies.remove('token')
      window.location = '/'
    }
  }).catch(error => {});
}

</script>

<template>
  <header link="#F6F7CD" vlink="#F6F7CD" alink="#F6F7CD">
    <div class="header_logo">
      <h3 class="header_logo_name">
        <router-link :to="{ name: 'home' }">
          Просто купить
        </router-link>
      </h3>
    </div>
    <div class="header_siteSearch" v-if="!showButton">
      <div class="header_icon">
        <div class="header_icon_shoppingCart press_activation" v-if="token">
          <div class="header_imgIcon_shoppingCart"></div>
          <router-link :to="{ name: 'basket' }"  class="header_nameIcon_shoppingCart">
            Корзина
          </router-link>
        </div>
        <div class="header_icon_shoppingCart press_activation" v-if="!token">
          <div class="header_imgIcon_user"></div>
          <router-link :to="{ name: 'register' }" class="header_nameIcon_user">
            Регистрация
          </router-link>
        </div>
        <div class="header_icon_shoppingCart press_activation" v-if="!token">
            <div class="header_imgIcon_authorization"></div>
            <router-link :to="{ name: 'authorization' }"  class="header_nameIcon_authorization">
              Вход
            </router-link>
        </div>
        <router-link :to="{ name: 'completedOrders' }" class="header_nameIcon_completedOrders">
          <div class="header_icon_shoppingCart press_activation" v-if="token">
            <div class="header_imgIcon_completedOrders"></div>
            <span>Оформленные заказы</span>
          </div>
        </router-link>
        <div class="header_icon_shoppingCart press_activation" v-if="token" @click="logout()">
          <div class="header_imgIcon_out"></div>
          <span class="header_nameIcon_completedOrders">
            Выход
          </span>
        </div>
      </div>
    </div>
    <div v-if="showButton" @click="$router.go(-1)" class="header_buttonHome">
      НАЗАД
    </div>
  </header>
</template>