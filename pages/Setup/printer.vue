<template>
	<view>
			<view class="" style="font-size: 24rpx;background: #ffffff;
    width: 100%;
    margin-top: 20rpx;">
				<text style="font-size: 24rpx;margin-left: 40rpx;">已经连接的打印机</text>
			</view>
			
		<view class="uni-guanyu-text" @click="about">
			<text class="uni-guanyu-text-text">Printer打印机</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
			
		
			
	
		
	<view class="" style="font-size: 24rpx;background: #ffffff;
	width: 100%;
	margin-top: 2rpx;">
				<text style="font-size: 24rpx;margin-left: 40rpx;">添加新的打印机</text>
			</view>
			
		<view class="uni-guanyu-text" @click="about">
			<text class="uni-guanyu-text-text">蓝牙打印机</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			about:function(){
				uni.navigateTo({
						url:"/pages/Setup/printermanage"
				})
			},
		}
	}
</script>

<style>
	.uni-guanyu-text{
		width: 100%;
		height: 60rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		/* border-top: 1px solid #E4E4E4; */
		}
		.uni-guanyu-text-text{
			font-size: 24rpx;
			color: #333333;
			line-height: 60rpx;
			margin: 0rpx 0rpx 0rpx 40rpx;
			font-weight: bold;
		}
		.uni-zhanghao-text-image{
			width: 40rpx;
			height: 40rpx;
			margin-left: auto;
			/* margin-top: 8rpx; */
		}
</style>
