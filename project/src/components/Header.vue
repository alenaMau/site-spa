<script setup>
import '../assets/css/header.css'
import VueCookies from 'vue-cookies'

let showButton = false;
if (window.location.pathname.length > 1) {
  showButton = true
}

let token = VueCookies.get('token');
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
        <div class="header_icon_shoppingCart press_activation" v-if="!token">
          <div class="header_imgIcon_authorization"></div>
          <router-link :to="{ name: 'authorization' }"  class="header_nameIcon_authorization">
            Оформленные заказы
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="showButton" @click="$router.go(-1)" class="header_buttonHome">
      НАЗАД
    </div>
  </header>
</template>