<template>
  <q-page padding>
    <div class="auth-tabs">
      <q-banner class="bg-grey-3">
        <div
          v-text="$t('news')"
          class="text-center font-size_20"
        />
      </q-banner>
      <form @submit.prevent="submitForm" class="q-pa-md">
        <div class="q-gutter-md">
         <q-input
            outlined
            v-model="formData.id"
            v-bind:label="$t('id')"
            ref="login"
           />
           <img v-bind:src="$store.state.content.oneNew.news.main_image">

           <p>{{$store.state.content.oneNew.news.title}}</p>
           <p>{{$store.state.content.oneNew.news.description}}</p>
           <p>{{$store.state.content.oneNew.news.content}}</p>
          <div class="row">
            <q-btn color="primary" v-bind:label="$t('read')" type="submit" />
          </div>
        </div>
      </form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      formData: {
        id: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.login.validate();
      if (
        !this.$refs.login.hasError
      ) {
        this.$store.dispatch('content/getOneNews', this.formData)
          .then(() => {
            this.$router.push({ name: 'news' });
          })
          .catch((error) => {
            this.$q.notify({
              icon: 'close',
              color: 'negative',
              message: error,
            });
          });
      }
    },
  },
};
</script>
