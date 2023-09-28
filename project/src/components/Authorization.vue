<script setup>
import '../assets/css/authorization.css'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import axios from "axios";
import VueCookies from 'vue-cookies'

import { ref } from 'vue';
if (VueCookies.get('token')) {
  window.location = '/';
}
console.log(VueCookies)
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};


let email = '';
let password = '';
let errors = {};
let requestError = '';

let submit = async () => {
  errors = {}
  if (email.indexOf('@') < 0) {
    errors['email'] = 'Отсутвует @ в поле e-mail'
  }
  if (password.length === 0 || password.length > 30) {
    errors['password'] = 'Количество символов в пароле больше 30 или вообще отсутсвует'
  }

  if (Object.keys(errors).length === 0) {
    await axios.post('https://jurapro.bhuser.ru/api-shop/login', {
      email: email,
      password: password
    }).then(response => {
      let token = response.data.data.user_token;
      VueCookies.set('token', token);
      window.location = '/'
    }).catch(errorResponse => {
      requestError = errorResponse.response.data.error.message;
    });
  }
  forceRerender()
}
// qweqweqwe@mail.ru
// qweqweqwe@mail.ru
// ret
</script>

<template>
  <Header/>
  <section class="authorization_box">
    <h3>Авторизация</h3>
    <div v-if="componentKey"></div>
    <div class="authorization_box_form">
      <form id="forma" @submit.prevent="onSubmit">
        <label>
          <input v-model="email" type="email" placeholder="Ваш e-mail(Обязательно)"/>
        </label>
        <span v-if="errors['email']">{{errors.email}}</span>
        <label>
          <input v-model="password" class="input" type="password" placeholder="Пароль(Обязательно)"/>
        </label>
        <span v-if="errors['password']">{{errors.password}}</span>
        <span v-if="requestError">{{requestError}}</span>
        <button class="press_activation basket_products_decorButton" type="submit" @click="submit()">Войти</button>
      </form>
    </div>
  </section>
  <Footer />
</template>
