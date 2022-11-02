<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div class="border">
    <h1>내가 만든 새로운 컴포넌트다!</h1>
    <!-- 3. 불러오기 -->
    <MyComponentItem
      static-props="MyComponent에서 보낸 데이터"
      :dynamic-props="dynamicProps"
      @help-me="parentGetEvent"
      @child-input="getDynamicData"
    />
  </div>
</template>

<script>
// 1. 불러오기
import MyComponentItem from "./MyComponentItem.vue";

export default {
  name: "MyComponent",
  components: {
    // 2. 등록하기
    MyComponentItem,
  },
  data: function () {
    return {
      dynamicProps: "이건 동적인 데이타",
    };
  },
  methods: {
    parentGetEvent: function (childdata) {
      console.log("오케이!!!!");
      console.log(childdata);
    },
    getDynamicData: function (childInputData) {
      console.log(`사용자가 입력한 값 : ${childInputData}`);
    },
  },
};
</script>

<style>
.border {
  border: solid 1px black;
}
</style>
