(function(e){function t(t){for(var s,i,a=t[0],c=t[1],u=t[2],d=0,h=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},o={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/iotgame4/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),o=n.n(s);o.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"4fb3":function(e,t,n){"use strict";var s=n("7bb4"),o=n.n(s);o.a},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"humanIT",width:"30%",src:n("961b")}}),s("HelloWorld",{attrs:{msg:"Welcome to ShakeIT!"}}),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{color:"#999","font-size":"small","font-weight":"normal"}},[e._v("ShakeIT is a simple and fun Internet of Things game, used for the development of an IoT showcase in purpose of a thesis."),n("br"),e._v(" © Stefanie Motzokan, 2020 "),n("br"),e._v("This work is licensed under a "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by-sa/3.0/"}},[e._v("Creative Commons Attribution-ShareAlike 3.0 License")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("Your current session is identified with "),n("b",[e._v(e._s(e.sessionID))]),e._v(".")]),e._m(0),n("form",{attrs:{id:"login"}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"start",attrs:{id:"username",placeholder:"Create Your username",disabled:e.clicked},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{attrs:{id:"StartButton"}},[n("button",{staticClass:"start",attrs:{disabled:e.clicked},on:{click:e.startDataTransfer}},[e._v("Go for IT")])])]),n("div",{staticClass:"output-info"},[n("ul",[n("li",{staticClass:"x_axis"},[n("b",[e._v("x")]),e._v(" "+e._s(e.xValue))]),n("li",{staticClass:"y_axis"},[n("b",[e._v("y")]),e._v(" "+e._s(e.yValue))]),n("li",{staticClass:"z_axis"},[n("b",[e._v("z")]),e._v(" "+e._s(e.zValue))])])]),e.over?n("div",{attrs:{id:"timeover"}},[n("p",[e._v("Time is over!")])]):e._e()])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("So first, create your username."),n("br"),e._v(' Second, press the button "Go for IT". '),n("br"),e._v(" After pressing the button, explore your smartphones accelerometer data - but be ready to shake your device for 10 seconds to win the game after starting the countdown ;)")])}],c=n("8374"),u=c["a"],l=(n("4fb3"),n("2877")),d=Object(l["a"])(u,i,a,!1,null,"709ca4cb",null),h=d.exports,f={name:"app",components:{HelloWorld:h}},v=f,p=(n("034f"),Object(l["a"])(v,o,r,!1,null,null,null)),m=p.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(m)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"7bb4":function(e,t,n){},8:function(e,t){},8374:function(e,t,n){"use strict";(function(e){n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("96cf");var s=n("1da1"),o=n("bc3a").default;t["a"]={name:"HelloWorld",props:{msg:String},data:function(){return{deviceID:String,sharedAccessKey:String,clicked:!1,xValue:"to shake",yValue:"to shake",zValue:"to shake",username:null,sessionID:String,lastMessageTime:0,timePeriod:500,topic:String,client:void 0,over:!1}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDeviceID();case 2:t=window.location.search.substring(1),n=new URLSearchParams(t),this.sessionID=n.get("session"),this.createMQTTConnection();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getDeviceID:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.get("https://workshop-functions4.azurewebsites.net/api/GetDeviceID");case 3:t=e.sent,console.log(t.data),this.deviceID=t.data.deviceID,this.sharedAccessKey=t.data.sharedAccessKey,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("Error getting data: "+e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),releaseDevice:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post("https://workshop-functions4.azurewebsites.net/api/ResetDeviceID?deviceID="+this.deviceID);case 3:console.log("Device reset"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log("Error resetting device: "+e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),startDataTransfer:function(){var e=this;null==this.username|""===this.username?window.alert("No username!"):null!=this.sessionID?(this.clicked=!0,"function"===typeof DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(t){"granted"===t&&(window.addEventListener("devicemotion",e.motion,!0),e.showTime())})).catch(Window.console.error):(this.showTime(),window.addEventListener("devicemotion",this.motion,!0))):window.alert("No session! Scann again!")},motion:function(e){var t=Date.now();console.log("Engage"),console.log(e);var n=e.acceleration;this.xValue=Math.round(100*n.x)/100,this.yValue=Math.round(100*n.y)/100,this.zValue=Math.round(100*n.z)/100,(0===this.lastMessageTime||this.lastMessageTime+this.timePeriod<t)&&(console.log("New Message now on sending status"),this.sendMessage(this.topic),this.lastMessageTime=Date.now())},createMQTTConnection:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n("e7fc"),s="Workshop-Hub4.azure-devices.net",console.log("Ist da "+this.deviceID+" "+this.sharedAccessKey),o=this.generateSAS(s+"/devices/"+this.deviceID,this.sharedAccessKey,null,2),this.topic="devices/"+this.deviceID+"/messages/events/",this.client=t.connect({host:s,port:443,path:"/$iothub/websocket?iothub-no-client-cert=true",protocol:"mqtts",protocolId:"MQTT",protocolVersion:4,clientId:this.deviceID,username:s+"/"+this.deviceID+"/api-version=2018-06-30",password:o,keepalive:3e4}),this.client.on("connect",(function(e){console.log("mqtt connected at the beginning",e)})),this.client.on("reconnect",(function(){console.log("mqtt reconnected!")})),this.client.on("message",(function(e,t){var n=new TextDecoder("utf-8").decode(t);console.log("receive!",n)})),this.client.on("close",(function(e){console.log("mqtt closed!",e)}));case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),sendMessage:function(e){var t=JSON.stringify({sessionID:this.sessionID,deviceID:this.username,deviceCoordinateX:this.xValue,deviceCoordinateY:this.yValue,deviceCoordinateZ:this.zValue,sendingTimestamp:Date.now()});console.log("Sending message: "+t),this.client.publish(e,t)},showTime:function(){var e=this;setTimeout((function(){window.removeEventListener("devicemotion",e.motion,!0),e.over=!0,e.releaseDevice(),e.client.end()}),6e4)},generateSAS:function(t,s,o,r){console.log("Generating");var i=n("1c46");t=encodeURIComponent(t);var a=Date.now()/1e3+60*r;a=Math.ceil(a);var c=t+"\n"+a,u=i.createHmac("sha256",e.from(s,"base64"));u.update(c);var l=encodeURIComponent(u.digest("base64")),d="SharedAccessSignature sr="+t+"&sig="+l+"&se="+a;return o&&(d+="&skn="+o),console.log("Generating end"),d}}}}).call(this,n("b639").Buffer)},"85ec":function(e,t,n){},"961b":function(e,t,n){e.exports=n.p+"img/hands.945c91af.png"}});
//# sourceMappingURL=app.89154f1e.js.map