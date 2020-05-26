<template>
	<view class="content">
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
				>
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
					
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in tabItem.orderList" :key="index"
						class="order-item"
					>
						<view class="i-top b-b">
							<text class="" style="height: 40rpx;
    width: 60rpx;
    text-align: center;
    background-color: #0099ff;
    line-height: 40rpx;color: #FFFFFF;">#{{item.timee}}</text>
							<text class="time" style="margin-left: 20rpx;
    color: #0099ff;">立即送达</text>
							<text class="state" :style="{color: item.stateTipColor}">{{item.stateTip}}</text>
							<!-- <text 
								v-if="item.state===9" 
								class="del-btn yticon icon-iconfontshanchu1"
								@click="deleteOrder(index)"
							></text> -->
					</view>
						
						
						
						<view class="flex ">
						        <view class="flex flex-sub">
						       <!--  <view class="padding-sm">
						          <view class="cu-avatar xl round bg-orange">
						           <text class="text-xxl">送</text>
						          </view>
						         </view> -->
						         <view class="flex-twice ">
						          <view class="" style="line-height: 1.8;">
						           <view class="order-get-users">
						            <text class="cuIcon-people"></text>
						            <text class="users-text text-xs" style="font-size: 28rpx;
    font-weight: bold;">{{item.userss}}</text>
						           </view>
						           <view class="text-blue">
						            <text class="text-df">第{{item.kilometress}}次下单</text>
						           </view>
						           <view class="text-black">
						            <text class="text-df">{{item.positions}}</text>
						           </view>
						          </view>
						         </view>
						        </view>
						        <view class="flex align-center " style="padding: 0rpx 20rpx;">
						         <view class="icon-box bg-blue text-center" @click="_tel" style="line-height: 50rpx;">
						          <text class="cuIcon-phone"></text>
						         </view>
						         <navigator class="icon-box bg-grey text-center margin-left-xs" url="../map/map" style="line-height: 50rpx;">
						          <text class="cuIcon-locationfill"></text>
						         </navigator>
						        </view>
						       </view>
						
						<view class="beizhu">
							<text style="letter-spacing: 2rpx;">备注:{{item.beizhu}}</text>
						</view>
						<!-- 查看详情的内容开始 -->
						<button type="" style="width: 25%;height: 60rpx;line-height: 60rpx;margin-right: 20rpx;margin-top: 20rpx;margin-bottom: 20rpx;background-color: #0099ff;color: #FFFFFF;font-size: 28rpx;" v-show="item.show" @click="shangping(index,item)" >{{item.dataList}}</button>
						<!-- <view v-for="(item,index) in item.dataList" :key="index"  @click="shangping(index,item)" v-show="item.show">
							<button type="" style="width: 30%;height: 80rpx;line-height: 80rpx;margin-right: 20rpx;margin-top: 20rpx;margin-bottom: 20rpx;background-color: #0099ff;color: #FFFFFF;"  >{{item.dataList}}</button>
						</view> -->
						
						
						<view class="" v-show="item.showw" >
							
						
						<view class="shangpin padding-top-xs" >
							<text>商品</text>
							<view class="padding-top-xs" v-for="(itemm,index) in item.goodsList" :key="index">
								<text class="padding-top-xl">{{itemm.name}}</text>
								<text class="padding-top-xs" style="margin-left: 400rpx;">x{{itemm.count}}</text>
								<text class="padding-top-xs" style="margin-left: 80rpx;">{{itemm.price}}</text>
							</view>
							
						</view>
						
						<view class="border-bottom padding-top-xl">
							
						</view>
						
						<view class="zp padding-top-xs">
							<text>赠品</text>
							<view class="padding-top-xs">
								<text>矿泉水</text>
							</view>
						</view>
						<view class="border-bottom padding-top-xs">
							
						</view>
						
						<view class="qt padding-top-xs">
							<text>其他</text>
							<view class="padding-top-xs">
								<text>配送费</text>
								<text style="margin-left: 554rpx;">6.00</text>
							</view>
							<view class="padding-top-xs">
								<text>餐盒费</text>
								<text style="margin-left: 554rpx;">6.00</text>
							</view>
						</view>
						
						<view class="border-bottom padding-top-sm">
							
						</view>
						
						<view class="bdsr padding-top-sm">
							<text>本单收入</text>
							<text style="margin-left: 460rpx;">￥101.40</text>
						</view>
						
						<view class="border-bottom padding-top-sm">
							
						</view>
						
						<view class="bdsr padding-top-sm">
							
						</view>
						<view class="sq" style="text-align: center;" @click="shangpingg(index,item)">
							<text style="color: #0099FF;">{{item.dataListt}}</text>
							<image src="../../static/top.png" mode="" style="width: 40rpx;height: 40rpx;vertical-align: middle;"></image>
						</view>
						<!-- <view v-for="(item,index) in item.dataListt" :key="index" style="text-align: center;" @click="shangpingg(index,item)" class="sq">
							<text style="color: #0099FF;">{{item.dataListt}}</text>
							<image src="../../static/top.png" mode="" style="width: 60rpx;height: 60rpx;vertical-align: middle;"></image>
						</view> -->
						
						
						<view class="bdsr padding-top-sm">
							
						</view>
						
						</view>
						<!-- 查看详情的内容结束 -->
						<!-- <scroll-view v-if="item.goodsList.length > 1" class="goods-box" scroll-x>
							<view
								v-for="(goodsItem, goodsIndex) in item.goodsList" :key="goodsIndex"
								class="goods-item"
							>
								<image class="goods-img" :src="goodsItem.image" mode="aspectFill"></image>
							</view>
						</scroll-view> -->
						<!-- <view 
							v-if="item.goodsList.length === 1" 
							class="goods-box-single"
							v-for="(goodsItem, goodsIndex) in item.goodsList" :key="goodsIndex"
						>
							<image class="goods-img" :src="goodsItem.image" mode="aspectFill"></image>
							<view class="right">
								<text class="title clamp">{{goodsItem.title}}</text>
								<text class="attr-box">{{goodsItem.attr}}  x {{goodsItem.number}}</text>
								<text class="price">{{goodsItem.price}}</text>
							</view>
						</view> -->
						
						<!-- <view class="price-box">
							共
							<text class="num">7</text>
							件商品 实付款
							<text class="price">143.7</text>
						</view> -->
						<!-- <view class="action-box b-t" v-if="item.state != 9">
							<button class="action-btn" @click="cancelOrder(item)">取消订单</button>
							<button class="action-btn recom">立即支付</button>
						</view> -->
					</view>
					 
					<uni-load-more :status="tabItem.loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>

	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import Json from '@/Json';
	export default {
		
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				// show:true,
				// showw:false,
				state:0,
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '全部',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 1,
						text: '进行中',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 2,
						text: '已完成',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 3,
						text: '已取消',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 4,
						text: '售后退款',
						loadingType: 'more',
						orderList: []
					}
				],
			};
		},
		
		onLoad(){
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			let state=0
			this.tabCurrentIndex =state;
			
			this.loadData()
			
			
			if(state == 0){
				this.loadData()
			}
		
			
		},
		 
		methods: {
		
			shangping(index,item){
				// this.show = this.show  == true?false:true;
				// this.item.show = this.item.show  == true?false:true;
				 item.show=false;
				 item.showw=true;
				 // item.showw=true;
			},
			shangpingg(index,item){
				// this.showw = this.showw  == true?false:true;
				// this.item.showw = this.item.showw  == true?false:true;
				item.show=true;
				item.showw=false;
			},
			
			//获取订单列表
			loadData(source){
				//这里是将订单挂载到tab列表下
				
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				
				if(source === 'tabChange' && navItem.loaded === true){
					//tab切换只有第一次需要加载数据
					return;
				}
				if(navItem.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				
				navItem.loadingType = 'loading';
				
				setTimeout(()=>{
					let orderList = Json.orderList.filter(item=>{
						//添加不同状态下订单的表现形式
						item = Object.assign(item, this.orderStateExp(item.state));
						//演示数据所以自己进行状态筛选
						if(state === 0){
							//0为全部订单
							return item;
						}
						return item.state === state
					});
					orderList.forEach(item=>{
						navItem.orderList.push(item);
					})
					//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
					this.$set(navItem, 'loaded', true);
					
					//判断是否还有数据， 有改为 more， 没有改为noMore 
					navItem.loadingType = 'more';
				}, 600);	
			}, 

			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
			//删除订单
			deleteOrder(index){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
					uni.hideLoading();
				}, 600)
			},
			//取消订单
			cancelOrder(item){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					let {stateTip, stateTipColor} = this.orderStateExp(9);
					item = Object.assign(item, {
						state: 9,
						stateTip, 
						stateTipColor
					})
					
					//取消订单后删除待付款中该项
					let list = this.navList[1].orderList;
					let index = list.findIndex(val=>val.id === item.id);
					index !== -1 && list.splice(index, 1);
					
					uni.hideLoading();
				}, 600)
			},

			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#0099ff';
				switch(+state){
					case 1:
						stateTip = '进行中'; break;
					case 2:
						stateTip = '已完成'; break;
					// case 9:
					// 	stateTip = '订单已关闭'; 
					// 	stateTipColor = '#909399';
					// 	break;
						
					//更多自定义
				}
				return {stateTip, stateTipColor};
			}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: #0099ff;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #0099ff;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;
			.goods-item{
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}
			.goods-img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 20upx 0;
			.goods-img{
				display: block;
				width: 120upx;
				height: 120upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}
				.attr-box{
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}
				.price{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					&:before{
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}
		
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
				&:before{
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
		.action-box{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #fff9f9;
				color: $base-color;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
	.beizhu{
		background-color: #ddd;
		width: 97%;
		height: 120rpx;
		margin: 0;
		color: #e27a28;
	}
</style>
