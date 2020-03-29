<template>
  <md-layout>
    <md-layout md-row>
      <md-layout v-for="publish in publishers" :key="publish.id" md-flex="33" md-align="center">
        <md-card md-with-hover class="card">
          <md-card-header>
            <div class="md-title">{{publish.name}}</div>
          </md-card-header>

          <md-card-content>
            {{publish.description}}
          </md-card-content>

          <md-card-actions>
            <md-button @click="readMore(publish)">About this publisher</md-button>
            <md-button @click="getFeed(publish)">Get News From</md-button>
          </md-card-actions>
        </md-card>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
export default{
  data () {
    return {
      publishers: ''
    }
  },
  methods: {
    initData: function () {
      this
        .$http
        .get('https://newsapi.org/v1/sources?language=en')
        .then(function (res) {
          console.log(res)
          this.publishers = res.body.sources
        })
        .catch(function (err) {
          this.publishers = err
        })
    },
    readMore: function (publish) {
      window.open(publish.url, '_blank')
    },
    getFeed: function (publish) {
      this.$router.push({name: 'News', params: {id: publish.id}})
    }
  },
  created: function () {
    this.initData()
  }
}
</script>

<style>
.card{
  width: 80%;
  margin-bottom: 20px;
}
</style>
