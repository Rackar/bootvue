<template>
    <div>
        <b-input class='h3'></b-input>
        <div ref="editor" style="text-align:left"></div>
        <button v-on:click="getContent">查看摘要</button>  <button v-on:click="getContent">发布</button>
        <h3>预览</h3>
        <div>{{this.editorContent}}</div>
        <h3>摘要</h3>
        <div>{{this.text}}</div>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
      name: 'editor',
      data () {
        return {
          editorContent: '',
          text:"",
          editor:{}
        }
      },
      methods: {
        getContent: function () {
            // alert(this.editorContent)
            this.text=this.editor.txt.text()
        }
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        this.editor=editor
        editor.customConfig.uploadImgShowBase64 = true  //base64字符串 和下面的只能二选一
        // editor.customConfig.uploadImgServer = '/upload' //服务器形式上传
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
          
        }
        editor.create()
      }
    }
</script>

<style scoped>
</style>