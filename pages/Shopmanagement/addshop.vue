<template>
	<view>
		
		<view class="uni-padding-wrap uni-common-mt">
			<view class="demo" @click="chooseImage">
				<block v-if="imageSrc" >
					<image :src="imageSrc" class="image" mode=" aspectFill"  style="width: 200rpx;height: 200rpx;"></image>
				</block>
				<block v-else>
					<view class="uni-hello-addfile" >+ 选择图片</view>
					
				</block>
			</view>
		</view>
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">商品名称</view>
			<input   name="input"  type="number" :value="inputClearValue" @input="clearInput" ></input>
			 <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
		</view> 
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">商品描述</view>
			<input   name="input"  type="text" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> 
	<!-- 	<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">商品价格</view>
			<input   name="input"  type="text" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> -->
	<!-- 	<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">商品分类</view>
			<input   name="input"  type="text" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> -->
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">包装费</view>
			<input   name="input"  type="number" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> 
		<view class="cu-form-group" style="margin-top: 20rpx;" v-if="flag">
			<view class="title">原价</view>
			<input   name="input"  type="text" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> 
		<view class="cu-form-group" style="margin-top: 20rpx;" v-if="flag">
			<view class="title">现价</view>
			<input   name="input"  type="text" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> 
		<!-- <view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">原价</view>
			<input   name="input"  type="number" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> 
		
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">现价</view>
			<input   name="input"  type="number" :value="inputClearValuee" @input="clearInputt" ></input>
			 <text class="uni-icon" v-if="showClearIconn" @click="clearIconn">&#xe434;</text>
		</view> -->
		<view class="cu-form-group" style="margin-top: 20rpx;">
			<view class="title">商品分类
			
					<select class="uni-select " name="" id="" >
						<option value="" class="uni-select-option">酒水</option>
						<option value=""  class="uni-select-option-option">饮料</option>
						<option value="" class="uni-select-option">米线</option>
						<option value=""  class="uni-select-option-option">小吃</option>
						<option value="" class="uni-select-option">盖饭</option>
						<option value=""  class="uni-select-option-option">炒饭</option>
					</select>
			</view>
		</view> 
	<view class="" style="display: flex;margin-top: 20rpx;background: white;height: 100rpx;">
	      <view class="" style="width: 600rpx;margin-left: 26rpx;line-height: 100rpx;">是否上架</view>
	            <radio-group @change="radioChange"   v-for="(item, index) in items" :key="item.value">
	                    <view style="line-height: 100rpx;width: 50%;">
	                        <radio :value="item.value" :checked="index === current" />{{item.name}}
	                    </view>
	            
	            </radio-group>
	 </view>
		   <view class="" style="display: flex; margin-top: 20rpx;background: white;height: 100rpx;">
		         <view class="" style="width: 600rpx;margin-left: 26rpx;line-height: 100rpx;">规格</view>
		               <radio-group @change="radioChangee"   v-for="(item, index) in itemss" :key="item.value">
		                       <view style="line-height: 100rpx;width: 50%;">
		                           <radio :value="item.value" :checked="index === currentt" />{{item.names}}
		                       </view>
		               </radio-group>
					 
					
		  </view>
		 <view class="" v-if="flag">
		     
				   <!-- <button class="cu-btn line-orange" v-for="(item,i) of cs"  :key="i" ref='btn1'>{{item}}</button> -->
				   
				<TheProblem
					:data="data"
					:specListProp="specList"
				>
				</TheProblem>
				   
				   
				
				   
				
			
				  
				  
				  
				  
		      </view>
		<view class="btn-row" >
			<button  class="cu-btn 	bg-green " @tap="updatesave" style="width: 90%;margin: 40rpx 5% 0rpx 5%;border-radius: 40rpx;" >提交保存</button>
		</view>
		
	</view>
</template>

<script>
	import {data} from 'index.js'
	import TheProblem from 'components/MM.vue'
	export default {
		data() {
			return {
				modalName: null,
				modalNamee: null,
			data:[],
				imageSrc: '../../static/sctpp.png',
				showClearIcon: false,
				showClearIconn: false,
				inputClearValue: '',
				inputClearValuee: '',
				 count: '' ,// 倒计时
				itemss: [{
				                 value: '1',
				                 names: '有'
				             },
				             {
				                 value: '2',
				                 names: '无',
				                 checked: 'true'
				             },
				            
				         ],
				   items: [{
				                    value: '1',
				                    name: '上架'
				                },
				                {
				                    value: '2',
				                    name: '下架',
				                    checked: 'true'
				                },
				               
				            ],
							flag:true,
				            current: 0,
							currentt: 0
				
			}
		},
		components:{
			TheProblem
		},
	onUnload() {
		this.imageSrc = '';
	},
	computed:{
		specList(){
			let result = []
			data.forEach(item=>{
				item.propertyList.forEach(property=>{
					// 查找 result 是否有 property.name 这一项, 返回一个布尔值
					let target = result.find(spec=>{
						return spec.name === property.name
					});
					/*	
						target:
							true
							false
					*/
				   if (!target) {
						 result.push({
							 name: property.name,
							 valueList: [{name: property.value,price:property.price}]
						 })
					 } else {
						 if (!target.valueList.find(value => value.name === property.value)) {
							 target.valueList.push({name: property.value,price:property.price})
						 }
					 }
					
				})
			});
			return result
		}
	},
	mounted(){
		setTimeout(()=>{
			this.data = data
		},500)
	},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			showModall(e) {
				this.modalNamee = e.currentTarget.dataset.target
			},
			hideModall(e) {
				this.modalNamee = null
			},
			 onAdd() {
				  this.cs.push(this.seat);
				  this.seat = ''
				  this.modalName = null
				  
					/*
					
						for (key,value) in guige
							得到规格项
							for （item，index） of key[value]
					
					*/
				  
				  
				  let s = Symbol()
				  let x = Symbol()
				  let guige = {}
				  guige[s] = [1,2,3,4,5]
				  guige[x] = [] // 新的规格项
					console.log(guige)
				  // console.log(this.$refs.btn1,this.$refs)
				  // console.log(this.$refs.inp1.value)
				  // this.$refs.btn1 = 
				  // this.$refs.inp1.value = ''
			    },
				onAddd() {
								  this.css.push(this.seatt);
								  this.seatt = ''
								  this.modalNamee = null
									
								  // console.log(this.$refs.btn1,this.$refs)
								  // console.log(this.$refs.inp1.value)
								  // this.$refs.btn1 = 
								  // this.$refs.inp1.value = ''
				   },
			 radioChange: function(evt) {
			             for (let i = 0; i < this.items.length; i++) {
			                 if (this.items[i].value === evt.target.value) {
			                     this.current = i;
			                     break;
			                 }
			             }
			         },
					 radioChangee: function(evt) {
									this.flag=this.flag==false
					             for (let i = 0; i < this.itemss.length; i++) {
					                 if (this.itemss[i].value === evt.target.value) {
					                     this.currentt = i;
					                     break;
					                 }
					             }
					         },
			chooseImage: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload',
							filePath: 'imageSrc',
							fileType: 'image',
							name: 'data',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								this.imageSrc = imageSrc
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
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
						title:"请输入商品名称"
					})
					return;
				}
				if( this.inputClearValuee==''){
					uni.showToast({
						title:"请输入商品描述"
					})
					return;
				}
				if( this.inputClearValuee!='' && this.inputClearValue!=''){
					uni.showToast({
						title:"添加商品成功"
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
					        // 跳转到商品列表界面
					       uni.navigateTo({
					       	url:"./Managementclassification"
					       })
					      }
					    }, 1000)
					  }
					
				}
				
				
			},
			
		}
	}
</script>

<style>
	.uni-select{
		position: relative;width: 540rpx;height: 50rpx;right: 0rpx; background: transparent;border:0;outline: none;border-radius: 20rpx;background-color: #FFFFFF;color: #555555;opacity: 0.5;text-align-last: center;
	}
	.uni-select-option{
		border: 0;outline: none;position: relative;top: -32px;
	}
	.uni-select-option-option{
		border: 0;outline: none;
	}
.image {
		width: 100%;
	}

	.demo {
		background: #FFF;
		text-align: center;
		
	}
	.uni-padding-wrap{
		width: 750rpx;
		padding: 0rpx;
	}
	.uni-common-mt{
		margin-top: 0rpx;
	}
</style>
