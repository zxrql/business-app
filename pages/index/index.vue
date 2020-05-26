<template>
	<view class="main">
		<view class="margin-xs" >
		    <view class="flex justify-between " >
		       <text class="text-sm text-gray">规格项</text>
			   <text class="flex align-end" @tap="showModal" data-target="Modal">+</text>
			</view>
	    <view class="ggx"  v-for="(item,index) in list" :key="index">
		   <view class="flex justify-between">
					<text class="text-sm text-gray">{{item}}</text>
					<text class="flex align-end" @tap="showModall" data-target="Modal">+</text>
					
		   </view>
		   <button type="default">{{item}}</button>
		   <view class="">
		   
		   		
		   </view>
	    </view>
	
		<view class="flex justify-between margin-xs " >
			 <view class="cu-modal" :class="modalName=='Modal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
							<view class="content">Modal标题</view>
						  	<view class="action" @tap="hideModal">
						  		<text class="cuIcon-close text-red"></text>
						  	</view>
					</view>
					<view class="cu-form-group" style="margin-top: 20rpx;">
						  	<view class="title">规格项名称</view>
						  	<input   name="input"  type="number"  v-model="seat" ></input>
							<text></text>
						  
					</view> 
						  	<button type="default" @click="onAdd">保存</button>
				</view>
			 </view>
					 <view class="cu-modal" :class="modalNamee=='Modal'?'show':''">
						 <view class="cu-dialog">
						  	<view class="cu-bar bg-white justify-end">
						  		<view class="content">Modal标题</view>
						  		<view class="action" @tap="hideModall">
						  			<text class="cuIcon-close text-red"></text>
						  		</view>
						  	</view>
						  	<view class="cu-form-group" style="margin-top: 20rpx;">
						  		<view class="title">规格名称</view>
						  		<input   name="input"  type="number"  v-model="seatt"></input>
						  		<text></text>
						  		
						  	</view> 
						  	<button type="default" @click="onAddd">保存</button>
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
			modalName: null,
			modalNamee: null,
			list:[
				{
				// seat:'辣度',	
				// seatt: 'qqq',
				},
				{
				// seat:'甜味',	
				// seatt: 'qqq1',
				}
			],
			// cs:'',
			// seat: '',
			// css: '',
			// seatt: ''
		};
	},

	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		showModall(e) {
			this.modalNamee = e.currentTarget.dataset.target;
		},
		hideModall(e) {
			this.modalNamee = null;
		},
		onAdd() {
			this.list.push(this.seat);
			this.seat = '';
			this.modalName = null;
		},
		onAddd() {
			this.list.push(this.seatt);
			this.seatt = '';
			this.modalNamee = null;
		}
	}
};
</script>

<style></style>
