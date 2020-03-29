<!--News.vue-->
<template>
  <div>
    <md-layout md-gutter md-row md-align="start center">
      <card v-for="news in feedNews" :key="news"> news</card>
    </md-layout>
  </div>
</template>

<script type="text/javascript">
import Card from '@/components/card.vue'
export default {
  name: 'News',
  data () {
    return {
      publishId: '',
      feedNews: ''
    }
  },
  methods: {
    initData: function (id) {
      let queryString = ''
      queryString = 'https://newsapi.org/v1/articles?source=' + id + '&apiKey=aa7f04f1086f4454bc2041b677f3fd26'
      this
        .$http
        .get(queryString)
        .then(function (res) {
          console.log(res.body.articles)
          this.feedNews = res.body.articles
        })
        .catch(function (err) {
          this.feedNews = err
        })
    }
  },
  components: {
    Card
  },
  created: function () {
    this.publishId = this.$route.params.id
    this.initData(this.publishId)
  }
}
</script>
