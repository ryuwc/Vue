<template>
  <div>
    <p v-if="!imgSrc">{{ message }}</p>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',

  data() {
    return {
      imgSrc: null,
      message: '로딩 중..',
    };
  },
  methods: {
    getDogImage() {
      const breed = this.$route.params.breed
      const DOG_URL = `https://dog.ceo/api/breed/${breed}/images/random`
      axios({
        method: 'get',
        url: DOG_URL
      })
      .then((res) => {
        console.log(res);
        const imgSrc = res.data.message
        this.imgSrc = imgSrc
      })
      .catch((err) => {
        // this.message = `${this.$route.params.breed}는 없는 품종입니다.`
        this.$router.push('/404')
        console.log(err);
      })
    }
  },
  created() {
    this.getDogImage()
  }
};
</script>

<style lang="scss" scoped>

</style>