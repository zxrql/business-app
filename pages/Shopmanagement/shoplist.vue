<template>
	<view>
		<!-- 搜索商品开始 -->
		<view class="cu-bar search " style="width: 100%;height: 140rpx;background-color: #0099ff;">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索商品" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		<!-- 搜索商品结束 -->
		<!-- 商品列表开始 -->
		<view class="VerticalBox">
			<!-- 左边分类开始 -->
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" 
							style="height:calc(100vh - 230rpx);width: 100rpx;">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				                      :data-id="index" style="width: 100rpx;">
					                       {{item.name}}
				</view>
			</scroll-view>
			<!-- 左边分类结束 -->
			<!-- 右边商品开始 -->
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 230rpx);margin-bottom: 80rpx;"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
			 <view class=" " v-for="(item,index) in list" :key="index" :id="'main-'+index" style="padding-left: 15rpx;">
				 <view class="cu-bar solid-bottom bg-white">
				 	<view class="action">
				 		<text class="cuIcon-title text-green"></text>{{item.name}}
					</view>
				 </view>
				 <view class="cu-list menu-avatar">
					<view class="cu-item" v-for="(cuitem,cuindex) in item.listt" :key="cuindex">
							<view class="cu-avatar round lg" style="width: 100rpx;height: 100rpx;background-color: #FFFFFF;">
								<image :src="cuitem.imgUrl"  style="width:80rpx;height:80rpx;" mode="scaleToFill" lazy-load="true"></image>
							</view>
							<view class="content">
								<view class="text-grey">{{cuitem.titlename}}</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										<text class="cuIcon-infofill text-red  margin-right-xs"></text>
										{{cuitem.titletext}}
									</text>
								</view>
							</view>
							
					</view>
				</view>
			 </view>
			 </scroll-view>
			<!-- 右边商品结束 -->
			</view>
			<!-- 商品列表结束 -->
			<!-- 底部开始 -->
			<view class="cu-bar search " style="width: 100%;height: 100rpx;position: fixed;bottom: 0;background-color: #0099ff;">
					<view class="glfl"  @click="glfl">
							<image src="../../static/guo.png" mode="aspectFill" style="width: 50rpx;height: 50rpx;vertical-align:middle;"></image>
							<text class="glfl-text">管理分类</text>
					</view>
					<view class="tjsp" @click="tjsp">
							<image src="../../static/guo.png" mode="aspectFill" style="width: 50rpx;height: 50rpx;"></image>
							<text class="tjsp-text">添加商品</text>
					</view>
			</view>
			<!-- 底部结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name:'凉菜',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'米线',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'面条',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'炒饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					},
					{
						name:'盖饭',
						listt:[
							{
								imgUrl:"../../static/guo.png",
								titlename:"小锅米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"牛肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							},
							{
								imgUrl:"../../static/guo.png",
								titlename:"羊头肉米线",
								titletext:"咋是板扎呢，欢迎平常啊"
							}
						]
					}
				],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				InputBottom: 0
			};
		},
		// onLoad() {
		// 	uni.showLoading({
		// 		title: '加载中...',
		// 		mask: true
		// 	});
		// 	let list = [{}];
		// 	for (let i = 0; i < 26; i++) {
		// 		list[i] = {};
		// 		list[i].name = String.fromCharCode(65 + i);
		// 		list[i].id = i;
		// 	}
		// 	this.list = list;
		// 	this.listCur = list[0];
		// },
		onReady() {
			uni.hideLoading()
		},
		methods: {
			glfl(){
				uni.navigateTo({
					url:"./Managementclassification"
				})
			},
			tjsp(){
				uni.navigateTo({
					url:"./addshop"
				})
			},
			
			
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						this.list[i].id = i
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		}
	}
</script>

<style>
	.tjsp-text{
		margin: 10rpx 0px 0px 10rpx;color: #FFFFFF;
	}
	.tjsp{
		width: 50%;height: 100rpx;display: flex;flex-direction: row;align-items: center;justify-content: center;
	}
	.glfl-text{
		margin: 10rpx 0px 0px 10rpx;color: #FFFFFF;
	}
	.glfl{
		width: 50%;height: 100rpx;display: flex;flex-direction: row;align-items: center;justify-content: center;
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 160rpx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>

