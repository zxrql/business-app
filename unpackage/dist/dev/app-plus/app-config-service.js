
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Shopmanagement/Shopmanagement","pages/login/login","pages/Orderprocessing/Orderprocessing","pages/Orderquery/Orderquery","pages/Setup/Setup","pages/Setup/Accountnumber","pages/Setup/updatepassword","pages/Setup/updatephone","pages/Setup/set-up-about","pages/Setup/set-up-access","pages/Shopmanagement/shoplist","pages/Shopmanagement/Managementclassification","pages/Shopmanagement/addclassification","pages/Shopmanagement/updateclassification","pages/Shopmanagement/addshop","pages/Shopmanagement/updateshop","pages/Setup/printer","pages/Setup/printermanage","pages/nvue/nvue","pages/viewPort/viewPort","pages/datePicker/datePicker","pages/Setup/notopen","pages/map/map"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0099FF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999999","selectedColor":"#000000","backgroundColor":"#FFFFFF","fontSize":"12","list":[{"pagePath":"pages/Orderprocessing/Orderprocessing","iconPath":"static/order-processing.png","selectedIconPath":"static/order-processing-hover.png","text":"订单处理"},{"pagePath":"pages/Orderquery/Orderquery","iconPath":"static/order-history.png","selectedIconPath":"static/order-history-hover.png","text":"订单查询"},{"pagePath":"pages/Shopmanagement/Shopmanagement","iconPath":"static/shangpu.png","selectedIconPath":"static/shangpu-hover.png","text":"商铺管理"},{"pagePath":"pages/Setup/Setup","iconPath":"static/set-up.png","selectedIconPath":"static/set-up-hover.png","text":"设置"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"business-app","compilerVersion":"2.7.5","entryPagePath":"pages/Shopmanagement/Shopmanagement","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Shopmanagement/Shopmanagement","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商铺管理"}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/Orderprocessing/Orderprocessing","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单处理"}},{"path":"/pages/Orderquery/Orderquery","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单查询"}},{"path":"/pages/Setup/Setup","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/Setup/Accountnumber","meta":{},"window":{"navigationBarTitleText":"账号"}},{"path":"/pages/Setup/updatepassword","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/Setup/updatephone","meta":{},"window":{"navigationBarTitleText":"修改手机号"}},{"path":"/pages/Setup/set-up-about","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/Setup/set-up-access","meta":{},"window":{"navigationBarTitleText":"通知与提示音"}},{"path":"/pages/Shopmanagement/shoplist","meta":{},"window":{"navigationBarTitleText":"商品列表"}},{"path":"/pages/Shopmanagement/Managementclassification","meta":{},"window":{"navigationBarTitleText":"管理分类"}},{"path":"/pages/Shopmanagement/addclassification","meta":{},"window":{"navigationBarTitleText":"添加分类"}},{"path":"/pages/Shopmanagement/updateclassification","meta":{},"window":{"navigationBarTitleText":"修改分类"}},{"path":"/pages/Shopmanagement/addshop","meta":{},"window":{"navigationBarTitleText":"添加商品"}},{"path":"/pages/Shopmanagement/updateshop","meta":{},"window":{"navigationBarTitleText":"修改商品"}},{"path":"/pages/Setup/printer","meta":{},"window":{"navigationBarTitleText":"打印机管理"}},{"path":"/pages/Setup/printermanage","meta":{},"window":{"navigationBarTitleText":"打印机设置"}},{"path":"/pages/nvue/nvue","meta":{},"window":{"navigationBarTitleText":"账号"}},{"path":"/pages/viewPort/viewPort","meta":{},"window":{"navigationBarTitleText":"经营数据"}},{"path":"/pages/datePicker/datePicker","meta":{},"window":{"navigationBarTitleText":"账单筛选"}},{"path":"/pages/Setup/notopen","meta":{},"window":{"navigationBarTitleText":"该功能暂未开放"}},{"path":"/pages/map/map","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
