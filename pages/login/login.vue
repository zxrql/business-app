<template>
	
		<view class="page-context">
			
			
			
			
		<image src="../../static/logo.png" mode="aspectFit" class="image-logo"></image>
		<view class="logo-text">
			<text>1点校园外卖商家版</text>
		</view>
	<view class="input-group">
		<view class="input-row border">
			<image src="../../static/phone.png" mode="aspectFit" style="width: 80rpx;height: 80rpx;margin-left: 40rpx;
    margin-top: 10rpx;"></image>
			<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号">
				
			</m-input>
		</view>
		<view class="input-row">
				<image src="../../static/password.png" mode="aspectFit" style="width: 80rpx;height: 80rpx;margin-left: 40rpx;
    margin-top: 10rpx;"></image>
			<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
		</view>
	</view>
	<view class="btn-row">
		<button class="cu-btn  block lg" @tap="bindLogin">登录</button>
	</view>
	<view class="action-row">
		<navigator url="../Setup/updatepassword">登录遇到问题？</navigator>
	</view>
		</view>
	
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'
	export default {
		components: {
			mInput
		},
		data() {
			return {
				// providerList: [],
				// hasProvider: false,
				account: '13211616601',
				password: '123456',
				positionTop: 0,
				// isDevtools: false,
			}
		},
		methods: {
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 */
				if (this.account.length < 11) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为11 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 */
				if(this.account==13211616601 && this.password==123456){
					uni.reLaunch({
						url:"../Setup/Setup"
					})
				}else{
					uni.showToast({
						icon: 'none',
						title: '登录失败，请检查用户名和密码'
					});
				}
			},
		},
		onReady() {
			this.initPosition();
    }
	}
</script>
<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.page-context{
		height: 100%;background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		 justify-content:center;
		 .image-logo{
			 width: 270rpx;
			 height: 270rpx;
			display: flex;
			margin: 0 auto;
			margin-top: 200rpx;
			  justify-content:center;
		 }
		 .input-group{
			 margin-top: 100rpx;
		 }
		.action-row {
		  color: #0099FF;
		   justify-content:center;
		  display: flex;
		  margin-top: 20rpx;
		  font-size: 32rpx;
		  
			}
		.logo-text {
			margin-top: 40rpx;
		  justify-content:center;
		  display: flex;
		  font-size: 50rpx;
		  font-weight: bold;
		  letter-spacing:10rpx;
		}
		.input-row{
			justify-content:center;
			display: flex;
			width: 600rpx;
			height: 100rpx;
			border: 2rpx solid #0099FF;
			margin-top: 80rpx;
			margin-left: 72rpx;
			margin-bottom: 80rpx;
			border-radius: 80rpx;
		}
		 .border{
			justify-content:center;
			display: flex;
			width: 600rpx;
			height: 100rpx;
			border: 2rpx solid #0099FF;
			margin-top: 80rpx;
			margin-bottom: 80rpx;
		}
		.cu-btn{
			width: 600rpx;
			height: 100rpx;
			border: 2rpx solid #0099FF;
			border-radius: 80rpx;
			margin-left: 72rpx;
			background-color: #0099FF;
			color: #FFFFFF;
			font-size: 36rpx;
		}
	}
</style>