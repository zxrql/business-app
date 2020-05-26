<template>
	<view>
		
		<view class="flex row clerk" v-for="(item,index) in list" :key="index">
			<view class="clerk-myname">
			<text>{{item.myname}}</text>	
			</view>
			<view class="clerk-sex">
			<text>{{item.sex}}</text>	
			</view>
			<view class="clerk-phone">
			<text>{{item.phone}}</text>	
			</view>
			<view class="clerk-name">
		<!-- 	<image src="../../static/" mode="" class="cuIcon-deletefill"></image> -->
		<text class="lg text-gray " :class="'cuIcon-' + item.name"></text>
			</view>
			
			<view class="clerk-namee">
			<!-- 	<image src="../../static/" mode="" class="cuIcon-deletefill"></image> -->
			<text class="lg text-gray " :class="'cuIcon-' + item.namee"></text>
				</view>
			
		</view>
		
		<!-- 底部开始 -->
		<view class="cu-bar search " style="width: 100%;height: 100rpx;position: fixed;bottom: 0;background-color: #0099ff;">
				<view class="glfl"  @click="glfl">
						<image src="../../static/tjdy.png" mode="aspectFill" style="width: 50rpx;height: 50rpx;vertical-align:middle;"></image>
						<text class="glfl-text">添加店员</text>
				</view>
				
		</view>
		<!-- 底部结束 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						myname:"张先生",
						sex:"男",
						phone:"13211616601",
						name:"deletefill",
						namee:"writefill"
					},
					{
						myname:"李女士",
						sex:"女",
						phone:"15984878878",
						name:"deletefill",
						namee:"writefill"
					}
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.glfl-text{
		margin: 10rpx 0px 0px 10rpx;color: #FFFFFF;
	}
	.glfl{
		width: 100%;height: 100rpx;display: flex;flex-direction: row;align-items: center;justify-content: center;
	}
.clerk{
	width: 100%;
	height: 100rpx;
	background-color: #FFFFFF;
	margin-top: 2rpx;
}
.clerk-myname{
	width: 25%;
	line-height: 100rpx;
	text-align: center;font-size: 32rpx;
}
.clerk-sex{
	width: 20%;
	line-height: 100rpx;
	text-align: center;font-size: 28rpx;
}
.clerk-phone{
	width: 35%;
	line-height: 100rpx;
	text-align: center;font-size: 28rpx;
}
.clerk-name{
	width: 10%;
	line-height: 100rpx;
	text-align: center;
}
.clerk-namee{
	width: 10%;
	line-height: 100rpx;
	text-align: center;
}
</style>
