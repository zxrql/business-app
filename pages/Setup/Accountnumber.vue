<template>
	<view>
		<view class="uni-tongzhi-text" @click="updatepassword">
			<text class="uni-tongzhi-text-text">修改密码</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		
		<view class="uni-dayin-text" @click="updatephone">
			<text class="uni-dayin-text-text">修改手机号</text>
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
			updatepassword:function(){
				uni.navigateTo({
					url:"/pages/Setup/updatepassword"
				});
			},
			updatephone:function(){
				uni.navigateTo({
					url:"/pages/Setup/updatephone"
				});
			},
			
		}
	}
</script>

<style lang="scss">
.uni-tongzhi-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
		.uni-tongzhi-text-text{
			font-size: 24rpx;
			color: #333333;
			line-height: 100rpx;
			margin: 0rpx 0rpx 0rpx 40rpx;
			font-weight: bold;
		}
		.uni-zhanghao-text-image{
			width: 40rpx;
			height: 40rpx;
			margin-left: auto;
			margin-top: 25rpx;
		}
	}
	.uni-dayin-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		.uni-dayin-text-text{
			font-size: 24rpx;
			color: #333333;
			line-height: 100rpx;
			margin: 0rpx 0rpx 0rpx 40rpx;
			font-weight: bold;
		}
		.uni-zhanghao-text-image{
			width: 40rpx;
			height: 40rpx;
			margin-left: auto;
			margin-top: 25rpx;
		}
	}
</style>
