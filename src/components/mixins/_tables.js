export default ({url = '', method = 'post', init = false}) => {
  return {
    data() {
      return {
        num: '我是子组件mixin'
      }
    },
    created() {
      /* console.log('我是子组件mixin') */
    },
    mounted() {
      init == true && this.testYang()
    },
    methods: {
      testYang(obj) {
        this.num  = `${this.num}你好啊`
      }
    },
  }
}