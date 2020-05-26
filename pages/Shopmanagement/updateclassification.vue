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
		
		<view class="btn-row" style="display: flex;">
			<button  class="cu-btn 	bg-green " @tap="updatesave" style="width: 50%;margin: 40rpx 5% 0rpx 5%;border-radius: 40rpx;" >提交保存</button>
			<button  class="cu-btn 	bg-green "  style="width: 50%;margin: 40rpx 5% 0rpx 5%;border-radius: 40rpx;" @click="showModal" data-target="Modal" >删除分类</button>
		</view>
		
		<view class="cu-modal" :class="modalName=='Modal'?'show':''" >
			<view class="cu-dialog" >
				<view class="cu-bar bg-white justify-end">
					<view class="content" >提示</view>
					<view class="contentt">确认删除当前分类?</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="qq">
					<view class="quxiao"  @tap="hideModal">
							<text class="quxiao-text" >取消</text>
					</view>
				
					<view class="queding" @tap="queding">
							<text class="queding-text">确定</text>
					</view>
				</view>
			</view>
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
				 count: '' ,// 倒计时
				 modalName: null,
			}
		},
		created() {
		    // 跳转选人加分页面
		    // this.updatesave()
		  },
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
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
						title:"修改分类成功"
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
			
			
			queding(){
				uni.showToast({
					title:"删除分类成功"
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
			
			
			
		}
	}
</script>

<style lang="scss">
.cu-dialog{
	height: 240rpx;background-color: #FFFFFF;
	.content{
		font-size: 24rpx;color: #333333;font-weight: bold;
	}
	.contentt{
		top:100rpx;font-size: 24rpx;position: absolute;
		left: 0;right: 0;bottom: 0;
	}
	.qq{
		background-color: #FFFFFF;display: flex;flex-direction: row;border-top: 1px solid #999999;width:100%;height: 10px;margin-top: 60rpx;
	}
	.quxiao{
		width: 50%;height: 80rpx;border-right: 2rpx solid #999999;
	}
	.quxiao-text{
		position: relative;top: 25rpx;color: #333333;font-weight: bold;font-size: 24rpx;
	}
	.queding{
		width: 50%;height: 80rpx;
	}
	.queding-text{
		position: relative;top: 25rpx;color: #39B54A;font-size: 24rpx;
	}
}
</style>
