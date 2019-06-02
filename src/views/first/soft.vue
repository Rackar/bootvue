<template>
  <div class="soft">
    <div class="left">
      <img :src="soft.img_url" alt>
    </div>
    <div class="right">
      <b-row type="flex" class="row-bg" justify="space-around">
        <b-col :span="8">
          <span class="title">{{ soft.name }}</span>
        </b-col>
        <b-col :span="8">{{ soft.type }}</b-col>
        <b-col :span="8">
          <b-link :href="soft.link" target="_blank">链接地址</b-link>
        </b-col>
      </b-row>
      <div class="content">{{ soft.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    soft: {
      type: Object,
      default() {
        return {
          name: "",
          type: "页",
          link: "http://",
          content: "",
          img_url: "/img/calc.png"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.soft {
  border-bottom: 1px solid rgb(185, 184, 184);
  width: 100%;
  margin: 10px 5px;

  text-align: center;
  color: #303133;
  //   width: 100%;
  .left {
    margin: 1%;
    display: inline-block;
    width: 150px;
    img {
      width: 150px;

      // float: left;
    }
  }
  .right {
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 72%;
    margin: 1%;

    display: inline-block;
    border-top: 1px;
    border-bottom: 1px;
    font-size: 16px;
    .title {
      font-family: Arial, Helvetica, sans-serif;
      // font-weight: 400;
      // background-color: rgb(225, 236, 236);
      border-radius: 5px;
      padding: 1px 4px;
      font-weight: bold;
      font-size: 18px;
    }

    .content {
      //   border:1px solid gray;
      display: inline-block;
    }
  }
}
</style>
