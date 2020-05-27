<template>
	<view>
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">店员名称</view>
			<input   name="input"  type="text" :value="inputClearValue" @input="clearInput" ></input>
			 <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		</view> 
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">店员电话</view>
			<input   name="input"  type="text" :value="inputClearValue" @input="clearInput" ></input>
			 <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		</view>
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">身份证号码</view>
			<input   name="input"  type="number" :value="inputClearValue" @input="clearInput" ></input>
			 <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		</view>
		<view class="" style="display: flex;margin-top: 20rpx;background: white;height: 100rpx;">
		      <view class="" style="width: 600rpx;margin-left: 26rpx;line-height: 100rpx;">性别</view>
		            <radio-group @change="radioChange"   v-for="(item, index) in items" :key="item.value">
		                    <view style="line-height: 100rpx;width: 50%;">
		                        <radio :value="item.value" :checked="index === current" />{{item.name}}
		                    </view>
		            
		            </radio-group>
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
				  current: 0,
				showClearIcon: false,
				inputClearValue: '',
				items: [{
				                 value: '1',
				                 name: '男'
				             },
				             {
				                 value: '2',
				                 name: '女',
				                 checked: 'true'
				             },
				            
				         ],
			}
		},
		methods: {
			radioChange: function(evt) {
			            for (let i = 0; i < this.items.length; i++) {
			                if (this.items[i].value === evt.target.value) {
			                    this.current = i;
			                    break;
			                }
			            }
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
		}
	}
</script>

<style>

</style>
