<script>
import '../assets/css/authorization.css'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: {Footer, Header}
}

</script>

<template>
  <Header />
  <section class="authorization_box">
    <h3>Авторизация</h3>
    <div class="authorization_box_form">
      <form>
        <label>
          <input type="text" placeholder="Ваше имя(Обязательно)"/>
        </label>
        <label>
          <input type="text" placeholder="Ваша Фамилия(Обязательно)"/>
        </label>
        <label>
          <input class="input" type="password" placeholder="Пароль(Обязательно)"/>
        </label>
        <button class="press_activation basket_products_decorButton" type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </section>
  <Footer />
</template>
