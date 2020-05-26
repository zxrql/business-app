<template>
	<view>
		<!-- 第一部分开始 -->
		<view class="uni-one">
			<view class="uni-one-one">
			
			<view class="uni-one-image">
				<image src="../../static/zyy.jpg" style="width:120rpx;height: 120rpx;" mode=" aspectFill"></image>
			</view>
			<view class="uni-one-shop">
				<view class="uni-noe-shop-text">
					<text space="nbsp">豚骨拉面  (怡园风味)  ></text>
				</view>
				<view class="uni-noe-shop-text-text">
					<text>查看商铺详情</text>
				</view>
			</view>
			<view class="uni-one-dobusiness">
					<select class="uni-select" name="" id="" >
						<option value="" class="uni-select-option">营业中</option>
						<option value=""  class="uni-select-option-option">休息</option>
					</select>
			</view>
		</view>
		</view>
		<!-- 	第一部分结束 -->
		<!-- 第二部分开始 -->
		<view class="two">
			<view class="two-two" @click="shoplist">
				<view class="uni-two-image"> <image src="../../static/guo.png" style="width: 70rpx;height: 70rpx;" mode=" aspectFill"></image> </view>
				<view class="uni-two-text">商品</view>
			</view>
			<view class="two-two">
				<view class="uni-two-image"> <image src="../../static/pj.png" style="width: 70rpx;height: 70rpx;" mode=" aspectFill"></image> </view>
				<view class="uni-two-text">评价</view>
			</view>
			<view class="two-two" @click="cw">
				<view class="uni-two-image"> <image src="../../static/cw.png" style="width: 70rpx;height: 70rpx;" mode=" aspectFill"></image> </view>
				<view class="uni-two-text">财务</view>
			</view>
			<view class="two-two">
				<view class="uni-two-image"> <image src="../../static/ps.png" style="width: 70rpx;height: 70rpx;" mode=" aspectFill"></image> </view>
				<view class="uni-two-text">配送</view>
			</view>
			<view class="two-two" @click="clerk">
				<view class="uni-two-image"> <image src="../../static/dy.png" style="width: 70rpx;height: 70rpx;" mode=" aspectFill"></image> </view>
				<view class="uni-two-text">店员</view>
			</view>
		</view>
		<!-- 第二部分结束 -->
		<!-- 经营数据开始 -->
		<view class="jysj">
			<text class="jysj-text">经营数据</text>
			<text class="jysj-text-text" @click="more">更多 ></text>
		</view>
		<view class="jysj-two">
			<view class="jysj-two-two">
				<view class="jysj-two-text"><text>今日营业额</text></view>
				<view class="jysj-two-text-text"> <text>5340</text></view>
				<view class="jysj-two-text-text-text"><text>昨日6.890</text></view>
			</view>
			<view class="jysj-two-two">
				<view class="jysj-two-text"><text>今日订单</text></view>
				<view class="jysj-two-text-text"><text>180</text></view>
				<view class="jysj-two-text-text-text"><text>昨日205</text></view>
			</view>
			<view class="jysj-two-two">
				<view class="jysj-two-text"><text >客单价</text></view>
				<view class="jysj-two-text-text"><text>29.66</text></view>
				<view class="jysj-two-text-text-text"><text>昨日33.61</text></view>
			</view>
		</view>
		<!-- 经营数据结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			clerk:function(){
				uni.navigateTo({
					url:"./clerkmanagement"
				})
			},
			shoplist:function(){
				uni.navigateTo({
					url:'./shoplist'
				})
			},
			cw:function(){
				uni.navigateTo({
					url:"../nvue/nvue"
				})
			},
			more:function(){
				uni.navigateTo({
					url:"../viewPort/viewPort"
				})
			},
		}
	}
</script>
<style lang="scss">
	// 第一部分css开始 
.uni-one{
	width: 100%;height: 200rpx;background-color: #0099FF;
	.uni-one-one{
		display: flex;flex-direction: row;position: relative;top: 50rpx;
	}
	.uni-one-image{
		width: 120rpx;height: 120rpx;margin-left: 40rpx;
	}
	.uni-one-shop{
		width: 440rpx;height: 120rpx;
	}
	.uni-noe-shop-text{
		font-size: 32rpx;margin: 10rpx 0rpx 0rpx 20rpx;color: #FFFFFF;font-weight: bold;
	}
	.uni-noe-shop-text-text{
		font-size: 24rpx;margin: 20rpx 0rpx 0rpx 20rpx;color: #FFFFFF;
	}
	// .uni-one-dobusiness{
	// 	width: 200rpx;height: 50rpx;border-radius: 20rpx;background-color: #FFFFFF;
	// }
	.uni-select{
		position: relative;width: 150rpx;height: 50rpx;top: 70rpx;left: -30rpx;background: transparent;border:0;outline: none;border-radius: 20rpx;background-color: #555555;color: #FFFFFF;opacity: 0.5;text-align-last: center;
	}
	.uni-select-option{
		border: 0;outline: none;position: relative;top: -32px;
	}
	.uni-select-option-option{
		border: 0;outline: none;
	}
}
// 第一部分css结束 
// 第二部分css开始
.two{
	width: 100%;height: 130rpx;display: flex;flex-direction: row;	margin-top: 20rpx;
	.two-two{
		width: 25%;height: 134rpx;background-color: #FFFFFF;margin-right: 2rpx;
	}
	.uni-two-image{
		width: 75rpx;height: 75rpx;margin: 0 auto;margin-top: 10rpx;
	}
	.uni-two-text{
		text-align: center;font-size: 24rpx;margin-top:10rpx;
	}
	
}
// 第二部分css结束
// 经营数据css开始
.jysj{
	width: 100%;height: 70rpx;background-color: #FFFFFF;margin-top: 20rpx;display: flex;flex-direction: row;
	
	.jysj-text{
		font-size: 26rpx;font-weight: bold;color: #333333;line-height: 70rpx;margin-left: 20rpx;
	}
	.jysj-text-text{
		font-size: 24rpx;color: #AAAAAA;text-align: right;flex: 1;line-height: 70rpx;margin-right: 10rpx;
	}
	}
	
	.jysj-two{
		display: flex;flex-direction: row;width: 100%;height: 150rpx;margin-top: 2rpx;
	.jysj-two-two{
		width: 33.33%;height: 150rpx;text-align: center;background-color: #FFFFFF;margin-right: 2rpx;
		}
		
		.jysj-two-text{
			font-size: 24rpx;color: #AAAAAA;margin-top: 20rpx;
		}
		.jysj-two-text-text{
			font-size: 28rpx;font-weight: bold;color: #333333;margin-top: 10rpx;
		}
		.jysj-two-text-text-text{
			font-size: 24rpx;color: #AAAAAA;margin-top: 10rpx;
		}
	
}

// 经营数据css结束
</style>
