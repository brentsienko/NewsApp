<template>
  <md-layout md-flex="33" md-row md-align="center">
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">{{news.title}}</div>
        <div class="md-subhead">{{news.author}}</div>
      </md-card-header>

      <md-card-media>
        <img :src="news.urlToImage">
      </md-card-media>

      <md-card-content>
        {{news.description}}
      </md-card-content>

      <md-card-actions>
        <md-button @click="readMore">Read More</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</template>

<script type="text/javascript">
export default {
  name: 'Card',
  props: ['news'],
  methods: {
    readMore: function () {
      window.open(this.news.url, '_blank')
    }
  }
}
</script>
<style>
  .md-theme-default.md-card {
    background-color: #fff;
    width: 70%;
    margin-bottom: 20px;
  }
</style>
