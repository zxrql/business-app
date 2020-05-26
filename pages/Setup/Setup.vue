

<template>
	<view class="page-context">
		<view class="uni-zhanghao-text" @click="zhanghao">
			<text class="uni-zhanghao-text-text">账号</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-tongzhi-text" @click="access">
			<text class="uni-tongzhi-text-text">通知与提示音设置</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-dayin-text" @click="printer">
			<text class="uni-dayin-text-text">打印机设置</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-hujiao-text" @click="opennot">
			<text class="uni-hujiao-text-text">呼叫客服</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-zaixian-text">
			<text class="uni-zaixian-text-text" @click="opennot">在线客服</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-tousu-text">
			<text class="uni-tousu-text-text" @click="opennot">投诉反馈</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-zhongxin-text">
			<text class="uni-zhongxin-text-text" @click="opennot">通知中心</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		<view class="uni-guanyu-text" @click="about">
			<text class="uni-guanyu-text-text">关于我们</text>
			<image src="../../static/you.png" mode="aspectFit" class="uni-zhanghao-text-image"></image>
		</view>
		
		<view class="uni-tuichu-text" @tap="showModal" data-target="Modal">
			<text class="uni-tuichu-text-text">退出登录</text>
		</view>
		
		<view class="cu-modal" :class="modalName=='Modal'?'show':''" >
			<view class="cu-dialog" >
				<view class="cu-bar bg-white justify-end">
					<view class="content" >提示</view>
					<view class="contentt">确认退出当前账号?</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="qq">
					<view class="quxiao"  @tap="hideModal">
							<text class="quxiao-text" >取消</text>
					</view>
				
					<view class="queding" @click="queding">
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
				modalName: null,
				
			}
		},
		methods: {
			opennot:function(){
				uni.navigateTo({
				    url: "/pages/Setup/notopen"
				});
			},
			zhanghao:function(){
				uni.navigateTo({
				    url: "/pages/Setup/Accountnumber"
				});
			},
			about:function(){
				uni.navigateTo({
				    url: "/pages/Setup/set-up-about"
				});
			},
			printer:function(){
				uni.navigateTo({
				    url: "/pages/Setup/printer"
				});
			},
			access:function(){
				uni.navigateTo({
				    url: "/pages/Setup/set-up-access"
				});
			},
			queding:function(){
				uni.navigateTo({
				    url: "/pages/login/login"
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f1eeee;
	}
	.uni-zhanghao-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
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
	}
	.uni-tongzhi-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
		.uni-tongzhi-text-text{
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
	}
	.uni-dayin-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		.uni-dayin-text-text{
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
	}
	.uni-hujiao-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		margin-top: 20rpx;
		.uni-hujiao-text-text{
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
	}
	.uni-zaixian-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		.uni-zaixian-text-text{
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
	}
	.uni-tousu-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		.uni-tousu-text-text{
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
	}
	.uni-zhongxin-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		.uni-zhongxin-text-text{
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
	}
	.uni-guanyu-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		.uni-guanyu-text-text{
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
	}
	.uni-tuichu-text{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #E4E4E4;
		margin-top: 100rpx;
		.uni-tuichu-text-text{
			font-size: 24rpx;
			color: #ED1C24;
			line-height: 100rpx;
			
			font-weight: bold;
			margin: 0 auto;
		}
		
	}
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
