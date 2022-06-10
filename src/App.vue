<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Layout from "@/layouts/Main.vue"
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
  </header> -->
  <Layout>
    <RouterView />
  </Layout>
</template>

<style>
</style>
