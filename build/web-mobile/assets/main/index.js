System.register("chunks:///_virtual/clickCSSU.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,c,n,o,s,h,r;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,c=t._decorator,n=t.Node,o=t.director,s=t.Vec3,h=t.tween,r=t.Component}],execute:function(){var a;e._RF.push({},"99472PP33tBILNRGZGFXyzW","clickCSSU",void 0);var l=c.ccclass;c.property,t("clickCSSU",l("clickCSSU")(a=function(t){function e(){for(var i,e=arguments.length,c=new Array(e),n=0;n<e;n++)c[n]=arguments[n];return(i=t.call.apply(t,[this].concat(c))||this).touch_cnt=0,i.circles=void 0,i}i(e,t);var c=e.prototype;return c.start=function(){this.circles=this.node.getChildByName("circles"),this.hideCircles(),this.node.getChildByName("ikun1").active=!1,this.node.getChildByName("ikun2").active=!1,this.node.on(n.EventType.TOUCH_START,this.onTouchStart,this,!0),o.preloadScene("HuaRongDao")},c.update=function(t){},c.hideCircles=function(){this.circles.getChildByName("1").active=!1,this.circles.getChildByName("2").active=!1,this.circles.getChildByName("3").active=!1,this.circles.getChildByName("4").active=!1},c.onTouchStart=function(t){if(this.touch_cnt++,this.touch_cnt<=4){var i=this.circles.getChildByName(this.touch_cnt.toString()),e=t.getUILocation().x,c=t.getUILocation().y;i.setWorldPosition(new s(e,c,0)),i.active=!0}},c.onCheckBtnClicked=function(){this.touch_cnt--,this.isFinished()?o.loadScene("HuaRongDao"):(h(this.node.getChildByName("checkButton")).by(.05,{position:new s(-5,0,0)}).by(.05,{position:new s(8,0,0)}).by(.03,{position:new s(-3,0,0)}).start(),this.touch_cnt=0,this.hideCircles())},c.isFinished=function(){if(4!=this.touch_cnt)return!1;for(var t="",i=1;i<=4;i++){var e=this.circles.getChildByName(i.toString()).getPosition().x,c=this.circles.getChildByName(i.toString()).getPosition().y;e<=-160&&e>=-220&&c<=-110&&c>=-180?t+="C":e<=-70&&e>=-170&&c>=90&&c<=190||e<=-200&&e>=-270&&c>=160&&c<=210?t+="S":e>=10&&e<=80&&c>=-60&&c<=10?t+="U":e>=200&&e<=270&&c>=160&&c<=220?t+="I":e>=100&&e<=170&&c>=60&&c<=130?t+="K":e>=80&&e<=190&&c>=-260&&c<=-140&&(t+="N")}return"CSSU"==t||("IKUN"==t&&(this.node.getChildByName("ikun1").active=!0,this.node.getChildByName("ikun2").active=!0),!1)},e}(r))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/dialogManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var a,t,o,i,s,r,l,d,n,c,h;return{setters:[function(e){a=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,i=e.input,s=e.Input,r=e.director,l=e.tween,d=e.UIOpacity,n=e.Vec3,c=e.Label,h=e.Component}],execute:function(){var p;t._RF.push({},"bcd74tTSRtKE6SlK5yGg6/D","dialogManager",void 0);var g=o.ccclass;o.property,e("dialogManager",g("dialogManager")(p=function(e){function t(){for(var a,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(a=e.call.apply(e,[this].concat(o))||this).dialog1=[{speaker:"player",str:"掉进了像素世界...",mood:"shock"},{speaker:"cat",str:"你好啊，用户名",mood:"mi"},{speaker:"player",str:"啊啊啊啊猫说话了！",mood:"shock"},{speaker:"player",str:"等等，谁是用户名！？",mood:"shock"},{speaker:"cat",str:"不是你自己写的用户名吗？",mood:"general"},{speaker:"player",str:"不想吐槽了。。",mood:"wuyu"},{speaker:"cat",str:"最近人工智能大肆入侵我院，看你名字这么奇怪，你肯定是机器人！",mood:"mi"},{speaker:"player",str:"我不叫用户名。。",mood:"wuyu"},{speaker:"cat",str:"而且，最重要的是，你和我们的画风不一样！",mood:"mi"},{speaker:"player",str:"是我不小心掉进来的",mood:"wuyu"},{speaker:"cat",str:"不要解释了！通过我的考验再说吧！",mood:"mi"}],a.dialog2=[{speaker:"cat",str:"恭喜你通过挑战！",mood:"happy"},{speaker:"cat",str:"这么厉害，要不要加入我们计算机学院学生会啊！",mood:"mi"},{speaker:"player",str:"计算机学院学生会？",mood:"general"},{speaker:"cat",str:"是的，刚才出现了很多次的【CSSU】就是我们哦",mood:"general"},{speaker:"cat",str:"我们有五个小组，办公、传媒、权服、文体、学术，负责承办计算机学院的各项活动~",mood:"general"},{speaker:"cat",str:"想了解更多，可以关注公众号【ZJU微计录】，加入纳新群！",mood:"general"},{speaker:"cat",str:"对啦，为了奖励你通关，可以14-17日来云峰广场CSSU现宣摊位领取奖品哦~记得截图^-^",mood:"happy"},{speaker:"player",str:"好耶！！马上就到！",mood:"happy"}],a.dialog3=[{speaker:"cat",str:"这就放弃啦，你也太菜了！",mood:"mi"},{speaker:"player",str:"是题目太逆天了吧",mood:"wuyu"},{speaker:"cat",str:"哈哈，不过这么菜，你肯定是人类了",mood:"happy"},{speaker:"cat",str:"人类，要不要加入我们计算机学院学生会啊",mood:"mi"},{speaker:"player",str:"计算机学院学生会？",mood:"general"},{speaker:"cat",str:"是的，刚才出现了很多次的【CSSU】就是我们哦",mood:"general"},{speaker:"cat",str:"我们有五个小组，办公、传媒、权服、文体、学术，负责承办计算机学院的各项活动~",mood:"general"},{speaker:"cat",str:"想了解更多，可以关注公众号【ZJU微计录】，加入纳新群！",mood:"general"},{speaker:"cat",str:"对了，14-17日我们在云峰广场有现宣~欢迎来玩^-^",mood:"happy"},{speaker:"player",str:"好耶！！马上就到！",mood:"happy"}],a.dialog_cnt=0,a.dialog=void 0,a.Label=void 0,a.cat=void 0,a.player=void 0,a}a(t,e);var o=t.prototype;return o.start=function(){i.on(s.EventType.TOUCH_START,this.onTouchStart,this),"Dialog1"==this.node.name?(this.dialog=this.dialog1,r.preloadScene("selectCat")):"Dialog2"==this.node.name?this.dialog=this.dialog2:"Dialog3"==this.node.name&&(this.dialog=this.dialog3),this.Label=this.node.getChildByName("Labels"),this.cat=this.node.getChildByName("cat"),this.player=this.node.getChildByName("player"),this.nextDialog()},o.update=function(e){},o.onTouchStart=function(e){this.nextDialog()},o.nextDialog=function(){this.dialog_cnt<this.dialog.length?("cat"==this.dialog[this.dialog_cnt].speaker?this.catSay(this.dialog[this.dialog_cnt].str,this.dialog[this.dialog_cnt].mood):"player"==this.dialog[this.dialog_cnt].speaker&&this.playerSay(this.dialog[this.dialog_cnt].str,this.dialog[this.dialog_cnt].mood),this.dialog_cnt++):"Dialog1"==this.node.name?r.loadScene("selectCat"):"Dialog2"!=this.node.name&&"Dialog3"!=this.node.name||(console.log(this.node.getChildByName("ending")),l(this.node.getChildByName("ending").getComponent(d)).to(.5,{opacity:255}).start(),console.log("q"))},o.catSay=function(e,a){this.cat.getChildByName("general").active=!1,this.cat.getChildByName("happy").active=!1,this.cat.getChildByName("mi").active=!1,this.cat.getChildByName(a).active=!0,l(this.cat).to(.1,{scale:new n(1.2,1.2,0)}).start(),l(this.player).to(.1,{scale:new n(1.6,1.6,0)}).start(),this.Label.getChildByName("Label_cat").active=!0,this.Label.getChildByName("Label_player").active=!1,this.Label.getChildByName("dialog").getComponent(c).string=e},o.playerSay=function(e,a){this.player.getChildByName("general").active=!1,this.player.getChildByName("happy").active=!1,this.player.getChildByName("shock").active=!1,this.player.getChildByName("wuyu").active=!1,this.player.getChildByName(a).active=!0,l(this.player).to(.1,{scale:new n(1.8,1.8,0)}).start(),l(this.cat).to(.1,{scale:new n(1,1,0)}).start(),this.Label.getChildByName("Label_cat").active=!1,this.Label.getChildByName("Label_player").active=!0,this.Label.getChildByName("dialog").getComponent(c).string=e},t}(h))||p);t._RF.pop()}}}));

System.register("chunks:///_virtual/gameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,o,r,s,a,y,l,p,c,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.Animation,y=e.input,l=e.Input,p=e.KeyCode,c=e.tween,u=e.Vec3,h=e.Component}],execute:function(){var d,g,P,f,m;r._RF.push({},"1ea7fJYayhPpJePkb1L2+SF","gameController",void 0);var w=s.ccclass,K=s.property;e("gameController",(d=w("gameController"),g=K(a),d((m=t((f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).player=void 0,i(t,"BodyAnim",m,o(t)),t}n(t,e);var r=t.prototype;return r.start=function(){y.on(l.EventType.KEY_DOWN,this.onKeyDown,this),y.on(l.EventType.KEY_PRESSING,this.onKeyPressing,this),y.on(l.EventType.KEY_UP,this.onKeyUp,this),this.player=this.node},r.update=function(e){},r.onKeyDown=function(e){var t=this.player.getPosition().x,n=this.player.getPosition().y;switch(e.keyCode){case p.KEY_A:this.player.getChildByName("Body").setScale(new u(-.6,.6,1)),t-=20,this.player.setPosition(new u(t,n,0));break;case p.KEY_D:this.player.getChildByName("Body").setScale(new u(.6,.6,1)),t+=20,this.player.setPosition(new u(t,n,0));break;case p.SPACE:c(this.player).by(.1,{position:new u(0,100,0)},{easing:"quadOut"}).by(.1,{position:new u(0,-100,0)},{easing:"quadOut"}).start();break;default:return}this.BodyAnim&&this.BodyAnim.play("run_cat")},r.onKeyPressing=function(e){var t=this.player.getPosition().x,n=this.player.getPosition().y;switch(e.keyCode){case p.KEY_A:t-=15,this.player.setPosition(new u(t,n,0));break;case p.KEY_D:t+=15,this.player.setPosition(new u(t,n,0));break;case p.SPACE:}},r.onKeyUp=function(e){this.BodyAnim.stop()},t}(h)).prototype,"BodyAnim",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=f))||P));r._RF.pop()}}}));

System.register("chunks:///_virtual/hrdController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,n,e,o,s,r,c;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,o=t.director,s=t.tween,r=t.Vec3,c=t.Component}],execute:function(){var a;n._RF.push({},"8dd22o4UZFJBIL/vkpwgxX7","hrdController",void 0);var h=e.ccclass;e.property,t("hrdController",h("hrdController")(a=function(t){function n(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).finish_pics=[1,2,3,4,5,6,7,8,0],i.cur_pics=void 0,i.pos=[new r(-214,214,0),new r(0,214,0),new r(214,214,0),new r(-214,0,0),new r(0,0,0),new r(214,0,0),new r(-214,-214,0),new r(0,-214,0),new r(214,-214,0)],i}i(n,t);var e=n.prototype;return e.start=function(){do{this.cur_pics=this.getRandomData()}while(!this.hasEvenInversions(this.cur_pics));this.adjustPos(),o.preloadScene("maze"),o.preloadScene("dialog3")},e.update=function(t){},e.adjustPos=function(){for(var t=0;t<8;t++){this.node.getChildByName("squares").getChildByName(this.cur_pics[t].toString()).setPosition(this.pos[t])}},e.getRandomData=function(){for(var t=[];t.length<8;){var i=Math.floor(8*Math.random())+1;-1==t.indexOf(i)&&t.push(i)}return t.push(0),t},e.hasEvenInversions=function(t){for(var i=0,n=0;n<t.length-1;n++)for(var e=n+1;e<t.length;e++)t[n]>t[e]&&i++;return i%2==0},e.move=function(t){var i=t-3,n=t+3,e=t-1,o=t+1,s=-1;return i>=0&&0==this.cur_pics[i]?(this.move_pics(t,i),s=i):n<9&&0==this.cur_pics[n]?(this.move_pics(t,n),s=n):e%3!=2&&0==this.cur_pics[e]?(this.move_pics(t,e),s=e):o%3!=0&&0==this.cur_pics[o]&&(this.move_pics(t,o),s=o),s},e.move_pics=function(t,i){var n=this.cur_pics[t];this.cur_pics[t]=0,this.cur_pics[i]=n},e.onSquareClicked=function(t){var i=this.cur_pics.indexOf(+t.target._name),n=this.move(i);-1!=n&&s(t.target).to(.1,{position:this.pos[n]}).start()},e.onCheckBtnClicked=function(){this.cur_pics.toString()==this.finish_pics.toString()?o.loadScene("maze"):s(this.node.getChildByName("checkButton")).by(.05,{position:new r(-5,0,0)}).by(.05,{position:new r(8,0,0)}).by(.03,{position:new r(-3,0,0)}).start()},e.onAbandonClicked=function(){o.loadScene("dialog3")},n}(c))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/LoginManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,o,i,r,a,c;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,i=e.director,r=e.tween,a=e.Vec3,c=e.Component}],execute:function(){var s;t._RF.push({},"fd9dedrmFFH1o/MONW4NHv6","LoginManager",void 0);var u=o.ccclass;o.property,e("loginManager",u("loginManager")(s=function(e){function t(){for(var n,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=e.call.apply(e,[this].concat(o))||this).userInput=void 0,n}n(t,e);var o=t.prototype;return o.start=function(){this.node.getChildByName("login").getChildByName("userName").active=!1,i.preloadScene("dialog1")},o.update=function(e){},o.onButtonClicked=function(){"用户名"==this.userInput?i.loadScene("dialog1"):(r(this.node.getChildByName("login").getChildByName("Button")).by(.05,{position:new a(-5,0,0)}).by(.05,{position:new a(8,0,0)}).by(.03,{position:new a(-3,0,0)}).start(),this.node.getChildByName("login").getChildByName("userName").active=!0)},o.onEditDidEnded=function(e,n){this.userInput=e._string},t}(c))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./LoginManager.ts","./StartScene.ts","./clickCSSU.ts","./dialogManager.ts","./gameController.ts","./hrdController.ts","./mazeController.ts","./selectCat.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/mazeController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,s,r,o,n,a;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,s=e._decorator,r=e.director,o=e.Vec3,n=e.tween,a=e.Component}],execute:function(){var p;i._RF.push({},"40ca8OoY7lDrLu2piB9mgR2","mazeController",void 0);var c=s.ccclass;s.property,e("mazeController",c("mazeController")(p=function(e){function i(){for(var t,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).piece=void 0,t.x0=void 0,t.y0=void 0,t.maze_x=0,t.maze_y=0,t.prev_progressX=0,t.prev_progressY=0,t.maze=[[1,0,0,0,0,0,0,0,0],[1,0,1,1,1,0,1,0,0],[1,0,1,0,1,1,1,1,0],[1,1,1,0,0,1,0,0,0],[1,0,1,1,1,0,1,1,0],[0,1,1,0,1,0,0,1,0],[1,1,0,0,1,1,1,1,0],[0,1,1,1,0,1,0,1,1]],t}t(i,e);var s=i.prototype;return s.start=function(){this.piece=this.node.getChildByName("piece"),this.x0=this.piece.position.x,this.y0=this.piece.position.y,r.preloadScene("dialog2")},s.update=function(e){},s.sliderXEventHandler=function(e){var t=Math.ceil(8*(e.progress-.0625));if(t<=0&&(t=0),Math.abs(t-this.maze_x)<=1&&1==this.maze[this.maze_y][t]){this.maze_x=t;var i=this.x0+490*e.progress;this.piece.setPosition(new o(i,this.piece.position.y,0)),this.prev_progressX=e.progress}else e.progress=this.prev_progressX},s.sliderYEventHandler=function(e){var t=Math.ceil(7*(1-e.progress-.0714));if(t<=0&&(t=0),Math.abs(t-this.maze_y)<=1&&1==this.maze[t][this.maze_x]){this.maze_y=t;var i=this.y0-420*(1-e.progress);this.piece.setPosition(new o(this.piece.position.x,i,0)),this.prev_progressY=e.progress}else e.progress=this.prev_progressY},s.onCheckBtnClicked=function(){8==this.maze_x&&7==this.maze_y?r.loadScene("dialog2"):n(this.node.getChildByName("checkButton")).by(.05,{position:new o(-5,0,0)}).by(.05,{position:new o(8,0,0)}).by(.03,{position:new o(-3,0,0)}).start()},i}(a))||p);i._RF.pop()}}}));

System.register("chunks:///_virtual/selectCat.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,c,o,a,s;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t._decorator,c=t.director,o=t.tween,a=t.Vec3,s=t.Component}],execute:function(){var r;i._RF.push({},"815c1G3r49OOY0HnsvjuuAx","selectCat",void 0);var l=n.ccclass;n.property,t("selectCat",l("selectCat")(r=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))||this).buttonClicked=[0,0,0,0,0,0,0,0,0],e.finishClicked=[0,0,0,0,0,1,1,0,0],e}e(i,t);var n=i.prototype;return n.start=function(){this.node.getChildByName("whiteMask").active=!1,this.node.getChildByName("checkButton").active=!1,this.node.getChildByName("squares").active=!1,c.preloadScene("clickCSSU")},n.update=function(t){},n.onNotRobotClicked=function(){this.node.getChildByName("notRobot").active=!1,this.node.getChildByName("whiteMask").active=!0,this.node.getChildByName("checkButton").active=!0,this.node.getChildByName("squares").active=!0},n.onSquareClicked=function(t){var e=+t.target._name.charAt(6);0==this.buttonClicked[e-1]?(this.buttonClicked[e-1]=1,o(t.target).to(.1,{scale:new a(.9,.9,1)}).start()):1==this.buttonClicked[e-1]&&(this.buttonClicked[e-1]=0,o(t.target).to(.1,{scale:new a(1,1,1)}).start())},n.onCheckBtnClicked=function(){this.buttonClicked.toString()==this.finishClicked.toString()?c.loadScene("clickCSSU"):o(this.node.getChildByName("checkButton")).by(.05,{position:new a(-5,0,0)}).by(.05,{position:new a(8,0,0)}).by(.03,{position:new a(-3,0,0)}).start()},i}(s))||r);i._RF.pop()}}}));

System.register("chunks:///_virtual/StartScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,i,o,a,c,l,u,s,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,c=t.Animation,l=t.input,u=t.Input,s=t.director,p=t.Component}],execute:function(){var S,y,d,f,h;o._RF.push({},"4a990DsVO9N0rERP3BnsIbm","StartScene",void 0);var m=a.ccclass,v=a.property;t("StartScene",(S=m("StartScene"),y=v(c),S((h=e((f=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,r(e,"BodyAnim",h,i(e)),e}n(e,t);var o=e.prototype;return o.start=function(){this.BodyAnim&&this.BodyAnim.play("rotateBall"),l.on(u.EventType.TOUCH_START,this.onTouchStart,this),s.preloadScene("loginScene")},o.update=function(t){},o.onTouchStart=function(t){s.loadScene("loginScene")},e}(p)).prototype,"BodyAnim",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});