<template>
	<view>
		
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">新密码</view>
			<input placeholder="请输入新密码" name="input" :password="showPassword" type="text" v-model="password"></input>
			 <text class="uni-icon" :class="[!showPassword ? 'uni-eye-active' : '']" @click="changePassword">&#xe568;</text>
		</view>
		
		<view class="cu-form-group">
			<view class="title">请确认</view>
			<input placeholder="请再次输入新密码" name="input" :password="showPasswordd" type="text" v-model="passwordd"></input>
			 <text class="uni-icon" :class="[!showPasswordd ? 'uni-eye-active' : '']" @click="changePasswordd">&#xe568;</text>
		</view>
		
		
		<view class="btn-row" >
			<button  class="cu-btn 	bg-green " @tap="updatesave" style="width: 90%;margin: 40rpx 5% 0rpx 5%;border-radius: 40rpx;" >提交保存</button>
		</view>
		
		
	</view>
</template>

<script>
		import utils from '@/utils/utils.js';
	export default {
	
		data() {
			return {
				password:"",
				passwordd:"",
				  showPassword: true,
				    showPasswordd: true
				
			}
		},
		methods: {
			
			changePassword: function() {
			    this.showPassword = !this.showPassword;
			},
			changePasswordd: function() {
			    this.showPasswordd = !this.showPasswordd;
			},
			updatesave(){
				
				if(this.password==''){
					uni.showToast({
						title:"请输入密码"
					})
					return;
				}
				if(!utils.checkMobilee(this.password) ){
					uni.showToast({
						title:"密码只能6-20位",
					})
					return;
				}
				if(this.passwordd==''){
					uni.showToast({
						title:"请再次输入密码"
					})
						return;
				}
				if(this.password != this.passwordd){
					uni.showToast({
						title:"两次密码输入不一致"
					})
						return;
				}
				if(this.password == this.passwordd){
					uni.showToast({
						title:"修改成功",
					})
					uni.reLaunch({
						url:"../login/login",
					})
						return;
				}
		
			},
			
		}
	}
</script>

<style>
  .uni-eye-active {
        color: #007AFF;
    }
</style>
