<template>
	<view>
		
		<view class="cu-form-group " style="margin-top: 20rpx;">
			<view class="title">新手机号</view>
			<input  placeholder="请输入新手机号" name="input"  type="number" :value="inputClearValue" @input="clearInput"></input>
			 <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		</view> 
		
		<!-- <view class="uni-form-item uni-column">
		   
		    <view class="uni-input-wrapper">
				 <view class="title">新手机号</view>
		        <input class="uni-input" placeholder="带清除按钮的输入框" :value="inputClearValue" @input="clearInput" />
		        <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		    </view>
		</view> -->
		
		<view class="cu-form-group">
			<view class="title">请确认</view>
			<input placeholder="请再次输入新手机号" name="input"  type="number" :value="inputClearValuee" @input="clearInputt" ></input>
			<text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view>
		
		<view class="cu-form-group">
			<view class="title">短信验证</view>
			<input placeholder="请输入验证码" name="input"></input>
			<button class='cu-btn bg-green shadow' @tap="numberst" :disabled="countdown < 60 && countdown >= 1">{{countdown < 60 && countdown >= 1?`${countdown}秒重获`:'获取验证码'}}</button>
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
			
				countdown:60,
				showClearIcon: false,
				showClearIconn: false,
				inputClearValue: '',
				inputClearValuee: ''
			}
		},
		methods: {
			clearInputt: function(event) {
			    this.inputClearValuee = event.detail.value;
			    if (event.detail.value.length > 0) {
			        this.showClearIconn = true;
			    } else {
			        this.showClearIconn = false;
			    }
			},
			clearIconn: function() {
			    this.inputClearValuee = '';
			    this.showClearIconn = false;
			},
			clearInput: function(event) {
			    this.inputClearValue = event.detail.value;
			    if (event.detail.value.length > 0) {
			        this.showClearIcon = true;
			    } else {
			        this.showClearIcon = false;
			    }
			},
			clearIcon: function() {
			    this.inputClearValue = '';
			    this.showClearIcon = false;
			},
			updatesave(){
				if(this.inputClearValue==''){
					uni.showToast({
						title:"请输入手机号"
					})
					return;
				}
				if(!utils.checkMobile(this.inputClearValue) ){
					uni.showToast({
						title:"请输入正确的手机号码",
					})
					return;
				}
				if(this.inputClearValuee==''){
					uni.showToast({
						title:"请再次输入手机号"
					})
						return;
				}
				if(this.inputClearValue != this.inputClearValuee){
					uni.showToast({
						title:"两次手机号输入不一致"
					})
						return;
				}
				if(this.inputClearValue == this.inputClearValuee){
					uni.showToast({
						title:"修改成功",
					})
					uni.reLaunch({
						url:"../login/login",
					})
						return;
				}
			},
			numberst(e){
						//其他代码....
						this.countDown();
					},
					// 倒计时
							countDown(){
								let self = this;
								self.countdown = 60;
								self.countdown -= 1;
								if(self.clear){
									clearInterval(self.clear)
								}
								self.clear = null;
								self.clear = setInterval(_ => {
									if(self.countdown > 0){
										self.countdown -= 1;
									}else{
										clearInterval(self.clear)
									}
								},1000)
							},
		}
	}
</script>

<style>
.uni-form-item__title {
        font-size: 16px;
        line-height: 24px;
    }

    .uni-input-wrapper {
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
      /*  padding: 8px 13px; */
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #FFFFFF;
    }

    .uni-input {
        height: 28px;
        line-height: 28px;
        font-size: 15px;
        padding: 0px;
        flex: 1;
        background-color: #FFFFFF;
    }

    .uni-icon {
        font-family: uniicons;
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        width: 24px;
        height: 24px;
        line-height: 24px;
        color: #999999;
    }

</style>
