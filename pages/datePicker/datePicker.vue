<template>
    <view class="picker">
		
		<view class="pikerItem" style="font-size: 28rpx;font-weight: bold;color: #333333;">
			<view class="uni-list">
			    <view class="uni-list-cell" style="flex-direction: column;">
			        <view class="uni-list-cell-left">
			            开始日期
			        </view>
			        <view class="uni-list-cell-db">
			            <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateOne">
			                <view class="uni-input">{{date}}</view>
			            </picker>
			        </view>
			    </view>
			</view>
		</view>
		
		<view class="pikerItem" style="font-size: 28rpx;font-weight: bold;color: #333333;">
			<view class="uni-list">
			    <view class="uni-list-cell" style="flex-direction: column;">
			        <view class="uni-list-cell-left">
			            结束日期
			        </view>
			        <view class="uni-list-cell-db">
			            <picker mode="date" :value="dateOne" :start="startDate" :end="endDate" @change="bindDateTow">
			                <view class="uni-input">{{dateOne}}</view>
			            </picker>
			        </view>
			    </view>
			</view>
		</view>
		<view class="pikerItem" style="font-size: 28rpx;font-weight: bold;color: #333333;">
			<button type="default" size="mini" @click="sendDate">提交</button>
		</view>
		
    </view>
</template>

<script>
	export default {
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
	        return {
	            title: 'picker',
	            array: ['中国', '美国', '巴西', '日本'],
	            index: 0,
	            date: currentDate,
				dateOne: currentDate,
	            time: '12:01'
	        }
	    },
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
	    methods: {
	        bindDateOne(e) {
	            this.date = e.target.value
	        },
			bindDateTow(e){
				this.dateOne = e.target.value
			},
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 60;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        },
			sendDate(){
				
				uni.redirectTo({
					url:'/pages/nvue/nvue'
				});
				
				let msg = {
					dateStart:this.date,
					endDate:this.dateOne
				}
				uni.$emit('sendMsg',msg)
			}
	    }
	}
</script>

<style lang="scss">
	
	.picker{
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		.pikerItem{
			text-align: center;
			&:nth-child(3){
				padding: 30rpx;
			}
		}
	}
</style>
