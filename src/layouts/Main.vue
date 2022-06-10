<script setup lang="ts">
import "@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css";
import 'common-lib-vue/dist/common-lib-vue.css';
import {
  Header,
  PageContent,
  Footer,
} from 'common-lib-vue';
</script>

<template>
  <div class="page-layout">
    <Header imagePath='/images/' :title=" 'Hydra Forms' " />
    <div class="container mb-3 page-content">
      <ul class="links">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style>
.layout-container {
  width: 80%;
  margin: auto;
}

.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex-grow: 1;
}

.links {
  padding: 0;
}

.links>li {
  display: inline-block;
  padding-right: 1em;
}
</style>
