<template>
  <div id="app">
    <div class="container">
      <h1>SSAFY TUBE</h1>
      <SearchBarVue @input-change="inputChange" />

      <div class="row">
        <div class="col-12 col-lg-8">
          <VideoDetailVue :selected-video="selectedVideo" />
        </div>

        <div class="col-12 col-lg-4">
          <VideoListVue :videos="videos" @select-video="selectVideo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBarVue from "./components/SearchBarVue.vue";
import VideoListVue from "./components/VideoListVue.vue";
import VideoDetailVue from "./components/VideoDetailVue.vue";
import axios from "axios";

const API_KEY = "AIzaSyCgsPrI-IGeknPvHv8RTj7rrTuRfrdOsGI";

const API_KEY2 = process.env.VUE_APP_YOUTUBE_KEY;

console.log(API_KEY2);

export default {
  name: "App",
  components: {
    SearchBarVue,
    VideoListVue,
    VideoDetailVue,
  },
  data: function () {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    selectVideo: function (video) {
      this.selectedVideo = video;
      console.log(this.selectedVideo.snippet.title);
    },
    inputChange: function (query) {
      // console.log(query);
      axios({
        method: "get",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          key: API_KEY,
          part: "snippet",
          q: query,
          type: "video",
        },
      })
        .then((res) => {
          console.log(res.data.items);
          this.query = "";
          this.videos = res.data.items;
        })
        .catch((err) => {
          alert("검색 결과 없음");
          return;
        });
    },
  },
};
</script>

<style>
* {
  font-family: "Noto Sans KR", sans-serif;
}

#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
