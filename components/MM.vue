<template>
	<view>
		<view v-for="(item,index) in specList" :key="index">
			<view class="bg-white margin-top-sm ">
				<view class="flex justify-between  border-bottom">
					<view class="cu-form-group">
						<view class="title">规格项</view>
						<input placeholder="请填写规格项" name="input" v-model="item.name" class="titlee"></input>
						<text class="cu-btn bg-blue cuIcon cuIcon-roundadd margin-xs" style="font-size: 44rpx;margin-left: 96rpx;"  @click="addSpec"></text>
						<text class="cu-btn bg-red cuIcon cuIcon-roundclose margin-xs"  style="font-size: 44rpx;" @click="delSpec(index)"></text>
					</view>
					
				</view>
				<view class=" border-bottom"  v-for="(value,valueIndex) in item.valueList" :key="valueIndex"  style="position: relative;">
					<view class="bg-white">
						<view class="cu-form-group">
							<view class="title">规格</view>
							<input placeholder="请填写规格" name="input" v-model="value.name" class="titlee"></input>
							<text class="cu-btn bg-blue cuIcon cuIcon-roundadd margin-xs" style="font-size: 44rpx;" @click="addSpecValue(index)"></text>
							<text class="cu-btn bg-red cuIcon cuIcon-roundclose margin-xs"  style="font-size: 44rpx;" @click="delSpecValue(index,valueIndex)"></text>
						</view>
						<view class="cu-form-group">
							<view class="title">规格价</view>
							<input placeholder="请填写规格价" name="input" v-model="value.price" class="titlee"></input>
						</view>
					</view>
					<!-- <text class="cu-btn bg-red cuIcon cuIcon-roundclose margin-xs"  style="font-size: 38px;position: absolute;top: 6px;right: 10px;" @click="delSpecValue(index,valueIndex)"></text> -->
				</view>
			<!-- 	<view class="flex justify-center align-center margin-sm">
					<text class="cu-btn bg-blue cuIcon cuIcon-roundadd margin-xs" style="font-size: 38px;" @click="addSpecValue(index)"></text>
					<text class="cu-btn bg-red cuIcon cuIcon-roundclose margin-xs"  style="font-size: 38px;" @click="delSpecValue(index,valueIndex)"></text>
				</view> -->
			</view>
			
		</view>
	<!-- <view class="flex row">
		<button @click="addSpec" class="xs">新增规格项</button><button @click="delSpec(index)">删除规格项</button>
	</view> -->
		
	<!-- 	<button @click="submit">提交</button> -->
	<!-- 	<view class="container">
				<div>
					<p v-for="(item,index) in specList">
					{{item.name}}
					<br>
					<span v-for="(value,valueIndex) in item.valueList">
					{{value.name}}
					{{value.price}}
					</span>
					</p>
				</div>
		</view> -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				specList: this.specListProp,
				createQuote: []
			}
		},
		props: {
			data: {
				type: Array,
				default () {
					return []
				}
			},
			specListProp: {
				type: Array,
				default () {
					return []
				}
			}
		},
		watch: {
			specList() {
				this.specList = this.specListProp
			}
		},
		methods: {
			delSpecValue(index, valueIndex) {
				if (this.specList[index].valueList.length > 1) {
					this.specList[index].valueList.splice(valueIndex, 1)
				}
			},
			addSpecValue(index) {
				if (this.specList[index].valueList.length < 5) {
					this.specList[index].valueList.push({
						name: '',
						price: ''
					})
				}
			},
			delSpec(index) {
				// this.specList.splice(index, 1)
				if (this.specList.length > 1) {
					this.specList.splice(index, 1)
				}
			},
			addSpec() {
				this.specList.push({
					name: '',
					valueList: [{
						name: '',
						price: ''
					}]
				})
			},
			submit() {
				console.log(this.specList)
			}
		}
	}
</script>

<style>
.title{
	font-size: 28rpx;
	color: #303133;
}
.titlee{
	font-size: 28rpx;
	
}
.cu-btn{
	width: 44rpx;
	height: 44rpx;
}
</style>
