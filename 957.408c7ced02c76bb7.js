"use strict";(self.webpackChunkreglan=self.webpackChunkreglan||[]).push([[957],{7957:(rt,D,s)=>{s.d(D,{Bb:()=>et,XC:()=>J,ZL:()=>T});var i=s(4650),u=s(3238),f=s(6895),M=s(5589),h=s(8184),R=s(2687),_=s(1281),E=s(3353),c=s(7340),b=s(727),L=s(7579),S=s(9770),d=s(6451),B=s(9646),g=s(4968),p=s(9521),w=s(4080),F=s(4006),I=s(9549),W=s(8675),v=s(3900),O=s(5698),A=s(9300),x=s(4004),K=s(8505),U=s(1005),Y=s(445);const V=["panel"];function k(n,a){if(1&n&&(i.TgZ(0,"div",0,1),i.Hsn(2),i.qZA()),2&n){const t=a.id,e=i.oxw();i.Q6J("id",e.id)("ngClass",e._classList)("@panelAnimation",e.isOpen?"visible":"hidden"),i.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby(t))}}const H=["*"],j=(0,c.X$)("panelAnimation",[(0,c.SB)("void, hidden",(0,c.oB)({opacity:0,transform:"scaleY(0.8)"})),(0,c.eR)(":enter, hidden => visible",[(0,c.ru)([(0,c.jt)("0.03s linear",(0,c.oB)({opacity:1})),(0,c.jt)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,c.oB)({transform:"scaleY(1)"}))])]),(0,c.eR)(":leave, visible => hidden",[(0,c.jt)("0.075s linear",(0,c.oB)({opacity:0}))])]);let G=0;class N{constructor(a,t){this.source=a,this.option=t}}const z=(0,u.Kr)(class{}),C=new i.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function X(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1}}});let Q=(()=>{class n extends z{get isOpen(){return this._isOpen&&this.showPanel}_setColor(t){this._color=t,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=(0,_.Ig)(t)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(t){this._autoSelectActiveOption=(0,_.Ig)(t)}set classList(t){this._classList=t&&t.length?(0,_.du)(t).reduce((e,o)=>(e[o]=!0,e),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(t,e,o,l){super(),this._changeDetectorRef=t,this._elementRef=e,this._activeOptionChanges=b.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new i.vpe,this.opened=new i.vpe,this.closed=new i.vpe,this.optionActivated=new i.vpe,this._classList={},this.id="mat-autocomplete-"+G++,this.inertGroups=l?.SAFARI||!1,this._autoActiveFirstOption=!!o.autoActiveFirstOption,this._autoSelectActiveOption=!!o.autoSelectActiveOption}ngAfterContentInit(){this._keyManager=new R.s1(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new N(this,t);this.optionSelected.emit(e)}_getPanelAriaLabelledby(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}_setThemeClasses(t){t["mat-primary"]="primary"===this._color,t["mat-warn"]="warn"===this._color,t["mat-accent"]="accent"===this._color}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.sBO),i.Y36(i.SBq),i.Y36(C),i.Y36(E.t4))},n.\u0275dir=i.lG2({type:n,viewQuery:function(t,e){if(1&t&&(i.Gf(i.Rgc,7),i.Gf(V,5)),2&t){let o;i.iGM(o=i.CRH())&&(e.template=o.first),i.iGM(o=i.CRH())&&(e.panel=o.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[i.qOj]}),n})(),J=(()=>{class n extends Q{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden"}}return n.\u0275fac=function(){let a;return function(e){return(a||(a=i.n5z(n)))(e||n)}}(),n.\u0275cmp=i.Xpm({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,o){if(1&t&&(i.Suo(o,u.K7,5),i.Suo(o,u.ey,5)),2&t){let l;i.iGM(l=i.CRH())&&(e.optionGroups=l),i.iGM(l=i.CRH())&&(e.options=l)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[i._Bn([{provide:u.HF,useExisting:n}]),i.qOj],ngContentSelectors:H,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,k,3,5,"ng-template"))},dependencies:[f.mk],styles:[".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[j]},changeDetection:0}),n})();const Z={provide:F.JU,useExisting:(0,i.Gpc)(()=>T),multi:!0},P=new i.OlP("mat-autocomplete-scroll-strategy"),q={provide:P,deps:[h.aV],useFactory:function $(n){return()=>n.scrollStrategies.reposition()}};let tt=(()=>{class n{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=(0,_.Ig)(t)}constructor(t,e,o,l,r,y,it,ot,nt,st,at){this._element=t,this._overlay=e,this._viewContainerRef=o,this._zone=l,this._changeDetectorRef=r,this._dir=it,this._formField=ot,this._document=nt,this._viewportRuler=st,this._defaults=at,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=b.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new L.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,S.P)(()=>{const m=this.autocomplete?this.autocomplete.options:null;return m?m.changes.pipe((0,W.O)(m),(0,v.w)(()=>(0,d.T)(...m.map(lt=>lt.onSelectionChange)))):this._zone.onStable.pipe((0,O.q)(1),(0,v.w)(()=>this.optionSelections))}),this._scrollStrategy=y}ngAfterViewInit(){const t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,d.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,A.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,A.h)(()=>this._overlayAttached)):(0,B.of)()).pipe((0,x.U)(t=>t instanceof u.rN?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,d.T)((0,g.R)(this._document,"click"),(0,g.R)(this._document,"auxclick"),(0,g.R)(this._document,"touchend")).pipe((0,A.h)(t=>{const e=(0,E.sA)(t),o=this._formField?this._formField._elementRef.nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!o||!o.contains(e))&&(!l||!l.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode,o=(0,p.Vb)(t);if(e===p.hY&&!o&&t.preventDefault(),this.activeOption&&e===p.K5&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const l=this.autocomplete._keyManager.activeItem,r=e===p.LH||e===p.JH;e===p.Mf||r&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):r&&this._canOpen()&&this.openPanel(),(r||this.autocomplete._keyManager.activeItem!==l)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let e=t.target,o=e.value;"number"===e.type&&(o=""==o?null:parseFloat(o)),this._previousValue!==o&&(this._previousValue=o,this._pendingAutoselectedOption=null,this._onChange(o),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe((0,O.q)(1)),e=this.autocomplete.options.changes.pipe((0,K.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,U.g)(0));return(0,d.T)(t,e).pipe((0,v.w)(()=>(this._zone.run(()=>{const o=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,O.q)(1)).subscribe(o=>this._setValueAndClose(o))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(t){const e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t;this._updateNativeInputValue(e??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){const e=t?t.source:this._pendingAutoselectedOption;e&&(this._clearPreviousSelectedOption(e),this._assignOptionValue(e.value),this._onChange(e.value),this.autocomplete._emitSelectEvent(e),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!==t&&e.selected&&e.deselect()})}_attachOverlay(){let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new w.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._handleOverlayEvents(t),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new h.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,l=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}];let r;r="above"===this.position?l:"below"===this.position?e:[...e,...l],t.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const t=this.autocomplete;t.autoActiveFirstOption?t._keyManager.setFirstItemActive():t._keyManager.setActiveItem(-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){const e=this.autocomplete,o=(0,u.CB)(t,e.options,e.optionGroups);if(0===t&&1===o)e._setScrollTop(0);else if(e.panel){const l=e.options.toArray()[t];if(l){const r=l._getHostElement(),y=(0,u.jH)(r.offsetTop,r.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(y)}}}_handleOverlayEvents(t){t.keydownEvents().subscribe(e=>{(e.keyCode===p.hY&&!(0,p.Vb)(e)||e.keyCode===p.LH&&(0,p.Vb)(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())}),t.outsidePointerEvents().subscribe()}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(h.aV),i.Y36(i.s_b),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(P),i.Y36(Y.Is,8),i.Y36(I.G_,9),i.Y36(f.K0,8),i.Y36(M.rL),i.Y36(C,8))},n.\u0275dir=i.lG2({type:n,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[i.TTD]}),n})(),T=(()=>{class n extends tt{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return n.\u0275fac=function(){let a;return function(e){return(a||(a=i.n5z(n)))(e||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&i.NdJ("focusin",function(){return e._handleFocus()})("blur",function(){return e._onTouched()})("input",function(l){return e._handleInput(l)})("keydown",function(l){return e._handleKeydown(l)})("click",function(){return e._handleClick()}),2&t&&i.uIk("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-owns",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",e.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[i._Bn([Z]),i.qOj]}),n})(),et=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[q],imports:[h.U8,u.Ng,u.BQ,f.ez,M.ZD,u.Ng,u.BQ]}),n})()}}]);