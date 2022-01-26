<template>
  <div id="a" :class="className" :style="{height:heights,width:widths}" />
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
        type: String,
        default: 'chart'
    },
    widths: {
        type: String,
        default: '100%'
    },
    heights: {
        type: String,
        default: '70px'
    },
    SUM: {
        type: String,
        default: ''
    },
    flag: {
        type: Boolean,
        default: true
    },
    legend:{
       type:Array,
       default: () => { return [] }
    },
    //前面bar 数据
    frontBarData:{
       type:Array,
       default: () => { return [] }
    },
    yAxisData:{
        type:Array,
        default: () => { return [] }
    },
  },
  watch:{
    frontBarData(){
      this.initChart()
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
  },
  methods: {
    initChart() {
        this.chart =this.$echarts.init(this.$el, 'macarons')
         let frontBarData = this.frontBarData;
         let yAxisData = this.yAxisData;
         this.chart.setOption({
             grid:{
                top: '0px',
                left: '-40px',
                right:'1px',
                bottom:'-15px',
                containLabel:true
             },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                show:false,
                data: yAxisData
            },
            yAxis: {
                type: 'value',
                show:false,
                max:1400,
            },
            series: [
                {
                data: frontBarData,
                type: 'line',
                symbolSize:0,
                smooth:true,
                areaStyle: {         // 颜色自上而下渐变
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
                                offset: 0,
                                color: '#8b8b8b'
                            }, {
                                offset: 0.9,
                                color: '#3b3b3c'
                            }]),
                            opacity: 1    // 填充区域透明度
                        },
                lineStyle:{
                    width:1,
                    color:'#fff'
                }
                }
            ]
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  rel="stylesheet/scss">
</style>
