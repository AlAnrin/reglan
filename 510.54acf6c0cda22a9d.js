"use strict";(self.webpackChunkreglan=self.webpackChunkreglan||[]).push([[510],{1510:(x,d,a)=>{a.r(d),a.d(d,{CountingRanksModule:()=>r});var s=a(6895),h=a(6942),n=a(4650),k=a(8200),p=a(5412),C=a(3060),f=a(4859),m=a(9549),v=a(4144),l=a(4006),_=a(4850);function Z(o,e){if(1&o&&(n.TgZ(0,"div",13)(1,"div",14)(2,"mat-label")(3,"b"),n._uU(4,"\u041f\u0435\u0442\u043b\u0438 \u0442\u0435\u043b\u0430:"),n.qZA(),n._uU(5),n.qZA(),n.TgZ(6,"mat-label")(7,"b"),n._uU(8,"\u041f\u0435\u0442\u043b\u0438 \u0440\u0443\u043a\u0430\u0432\u0430 (\u043e\u0434\u043d\u043e\u0433\u043e):"),n.qZA(),n._uU(9),n.qZA(),n.TgZ(10,"mat-label")(11,"b"),n._uU(12,"\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0433\u043b\u0430\u043d\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438:"),n.qZA(),n._uU(13),n.qZA()()()),2&o){const u=n.oxw();n.xp6(5),n.hij(" ",u.countingService.counting.countBust,""),n.xp6(4),n.hij(" ",u.countingService.counting.countSleeve,""),n.xp6(4),n.hij(" ",u.countingService.counting.reglanLengthRanks," \u0440\u044f\u0434\u043e\u0432")}}function A(o,e){if(1&o){const u=n.EpF();n.TgZ(0,"div",0)(1,"mat-form-field")(2,"mat-label"),n._uU(3,"\u041f\u0435\u0442\u043b\u0438 \u0442\u0435\u043b\u0430 (\u043f\u0435\u0440\u0435\u0434 \u0438 \u0441\u043f\u0438\u043d\u043a\u0430)"),n.qZA(),n.TgZ(4,"input",5),n.NdJ("ngModelChange",function(t){n.CHM(u);const c=n.oxw();return n.KtG(c.countingService.counting.countBust=t)}),n.qZA()(),n.TgZ(5,"mat-form-field")(6,"mat-label"),n._uU(7,"\u041f\u0435\u0442\u043b\u0438 \u0440\u0443\u043a\u0430\u0432\u0430 (\u043e\u0434\u043d\u043e\u0433\u043e)"),n.qZA(),n.TgZ(8,"input",5),n.NdJ("ngModelChange",function(t){n.CHM(u);const c=n.oxw();return n.KtG(c.countingService.counting.countSleeve=t)}),n.qZA()(),n.TgZ(9,"mat-form-field")(10,"mat-label"),n._uU(11,"\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0433\u043b\u0430\u043d\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438 (\u0440\u044f\u0434\u044b)"),n.qZA(),n.TgZ(12,"input",5),n.NdJ("ngModelChange",function(t){n.CHM(u);const c=n.oxw();return n.KtG(c.countingService.counting.reglanLengthRanks=t)}),n.qZA()()()}if(2&o){const u=n.oxw();n.xp6(4),n.Q6J("ngModel",u.countingService.counting.countBust),n.xp6(4),n.Q6J("ngModel",u.countingService.counting.countSleeve),n.xp6(4),n.Q6J("ngModel",u.countingService.counting.reglanLengthRanks)}}function T(o,e){if(1&o){const u=n.EpF();n.TgZ(0,"button",15),n.NdJ("click",function(){n.CHM(u);const t=n.oxw();return n.KtG(t.downloadRanks())}),n._uU(1,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0440\u044f\u0434\u044b \u0432 .txt"),n.qZA()}}function b(o,e){if(1&o){const u=n.EpF();n.TgZ(0,"button",16),n.NdJ("click",function(){n.CHM(u);const t=n.oxw();return n.KtG(t.saveRanks())}),n._uU(1,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),n.qZA()}}const R=function(o){return{strocked:o}};function B(o,e){if(1&o){const u=n.EpF();n.ynx(0),n.TgZ(1,"button",17),n.NdJ("click",function(){const c=n.CHM(u).$implicit;return n.KtG(c.checked=!c.checked)}),n._uU(2),n.qZA(),n._UZ(3,"mat-divider"),n.BQk()}if(2&o){const u=e.$implicit;n.xp6(1),n.Q6J("ngClass",n.VKq(2,R,u.checked)),n.xp6(1),n.hij(" ",u.name," ")}}class g{constructor(e,u,i){this.countingService=e,this.dialog=u,this.router=i,this.reglan=[],this.sub=this.countingService.countArray.subscribe(t=>{if(t)for(let c=0;c<this.countingService.reglanArrayArm.length;c++)this.reglan[c]={name:`\u0420\u044f\u0434 ${c+1}. ${this.countingService.reglanArrayArm[c]} |  ${this.countingService.reglanArrayBody[c]}`,checked:!1};else this.reglan=[]})}navigateToCircle(){this.router.navigate(["circle"])}downloadRanks(){const e=document.createElement("a"),u=this.reglan.filter(t=>!t.checked).map(t=>t.name).join("\n"),i=new Blob([u],{type:"text/plain"});e.href=URL.createObjectURL(i),e.download="ranks.txt",e.click(),URL.revokeObjectURL(e.href)}saveRanks(){this.dialog.open(h.I,{width:"60vw"}).afterClosed().subscribe(u=>{const i=localStorage.getItem("reglan_ranks!")?localStorage.getItem("reglan_ranks!")?.split(";"):[];i.push(u),localStorage.setItem("reglan_ranks!",i.join(";")),localStorage.setItem(u,JSON.stringify(this.reglan))})}ngOnDestroy(){this.sub.unsubscribe()}}g.\u0275fac=function(e){return new(e||g)(n.Y36(k.K),n.Y36(p.uw),n.Y36(C.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-counting-ranks"]],decls:31,vars:8,consts:[[1,"row"],[1,"header"],[1,"spacer"],[1,"header","result"],["mat-button","","color","primary",3,"click"],["matInput","","type","number",3,"ngModel","ngModelChange"],["class","margin-15",4,"ngIf"],["class","row",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent","class","ml-5",3,"click",4,"ngIf"],["mat-raised-button","","color","warn","class","ml-5",3,"click",4,"ngIf"],[1,"overflow"],[4,"ngFor","ngForOf"],[1,"margin-15"],[1,"column"],["mat-raised-button","","color","accent",1,"ml-5",3,"click"],["mat-raised-button","","color","warn",1,"ml-5",3,"click"],["mat-button","",1,"pointer",3,"ngClass","click"]],template:function(e,u){1&e&&(n.TgZ(0,"div",0)(1,"mat-label",1),n._uU(2,"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),n.qZA(),n._UZ(3,"div",2),n.TgZ(4,"div",3)(5,"button",4),n.NdJ("click",function(){return u.navigateToCircle()}),n._uU(6,"\u041d\u0430\u0437\u0430\u0434"),n.qZA()()(),n.TgZ(7,"div",0)(8,"mat-form-field")(9,"mat-label"),n._uU(10,"\u041f\u0435\u0442\u043b\u0438 \u0442\u0435\u043b\u0430 (\u043f\u0435\u0440\u0435\u0434 \u0438 \u0441\u043f\u0438\u043d\u043a\u0430)"),n.qZA(),n.TgZ(11,"input",5),n.NdJ("ngModelChange",function(t){return u.countingService.currentCountBust=t}),n.qZA()(),n.TgZ(12,"mat-form-field")(13,"mat-label"),n._uU(14,"\u041f\u0435\u0442\u043b\u0438 \u0440\u0443\u043a\u0430\u0432\u0430 (\u043e\u0434\u043d\u043e\u0433\u043e)"),n.qZA(),n.TgZ(15,"input",5),n.NdJ("ngModelChange",function(t){return u.countingService.currentCountSleeve=t}),n.qZA()(),n.TgZ(16,"mat-form-field")(17,"mat-label"),n._uU(18,"\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0433\u043b\u0430\u043d\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438 (\u0440\u044f\u0434\u044b)"),n.qZA(),n.TgZ(19,"input",5),n.NdJ("ngModelChange",function(t){return u.countingService.currentReglanLength=t}),n.qZA()()(),n.TgZ(20,"mat-label",1),n._uU(21,"\u041a\u043e\u043d\u0435\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),n.qZA(),n.YNc(22,Z,14,3,"div",6),n.YNc(23,A,13,3,"div",7),n.TgZ(24,"div",3)(25,"button",8),n.NdJ("click",function(){return u.countingService.countRanks()}),n._uU(26,"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0440\u044f\u0434\u044b"),n.qZA(),n.YNc(27,T,2,0,"button",9),n.YNc(28,b,2,0,"button",10),n.qZA(),n.TgZ(29,"div",11),n.YNc(30,B,4,4,"ng-container",12),n.qZA()),2&e&&(n.xp6(11),n.Q6J("ngModel",u.countingService.currentCountBust),n.xp6(4),n.Q6J("ngModel",u.countingService.currentCountSleeve),n.xp6(4),n.Q6J("ngModel",u.countingService.currentReglanLength),n.xp6(3),n.Q6J("ngIf",u.countingService.counting.front),n.xp6(1),n.Q6J("ngIf",!u.countingService.counting.front),n.xp6(4),n.Q6J("ngIf",u.reglan.length),n.xp6(1),n.Q6J("ngIf",u.reglan.length),n.xp6(2),n.Q6J("ngForOf",u.reglan))},dependencies:[s.mk,s.sg,s.O5,f.lW,m.KE,m.hX,v.Nt,l.Fj,l.wV,l.JJ,l.On,_.d],styles:[".ml-5[_ngcontent-%COMP%]{margin-left:5px}"]});var S=a(3336);const M=[{path:"",component:g}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[s.ez,C.Bz.forChild(M),f.ot,m.lN,v.c,l.u5,S.Ps,_.t,p.Is]})}}]);