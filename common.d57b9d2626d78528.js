"use strict";(self.webpackChunkreglan=self.webpackChunkreglan||[]).push([[592],{8200:(w,M,f)=>{f.d(M,{K:()=>l});var m=f(7579),A=f(4650),k=f(7009);class l{constructor(e){this.snack=e,this.oneWidth=0,this.oneHeight=0,this.reglanType=9,this.circle=0,this.reglanCount=2,this.deepeningBack=0,this.deepeningFront=0,this.armholeDepth=0,this.shoulderLength=0,this.armCircle=0,this.bust=0,this.isCounting=!1,this.counting={front:0,back:0,reglan:0,sleeve:0,countDownBack:0,countDownFront:0,reglanLength:0,reglanLengthRanks:100,undercut:0,allCountEnd:0,countBust:330,countSleeve:117},this.currentCountBust=218,this.currentCountSleeve=49,this.currentReglanLength=31,this.reglanArrayBody=[],this.reglanArrayArm=[],this.countArray=new m.x}countTypesettingEdge(){let e=Math.round(this.circle*this.oneWidth);0!==Math.floor(e%2)&&(e-=1),e-=4*this.reglanCount;let r=0,o=0,a=0;switch(this.reglanType){case 3:o=+(e/3).toFixed(3),a=+(e/3).toFixed(3),r=+(e/6).toFixed(3);break;case 8:o=+(3*e/8).toFixed(3),a=+(3*e/8).toFixed(3),r=+(e/8).toFixed(3);break;case 9:o=+(4*e/9).toFixed(3),a=+(3*e/9).toFixed(3),r=+(e/9).toFixed(3)}let i=Math.pow(this.armholeDepth-this.circle/6,2)+Math.pow(this.shoulderLength,2);i=Math.round(Math.sqrt(i));const u=+(this.armCircle/4).toFixed(3),d=this.bust*this.oneWidth-2*u,s=this.armCircle*this.oneWidth-u,t=d+2*s;this.counting={front:o,back:a,sleeve:r,reglan:this.reglanCount,countDownFront:Math.round(this.deepeningFront*this.oneHeight),countDownBack:Math.round(this.deepeningBack*this.oneHeight),reglanLength:i,reglanLengthRanks:i*this.oneHeight,undercut:u,allCountEnd:t,countBust:d,countSleeve:s},this.isCounting=!0}countRanks(){this.countArray.next(!1);let e=Math.floor(this.counting.countSleeve-this.currentCountSleeve);e%2!=0&&(e-=1);let r=Math.floor(this.counting.countBust/2-this.currentCountBust/2);r%2!=0&&(r-=1);const o=Math.floor(this.counting.reglanLengthRanks-this.currentReglanLength);let a=o-e/2;const c=Math.floor(a/(e/2)+1);let i=0;for(;Math.floor((a-i)/c)!==Math.floor(e/2-i);)if(i+=1,i>=e)return void this.snack.open("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0440\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043f\u0440\u0438\u0431\u0430\u0432\u043a\u0438 \u043d\u0430 \u0440\u0443\u043a\u0430\u0432!",void 0,{duration:5e3});const s="0";this.reglanArrayArm=new Array(o);let t=0;for(;0!==i;){const n=c-1;this.reglanArrayArm[t]="\u0420";for(let h=t;h<n+t;h++)this.reglanArrayArm[h+1]=s;t=t+n+1,i--}for(;t<o;){this.reglanArrayArm[t]="\u0420";for(let n=t;n<c+t;n++)this.reglanArrayArm[n+1]=s;t=t+c+1}let C=o-r/2;const y=Math.floor(C/(r/2)+1);let g=0;for(;Math.floor((C-g)/y)!==Math.floor(r/2-g);)if(g+=1,g>=r)return void this.snack.open("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0440\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043f\u0440\u0438\u0431\u0430\u0432\u043a\u0438 \u043d\u0430 \u0442\u0435\u043b\u043e!",void 0,{duration:5e3});for(this.reglanArrayBody=new Array(o),t=0;0!==g;){const n=y-1;this.reglanArrayBody[t]="\u0422";for(let h=t;h<n+t;h++)this.reglanArrayBody[h+1]=s;t=t+n+1,g--}for(;t<o;){this.reglanArrayBody[t]="\u0422";for(let n=t;n<y+t;n++)this.reglanArrayBody[n+1]=s;t=t+y+1}this.countArray.next(!0)}}l.\u0275fac=function(e){return new(e||l)(A.LFG(k.ux))},l.\u0275prov=A.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}}]);