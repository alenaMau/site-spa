<script setup>
import '../assets/css/basket.css'
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'
import {
  useRouter
} from 'vue-router'
import {ref} from "vue";

const router = useRouter()

const count = ref(1)
</script>

<template>
  <Header />
  <section class="basket">
    <h3>Корзина</h3>
    <div class="basket_products">
      <div class="basket_products_box">
        <div class="basket_products_details">
          <div class="basket_products_details">
            <div class="basket_products_imgDetails"></div>
            <div class="basket_products_informationDetails">
              <span>Прозрачный блеск для губ из клубники</span>
              <div class="basket_products_detailsQuantity">
                <button class="basket_products_imgDetailsAddition">-</button>
                <span>1</span>
                <button class="basket_products_imgDetailsAddition">+</button>
              </div>
            </div>
          </div>
          <span>99₽</span>
        </div>
        <div class="basket_products_details">
          <div class="basket_products_details">
            <div class="basket_products_imgDetails"></div>
            <div class="basket_products_informationDetails">
              <span>Прозрачный блеск для губ из клубники</span>
              <div class="basket_products_detailsQuantity">
                <button class="basket_products_imgDetailsAddition">-</button>
                <span>1</span>
                <button class="basket_products_imgDetailsAddition">+</button>
              </div>
            </div>
          </div>
          <span>99₽</span>
        </div>
        <div class="basket_products_details">
          <div class="basket_products_details">
            <div class="basket_products_imgDetails"></div>
            <div class="basket_products_informationDetails">
              <span>Прозрачный блеск для губ из клубники</span>
              <div class="basket_products_detailsQuantity">
                <button class="basket_products_imgDetailsAddition">-</button>
                <span>1</span>
                <button class="basket_products_imgDetailsAddition">+</button>
              </div>
            </div>
          </div>
          <span>99₽</span>
        </div>
        <div class="basket_products_details">
          <div class="basket_products_details">
            <div class="basket_products_imgDetails"></div>
            <div class="basket_products_informationDetails">
              <span>Прозрачный блеск для губ из клубники</span>
              <div class="basket_products_detailsQuantity">
                <button class="basket_products_imgDetailsMinus" @click="count--">-</button>
                <span>{{ count }}</span>
                <button class="basket_products_imgDetailsAddition" @click="count++">+</button>
              </div>
            </div>
          </div>
          <span>99₽</span>
        </div>
      </div>
      <div class="basket_products_decor">
        <div class="basket_products_decorInfo">
          <span>К оплате: 467₽.</span>
          <span>Количество товаров: 4 шт.</span>
          <span>Доставка: Бесплатно.</span>
          <span>Адрес:Город Томск,XXXXXXXXXXXXXXXX.</span>
          <span>Адрес:Город Томск,XXXXXXXXXXXXXXXX.</span>
          <span>Оплата: Картой.</span>
          <span>Visa :795443******9832 09/25.</span>
          <button class="basket_products_decorBtn" @click="router.push({ name:'confirmation'})">Оплатить заказ</button>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

