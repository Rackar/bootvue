<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-jumbotron>
            <template slot="header">
              <!-- <b-img src="/img/bg.jpg" rounded="circle" alt="Circle image" width="200"></b-img> -->
              <div>{{$t('main.title')}}</div>
            </template>

            <template slot="lead">{{$t('main.person')}}</template>

            <hr class="my-4">

            <p>{{$t('main.content')}}</p>
            <b-button variant="primary" class="mx-2" href="https://github.com/Rackar">Github</b-button>
            <b-button variant="primary" class="mx-2" href="https://gitee.com/rackar/">Gitee</b-button>
            <b-button variant="success" class="mx-2" href="https://blog.csdn.net/henjuewang">CSDN</b-button>
            <b-button
              variant="success"
              class="mx-2"
              href="https://www.jianshu.com/u/2d95604f4b82"
            >{{$t('main.jianshu')}}</b-button>
          </b-jumbotron>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card
            no-body
            header="技术文章"
            img-src="/img/article.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-5"
          >
            <b-list-group flush>
              <b-list-group-item button>Button item</b-list-group-item>
              <b-list-group-item button>I am a button</b-list-group-item>
              <b-list-group-item button disabled>Disabled button</b-list-group-item>
              <b-list-group-item button>This is a button too</b-list-group-item>
            </b-list-group>
            <b-card-body>
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
              consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
              mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
            </b-card-body>

            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          </b-card>
          <b-card
            title="开源项目"
            img-src="/img/soft.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-5"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="商业项目"
            img-src="/img/soft.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-2"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          <b-card
            no-body
            header="其他文章"
            img-src="/img/article.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-2 mt-5"
          >
            <b-list-group flush>
              <b-list-group-item button>Button item</b-list-group-item>
              <b-list-group-item button>I am a button</b-list-group-item>
              <b-list-group-item button disabled>Disabled button</b-list-group-item>
              <b-list-group-item button>This is a button too</b-list-group-item>
            </b-list-group>
            <b-card-body>
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
              consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
              mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
            </b-card-body>

            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          </b-card>
        </b-col>
      </b-row>
      <!-- <soft v-for="x in mysoft" :soft="x" :key="x.id"/> -->
    </b-container>
  </div>
</template>

<script>
// import soft from "./soft.vue";
export default {
  components: {
    // soft
  },
  data() {
    return {
      mysoft: [
        {
          name: "航测参数计算工具",
          type: "手机端、网页端",
          link: "http://www.codingyang.com/calc",
          content:
            "航空摄影中工作量和参数的计算。通过选择预设好的相机类型和飞机类型，输入分辨率和测区面积，得到相关参数如相对航高，基线和航线条数及飞行总小时。",
          img_url: "/img/calc.png"
        },
        {
          name: "航空影像统计树木数量",
          type: "桌面端",
          link:
            "https://jingyan.baidu.com/article/9faa7231e3f687473d28cb77.html",
          content:
            "通过加载航飞影像，软件自动提取和人工交互增补检查的流程，精确测定树木数量的软件。管理的公园、保护区、开发区、山头有多少棵树？当前主要采用抽样和统计的计算方法，数量统计准确率不高，不利于精细化管理。软件使用步骤见链接，桌面端软件暂未提供下载链接，请联系我获取。",
          img_url: "/img/tree.png"
        },
        {
          name: "航空影像快速质检",
          type: "桌面端",
          link: "/",
          content:
            "仅使用概略POS，快速评定航摄飞行质量。航摄质量检查的主要方法为传统人工检查法和软件自动检查法。人工检查耗时较长、效率偏低、容易漏检。自动检查效率较高，但需要准备相应的POS数据、影像数据和其他参数文件，其中影像数据需要一定时长，进行拼接匀色等处理才能得到结果。本软件仅使用POS数据直接定向，来快速评估飞行质量，定位可疑点。",
          img_url: "/img/zhijian.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
