<script setup>
import '../assets/css/register.css'
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import { ref } from 'vue';

const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};

let name = '';
let fname = '';
let oname = '';
let email = '';
let password = '';
let repeat_password = '';
let errors = {};

let submit = async () => {
  errors = {}
  let fio = name + ' ' + fname + ' ' + oname;

  if (name.length === 0 || name.length > 30) {
    errors['name'] = 'Количество символов в имени больше 30 или вообще отсутсвуют'
  }
  if (fname.length === 0 || fname.length > 30) {
    errors['fname'] = 'Количество символов в фамилии больше 30 или вообще отсутсвуют'
  }
  if (oname.length === 0 || oname.length > 30) {
    errors['oname'] = 'Количество символов в отчестве больше 30 или вообще отсутсвуют'
  }
  if (email.indexOf('@') < 0) {
    errors['email'] = 'Отсутвует @ в поле e-mail'
  }
  if (password.length === 0 || password.length > 30) {
    errors['password'] = 'Количество символов в пароле больше 30 или вообще отсутсвует'
  }
  if (repeat_password.length === 0 || repeat_password.length > 30) {
    errors['repeat_password'] = 'Количество символов в пароле больше 30 или вообще отсутсвует'
  }
  if (password !== repeat_password) {
    errors['wrong_repeat'] = 'Пароли не совпадают'
  }

  if (Object.keys(errors).length === 0) {
    await axios.post('https://jurapro.bhuser.ru/api-shop/signup', {
      fio: fio,
      email: email,
      password: password
    }).then(response => {
      window.location = '/authorization'
    }).catch(errorResponse => {
      let errorsResponse = errorResponse.response.data.error.errors;
      Object.keys(errorsResponse).forEach(asd => {
        errors[asd] = errorsResponse[asd].toString();
      })
    });
  }

  forceRerender()
}
</script>

<template>
  <Header />
  <section class="registry">
    <h3>Регистрация</h3>
    <div v-if="componentKey"></div>
    <div class="registry_block">
      <form id="forma" class="registry_block_form" @submit.prevent="onSubmit">
        <label>
          <input v-model="name" type="text" placeholder="Ваше имя(Обязательно)"/>
        </label>
        <span v-if="errors['name']">{{errors.name}}</span>
        <label>
          <input v-model="fname" type="text" placeholder="Ваша Фамилия(Обязательно)"/>
        </label>
        <span v-if="errors['fname']">{{errors.fname}}</span>
        <label>
          <input v-model="oname" type="text" placeholder="Ваше Отчество(Обязательно)"/>
        </label>
        <span v-if="errors['oname']">{{errors.oname}}</span>
        <label>
          <input v-model="email" type="email" placeholder="Ваш e-mail(Обязательно)"/>
        </label>
        <span v-if="errors['email']">{{errors.email}}</span>
        <label>
          <input v-model="password" class="input" type="password"  placeholder="Пароль(Обязательно)"/>
        </label>
        <span v-if="errors['password']">{{errors.password}}</span>
        <label>
          <input v-model="repeat_password" class="input" type="password" placeholder="Повторение пароля(Обязательно)"/>
        </label>
        <span v-if="errors['repeat_password']">{{errors.repeat_password}}</span>
        <span v-if="errors['wrong_repeat']">{{errors.wrong_repeat}}</span>
        <button class="basket_products_decorButton press_activation" type="submit" @click="submit()">Зарегистрироваться</button>
      </form>
    </div>
  </section>
  <Footer />
</template>