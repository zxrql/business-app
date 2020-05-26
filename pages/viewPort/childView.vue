<template>
	<view class="qiun-columns" style="margin-top: 30rpx;">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">基本折线图</view>
		</view>
		<view class="qiun-charts" >
			<canvas 
				canvas-id="canvasLine"
				id="canvasLine"
				class="charts"
				@touchstart="touchLineA"
			></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../js_sdk/u-charts/u-charts.js';
	
	var chartData = {
		categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
		series: [{
			name: '成交量A',
			data: [35, 20, 25, 37, 4, 20],
			color: '#000000'
		}, {
			name: '成交量B',
			data: [70, 40, 65, 100, 44, 68]
		}, {
			name: '成交量C',
			data: [100, 80, 95, 150, 112, 132]
		}]
	}
	
	var _self;
	var canvasLine=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
			}
		},
		mounted() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			
			this.getServerData();				
		},
		methods: {
			getServerData(){
				let LineA={categories:[],series:[]};
				LineA.categories= chartData.categories;
				LineA.series= chartData.series;
				console.log(LineA)
				_self.showLineA("canvasLine",LineA);
				
			// 	uni.request({
			// 		url: 'https://www.ucharts.cn/data.json',
			// 		data:{
			// 		},
			// 		success: function(res) {
			// 			console.log(res.data.data)
			// 			let LineA={categories:[],series:[]};
			// 			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			// 			LineA.categories=res.data.data.LineA.categories;
			// 			LineA.series=res.data.data.LineA.series;
			// 			_self.showLineA("canvasLineA",LineA);
			// 		},
			// 		fail: () => {
			// 			_self.tips="网络错误，小程序端请检查合法域名";
			// 		},
			// 	});
			},
			showLineA(canvasId,chartData){
				canvasLine = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)+'元'}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						},
						
					}
				});
				
			},
			touchLineA(e) {
				canvasLine.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
</style>


