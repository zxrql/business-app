if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/m-icon/m-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/m-input?hash=e2b6e48fa2f377559fa96670965233895f86d3ca');
require('../../pages/Shopmanagement/Shopmanagement?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/Orderprocessing/Orderprocessing?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Orderquery/Orderquery?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Setup/Setup?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Setup/Accountnumber?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Setup/updatepassword?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/Setup/updatephone?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}