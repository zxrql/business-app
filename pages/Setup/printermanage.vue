<template>
	<view>
		
		<view class="" style="background-color: #FFFFFF;width: 100% ;height: 300rpx;">
			<view class="dyj" style="width: 120rpx;height: 120rpx;border-radius: 120rpx;background-color: #0099FF;text-align: center;line-height: 180rpx;position: relative;
    top: 40rpx;
    left: 310rpx;">
				<image src="../../static/print.png" mode="aspectFill" style="width: 80rpx;height: 80rpx;"></image>
			</view>
			<view class="" style="text-align: center;margin: 60rpx auto 0 auto;">
				<text>GPRS打印机</text>
			</view>
			<view class="" style="text-align: center;margin: 20rpx auto 0 auto;">
				<text>已连接</text>
			</view>
			
		</view>
		
		
		<view class="uni-zhanghao-text" @click="zhanghao">
			<text class="uni-zhanghao-text-text">打印测试</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		
		<view class="uni-zhanghaoo-text" @click="zhanghao">
			<text class="uni-zhanghaoo-text-text">打印联数</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghaoo-text-image"></image>
		</view>
		
		<view class="cu-bar  bg-white" style="margin-top: 10rpx;">
					<view class="action">
						<text class="" style="margin-left: 10rpx;font-size: 24rpx;font-weight: bold;color: #333333;">新订单自动接单</text>
						
					</view>
					<view class="action" style="font-size: 24rpx;">
						<switch @change="SetPlayers" :class="plays?'checked':''" color="#0099FF"></switch>
					</view>
		</view>
		
		<view class="cu-bar bg-white" style="margin-top: 10rpx;">
					<view class="action" style="font-size: 24rpx;">
						<text class="" style="margin-left: 10rpx;font-size: 24rpx;font-weight: bold;color: #333333;">新订单蓝牙自动打印</text>
						
					</view>
					<view class="action">
						<switch @change="SetMove" :class="move?'checked':''" color="#0099FF"></switch>
					</view>
		</view>
		<!-- <view class="uni-zhanghaoo-text" @click="zhanghao">
			<text class="uni-zhanghaoo-text-text">自动接单</text>
			<text class="uni-zhanghaoo-text-text">自动接单</text>
		</view>
		
		<view class="uni-zhanghaoo-text" @click="zhanghao">
			<text class="uni-zhanghaoo-text-text">打印方式</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghaoo-text-image"></image>
		</view> -->
		
		
	</view>
</template>

<script>
	// #ifdef APP-PLUS
	import push from "@/common/push.js"
	// #endif
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				info: false,
				plays: false,
				move: false,
				isPushOn: true,
				bordersize: ''
			};
		},
		onLoad() {
			this.updatePush();
		},
		methods: {

			// 信息推送
			pushChange(e) {
				this.isPushOn = e.detail.value;
				if (this.isPushOn) {
					// #ifdef APP-PLUS
					push.on();
					// #endif
				} else {
					// #ifdef APP-PLUS
					push.off();
					// #endif
				}
				this.title = this.isPushOn ? '已开启' : '已关闭';
			},
			updatePush() {
				// #ifdef APP-PLUS
				this.isPushOn = push.isOn();
				// #endif
				this.title = this.isPushOn ? '已开启' : '已关闭';
			},

			// 新消息提醒
			SetInfo(e) {
				console.log("新消息提醒", e.detail.value)
				this.info = e.detail.value
				console.log("新消息提醒+", this.info)
			},
			// 播放提示音
			SetPlayers(e) {
				console.log("播放提示音", e.detail.value)
				this.plays = e.detail.value
				console.log("播放提示音+", this.plays)

			},
			// 开启震动
			SetMove(e) {
				console.log("开启震动", e.detail.value)
				this.move = e.detail.value
				console.log("开启震动+", this.move)
			},
			SetBorderSize(e) {
				this.bordersize = e.detail.value
			}
		},
		computed: {
			getSysInfo() {
				var main = plus.android.runtimeMainActivity();
				var pkName = main.getPackageName();
				var NotificationManagerCompat = plus.android.importClass("android.support.v4.app.NotificationManagerCompat");
				var packageNames = NotificationManagerCompat.from(main);
				console.log(JSON.stringify(packageNames));
				if (packageNames.areNotificationsEnabled()) {
					console.log('已开启通知权限');
				} else {
					uni.showModal({
						title: '提示',
						content: '请先打开APP通知权限',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								var Intent = plus.android.importClass('android.content.Intent');
								var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS'); //可设置表中所有Action字段  
								intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
								main.startActivity(intent);
							}
						}
					});
				}
			}
		}
	}
</script>

<style>
.uni-zhanghao-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
		}
		.uni-zhanghao-text-text{
			font-size: 24rpx;
			color: #333333;
			line-height: 100rpx;
			margin: 0rpx 0rpx 0rpx 40rpx;
			font-weight: bold;
		}
		.uni-zhanghao-text-image{
			width: 40rpx;
			height: 40rpx;
			margin-left: auto;
			margin-top: 25rpx;
		}
		.uni-zhanghaoo-text{
				width: 100%;
				height: 100rpx;
				background-color: #FFFFFF;
				display: flex;
				flex-direction: row;
				margin-top: 2rpx;
				}
				.uni-zhanghaoo-text-text{
					font-size: 24rpx;
					color: #333333;
					line-height: 100rpx;
					margin: 0rpx 0rpx 0rpx 40rpx;
					font-weight: bold;
				}
				.uni-zhanghaoo-text-image{
					width: 40rpx;
					height: 40rpx;
					margin-left: auto;
					margin-top: 25rpx;
				}
	
</style>
