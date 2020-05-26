function checkMobile(phone){
    return RegExp(/^1[345678]\d{9}$/).test(phone);
}
function checkMobilee(password,passwordd){
    return RegExp(/^(\w){6,20}$/).test(password,passwordd);
}
// function checkMobilee(phonee){
//     return RegExp(/^1[34578]\d{9}$/).test(phonee);
// }

//工具包
//正则匹配
//匹配帐号
const regUid = function (str) {
    return !RegExp(/^\w{6,12}$/).test(str);
}

const regName = function(str){
	return !RegExp(/^[\u4e00-\u9fa5]{2,5}$/).test(str);
}

//匹配身份证
const regIDC = function (str) {
     return !RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(str);
}
//匹配手机号
const regPhone = function (str) {
     return RegExp(/^1[34578]\d{9}$/).test(str);
}
//匹配验证码
const regCheckNum = function (str) {
    return !RegExp(/^\d{4}$/).test(str);
}

//匹配邮箱格式
const regEmail = function regEmail(str){
	return !RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(str);
}

exports = {
	
	regUid : regUid,
	regPhone : regPhone,
	regName:regName,
	regIDC:regIDC,
	regEmail:regEmail,
	regCheckNum:regCheckNum
}
module.exports={
	checkMobile : checkMobile,
	checkMobilee : checkMobilee
}
