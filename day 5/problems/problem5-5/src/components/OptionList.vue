<template>
  <div>
    <h1 class="m-3">3. 옵션을 고르세요.</h1>
    <OptionListItem
      v-for="(option, index) in optionList"
      :key="`option-${index}`"
      :option="option"
      class="m-3"
    />
  </div>
</template>

<script>
import OptionListItem from './OptionListItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'OptionList',
  components: {
    OptionListItem,
  },
  computed: {
    ...mapState([
      'optionList'
    ])
    // optionList: function () {
    //   return this.$store.state.optionList
    // },
  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>
</style>