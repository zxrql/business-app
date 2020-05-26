<template>
	<view class="navigator">
		
		<view class="tip">
			<text>近三十天流水</text>
			<text>
				<a href="#" @click.pevent="filterMsg">筛选进30天数据 》</a>
			</text>
		</view>
		
		<view class="title">
			<text 
				:style="index===idx?active:''" 
				v-for="(item,index) of title" 
				:key="index"
				@click="changIdx(index)"
			>
				{{item}}
			</text>
		</view>
		<view class="container">
			<view 
				class="item" 
				v-for="(item,index) of cur" 
				:key="index"
				v-show="index===idx?true:false"
			>
			<!-- v-for="(cur,index) in item.arr" -->
				<ul class="list">
					<li v-for="(cur,index) in item.arr">
						<p class="pone">
							<text>{{cur.bill}}</text>
							<text v-color>{{cur.payfor}}</text>
						</p>
						<p class="ptow">
							<text>{{cur.success}}</text>
							<text>{{cur.yuer}}</text>
						</p>
					</li>
					<!-- <li>
						<p class="pone">
							<text>10月30 日账单</text>
							<text v-color>-3000.00</text>
						</p>
						<p class="ptow">
							<text>成功 2019-10-31 12:50:00</text>
							<text>余额 4000.00</text>
						</p>
					</li>
					<li>
						<p class="pone">
							<text>10月30 日账单</text>
							<text v-color>+3000.00</text>
						</p>
						<p class="ptow">
							<text>成功 2019-10-31 12:50:00</text>
							<text>余额 4000.00</text>
						</p>
					</li> -->
				</ul>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:["全部","收入","支出"],
				list:[],
				cur:[
					{
						arr:[
							{
								bill:'10月30号账单',
								payfor:'+3000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							},
							{
								bill:'10月30号账单',
								payfor:'-3000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							},
							{
								bill:'10月30号账单',
								payfor:'+8000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							}
						]
					},
					{
						arr:[
							{
								bill:'10月30号账单',
								payfor:'+3000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							},
							{
								bill:'10月30号账单',
								payfor:'+5000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							},
							{
								bill:'10月30号账单',
								payfor:'43000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							}
						]
					},
					{
						arr:[
							{
								bill:'10月30号账单',
								payfor:'-5000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							},
							{
								bill:'10月30号账单',
								payfor:'-6000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							},
							{
								bill:'10月30号账单',
								payfor:'-1000',
								success:'成功 2019-10-31 12:50:00',
								yuer:'余额 4000.00'
							}
						]
					}
				],
				listGrpup:[
					{
						bill:"10月30日账单",
					}
				],
				active : {
					borderBottom:'4rpx solid skyblue'
				},
				idx:0,
				last:1
			}
		},
		onLoad() {
			this.getDate()
		},
		computed:{
			// current(){
			// 	let pages = []
			// 	this.cur.forEach((item,index)=>{
			// 		let page = Math.floor(index%3)
			// 		if(!pages[page]) {
			// 			pages[page] = []
			// 		}
			// 		pages[page].push(item)
			// 	})
			// 	console.log(pages)
			// 	return pages
			// }
		},
		directives:{
			color:{
				bind(el,binding) {
					 let comeIn = el.innerText
					 if(comeIn>0){
						 el.style.color = 'green'
					 }else{
						 el.style.color = 'red'
					 }
				}
			}
		},
		methods: {
			changIdx(idx){
				this.idx = idx
				
				// switch(idx) {
				// 	case 0: 
						
				// 		break;
				// 	case 1:
				// 		let pay = []
				// 		this.cur.forEach(item=>{
				// 			if(item.payfor > 0)
				// 			pay.push(item) 
				// 		})
				// 		console.log(pay)
				// 		this.cur = pay
				// 		break;
				// 	case 2:
				// 		let sub = []
				// 		this.cur.forEach(item=>{
				// 			if(item.payfor < 0){
				// 				sub.push(item)
				// 			}
				// 		})
				// 		this.cur = sub
				// 		break;
				// }
				
				// let firstArr = this.cur.map(item=>{
				// 		return item.arr
				// 	})
				// let ret = firstArr.flat()
				// switch(idx) {
				// 	case 0: 
				// 		this.list = this.list
				// 		break;
				// 	case 1:
				// 		let pay = ret.filter(item=>{
				// 			return item.payfor > 0
				// 		})
				// 		this.list = pay
				// 		break;
				// 	case 2:
				// 		let sub = ret.filter(item=>{
				// 			return item.payfor < 0
				// 		})
				// 		this.list = sub
				// 		break;
				// }
				
			},
			filterMsg(){
				uni.navigateTo({
					url:'/pages/datePicker/datePicker'
				})
			},
			getDate(){
				uni.$on('sendMsg',res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.navigator{
		width: 750rpx;
		
		.tip{
			margin: 5rpx;
			
			text{
				font-size: 30rpx;
			}
			text:nth-child(2){
				float:right;
			}
		}
		
		.title{
			display: flex;
			justify-content: center;
			box-shadow: 0 1px 1px rgba(0,0,0,0.1);
			text{
				width: 30%;
				text-align: center;
				box-sizing: border-box;
				padding: 20rpx;
			}
		}
		
		.container{
			position: relative;
			width: 750rpx;
			margin-top: 20rpx;
			
			.item {
				position: absolute;
				top: 0;
				left: 0;
				width: 750rpx;
				// height: 50vh;
				// background-color: pink;
				
				.list{
					padding: 0;
					margin: 0;
					list-style: none;
					
					li{
						height: 120rpx;
						// background-color: #7cbfab;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						&:last-child{
							border-bottom: none;
						}
						
						.pone {
							text:nth-child(1){
								padding-left: 16rpx;
								font-weight: bold;
							}
							text:nth-child(2){
								color: green;
								float: right;
								padding-right: 10rpx;
							}
						}
						
						.ptow {
							text{
								padding-left: 16rpx;
								font-size: 24rpx;
								color: #ccc;
							}
							text:nth-child(2){
								padding-top: 16rpx;
								padding-right: 16rpx;
								float: right;
							}
						}
					}
				}
			}
		}
	}
</style>
