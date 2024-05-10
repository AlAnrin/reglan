"use strict";(self.webpackChunkreglan=self.webpackChunkreglan||[]).push([[538],{6538:(D,v,e)=>{e.r(v),e.d(v,{CountingShoulderStrapModule:()=>s});var d=e(6895),u=e(4650);class g{constructor(){this.oneWidth=0,this.oneHeight=0,this.circle=0,this.armholeDepth=0,this.shoulderLength=0,this.shoulderWidth=0,this.armCircle=0,this.bust=0,this.isCounting=!1,this.countingData={allLoops:0,pogonWidth:0,front:0,back:0,pogonLengthRanks:0,pogonLengthAdding:0,armHeight:0,armHeightRanks:0,armHeightCut:0,armWidthAdding:0,undercut:0,allCountEnd:0,countBust:0,countSleeve:0}}count(){this.isCounting=!1,this.countingData.allLoops=Math.round(this.circle*this.oneWidth),this.countingData.pogonWidth=Math.round(this.shoulderWidth*this.oneWidth),this.countingData.front=this.countingData.back=.5*(this.countingData.allLoops-2*this.countingData.pogonWidth),this.countingData.pogonLengthRanks=Math.round(this.shoulderLength*this.oneHeight),this.countingData.pogonLengthAdding=Math.round(this.shoulderLength*this.oneWidth);const t=this.armholeDepth-this.shoulderWidth/2,r=this.armCircle*this.oneWidth;this.countingData.armWidthAdding=(r-this.countingData.pogonWidth)/2,this.countingData.armHeight=t*this.oneHeight,this.countingData.armHeightRanks=Math.round(t*this.oneHeight*.7),this.countingData.armHeightCut=Math.round(t*this.oneHeight*.3),this.countingData.undercut=+(r/6).toFixed(3),this.countingData.countBust=this.bust*this.oneWidth-2*this.countingData.undercut,this.countingData.countSleeve=this.armCircle*this.oneWidth-this.countingData.undercut,this.countingData.allCountEnd=this.countingData.countBust+2*this.countingData.countSleeve,this.isCounting=!0}}g.\u0275fac=function(a){return new(a||g)},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});var C=e(3060),m=e(9549),n=e(4006),c=e(4144),o=e(4859),h=e(4850);function Z(l,a){if(1&l&&(u.TgZ(0,"div")(1,"div",6)(2,"div",7)(3,"mat-label")(4,"b"),u._uU(5,"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440:"),u.qZA(),u._uU(6),u.qZA(),u._UZ(7,"br"),u.TgZ(8,"mat-label")(9,"b"),u._uU(10,"\u041f\u0435\u0440\u0435\u0434:"),u.qZA(),u._uU(11),u.qZA(),u.TgZ(12,"mat-label")(13,"b"),u._uU(14,"\u0421\u043f\u0438\u043d\u043a\u0430:"),u.qZA(),u._uU(15),u.qZA(),u.TgZ(16,"mat-label")(17,"b"),u._uU(18,"\u041f\u043e\u0433\u043e\u043d:"),u.qZA(),u._uU(19),u.qZA(),u._UZ(20,"br")(21,"mat-divider")(22,"br"),u.TgZ(23,"mat-label")(24,"b"),u._uU(25,"\u041f\u0435\u0440\u0432\u044b\u0435 \u043f\u0440\u0438\u0431\u0430\u0432\u043a\u0438 (\u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e \u043f\u043b\u0435\u0447\u0443):"),u.qZA()(),u.TgZ(26,"mat-label")(27,"b"),u._uU(28,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e\u0433\u043e\u043d\u0430:"),u.qZA(),u._uU(29),u.qZA(),u.TgZ(30,"mat-label")(31,"b"),u._uU(32,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u0431\u0430\u0432\u043e\u043a \u043d\u0430 \u043f\u043e\u0433\u043e\u043d\u0430\u0445:"),u.qZA(),u._uU(33),u.qZA(),u._UZ(34,"br")(35,"mat-divider")(36,"br"),u.TgZ(37,"mat-label")(38,"b"),u._uU(39,"\u0412\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0431\u0430\u0432\u043a\u0438 (\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e \u0440\u0443\u043a\u0430\u0432\u0443):"),u.qZA()(),u.TgZ(40,"mat-label")(41,"b"),u._uU(42,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e \u0440\u0443\u043a\u0430\u0432\u0443:"),u.qZA(),u._uU(43),u.qZA(),u.TgZ(44,"mat-label")(45,"b"),u._uU(46,"\u0414\u043e\u0431\u0430\u0432\u043e\u043a \u043d\u0430 \u0440\u0443\u043a\u0430\u0432 (\u043f\u043e\u0434\u0440\u0435\u0437 \u0432\u043a\u043b\u044e\u0447\u0435\u043d \u0432 \u0440\u0430\u0441\u0447\u0435\u0442):"),u.qZA(),u._uU(47),u.qZA(),u._UZ(48,"br"),u.TgZ(49,"mat-label")(50,"b"),u._uU(51,"\u041f\u043e\u0434\u0440\u0435\u0437:"),u.qZA(),u._uU(52),u.qZA(),u._UZ(53,"br")(54,"mat-divider")(55,"br"),u.TgZ(56,"mat-label")(57,"b"),u._uU(58,"\u0418\u0442\u043e\u0433\u043e\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0440\u0443\u043a\u0430\u0432\u0430 \u0438 \u0442\u0435\u043b\u043e"),u.qZA()(),u.TgZ(59,"small"),u._uU(60,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u043c\u0438 \u043f\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u043c \u0441\u043c."),u.qZA(),u.TgZ(61,"small"),u._uU(62,"\u0417\u0434\u0435\u0441\u044c \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043f\u043e\u0434\u0440\u0435\u0437\u044b."),u.qZA(),u._UZ(63,"br"),u.TgZ(64,"mat-label")(65,"b"),u._uU(66,"\u041a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u0432\u0441\u0435\u0433\u043e:"),u.qZA(),u._uU(67),u.qZA(),u._UZ(68,"br"),u.TgZ(69,"mat-label")(70,"b"),u._uU(71,"\u041f\u0435\u0442\u043b\u0438 \u0442\u0435\u043b\u0430:"),u.qZA(),u._uU(72),u.qZA(),u.TgZ(73,"mat-label")(74,"b"),u._uU(75,"\u041f\u0435\u0442\u043b\u0438 \u0440\u0443\u043a\u0430\u0432\u0430 (\u043e\u0434\u043d\u043e\u0433\u043e):"),u.qZA(),u._uU(76),u.qZA(),u._UZ(77,"br")(78,"mat-divider")(79,"br"),u.TgZ(80,"mat-label")(81,"b"),u._uU(82,"\u041f\u043e \u0438\u0442\u043e\u0433\u0430\u043c \u043f\u0440\u0438\u0431\u0430\u0432\u043e\u043a"),u.qZA()(),u.TgZ(83,"mat-label")(84,"b"),u._uU(85,"\u041f\u0435\u0442\u043b\u0438 \u0442\u0435\u043b\u0430:"),u.qZA(),u._uU(86),u.qZA(),u.TgZ(87,"mat-label")(88,"b"),u._uU(89,"\u0427\u0442\u043e \u0432 \u0441\u043c:"),u.qZA(),u._uU(90),u.qZA()()()()),2&l){const t=u.oxw();u.xp6(6),u.hij(" ",t.countingService.countingData.allLoops," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(5),u.hij(" ",t.countingService.countingData.front," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(4),u.hij(" ",t.countingService.countingData.back," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(4),u.hij(" ",t.countingService.countingData.pogonWidth," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(10),u.hij(" ",t.countingService.countingData.pogonLengthRanks," \u0440\u044f\u0434\u043e\u0432"),u.xp6(4),u.hij(" ",t.countingService.countingData.pogonLengthAdding," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(10),u.hij(" ",t.countingService.countingData.armHeight," \u0440\u044f\u0434\u043e\u0432"),u.xp6(4),u.hij(" ",t.countingService.countingData.armWidthAdding," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(5),u.hij(" ",t.countingService.countingData.undercut," \u043f\u0435\u0442\u0435\u043b\u044c"),u.xp6(15),u.hij(" ",t.countingService.countingData.allCountEnd,""),u.xp6(5),u.hij(" ",t.countingService.countingData.countBust,""),u.xp6(4),u.hij(" ",t.countingService.countingData.countSleeve,""),u.xp6(10),u.hij(" ",2*(t.countingService.countingData.front+2*t.countingService.countingData.pogonLengthAdding+t.countingService.countingData.undercut)," \u043f\u0435\u0442\u0435\u043b\u044c "),u.xp6(4),u.hij(" ",2*(t.countingService.countingData.front+2*t.countingService.countingData.pogonLengthAdding+t.countingService.countingData.undercut)/t.countingService.oneWidth," ")}}class p{constructor(a,t){this.countingService=a,this.router=t}}p.\u0275fac=function(a){return new(a||p)(u.Y36(g),u.Y36(C.F0))},p.\u0275cmp=u.Xpm({type:p,selectors:[["app-counting-shoulder-strap"]],decls:47,vars:9,consts:[[1,"header"],[1,"row"],["matInput","","type","number",3,"ngModel","ngModelChange"],[1,"header","result"],["mat-raised-button","","color","primary",3,"click"],[4,"ngIf"],[1,"margin-20"],[1,"column"]],template:function(a,t){1&a&&(u.TgZ(0,"mat-label",0),u._uU(1,"\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u0432\u044f\u0437\u0430\u043d\u0438\u044f"),u.qZA(),u.TgZ(2,"div",1)(3,"mat-form-field")(4,"mat-label"),u._uU(5,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u0432 1 \u0441\u043c"),u.qZA(),u.TgZ(6,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.oneWidth=i}),u.qZA()(),u.TgZ(7,"mat-form-field")(8,"mat-label"),u._uU(9,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u044f\u0434\u043e\u0432 \u0432 1 \u0441\u043c"),u.qZA(),u.TgZ(10,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.oneHeight=i}),u.qZA()()(),u.TgZ(11,"mat-label",0),u._uU(12,"\u0420\u0430\u0441\u0447\u0435\u0442 \u043d\u0430\u0431\u043e\u0440\u0430 \u043f\u0435\u0442\u0435\u043b\u044c"),u.qZA(),u.TgZ(13,"div",1)(14,"mat-form-field")(15,"mat-label"),u._uU(16,"\u041e\u0431\u0445\u0432\u0430\u0442 \u0433\u043e\u0440\u043b\u043e\u0432\u0438\u043d\u044b, \u0441\u043c"),u.qZA(),u.TgZ(17,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.circle=i}),u.qZA()()(),u.TgZ(18,"mat-label",0),u._uU(19,"\u0420\u0430\u0441\u0447\u0435\u0442 \u0433\u043b\u0443\u0431\u0438\u043d\u044b \u0440\u0435\u0433\u043b\u0430\u043d\u0430"),u.qZA(),u.TgZ(20,"div",1)(21,"mat-form-field")(22,"mat-label"),u._uU(23,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043b\u0435\u0447\u0430, \u0441\u043c"),u.qZA(),u.TgZ(24,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.shoulderLength=i}),u.qZA()(),u.TgZ(25,"mat-form-field")(26,"mat-label"),u._uU(27,"\u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043b\u0435\u0447\u0430 (\u043f\u043e\u0433\u043e\u043d), \u0441\u043c"),u.qZA(),u.TgZ(28,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.shoulderWidth=i}),u.qZA()(),u.TgZ(29,"mat-form-field")(30,"mat-label"),u._uU(31,"\u0413\u043b\u0443\u0431\u0438\u043d\u0430 \u043f\u0440\u043e\u0439\u043c\u044b, \u0441\u043c"),u.qZA(),u.TgZ(32,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.armholeDepth=i}),u.qZA()(),u.TgZ(33,"mat-form-field")(34,"mat-label"),u._uU(35,"\u041e\u0431\u0445\u0432\u0430\u0442 \u0433\u0440\u0443\u0434\u0438, \u0441\u043c"),u.qZA(),u.TgZ(36,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.bust=i}),u.qZA()(),u.TgZ(37,"mat-form-field")(38,"mat-label"),u._uU(39,"\u041e\u0431\u0445\u0432\u0430\u0442 \u0440\u0443\u043a\u0438, \u0441\u043c"),u.qZA(),u.TgZ(40,"input",2),u.NdJ("ngModelChange",function(i){return t.countingService.armCircle=i}),u.qZA()()(),u.TgZ(41,"div",3)(42,"button",4),u.NdJ("click",function(){return t.countingService.count()}),u._uU(43,"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),u.qZA()(),u.TgZ(44,"mat-label",0),u._uU(45,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432"),u.qZA(),u.YNc(46,Z,91,14,"div",5)),2&a&&(u.xp6(6),u.Q6J("ngModel",t.countingService.oneWidth),u.xp6(4),u.Q6J("ngModel",t.countingService.oneHeight),u.xp6(7),u.Q6J("ngModel",t.countingService.circle),u.xp6(7),u.Q6J("ngModel",t.countingService.shoulderLength),u.xp6(4),u.Q6J("ngModel",t.countingService.shoulderWidth),u.xp6(4),u.Q6J("ngModel",t.countingService.armholeDepth),u.xp6(4),u.Q6J("ngModel",t.countingService.bust),u.xp6(4),u.Q6J("ngModel",t.countingService.armCircle),u.xp6(6),u.Q6J("ngIf",t.countingService.isCounting))},dependencies:[d.O5,m.KE,m.hX,n.Fj,n.wV,n.JJ,n.On,c.Nt,o.lW,h.d]});const _=[{path:"",component:p}];class s{}s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[d.ez,m.lN,n.u5,c.c,o.ot,C.Bz.forChild(_),h.t]})},4850:(D,v,e)=>{e.d(v,{d:()=>C,t:()=>m});var d=e(4650),u=e(1281),g=e(3238);let C=(()=>{class n{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(o){this._vertical=(0,u.Ig)(o)}get inset(){return this._inset}set inset(o){this._inset=(0,u.Ig)(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=d.Xpm({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(o,h){2&o&&(d.uIk("aria-orientation",h.vertical?"vertical":"horizontal"),d.ekj("mat-divider-vertical",h.vertical)("mat-divider-horizontal",!h.vertical)("mat-divider-inset",h.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(o,h){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),n})(),m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[g.BQ,g.BQ]}),n})()}}]);