<template>
  <q-page padding>
    <div class="auth-tabs">
      <q-banner class="bg-grey-3">
        <div
          v-text="$t('news')"
          class="text-center font-size_20"
        />
      </q-banner>
        <div class="q-gutter-md">
           <template v-if="$store.state.content.oneNew!=undefined">
           <img v-bind:src="$store.state.content.oneNew.news.main_image">
           <h4>{{$store.state.content.oneNew.news.title}}</h4>
           <p id="desc">{{$store.state.content.oneNew.news.description}}</p>
           <p>{{$store.state.content.oneNew.news.content}}</p>
      <div class="row">
      <div
          v-for="(im,index) in $store.state.content.oneNew.news.content_images"
          :key="index"
          class="card-link"
        >
            <img class='imgs'
              :src="im"
              basic
              :ratio="ratio"
            />
          </div>
        </div>
        <p>{{$store.state.DateStr}}</p>
           </template>
           <div class="row">
           <div class="col-md-6 col-lg-6">
            <q-btn id="prevB" color="primary"
            v-bind:label="$t('newPrev')"
            v-if="formData.id>1"
            v-on:click="prev" />
           </div>
           <div class="col-md-6 col-lg-6">
            <q-btn id="nextB" color="primary" v-bind:label="$t('newNext')" v-on:click="next" />
            </div>
          </div>
        </div>
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
  created() {
    this.formData.id = this.$route.params.id;
    this.$store.dispatch('content/getOneNews', this.formData)
      .then(() => {
        console.log('content=', this.$store.state.content);
        const dateD = this.$store.state.content.oneNew.news.created_at;
        const date1 = new Date(dateD);
        this.$store.state.DateStr = date1.toDateString();
        this.$router.push({ name: 'news', params: { id: this.$route.params.id } });
      })
      .catch((error) => {
        this.$q.notify({
          icon: 'close',
          color: 'negative',
          message: error,
        });
      });
  },
  methods: {
    prev() {
      this.formData.id = Number(this.formData.id) - 1;
      this.$store.dispatch('content/getOneNews', this.formData)
        .then(() => {
          const dateD = this.$store.state.content.oneNew.news.created_at;
          const date1 = new Date(dateD);
          this.$store.state.DateStr = date1.toDateString();
        })
        .catch((error) => {
          this.$q.notify({
            icon: 'close',
            color: 'negative',
            message: error,
          });
        });
      this.$router.push({ name: 'news', params: { id: Number(this.$route.params.id) - 1 } });
    },
    next() {
      this.formData.id = Number(this.formData.id) + 1;
      this.$store.dispatch('content/getOneNews', this.formData)
        .then(() => {
          const dateD = this.$store.state.content.oneNew.news.created_at;
          const date1 = new Date(dateD);
          this.$store.state.DateStr = date1.toDateString();
        })
        .catch((error) => {
          this.$q.notify({
            icon: 'close',
            color: 'negative',
            message: error,
          });
        });
      this.$router.push({ name: 'news', params: { id: Number(this.$route.params.id) + 1 } });
    },
  },
};
</script>

<style>
.auth-tabs {
  max-width: 80%;
  margin: 0 auto;
  border: 1px solid lightgrey;
}
img{
width: 96%;
padding-left: 5px;
padding-right: 5px;
}
.imgs{
width: 350px;
height: 250px;
padding: 10px;
}
p{
font-size:18px;
font-family:"corbel";
color:#708090;
padding-left: 10px;
}
h4{
color:DarkOliveGreen;
text-align: center;
}
#prevB{
margin-left: 30px;
margin-right: 50px;
}
#nextB{
margin-left: 50px;
margin-right: 30px;
}
#desc{
font-style:italic;
text-align: center;

}
</style>
