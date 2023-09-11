"use strict";(self.webpackChunkreglan=self.webpackChunkreglan||[]).push([[275],{4275:(K,D,o)=>{o.r(D),o.d(D,{CountingCircleModule:()=>A});var m=o(6895),e=o(4650),O=o(8200),Z=o(3060),b=o(9549),d=o(4144),h=o(4006),p=o(3805),u=o(3238),I=o(4859),U=o(4850),M=o(8184),q=o(8605),R=o(2687),Y=o(445),w=o(1281),x=o(7579);class W{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(n=!1,t,i=!0,a){this._multiple=n,this._emitChanges=i,this.compareWith=a,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new x.x,t&&t.length&&(n?t.forEach(l=>this._markSelected(l)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...n){this._verifyValueAssignment(n);const t=this.selected,i=new Set(n);n.forEach(l=>this._markSelected(l)),t.filter(l=>!i.has(l)).forEach(l=>this._unmarkSelected(l));const a=this._hasQueuedChanges();return this._emitChangeEvent(),a}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();const t=this._hasQueuedChanges();return n&&this._emitChangeEvent(),t}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(n){if(this.compareWith){for(let t of this._selection)if(this.compareWith(n,t))return t;return n}return n}}var _=o(9521),G=o(9770),k=o(6451),V=o(8675),L=o(3900),J=o(5698),Q=o(9300),H=o(4004),j=o(1884),T=o(2722),f=o(7340);const z=["trigger"],X=["panel"];function $(s,n){if(1&s&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Oqu(t.placeholder)}}function ee(s,n){if(1&s&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.triggerValue)}}function te(s,n){1&s&&e.Hsn(0,0,["*ngSwitchCase","true"])}function ie(s,n){if(1&s&&(e.TgZ(0,"span",11),e.YNc(1,ee,2,1,"span",12),e.YNc(2,te,1,0,"ng-content",13),e.qZA()),2&s){const t=e.oxw();e.Q6J("ngSwitch",!!t.customTrigger),e.xp6(2),e.Q6J("ngSwitchCase",!0)}}function ne(s,n){if(1&s){const t=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"div",15,16),e.NdJ("@transformPanel.done",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l._panelDoneAnimatingStream.next(a.toState))})("keydown",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l._handleKeydown(a))}),e.Hsn(2,1),e.qZA()}if(2&s){const t=e.oxw();e.Gre("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",t._getPanelTheme(),""),e.Q6J("ngClass",t.panelClass)("@transformPanel","showing"),e.uIk("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}const ae=[[["mat-select-trigger"]],"*"],se=["mat-select-trigger","*"],le={transformPanelWrap:(0,f.X$)("transformPanelWrap",[(0,f.eR)("* => void",(0,f.IO)("@transformPanel",[(0,f.pV)()],{optional:!0}))]),transformPanel:(0,f.X$)("transformPanel",[(0,f.SB)("void",(0,f.oB)({opacity:0,transform:"scale(1, 0.8)"})),(0,f.eR)("void => showing",(0,f.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,f.oB)({opacity:1,transform:"scale(1, 1)"}))),(0,f.eR)("* => void",(0,f.jt)("100ms linear",(0,f.oB)({opacity:0})))])};let N=0;const P=new e.OlP("mat-select-scroll-strategy"),re=new e.OlP("MAT_SELECT_CONFIG"),ue={provide:P,deps:[M.aV],useFactory:function oe(s){return()=>s.scrollStrategies.reposition()}},ce=new e.OlP("MatSelectTrigger");class de{constructor(n,t){this.source=n,this.value=t}}const he=(0,u.Kr)((0,u.sb)((0,u.Id)((0,u.FD)(class{constructor(s,n,t,i,a){this._elementRef=s,this._defaultErrorStateMatcher=n,this._parentForm=t,this._parentFormGroup=i,this.ngControl=a,this.stateChanges=new x.x}}))));let ge=(()=>{class s extends he{get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(h.kI.required)??!1}set required(t){this._required=(0,w.Ig)(t),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(t){this._multiple=(0,w.Ig)(t)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(t){this._disableOptionCentering=(0,w.Ig)(t)}get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(t){this._typeaheadDebounceInterval=(0,w.su)(t)}get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}constructor(t,i,a,l,r,g,c,v,C,S,Ce,ye,be,B){super(r,l,c,v,S),this._viewportRuler=t,this._changeDetectorRef=i,this._ngZone=a,this._dir=g,this._parentFormField=C,this._liveAnnouncer=be,this._defaultOptions=B,this._panelOpen=!1,this._compareWith=(y,F)=>y===F,this._uid="mat-select-"+N++,this._triggerAriaLabelledBy=null,this._destroy=new x.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+N++,this._panelDoneAnimatingStream=new x.x,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.optionSelectionChanges=(0,G.P)(()=>{const y=this.options;return y?y.changes.pipe((0,V.O)(y),(0,L.w)(()=>(0,k.T)(...y.map(F=>F.onSelectionChange)))):this._ngZone.onStable.pipe((0,J.q)(1),(0,L.w)(()=>this.optionSelectionChanges))}),this.openedChange=new e.vpe,this._openedStream=this.openedChange.pipe((0,Q.h)(y=>y),(0,H.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,Q.h)(y=>!y),(0,H.U)(()=>{})),this.selectionChange=new e.vpe,this.valueChange=new e.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=B?.typeaheadDebounceInterval&&(this._typeaheadDebounceInterval=B.typeaheadDebounceInterval),this._scrollStrategyFactory=ye,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(Ce)||0,this.id=this.id}ngOnInit(){this._selectionModel=new W(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,j.x)(),(0,T.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,T.R)(this._destroy)).subscribe(t=>{t.added.forEach(i=>i.select()),t.removed.forEach(i=>i.deselect())}),this.options.changes.pipe((0,V.O)(null),(0,T.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const t=this._getTriggerAriaLabelledby(),i=this.ngControl;if(t!==this._triggerAriaLabelledBy){const a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?a.setAttribute("aria-labelledby",t):a.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(void 0!==this._previousControl&&null!==i.disabled&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const t=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){const i=t.keyCode,a=i===_.JH||i===_.LH||i===_.oh||i===_.SV,l=i===_.K5||i===_.L_,r=this._keyManager;if(!r.isTyping()&&l&&!(0,_.Vb)(t)||(this.multiple||t.altKey)&&a)t.preventDefault(),this.open();else if(!this.multiple){const g=this.selected;r.onKeydown(t);const c=this.selected;c&&g!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(t){const i=this._keyManager,a=t.keyCode,l=a===_.JH||a===_.LH,r=i.isTyping();if(l&&t.altKey)t.preventDefault(),this.close();else if(r||a!==_.K5&&a!==_.L_||!i.activeItem||(0,_.Vb)(t))if(!r&&this._multiple&&a===_.A&&t.ctrlKey){t.preventDefault();const g=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(g?c.select():c.deselect())})}else{const g=i.activeItemIndex;i.onKeydown(t),this._multiple&&l&&t.shiftKey&&i.activeItem&&i.activeItemIndex!==g&&i.activeItem._selectViaInteraction()}else t.preventDefault(),i.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,J.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{const i=this._selectOptionByValue(t);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){const i=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return null!=a.value&&this._compareWith(a.value,t)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(t){return!!(t!==this._value||this._multiple&&Array.isArray(t))&&(this.options&&this._setSelectionByValue(t),this._value=t,!0)}_initKeyManager(){this._keyManager=new R.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const t=(0,k.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,T.R)(t)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,k.T)(...this.options.map(i=>i._stateChanges)).pipe((0,T.R)(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,i){const a=this._selectionModel.isSelected(t);null!=t.value||this._multiple?(a!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),i&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),i&&this.focus())):(t.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(t.value)),a!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const t=this.options.toArray();this._selectionModel.sort((i,a)=>this.sortComparator?this.sortComparator(i,a,t):t.indexOf(i)-t.indexOf(a)),this.stateChanges.next()}}_propagateChanges(t){let i=null;i=this.multiple?this.selected.map(a=>a.value):this.selected?this.selected.value:t,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const t=this._parentFormField?.getLabelId();return this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const t=this._parentFormField?.getLabelId();let i=(t?t+" ":"")+this._valueId;return this.ariaLabelledby&&(i+=" "+this.ariaLabelledby),i}_panelDoneAnimating(t){this.openedChange.emit(t)}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(q.rL),e.Y36(e.sBO),e.Y36(e.R0b),e.Y36(u.rD),e.Y36(e.SBq),e.Y36(Y.Is,8),e.Y36(h.F,8),e.Y36(h.sg,8),e.Y36(b.G_,8),e.Y36(h.a5,10),e.$8M("tabindex"),e.Y36(P),e.Y36(R.Kd),e.Y36(re,8))},s.\u0275dir=e.lG2({type:s,viewQuery:function(t,i){if(1&t&&(e.Gf(z,5),e.Gf(X,5),e.Gf(M.pI,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.trigger=a.first),e.iGM(a=e.CRH())&&(i.panel=a.first),e.iGM(a=e.CRH())&&(i._overlayDir=a.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[e.qOj,e.TTD]}),s})(),pe=(()=>{class s extends ge{constructor(){super(...arguments),this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}]}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,T.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(),this._changeDetectorRef.detectChanges())})}ngAfterViewInit(){this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin())}open(){this._overlayWidth=this._getOverlayWidth(),super.open(),this.stateChanges.next()}close(){super.close(),this.stateChanges.next()}_scrollOptionIntoView(t){const i=this.options.toArray()[t];if(i){const a=this.panel.nativeElement,l=(0,u.CB)(t,this.options,this.optionGroups),r=i._getHostElement();a.scrollTop=0===t&&1===l?0:(0,u.jH)(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new de(this,t)}_getOverlayWidth(){return(this._preferredOverlayOrigin instanceof M.xu?this._preferredOverlayOrigin.elementRef:this._preferredOverlayOrigin||this._elementRef).nativeElement.getBoundingClientRect().width}}return s.\u0275fac=function(){let n;return function(i){return(n||(n=e.n5z(s)))(i||s)}}(),s.\u0275cmp=e.Xpm({type:s,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(1&t&&(e.Suo(a,ce,5),e.Suo(a,u.ey,5),e.Suo(a,u.K7,5)),2&t){let l;e.iGM(l=e.CRH())&&(i.customTrigger=l.first),e.iGM(l=e.CRH())&&(i.options=l),e.iGM(l=e.CRH())&&(i.optionGroups=l)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){1&t&&e.NdJ("keydown",function(l){return i._handleKeydown(l)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),2&t&&(e.uIk("id",i.id)("tabindex",i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),e.ekj("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[e._Bn([{provide:b.Eo,useExisting:s},{provide:u.HF,useExisting:s}]),e.qOj],ngContentSelectors:se,decls:11,vars:11,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value",3,"ngSwitch"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line",4,"ngSwitchCase"],["class","mat-mdc-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text",3,"ngSwitch"],["class","mat-mdc-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(t,i){if(1&t&&(e.F$t(ae),e.TgZ(0,"div",0,1),e.NdJ("click",function(){return i.toggle()}),e.TgZ(3,"div",2),e.YNc(4,$,2,1,"span",3),e.YNc(5,ie,3,2,"span",4),e.qZA(),e.TgZ(6,"div",5)(7,"div",6),e.O4$(),e.TgZ(8,"svg",7),e._UZ(9,"path",8),e.qZA()()()(),e.YNc(10,ne,3,9,"ng-template",9),e.NdJ("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),2&t){const a=e.MAs(1);e.uIk("aria-owns",i.panelOpen?i.id+"-panel":null),e.xp6(3),e.Q6J("ngSwitch",i.empty),e.uIk("id",i._valueId),e.xp6(1),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(5),e.Q6J("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[m.mk,m.RF,m.n9,m.ED,M.pI,M.xu],styles:['.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mat-mdc-select{display:inline-block;width:100%;outline:none}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}.mdc-menu-surface.mat-mdc-select-panel{width:100%;max-height:275px;position:static;outline:0;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-select-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) .mdc-menu-surface.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above .mdc-menu-surface.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[le.transformPanel]},changeDetection:0}),s})(),me=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[ue],imports:[m.ez,M.U8,u.Ng,u.BQ,q.ZD,b.lN,u.Ng,u.BQ]}),s})();function _e(s,n){if(1&s&&(e.TgZ(0,"div")(1,"div",1)(2,"div",12),e._uU(3),e.qZA(),e.TgZ(4,"div",13)(5,"div",14)(6,"mat-label")(7,"b"),e._uU(8,"\u041f\u0435\u0440\u0435\u0434"),e.qZA()(),e.TgZ(9,"mat-label"),e._uU(10),e.qZA(),e.TgZ(11,"mat-label")(12,"b"),e._uU(13,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u044f\u0434\u043e\u0432 \u0443\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u0438\u044f:"),e.qZA(),e._uU(14),e.qZA()()(),e.TgZ(15,"div",15),e._uU(16),e.qZA()(),e.TgZ(17,"div",1)(18,"div",13)(19,"div",14)(20,"mat-label")(21,"b"),e._uU(22,"\u041b\u0435\u0432\u044b\u0439 \u0440\u0443\u043a\u0430\u0432"),e.qZA()(),e.TgZ(23,"mat-label"),e._uU(24),e.qZA()()(),e._UZ(25,"div",13),e.TgZ(26,"div",13)(27,"div",14)(28,"mat-label")(29,"b"),e._uU(30,"\u041f\u0440\u0430\u0432\u044b\u0439 \u0440\u0443\u043a\u0430\u0432"),e.qZA()(),e.TgZ(31,"mat-label"),e._uU(32),e.qZA()()()(),e.TgZ(33,"div",1)(34,"div",16),e._uU(35),e.qZA(),e.TgZ(36,"div",13)(37,"div",14)(38,"mat-label")(39,"b"),e._uU(40,"\u0421\u043f\u0438\u043d\u043a\u0430"),e.qZA()(),e.TgZ(41,"mat-label"),e._uU(42),e.qZA(),e.TgZ(43,"mat-label")(44,"b"),e._uU(45,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u044f\u0434\u043e\u0432 \u0443\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u0438\u044f:"),e.qZA(),e._uU(46),e.qZA()()(),e.TgZ(47,"div",17),e._uU(48),e.qZA()(),e.TgZ(49,"div",18)(50,"div",14)(51,"mat-label")(52,"b"),e._uU(53,"\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0433\u043b\u0430\u043d\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438:"),e.qZA(),e._uU(54),e.qZA(),e.TgZ(55,"mat-label")(56,"b"),e._uU(57,"\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0433\u043b\u0430\u043d\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438:"),e.qZA(),e._uU(58),e.qZA(),e._UZ(59,"br"),e.TgZ(60,"mat-label")(61,"b"),e._uU(62,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e\u0434\u0440\u0435\u0437\u0430:"),e.qZA(),e._uU(63),e.qZA(),e.TgZ(64,"mat-label")(65,"b"),e._uU(66,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e\u0434\u0440\u0435\u0437\u0430:"),e.qZA(),e._uU(67),e.qZA(),e._UZ(68,"br")(69,"mat-divider")(70,"br"),e.TgZ(71,"mat-label")(72,"b"),e._uU(73,"\u041a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u0432\u0441\u0435\u0433\u043e:"),e.qZA(),e._uU(74),e.qZA(),e._UZ(75,"br"),e.TgZ(76,"mat-label")(77,"b"),e._uU(78,"\u041f\u0435\u0442\u043b\u0438 \u0442\u0435\u043b\u0430:"),e.qZA(),e._uU(79),e.qZA(),e.TgZ(80,"mat-label")(81,"b"),e._uU(82,"\u041f\u0435\u0442\u043b\u0438 \u0440\u0443\u043a\u0430\u0432\u0430 (\u043e\u0434\u043d\u043e\u0433\u043e):"),e.qZA(),e._uU(83),e.qZA()()()()),2&s){const t=e.oxw();e.xp6(3),e.Oqu(t.countingService.counting.reglan),e.xp6(7),e.hij("",t.countingService.counting.front," \u043f\u0435\u0442\u0435\u043b\u044c"),e.xp6(4),e.hij(" ",t.countingService.counting.countDownFront,""),e.xp6(2),e.Oqu(t.countingService.counting.reglan),e.xp6(8),e.hij("",t.countingService.counting.sleeve," \u043f\u0435\u0442\u0435\u043b\u044c"),e.xp6(8),e.hij("",t.countingService.counting.sleeve," \u043f\u0435\u0442\u0435\u043b\u044c"),e.xp6(3),e.Oqu(t.countingService.counting.reglan),e.xp6(7),e.hij("",t.countingService.counting.back," \u043f\u0435\u0442\u0435\u043b\u044c"),e.xp6(4),e.hij(" ",t.countingService.counting.countDownBack,""),e.xp6(2),e.Oqu(t.countingService.counting.reglan),e.xp6(6),e.hij(" ",t.countingService.counting.reglanLength," \u0441\u043c"),e.xp6(4),e.hij(" ",t.countingService.counting.reglanLengthRanks," \u0440\u044f\u0434\u043e\u0432"),e.xp6(5),e.hij(" ",t.countingService.counting.undercut," \u0441\u043c"),e.xp6(4),e.hij(" ",(t.countingService.counting.undercut*t.countingService.oneWidth).toFixed(3)," \u043f\u0435\u0442\u0435\u043b\u044c"),e.xp6(7),e.hij(" ",t.countingService.counting.allCountEnd,""),e.xp6(5),e.hij(" ",t.countingService.counting.countBust,""),e.xp6(4),e.hij(" ",t.countingService.counting.countSleeve,"")}}function fe(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"div",8)(1,"button",9),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.navigateToRanks())}),e._uU(2,"\u0421\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0445\u0435\u043c\u0443 \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u0440\u044f\u0434\u043e\u0432"),e.qZA()()}}class E{constructor(n,t){this.countingService=n,this.router=t}navigateToRanks(){this.router.navigate(["ranks"])}}E.\u0275fac=function(n){return new(n||E)(e.Y36(O.K),e.Y36(Z.F0))},E.\u0275cmp=e.Xpm({type:E,selectors:[["app-counting-circle"]],decls:76,vars:21,consts:[[1,"header"],[1,"row"],["matInput","","type","number",3,"ngModel","ngModelChange"],[2,"width","45vw"],[3,"ngModel","ngModelChange"],[3,"value"],["type","text","matInput","",3,"ngModel","matAutocomplete","ngModelChange"],["auto","matAutocomplete"],[1,"header","result"],["mat-raised-button","","color","primary",3,"click"],[4,"ngIf"],["class","header result",4,"ngIf"],[1,"one_column","one_column_reglan_left_top"],[1,"one_column"],[1,"column"],[1,"one_column","one_column_reglan_right_top"],[1,"one_column","one_column_reglan_left_down"],[1,"one_column","one_column_reglan_right_down"],[1,"margin-20"]],template:function(n,t){if(1&n&&(e.TgZ(0,"mat-label",0),e._uU(1,"\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u0432\u044f\u0437\u0430\u043d\u0438\u044f"),e.qZA(),e.TgZ(2,"div",1)(3,"mat-form-field")(4,"mat-label"),e._uU(5,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u0432 1 \u0441\u043c"),e.qZA(),e.TgZ(6,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.oneWidth=a}),e.qZA()(),e.TgZ(7,"mat-form-field")(8,"mat-label"),e._uU(9,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u044f\u0434\u043e\u0432 \u0432 1 \u0441\u043c"),e.qZA(),e.TgZ(10,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.oneHeight=a}),e.qZA()(),e.TgZ(11,"mat-form-field",3)(12,"mat-label"),e._uU(13,"\u0422\u0438\u043f \u0440\u0435\u0433\u043b\u0430\u043d\u0430"),e.qZA(),e.TgZ(14,"mat-select",4),e.NdJ("ngModelChange",function(a){return t.countingService.reglanType=a}),e.TgZ(15,"mat-option",5),e._uU(16,"\u041d\u0430 \u0442\u0440\u0438 \u0447\u0430\u0441\u0442\u0438"),e.qZA(),e.TgZ(17,"mat-option",5),e._uU(18,"\u041d\u0430 \u0432\u043e\u0441\u0435\u043c\u044c \u0447\u0430\u0441\u0442\u0435\u0439"),e.qZA(),e.TgZ(19,"mat-option",5),e._uU(20,"\u041d\u0430 \u0434\u0435\u0432\u044f\u0442\u044c \u0447\u0430\u0441\u0442\u0435\u0439"),e.qZA()(),e.TgZ(21,"mat-hint"),e._uU(22),e.qZA()()(),e.TgZ(23,"mat-label",0),e._uU(24,"\u0420\u0430\u0441\u0447\u0435\u0442 \u043d\u0430\u0431\u043e\u0440\u0430 \u043f\u0435\u0442\u0435\u043b\u044c"),e.qZA(),e.TgZ(25,"div",1)(26,"mat-form-field")(27,"mat-label"),e._uU(28,"\u041e\u0431\u0445\u0432\u0430\u0442 \u0433\u043e\u0440\u043b\u043e\u0432\u0438\u043d\u044b, \u0441\u043c"),e.qZA(),e.TgZ(29,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.circle=a}),e.qZA()(),e.TgZ(30,"mat-form-field")(31,"mat-label"),e._uU(32,"\u0423\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u043f\u0438\u043d\u0435, \u0441\u043c"),e.qZA(),e.TgZ(33,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.deepeningBack=a}),e.qZA()(),e.TgZ(34,"mat-form-field")(35,"mat-label"),e._uU(36,"\u0423\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u043f\u0435\u0440\u0435\u0434\u0443, \u0441\u043c"),e.qZA(),e.TgZ(37,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.deepeningFront=a}),e.qZA()(),e.TgZ(38,"mat-form-field")(39,"mat-label"),e._uU(40,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0442\u0435\u043b\u044c \u0440\u0435\u0433\u043b\u0430\u043d\u0430"),e.qZA(),e.TgZ(41,"input",6),e.NdJ("ngModelChange",function(a){return t.countingService.reglanCount=a}),e.qZA(),e.TgZ(42,"mat-autocomplete",null,7)(44,"mat-option",5),e._uU(45,"1"),e.qZA(),e.TgZ(46,"mat-option",5),e._uU(47,"2"),e.qZA(),e.TgZ(48,"mat-option",5),e._uU(49,"3"),e.qZA()()()(),e.TgZ(50,"mat-label",0),e._uU(51,"\u0420\u0430\u0441\u0447\u0435\u0442 \u0433\u043b\u0443\u0431\u0438\u043d\u044b \u0440\u0435\u0433\u043b\u0430\u043d\u0430"),e.qZA(),e.TgZ(52,"div",1)(53,"mat-form-field")(54,"mat-label"),e._uU(55,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043b\u0435\u0447\u0430, \u0441\u043c"),e.qZA(),e.TgZ(56,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.shoulderLength=a}),e.qZA()(),e.TgZ(57,"mat-form-field")(58,"mat-label"),e._uU(59,"\u0413\u043b\u0443\u0431\u0438\u043d\u0430 \u043f\u0440\u043e\u0439\u043c\u044b, \u0441\u043c"),e.qZA(),e.TgZ(60,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.armholeDepth=a}),e.qZA()(),e.TgZ(61,"mat-form-field")(62,"mat-label"),e._uU(63,"\u041e\u0431\u0445\u0432\u0430\u0442 \u0433\u0440\u0443\u0434\u0438, \u0441\u043c"),e.qZA(),e.TgZ(64,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.bust=a}),e.qZA()(),e.TgZ(65,"mat-form-field")(66,"mat-label"),e._uU(67,"\u041e\u0431\u0445\u0432\u0430\u0442 \u0440\u0443\u043a\u0438, \u0441\u043c"),e.qZA(),e.TgZ(68,"input",2),e.NdJ("ngModelChange",function(a){return t.countingService.armCircle=a}),e.qZA()()(),e.TgZ(69,"div",8)(70,"button",9),e.NdJ("click",function(){return t.countingService.countTypesettingEdge()}),e._uU(71,"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),e.qZA()(),e.TgZ(72,"mat-label",0),e._uU(73,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432"),e.qZA(),e.YNc(74,_e,84,17,"div",10),e.YNc(75,fe,3,0,"div",11)),2&n){const i=e.MAs(43);e.xp6(6),e.Q6J("ngModel",t.countingService.oneWidth),e.xp6(4),e.Q6J("ngModel",t.countingService.oneHeight),e.xp6(4),e.Q6J("ngModel",t.countingService.reglanType),e.xp6(1),e.Q6J("value",3),e.xp6(2),e.Q6J("value",8),e.xp6(2),e.Q6J("value",9),e.xp6(3),e.Oqu(9===t.countingService.reglanType?"\u041f\u0440\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0435 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0433\u043b\u0430\u043d\u0430 \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u043d\u0430 \u0440\u043e\u0441\u0442\u043e\u043a \u0443\u0436\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430":""),e.xp6(7),e.Q6J("ngModel",t.countingService.circle),e.xp6(4),e.Q6J("ngModel",t.countingService.deepeningBack),e.xp6(4),e.Q6J("ngModel",t.countingService.deepeningFront),e.xp6(4),e.Q6J("ngModel",t.countingService.reglanCount)("matAutocomplete",i),e.xp6(3),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(8),e.Q6J("ngModel",t.countingService.shoulderLength),e.xp6(4),e.Q6J("ngModel",t.countingService.armholeDepth),e.xp6(4),e.Q6J("ngModel",t.countingService.bust),e.xp6(4),e.Q6J("ngModel",t.countingService.armCircle),e.xp6(6),e.Q6J("ngIf",t.countingService.isCounting),e.xp6(1),e.Q6J("ngIf",t.countingService.isCounting)}},dependencies:[m.O5,b.KE,b.hX,b.bx,d.Nt,h.Fj,h.wV,h.JJ,h.On,p.XC,u.ey,p.ZL,I.lW,U.d,pe]});const ve=[{path:"",component:E}];class A{}A.\u0275fac=function(n){return new(n||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[m.ez,b.lN,d.c,h.u5,p.Bb,I.ot,Z.Bz.forChild(ve),U.t,me]})},4850:(K,D,o)=>{o.d(D,{d:()=>Z,t:()=>b});var m=o(4650),e=o(1281),O=o(3238);let Z=(()=>{class d{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(p){this._vertical=(0,e.Ig)(p)}get inset(){return this._inset}set inset(p){this._inset=(0,e.Ig)(p)}}return d.\u0275fac=function(p){return new(p||d)},d.\u0275cmp=m.Xpm({type:d,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(p,u){2&p&&(m.uIk("aria-orientation",u.vertical?"vertical":"horizontal"),m.ekj("mat-divider-vertical",u.vertical)("mat-divider-horizontal",!u.vertical)("mat-divider-inset",u.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(p,u){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),d})(),b=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[O.BQ,O.BQ]}),d})()}}]);