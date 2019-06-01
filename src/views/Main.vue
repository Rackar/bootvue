<template>
  <div>
    <b-container fluid class="bv-example-row">
      <navTop></navTop>

      <b-row>
        <b-col md="2">导航</b-col>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navTop from "./nav_top.vue";
export default {
  components: {
    navTop
  }
};
</script>

<style lang="scss" scoped></style>
