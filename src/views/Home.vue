<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <li>有md sm等 就按指定的来</li>
      <li>只有cols=0-12,则在没有上条的条件下起作用</li>
      <li>再没有的就拉伸</li>
    </ul>
    <b-container class="bv-example-row">
      <b-row>
        <b-col> 1 of 3 </b-col>
        <b-col cols="8"> 2 of 3 </b-col>
        <b-col> 3 of 3 </b-col>
      </b-row>
      <b-row>
        <b-col> 1/3 </b-col>
        <b-col> 2 of 3 </b-col>
        <b-col> 3 of 3 </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col col lg="2">1 of 3</b-col>
        <b-col cols="12" md="auto"
          >Variable width contentasdfasdfasdfsadfsadfsdfsdf</b-col
        >
        <b-col col lg="2">3 of 3</b-col>
      </b-row>

      <b-row>
        <b-col>1 of 3</b-col>
        <b-col cols="12" md="auto">Variable width content</b-col>
        <b-col col lg="2">3 of 3</b-col>
      </b-row>

      <b-row>
        <b-col> col </b-col>
        <b-col> col </b-col>
        <b-col> col </b-col>
        <b-col> col </b-col>
      </b-row>
      <b-row>
        <b-col cols="8"> col-8 </b-col>
        <b-col cols="4"> col-4 </b-col>
      </b-row>
      <div>
        小型以上有比例 small开始向下堆叠576px以下
      </div>

      <b-row>
        <b-col sm="8"> col-sm-8 </b-col>
        <b-col sm="4"> col-sm-4 </b-col>
      </b-row>

      <b-row>
        <b-col sm> col-sm </b-col>
        <b-col sm> col-sm </b-col>
        <b-col sm> col-sm </b-col>
      </b-row>

      <div>
        通过制作一个全宽和另一个半宽来堆叠移动中的列
      </div>
      <b-row>
        <b-col cols="12" md="8"> cols =12 md ="8" </b-col>
        <b-col cols="6" md="4"> cols =6md =4 </b-col>
      </b-row>
      <div>
        在移动设备上以50％的宽度开始列，在桌面上以高达33.3％的宽度开始
      </div>
      <b-row>
        <b-col cols="6" md="4"> cols =6md =4 </b-col>
        <b-col cols="6" md="4"> cols =6md =4 </b-col>
        <b-col cols="6" md="4"> cols =6md =4 </b-col>
      </b-row>
      <div>
        列总是50％宽，在移动设备和桌面设备上
      </div>
      <b-row>
        <b-col cols="6"> cols =6 </b-col>
        <b-col cols="6"> cols =6 </b-col>
      </b-row>
    </b-container>

    <h3>行垂直对齐：</h3>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-v="start">
        <b-col>三列中的一列</b-col>
        <b-col>三列中的一列</b-col>
        <b-col>三列中的一列</b-col>
      </b-row>

      <b-row align-v="center">
        <b-col>三列中的一列</b-col>
        <b-col>三列中的一列</b-col>
        <b-col>三列之一列</b-col>
      </b-row>

      <b-row align-v="end">
        <b-col>三列中的一列</b-col>
        <b-col>三列中的一列</b-col>
        <b-col>三列之一列</b-col>
      </b-row>

      <h3>行中各个列的垂直方向对齐：</h3>
      <b-row>
        <b-col align-self="start">One of three columns</b-col>
        <b-col align-self="center">One of three columns</b-col>
        <b-col align-self="end">One of three columns</b-col>
      </b-row>
    </b-container>

    <h3>行内水平对齐：前，中，后，平均，两端</h3>
    <b-container class="bv-example-row">
      <b-row align-h="start">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>

      <b-row align-h="end">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>
      around：
      <b-row align-h="around">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>
      between：
      <b-row align-h="between">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
      </b-row>
    </b-container>

    <h3>排序问题：</h3>
    <h5>order指定</h5>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>First, but unordered</b-col>
        <b-col order="12">Second, but last</b-col>
        <b-col order="1">Third, but first</b-col>
      </b-row>
    </b-container>

    <h5>offset 偏移：</h5>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col md="4">md="4"</b-col>
        <b-col md="4" offset-md="4">md="4" offset-md="4"</b-col>
      </b-row>

      <b-row>
        <b-col md="3" offset-md="3">md="3" offset-md="3"</b-col>
        <b-col md="3" offset-md="3">md="3" offset-md="3"</b-col>
      </b-row>

      <b-row>
        <b-col md="6" offset-md="3">md="6" offset-md="3"</b-col>
      </b-row>
    </b-container>

    <h5>指定大尺寸的offset为0</h5>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col sm="5" md="6">sm="5" md="6"</b-col>
        <b-col sm="5" offset-sm="2" md="6" offset-md="0"
          >sm="5" offset-sm="2" md="6" offset-md="0"</b-col
        >
      </b-row>

      <b-row>
        <b-col sm="6" md="5" lg="6">sm="6" md="5" lg="6"</b-col>
        <b-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0"
          >sm="6" md="5" offset-md="2" col-lg="6" offset-lg="0"</b-col
        >
      </b-row>
    </b-container>
    <h5>自动间隔：</h5>
    <b-container fluid class="text-light text-center">
      <b-row class="mb-3">
        <b-col md="4" class="p-3 bg-info">md="4"</b-col>
        <b-col md="4" class="ml-auto p-3 bg-info">md="4" .ml-auto</b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col md="3" class="ml-md-auto p-3 bg-info">md="3" .ml-md-auto</b-col>
        <b-col md="3" class="ml-md-auto p-3 bg-info">md="3" .ml-md-auto</b-col>
      </b-row>

      <b-row>
        <b-col cols="auto" class="mr-auto p-3 bg-info"
          >cols="auto" .mr-auto</b-col
        >
        <b-col cols="auto" class="p-3 bg-info">cols="auto"</b-col>
      </b-row>
    </b-container>
    <h5>嵌套指定：</h5>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col sm="9">
          Level 1: sm="9"
          <b-row>
            <b-col cols="8" sm="6">Level 2: cols="8" sm="6"</b-col>
            <b-col cols="4" sm="6">Level 2: cols="4" sm="6"</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>
<style></style>
<style lang="scss">
.bv-example-row {
  &.bv-example-row-flex-cols {
    .row {
      height: 100px;
      border: 2px red dotted;
    }
  }
  background-color: bisque;
  .row {
    div {
      border: 1px solid grey;
    }
  }
}
</style>
