<template>
	<view>
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">分类名称</view>
			<input   name="input"  type="number" :value="inputClearValue" @input="clearInput" ></input>
			 <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		</view> 
		
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">分类描述</view>
			<input   name="input"  type="text" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> 
		
		<view class="btn-row" >
			<button  class="cu-btn 	bg-green " @tap="updatesave" style="width: 90%;margin: 40rpx 5% 0rpx 5%;border-radius: 40rpx;" >提交保存</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showClearIcon: false,
				showClearIconn: false,
				inputClearValue: '',
				inputClearValuee: '',
				 count: '' // 倒计时
			}
		},
		created() {
		    // 跳转选人加分页面
		    // this.updatesave()
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
				if(this.inputClearValue=='' ){
					uni.showToast({
						title:"请输入分类名称"
					})
					return;
				}
				if( this.inputClearValuee==''){
					uni.showToast({
						title:"请输入分类描述"
					})
					return;
				}
				if( this.inputClearValuee!='' && this.inputClearValue!=''){
					uni.showToast({
						title:"添加分类成功"
					})
					  const TIME_COUNT = 2
					  if (!this.timer) {
					    this.count = TIME_COUNT
					    this.show = false
					    this.timer = setInterval(() => {
					      if (this.count > 0 && this.count <= TIME_COUNT) {
					        this.count--
					      } else {
					        this.show = true
					        clearInterval(this.timer)
					        this.timer = null
					        // 跳转到选人加分界面
					       uni.navigateTo({
					       	url:"./Managementclassification"
					       })
					      }
					    }, 1000)
					  }
					
				}
				
				
			},
			
		}
	}
</script>

<style>

</style>
