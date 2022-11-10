<template>
  <div class="grid grid-cols-3 gap-1">
      <nav 
      class="flex flex-col col-span-1 mx-1 my-4 text-2xl border-2 border-black border-solid rounded-lg h-72"
      style="height: 30rem;"
      >
        <router-link to="/" class="py-1 pt-8">모든</router-link>
        <router-link to="/about" class="py-1">오늘</router-link>
        <router-link to="/important" class="py-1">중요</router-link>
      </nav>
      <div class="col-span-2 my-4 border-2 border-black border-solid rounded-lg h-72">
        <h1>중요 할일</h1>
      </div>
    </div>
</template>
