<template>
  <q-page padding>
    <booking-card/>

    <h1>Познакомьтесь с базой отдыха Хуторок</h1>
    <q-card>
      <router-link to="/thermal">
        <q-img
          alt="Бассейны с термальной водой" src="../../assets/thermal-water.jpg"
          basic
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            Бассейны с термальной водой
          </div>
        </q-img>
      </router-link>
    </q-card>

    <q-card>
      <router-link to="/rooms">
        <q-img
          alt="Уютные домики и комфортные номера" src="../../assets/rooms.jpg"
          basic
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            Уютные домики и комфортные номера
          </div>
        </q-img>
      </router-link>
    </q-card>

    <q-card>
      <router-link to="/map">
        <q-img
          alt="Виртуальная прогулка по базе" src="../../assets/virtual-base.jpg"
          basic
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            Виртуальная прогулка по базе
          </div>
        </q-img>
      </router-link>
    </q-card>

  </q-page>
</template>

<style>
</style>

<script>
import BookingCard from 'components/BookingCard.vue';

export default {
  name: 'PageIndex',
  components: {
    BookingCard,
  },
};
</script>
