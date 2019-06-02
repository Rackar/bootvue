<template>
  <div class="about">
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
      <!-- <b-navbar fixed="top" toggleable="lg" type="dark" variant="info"> -->
      <b-navbar-brand to="/">{{$t('menu.main-title')}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/article">{{$t('menu.article')}}</b-nav-item>
          <b-nav-item to="/app">{{$t('menu.app')}}</b-nav-item>
          <b-nav-item to="/person">{{$t('menu.about')}}</b-nav-item>
          <b-nav-item to="/home">{{$t('menu.test')}}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('menu.keyword')"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">{{$t('menu.search')}}</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#" @click="changeLang('zh')">中文</b-dropdown-item>
            <b-dropdown-item href="#" @click="changeLang('en')">EN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">{{$t('menu.config')}}</template>
            <b-dropdown-item href="#">{{$t('menu.me')}}</b-dropdown-item>
            <b-dropdown-item href="#">{{$t('menu.signout')}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { setup } from "../locales/index";
export default {
  methods: {
    changeLang(lang) {
      setup(lang);
    }
  }
};
</script>

