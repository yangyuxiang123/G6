<template>
  <div class="hello">
    <el-button type="primary" @click="goRouter()">切换按钮</el-button>
    <div id="mountNode" style="border: 1px solid #ccc;width: 1200px;float: right;"></div>
    <el-drawer
      title="我是标题"
      :visible.sync="list"
      :with-header="false">
      <p><span>label: </span><input type="text" v-model="datas.label"></p>
      <p><span>class: </span><input type="text" v-model="datas.class"></p>
      <footer @click="submit()">提交</footer>
    </el-drawer>
  </div>
</template>

<script>
import G6 from '@antv/g6';
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: {
        nodes: [{
          id: 'node1',
          x: 100,
          y: 200,
          label: '目标点1'
        },{
          id: 'node2',
          x: 300,
          y: 200,
          label: '目标点2'
        },{
          id: 'node3',
          x: 300,
          y: 200,
          label: '目标点3'
        },{
          id: 'node4',
          x: 300,
          y: 200,
          label: '目标点4'
        }],
        edges: [{
          source: 'node1',
          target: 'node2',
          label: '我是连线1',
          style: {
            stroke: 'red'
          }
        },{
          source: 'node2',
          target: 'node3',
          label: '我是连线2'
        },{
          source: 'node3',
          target: 'node4',
          label: '我是连线3'
        }]
      },
      datas: {},
      list: false
    }
  },
  mounted() {
    this.init()                
  },
  methods: {
    goRouter() {
      this.$router.push('/checkPicture')
    },
    init() {
      const graph = new G6.Graph({
        container: 'mountNode',
        width: 1200,
        height: 900,
        animate: true,
        fitView: true,
        fitViewPadding: [20,40,50,20],
        defaultNode: {
          size: 100,
          style: {
            fill: '#bae637',
            stroke: '#eaff8f',
            lineWidth: 5,
          },
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 35
            }
          }
        },
        defaultEdge: {
          style: {
             lineWidth: 2,
             stroke: '#bae637',
             endArrow: {
              path: 'M 7,0 L -7,-7 L -7,7 Z', 
              d: 5 
            },
          },
          labelCfg: {
            autoRotate: true,
            refY: 15,
            style: {
              fill: '#eaff8f',
              fontSize: 35,
            }
          }
        },
        layout: {
          type: 'force',
          linkDistance: 500,
          preventOverlap: true
        },
        nodeStateStyles: {
          hover: {
            fill: 'lightsteelblue'
          },
          click: {
            stroke: '#000',
            lineWidth: 3
          }
        },
        edgeStateStyles: {
          hover: {
            fill: 'red'
          },
          click: {
            stroke: 'steelblue',
            lineWidth: 6
          }
        },
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'drag-node',
            {
              type: 'tooltip',
              formatText(model) {
                const text = 'label: ' + model.label + '<br /> classs: ' + model.class
                return text
              },
              shouldUpdate: e => {
                return true;
              }
            },
            {
              type: 'edge-tooltip',
              formatText(model) {
                const text = 'source: ' + model.source
                + '<br/> target: ' + model.target
                + '<br/> weight: ' + model.weight;
                return text;
              },
              shouldUpdate: e => {
                return true;
              }
          }]
        }
      })
      const main = async () =>{
        const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',)
        const remoteData = await response.json();
        graph.data(remoteData)
        graph.render()

        graph.on('node:mouseenter', e =>{
          const nodeItem = e.item
          graph.setItemState(nodeItem, 'hover', true)
        })
        graph.on('node:mouseleave', e =>{
          const nodeItem = e.item 
          graph.setItemState(nodeItem, 'hover', false)
        })
        graph.on('node:click', e =>{
          this.list = true
          const clickNodes = graph.findAllByState('node', 'click')
          clickNodes.forEach(i =>{
            graph.setItemState(i, 'click', false)
          })
          const nodeItem = e.item
          this.datas = e.item.defaultCfg.model
          console.log(this.datas)
          graph.setItemState(nodeItem, 'click', true )
        })
        graph.on('edge:click', e =>{
          const clickEdges = graph.findAllByState('edge', 'click')
          clickEdges.forEach(j => {
            graph.setItemState(j, 'click', false)
          })
          const nodeItem = e.item
          graph.setItemState(nodeItem, 'click', true)
        })
      }
      main()
    },
    submit() {
      this.list = false
      this.$nextTick(_ =>{
        location.reload()
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.hello{
  position: relative;
}
.dialog{
  background: #ffffff;
  border: 1px solid #cccccc;
  position: absolute;
  top: 0;
  right: 0;
}
.dialog footer{
  cursor: pointer;
}
.g6-tooltip {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-size: 12px;
  color: #545454;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 8px;
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
}
</style>
