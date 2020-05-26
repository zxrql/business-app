<template>
	<view>
		<!-- 整体开始 -->
		<view class="" v-for="(item,index) in list" :key="index">
			<!-- 分类名称和分类描述开始 -->
		<view class="uni-one-fl">
			<view class="uni-one-fl-name">
				<text class="flname">分类名称:</text><text class="flnames">{{item.flnames}}</text>
			</view>
			<view class="uni-one-fl-ms">
				<text class="flname">分类描述:</text><text class="flnamems">{{item.flnamems}}</text>
			</view>
		</view>
		<!-- 分类名称和分类描述结束 -->
		<!-- 编辑分类和删除分类开始 -->
		<view class="cu-bar search " >
				<view class="bjfl" @click="bjfl">
						<image src="../../static/guo.png" mode="aspectFill" style="width: 40rpx;height: 40rpx;vertical-align:middle;"></image>
							<text  class="bjfl-text">编辑分类</text>
				</view>
				<view class="scfl">
						<image src="../../static/guo.png" mode="aspectFill" style="width: 40rpx;height: 40rpx;vertical-align:middle;"></image>
							<text class="scfl-text">删除分类</text>
				</view>
		</view>
		<!-- 编辑分类和删除分类结束 -->
		</view>
		<!-- 整体结束 -->
		<!-- 底部开始 -->
		<view class="cu-barr search " >
				<view class="tjfl" @click="tjfl">
						<image src="../../static/guo.png" mode="aspectFill" style="width: 50rpx;height: 50rpx;vertical-align:middle;"></image>
							<text class="tjfl-text">添加分类</text>
				</view>
		</view>
		<!-- 底部结束 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						flnames:"酒水饮料",
						flnamems:"这是酒水饮料酒水饮料"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					},
					{
						flnames:"山珍海味",
						flnamems:"这是山珍海味山珍海味"
					}
				]
			}
		},
		methods: {
			tjfl(){
				uni.navigateTo({
					url:"./addclassification"
				})
			},
			bjfl(){
				uni.navigateTo({
					url:"./updateclassification"
				})
			}
		}
	}
</script>

<style lang="scss">
	// 分类名称和分类描述开始
     .uni-one-fl{
		width: 100%;height: 130rpx;background-color: #FFFFFF;margin-top: 10rpx;
		.uni-one-fl-name{
			width: 100%;height: 70rpx;line-height: 80rpx;
		}
		.flname{
			font-size: 24rpx;color: #AAAAAA;margin-left: 20rpx;
		}
		.flnames{
			font-size: 24rpx;font-weight: bold;margin-left: 10rpx;
		}
		.uni-one-fl-ms{
		width: 100%;height: 70rpx;line-height: 50rpx;
		}
		.flnamems{
			font-size: 24rpx;color: #333333;margin-left: 10rpx;
		}
	 }
	 // 分类名称和分类描述结束
	 // <!-- 编辑分类和删除分类开始 -->
	 .cu-bar {
		 min-height: 80rpx;margin-top: 2rpx;width: 100%;height: 50rpx;background-color: #FFFFFF;
		 .bjfl{
			 width: 50%;height: 50rpx;display: flex;flex-direction: row;align-items: center;justify-content: center;
		 }
		 .bjfl-text{
			 margin: 10rpx 0px 0px 10rpx;color: #0099ff;font-size: 24rpx;
		 }
		 .scfl{
			 width: 50%;height: 50rpx;display: flex;flex-direction: row;align-items: center;justify-content: center;
		 }
		 .scfl-text{
			 margin: 10rpx 0px 0px 10rpx;color: #0099ff;font-size: 24rpx;
		 }
	 }
	 // <!-- 编辑分类和删除分类结束 -->
	 // 底部开始
	 .cu-barr{
		 	width: 100%;height: 80rpx;position: fixed;bottom: 0;background-color: #f1f1f1;
		 .tjfl-text{
		 	margin: 10rpx 0px 0px 20rpx;color: #0099ff;
		 }
		 .tjfl{
		 	width: 100%;height: 80rpx;display: flex;flex-direction: row;align-items: center;justify-content: center;
		 }
	 }
	 // 底部结束
</style>
