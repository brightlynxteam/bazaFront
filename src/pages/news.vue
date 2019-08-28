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
      <q-banner class="bg-grey-3">
        <div
          v-text="$t('new1')"
          class="text-center font-size_20"
        />
      </q-banner>       
         <q-input
            outlined
            v-model="formData.id"
            v-bind:label="$t('id')"
            ref="login"
           />
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
        this.$store.dispatch('news/getOneNews', this.formData)
          .then(() => this.$router.push({ name: 'booking' }))
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

<style>
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid lightgrey;
}
</style>
