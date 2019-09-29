(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(171)},121:function(e,t,n){},123:function(e,t,n){e.exports=n.p+"static/media/logo.9b5d7869.svg"},124:function(e,t,n){},126:function(e,t,n){},148:function(e,t,n){},150:function(e,t,n){},152:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(13),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(119),n(121);var l,s=n(5),c=n(24),u=n(106),m=n(52),d=n(231),h=n(223),p=n(233),f=n(208),g=n(238),y=n(229),E=(n(124),n(203)),v=n(244),b=n(172),_=n(241),C=n(240),O=n(210),T=n(211),P=n(212),w=n(213),N=n(205),S=n(214),D=(n(126),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,r.createElement(E.a,{color:e.isLoggedInAnonymously?"secondary":"inherit",onClick:function(t){return e.menuAnchorElement=t.currentTarget}},r.createElement(N.a,null),r.createElement(p.a,{width:5}),r.createElement(v.a,{title:e.isLoggedInAnonymously?"Ensure this endpoint is not exposed to the public!":""},r.createElement(f.a,{color:e.isLoggedInAnonymously?"secondary":"inherit"},e.isLoggedInAnonymously?"Anonymous":e.userName))),!e.isLoggedInAnonymously&&r.createElement(b.a,{anchorEl:e.menuAnchorElement,keepMounted:!0,open:!!e.menuAnchorElement,onClose:function(){return e.menuAnchorElement=void 0}},r.createElement(_.a,{onClick:function(){return e.logout()}},"Login under a different name")),r.createElement(C.a,{open:!e.isLoggedIn},r.createElement(O.a,null,!e.errorMessage&&r.createElement("div",null,r.createElement(T.a,{className:"login-progress"},r.createElement(P.a,null)),r.createElement(w.a,null,"Login in progress...")),!!e.errorMessage&&r.createElement("div",null,r.createElement(T.a,{className:"login-progress"},r.createElement(S.a,{color:"secondary",fontSize:"large"})),r.createElement(w.a,{color:"secondary"},"Login failed. ",e.errorMessage)))))},t=s.b([c.a],t)}(r.Component)),k=n(216),A=n(217),I=n(218),R=n(239),M=n(222),F=n(103),L=n.n(F),z=n(6),x=n(248),W=n(215),B=n(102),V=n.n(B),j=n(101),H=n.n(j),q=(n(148),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement(x.a,{className:"error-snackbar",anchorOrigin:{vertical:"top",horizontal:"right"},open:!!e.errorMessage,autoHideDuration:6e3,onClose:this.handleClose},r.createElement(W.a,{className:"error-snackbar-content",message:r.createElement("span",null,r.createElement(H.a,{className:"error-icon"}),e.errorMessage),action:[r.createElement(k.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},r.createElement(V.a,null))]}))},t.prototype.handleClose=function(){this.props.state.errorMessage=""},s.b([z.d.bound],t.prototype,"handleClose",null),t=s.b([c.a],t)}(r.Component)),J=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,r.createElement(k.a,{color:"inherit",onClick:function(t){return e.menuAnchorElement=t.currentTarget}},r.createElement(L.a,null)),r.createElement(b.a,{anchorEl:e.menuAnchorElement,keepMounted:!0,open:!!e.menuAnchorElement,onClose:function(){return e.menuAnchorElement=void 0}},r.createElement(_.a,{onClick:function(){return e.showConnectionParamsDialog()}},"Manage Storage Connection Settings")),r.createElement(C.a,{open:e.connectionParamsDialogOpen,onClose:function(){return e.connectionParamsDialogOpen=!1}},r.createElement(A.a,null,"Manage Storage Connection Setings"),r.createElement(O.a,null,e.inProgress?r.createElement(I.a,null):r.createElement(p.a,{height:4}),r.createElement(w.a,null,"The below values will be saved to host.json and local.settings.json respectively."),r.createElement(R.a,{autoFocus:!0,margin:"dense",label:"Hub Name",fullWidth:!0,disabled:e.inProgress,value:e.hubName,onChange:function(t){return e.hubName=t.target.value}}),r.createElement(R.a,{autoFocus:!0,margin:"dense",label:"Azure Storage Connection String",fullWidth:!0,InputLabelProps:{shrink:!0},placeholder:e.isConnectionStringReadonly?"[Change it via 'AzureWebJobsStorage' env variable]":"",disabled:e.inProgress||e.isConnectionStringReadonly,value:e.connectionString,onChange:function(t){return e.connectionString=t.target.value}}),r.createElement(q,{state:e})),r.createElement(M.a,null,r.createElement(E.a,{onClick:function(){return e.connectionParamsDialogOpen=!1},color:"primary"},"Cancel"),r.createElement(E.a,{onClick:function(){return e.saveConnectionParams()},disabled:!e.hubName||!e.isConnectionStringReadonly&&!e.connectionString||e.inProgress,color:"secondary"},"Save"))))},t=s.b([c.a],t)}(r.Component),K=n(220),U=n(246),Y=n(235),$=n(236),Q=n(221),Z=n(224),G=n(225),X=n(226),ee=n(227),te=n(243),ne=n(228),re=n(242),ae=n(65),oe=n.n(ae),ie=(n(150),function(){}(),["Timestamp","EventType","Name","ScheduledTime","Result","Details"]),le=function(){return function(){}}(),se=["instanceId","name","createdTime","lastUpdatedTime","runtimeStatus","input","output"],ce=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.state.loadOrchestrations(),document.addEventListener("scroll",function(t){var n=t.target.scrollingElement;if(n){n.scrollHeight-window.innerHeight-n.scrollTop<100&&e.props.state.loadOrchestrations()}})},t.prototype.render=function(){var e=this,t=this.props.state;return r.createElement("div",null,t.inProgress?r.createElement(I.a,null):r.createElement(p.a,{height:4}),r.createElement(h.a,{variant:"dense",className:"top-toolbar"},r.createElement(R.a,{label:"From \xa0\xa0 (UTC)",type:"datetime-local",InputLabelProps:{shrink:!0},value:this.formatDateTime(t.timeFrom),onChange:function(n){t.timeFrom=e.getDateTimeValue(n)},onBlur:function(){return t.applyTimeFrom()},onKeyPress:this.handleKeyPress}),r.createElement(p.a,{width:20}),r.createElement(K.a,null,r.createElement(U.a,{className:"till-label",htmlFor:"till-checkbox",shrink:!0},"Till"),r.createElement(Y.a,{id:"till-checkbox",className:"till-checkbox",checked:t.timeTillEnabled,onChange:function(e){return t.timeTillEnabled=e.target.checked}})),r.createElement(R.a,{className:"till-input",label:"(UTC)",placeholder:"[Now]",InputLabelProps:{shrink:!0},type:t.timeTillEnabled?"datetime-local":"text",disabled:!t.timeTillEnabled,value:t.timeTillEnabled?this.formatDateTime(t.timeTill):"",onChange:function(n){t.timeTill=e.getDateTimeValue(n)},onBlur:function(){return t.applyTimeTill()},onKeyPress:this.handleKeyPress}),r.createElement(p.a,{width:20}),r.createElement(K.a,null,r.createElement(U.a,{htmlFor:"filtered-column-select"},"Filtered Column"),r.createElement($.a,{className:"toolbar-select",value:t.filteredColumn,onChange:function(e){return t.filteredColumn=e.target.value},inputProps:{id:"filtered-column-select"}},r.createElement(_.a,{value:"0"},"[Not Selected]"),se.map(function(e){return r.createElement(_.a,{key:e,value:e},e)}))),r.createElement(p.a,{width:20}),r.createElement(K.a,null,r.createElement(U.a,{htmlFor:"filter-operator-select"},"Filter Operator"),r.createElement($.a,{className:"toolbar-select",value:t.filterOperator,onChange:function(e){return t.filterOperator=e.target.value},inputProps:{id:"filter-operator-select"}},r.createElement(_.a,{value:0},"Equals"),r.createElement(_.a,{value:1},"Starts With"),r.createElement(_.a,{value:2},"Contains"))),r.createElement(p.a,{width:20}),r.createElement(R.a,{label:"Filter Value",InputLabelProps:{shrink:!0},placeholder:"[some text or 'null']",disabled:"0"===t.filteredColumn,value:t.filterValue,onChange:function(e){return t.filterValue=e.target.value},onBlur:function(){return t.applyFilterValue()},onKeyPress:this.handleKeyPress}),r.createElement(p.a,{width:10}),r.createElement(f.a,{style:{flex:1}}),r.createElement(K.a,null,r.createElement(U.a,{htmlFor:"auto-refresh-select"},"Auto-refresh"),r.createElement($.a,{className:"toolbar-select",inputProps:{id:"auto-refresh-select"},value:t.autoRefresh,onChange:function(e){return t.autoRefresh=e.target.value}},r.createElement(_.a,{value:0},"Never"),r.createElement(_.a,{value:1},"Every 1 sec."),r.createElement(_.a,{value:5},"Every 5 sec."),r.createElement(_.a,{value:10},"Every 10 sec."))),r.createElement(p.a,{width:20}),r.createElement(E.a,{variant:"outlined",color:"default",size:"large",onClick:function(){return t.reloadOrchestrations()}},r.createElement(oe.a,null))),r.createElement(Q.a,{className:"items-count-label"},t.orchestrations.length," items shown"),t.orchestrations.length?this.renderTable(t):this.renderEmptyTable(),t.inProgress&&t.orchestrations.length?r.createElement(I.a,null):r.createElement(p.a,{height:4}),r.createElement(h.a,{variant:"dense"}),r.createElement(q,{state:this.props.state}))},t.prototype.renderEmptyTable=function(){return r.createElement(f.a,{variant:"h5",className:"empty-table-placeholder"},"This list is empty")},t.prototype.renderTable=function(e){return r.createElement(Z.a,{size:"small"},r.createElement(G.a,null,r.createElement(X.a,null,se.map(function(t){return r.createElement(ee.a,{key:t},r.createElement(te.a,{active:e.orderBy===t,direction:e.orderByDirection,onClick:function(){return e.orderBy=t}},t))}))),r.createElement(ne.a,null,e.orchestrations.map(function(e){var t={verticalAlign:"top"};return r.createElement(X.a,{key:e.instanceId,className:"runtime-status-"+e.runtimeStatus.toLowerCase()},r.createElement(ee.a,{className:"instance-id-cell",style:t},r.createElement(y.a,{href:"/api/monitor/orchestrations/"+e.instanceId,target:"_blank"},e.instanceId)),r.createElement(ee.a,{className:"name-cell",style:t},e.name),r.createElement(ee.a,{className:"datetime-cell",style:t},e.createdTime),r.createElement(ee.a,{className:"datetime-cell",style:t},e.lastUpdatedTime),r.createElement(ee.a,{style:t},e.runtimeStatus),r.createElement(ee.a,{className:"long-text-cell",style:t},r.createElement(re.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:JSON.stringify(e.input)})),r.createElement(ee.a,{className:"long-text-cell",style:t},r.createElement(re.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:JSON.stringify(e.output)})))})))},t.prototype.handleKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),this.props.state.reloadOrchestrations())},t.prototype.getDateTimeValue=function(e){var t=new Date(e.target.value.slice(0,16)+":00Z");try{t.toISOString()}catch(n){t=new Date}return t},t.prototype.formatDateTime=function(e){return e.toISOString().slice(0,16)},s.b([z.d.bound],t.prototype,"handleKeyPress",null),t=s.b([c.a],t)}(r.Component),ue=n(230),me=(n(152),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement("div",null,e.inProgress?r.createElement(I.a,null):r.createElement(p.a,{height:4}),r.createElement(h.a,{variant:"dense",className:"top-toolbar"},r.createElement(E.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return e.rewindConfirmationOpen=!0}},"Rewind"),r.createElement(p.a,{width:20}),r.createElement(E.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return e.terminateConfirmationOpen=!0}},"Terminate"),r.createElement(p.a,{width:20}),r.createElement(E.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return e.raiseEventDialogOpen=!0}},"Raise Event"),r.createElement(f.a,{style:{flex:1}}),r.createElement(K.a,null,r.createElement(U.a,{htmlFor:"auto-refresh-select"},"Auto-refresh"),r.createElement($.a,{className:"toolbar-select",value:e.autoRefresh,onChange:function(t){return e.autoRefresh=t.target.value},inputProps:{id:"auto-refresh-select"}},r.createElement(_.a,{value:0},"Never"),r.createElement(_.a,{value:1},"Every 1 sec."),r.createElement(_.a,{value:5},"Every 5 sec."),r.createElement(_.a,{value:10},"Every 10 sec."))),r.createElement(p.a,{width:20}),r.createElement(E.a,{variant:"outlined",color:"default",size:"large",onClick:function(){return e.loadDetails()}},r.createElement(oe.a,null))),this.renderDetails(e.details),r.createElement(Q.a,{className:"history-events-count-label"},"historyEvents: ",e.details.historyEvents?e.details.historyEvents.length:0," items"),e.details.historyEvents&&e.details.historyEvents.length?this.renderTable(e.details.historyEvents):this.renderEmptyTable(),e.inProgress?r.createElement(I.a,null):r.createElement(p.a,{height:4}),r.createElement(p.a,{height:10}),r.createElement(q,{state:this.props.state}),this.renderDialogs(e))},t.prototype.renderDialogs=function(e){return r.createElement("div",null,r.createElement(C.a,{open:e.rewindConfirmationOpen,onClose:function(){return e.rewindConfirmationOpen=!1}},r.createElement(A.a,null,"Confirm Rewind"),r.createElement(O.a,null,r.createElement(w.a,null,"You're about to rewind orchestration '",e.orchestrationId,"'. Are you sure?")),r.createElement(M.a,null,r.createElement(E.a,{onClick:function(){return e.rewindConfirmationOpen=!1},color:"primary",autoFocus:!0},"Cancel"),r.createElement(E.a,{onClick:function(){return e.rewind()},color:"secondary"},"Yes, rewind"))),r.createElement(C.a,{open:e.terminateConfirmationOpen,onClose:function(){return e.terminateConfirmationOpen=!1}},r.createElement(A.a,null,"Confirm Terminate"),r.createElement(O.a,null,r.createElement(w.a,null,"You're about to terminate orchestration '",e.orchestrationId,"'. This operation cannot be undone. Are you sure?")),r.createElement(M.a,null,r.createElement(E.a,{onClick:function(){return e.terminateConfirmationOpen=!1},color:"primary",autoFocus:!0},"Cancel"),r.createElement(E.a,{onClick:function(){return e.terminate()},color:"secondary"},"Yes, terminate"))),r.createElement(C.a,{open:e.raiseEventDialogOpen,onClose:function(){return e.raiseEventDialogOpen=!1}},r.createElement(A.a,null,"Raise Event"),r.createElement(O.a,null,r.createElement(w.a,null,"Provide event name and some additional data."),r.createElement(R.a,{autoFocus:!0,margin:"dense",label:"Event Name",fullWidth:!0,value:e.eventName,onChange:function(t){return e.eventName=t.target.value}}),r.createElement(R.a,{margin:"dense",label:"Event Data (JSON)",fullWidth:!0,multiline:!0,rows:7,value:e.eventData,onChange:function(t){return e.eventData=t.target.value}})),r.createElement(M.a,null,r.createElement(E.a,{onClick:function(){return e.raiseEventDialogOpen=!1},color:"primary"},"Cancel"),r.createElement(E.a,{onClick:function(){return e.raiseEvent()},disabled:!e.eventName,color:"secondary"},"Raise"))))},t.prototype.renderDetails=function(e){return r.createElement(ue.a,{container:!0,className:"grid-container"},r.createElement(ue.a,{item:!0,xs:12,sm:6,md:3,zeroMinWidth:!0,className:"grid-item"},r.createElement(R.a,{label:"name",value:e.name,margin:"normal",InputProps:{readOnly:!0},variant:"outlined",fullWidth:!0})),r.createElement(ue.a,{item:!0,xs:12,sm:6,md:3,zeroMinWidth:!0,className:"grid-item"},r.createElement(R.a,{label:"createdTime",value:e.createdTime,margin:"normal",InputProps:{readOnly:!0},variant:"outlined",fullWidth:!0})),r.createElement(ue.a,{item:!0,xs:12,sm:6,md:3,zeroMinWidth:!0,className:"grid-item"},r.createElement(R.a,{label:"runtimeStatus",value:e.runtimeStatus,margin:"normal",InputProps:{readOnly:!0},variant:"outlined",fullWidth:!0,className:e.runtimeStatus?"runtime-status-"+e.runtimeStatus.toLowerCase():""})),r.createElement(ue.a,{item:!0,xs:12,sm:6,md:3,zeroMinWidth:!0,className:"grid-item"},r.createElement(R.a,{label:"lastUpdatedTime",value:e.lastUpdatedTime,margin:"normal",InputProps:{readOnly:!0},variant:"outlined",fullWidth:!0})),r.createElement(ue.a,{item:!0,xs:12,zeroMinWidth:!0,className:"grid-item"},r.createElement(R.a,{label:"input",value:JSON.stringify(e.input),margin:"normal",InputProps:{readOnly:!0},variant:"outlined",fullWidth:!0,multiline:!0,rowsMax:5})),r.createElement(ue.a,{item:!0,xs:12,zeroMinWidth:!0,className:"grid-item"},r.createElement(R.a,{label:"output",value:JSON.stringify(e.output),margin:"normal",InputProps:{readOnly:!0},variant:"outlined",fullWidth:!0,multiline:!0,rowsMax:5})))},t.prototype.renderEmptyTable=function(){return r.createElement(f.a,{variant:"h5",className:"empty-table-placeholder"},"This list is empty")},t.prototype.renderTable=function(e){return r.createElement(Z.a,{size:"small"},r.createElement(G.a,null,r.createElement(X.a,null,ie.map(function(e){return r.createElement(ee.a,{key:e},e)}))),r.createElement(ne.a,null,e.map(function(e,t){var n={verticalAlign:"top"};return r.createElement(X.a,{key:t},r.createElement(ee.a,{style:n},e.Timestamp),r.createElement(ee.a,{className:"name-cell",style:n},e.EventType),r.createElement(ee.a,{style:n},e.Name?e.Name:e.FunctionName),r.createElement(ee.a,{style:n},e.ScheduledTime),r.createElement(ee.a,{className:"long-text-cell",style:n},r.createElement(re.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:JSON.stringify(e.Result)})),r.createElement(ee.a,{className:"long-text-cell",style:n},r.createElement(re.a,{className:"long-text-cell-input",multiline:!0,fullWidth:!0,rowsMax:5,readOnly:!0,value:e.Details})))})))},t=s.b([c.a],t)}(r.Component)),de=n(123),he=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s.c(t,e),t.prototype.render=function(){var e=this.props.state;return r.createElement(u.a,{basename:"/api/monitor"},r.createElement(d.a,{position:"static",color:"default",className:"app-bar"},r.createElement(h.a,null,e.loginState.isLoggedIn&&!e.orchestrationDetailsState.orchestrationId&&r.createElement(J,{state:e.mainMenuState}),r.createElement("img",{src:de,width:"30px"}),r.createElement(p.a,{width:5}),r.createElement(f.a,{variant:"h6",color:"inherit",className:"title-typography"},"Durable Functions Monitor"),r.createElement(g.a,{color:"inherit"},r.createElement(y.a,{color:"inherit",href:"/api/monitor"},"/ orchestrations"),r.createElement(f.a,{color:"inherit"},e.orchestrationDetailsState.orchestrationId)),r.createElement(f.a,{style:{flex:1}}),r.createElement(D,{state:e.loginState}))),e.loginState.isLoggedIn&&r.createElement("div",null,r.createElement(m.a,{path:"/",exact:!0,component:function(){return r.createElement(ce,{state:e.orchestrationsState})}}),r.createElement(m.a,{path:"/orchestrations/:id",component:function(t){return e.orchestrationDetailsState.orchestrationId=t.match.params.id,r.createElement(me,{state:e.orchestrationDetailsState})}})))},t=s.b([c.a],t)}(r.Component),pe=n(25),fe=n.n(pe),ge=n(105),ye=function(){function e(){this.errorMessage=""}return s.b([z.l],e.prototype,"errorMessage",void 0),e}(),Ee=function(e){function t(){var t=e.call(this)||this;return t._isLoggedIn=!1,t.login(),t}return s.c(t,e),Object.defineProperty(t.prototype,"isLoggedIn",{get:function(){return this._isLoggedIn},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isLoggedInAnonymously",{get:function(){return!this._userName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"userName",{get:function(){return this._userName},enumerable:!0,configurable:!0}),t.prototype.login=function(){var e=this;fe.a.get("/api/easyauth-config").then(this.loginWithEasyAuthConfig,function(t){e.errorMessage=t.message+"."+(t.response?t.response.data:"")})},t.prototype.logout=function(){this.menuAnchorElement=void 0,this._aadApp.logout()},t.prototype.getAuthorizationHeaderAsync=function(){var e=this;return this._aadApp?new Promise(function(t,n){var r={scopes:[e._aadApp.getCurrentConfiguration().auth.clientId]};e._aadApp.acquireTokenSilent(r).then(function(e){var n=e.accessToken;n||(console.log("DFM: accessToken is null, so using idToken.rawIdToken instead"),n=e.idToken.rawIdToken),t({Authorization:"Bearer "+n})},function(t){console.log("DFM: acquireTokenSilent() failed ("+t+"), so calling acquireTokenRedirect()..."),e._aadApp.acquireTokenRedirect(r)})}):new Promise(function(e,t){return e()})},t.prototype.loginWithEasyAuthConfig=function(e){var t=e.data;if(t.clientId){this._aadApp=new ge.a({auth:{clientId:t.clientId,authority:t.authority}}),this._aadApp.handleRedirectCallback(function(){},this.handleRedirectCallbackFailed);var n=this._aadApp.getAccount();n?(this._userName=n.userName,this._isLoggedIn=!0):(console.log("DFM: redirecting user to AAD for login..."),this._aadApp.loginRedirect())}else this._isLoggedIn=!0},t.prototype.handleRedirectCallbackFailed=function(e,t){this.errorMessage="Failed to handle login redirect. name: "+e.name+", message: "+e.message+", errorCode: "+e.errorCode+", errorMessage: "+e.errorMessage+", accountState: "+t},s.b([z.e],t.prototype,"isLoggedIn",null),s.b([z.e],t.prototype,"isLoggedInAnonymously",null),s.b([z.e],t.prototype,"userName",null),s.b([z.l],t.prototype,"menuAnchorElement",void 0),s.b([z.d.bound],t.prototype,"getAuthorizationHeaderAsync",null),s.b([z.l],t.prototype,"_isLoggedIn",void 0),s.b([z.l],t.prototype,"_userName",void 0),s.b([z.d.bound],t.prototype,"loginWithEasyAuthConfig",null),s.b([z.d.bound],t.prototype,"handleRedirectCallbackFailed",null),t}(ye),ve=function(e){function t(t){var n=e.call(this)||this;return n._getAuthorizationHeaderAsync=t,n.connectionParamsDialogOpen=!1,n._inProgress=!1,n}return s.c(t,e),Object.defineProperty(t.prototype,"inProgress",{get:function(){return this._inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isConnectionStringReadonly",{get:function(){return!this._oldConnectionString},enumerable:!0,configurable:!0}),t.prototype.showConnectionParamsDialog=function(){var e=this;this.menuAnchorElement=void 0,this.connectionParamsDialogOpen=!0;this._inProgress=!0,this._getAuthorizationHeaderAsync().then(function(t){fe.a.get("/api/manage-connection",{headers:t}).then(function(t){e.connectionString=t.data.connectionString,e._oldConnectionString=e.connectionString,e.hubName=t.data.hubName},function(t){e.errorMessage="Load failed: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})})},t.prototype.saveConnectionParams=function(){var e=this;this._inProgress=!0,this._getAuthorizationHeaderAsync().then(function(t){fe.a.put("/api/manage-connection",{connectionString:e.connectionString,hubName:e.hubName},{headers:t}).then(function(){e.connectionParamsDialogOpen=!1,e._oldConnectionString!==e.connectionString?alert("You've changed the Connection String, and the new value cannot currently be picked up automatically. Please, restart the Function Host."):location.reload()},function(t){e.errorMessage="Save failed: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})})},s.b([z.l],t.prototype,"menuAnchorElement",void 0),s.b([z.l],t.prototype,"hubName",void 0),s.b([z.l],t.prototype,"connectionString",void 0),s.b([z.l],t.prototype,"connectionParamsDialogOpen",void 0),s.b([z.e],t.prototype,"inProgress",null),s.b([z.e],t.prototype,"isConnectionStringReadonly",null),s.b([z.l],t.prototype,"_inProgress",void 0),s.b([z.l],t.prototype,"_oldConnectionString",void 0),t}(ye);!function(e){e[e.Equals=0]="Equals",e[e.StartsWith=1]="StartsWith",e[e.Contains=2]="Contains"}(l||(l={}));var be=function(e){function t(t){var n=e.call(this)||this;n._getAuthorizationHeaderAsync=t,n._inProgress=!1,n._orchestrations=[],n._orderByDirection="asc",n._orderBy="",n._autoRefresh=0,n._filterValue="",n._filterOperator=l.Equals,n._filteredColumn="0",n._noMorePagesToLoad=!1,n._pageSize=50,n._oldFilterValue="";var r=new Date;return r.setDate(r.getDate()-1),n._timeFrom=r,n}return s.c(t,e),Object.defineProperty(t.prototype,"inProgress",{get:function(){return this._inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orchestrations",{get:function(){return this._orchestrations},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoRefresh",{get:function(){return this._autoRefresh},set:function(e){this._autoRefresh=e,this.loadOrchestrations(!0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeFrom",{get:function(){return this._timeFrom},set:function(e){this._timeFrom=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeTill",{get:function(){return this._timeTill?this._timeTill:new Date},set:function(e){this._timeTill=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeTillEnabled",{get:function(){return!!this._timeTill},set:function(e){this._timeTill=e?new Date:void 0,e||this.reloadOrchestrations()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orderByDirection",{get:function(){return this._orderByDirection},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"orderBy",{get:function(){return this._orderBy},set:function(e){this._orderBy!==e?this._orderBy=e:this._orderByDirection="desc"===this._orderByDirection?"asc":"desc",this.reloadOrchestrations()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterValue",{get:function(){return this._filterValue},set:function(e){this._filterValue=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterOperator",{get:function(){return this._filterOperator},set:function(e){this._filterOperator=e,this._filterValue&&"0"!==this._filteredColumn&&this.reloadOrchestrations()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filteredColumn",{get:function(){return this._filteredColumn},set:function(e){this._filteredColumn=e,this._filterValue&&("0"===this._filteredColumn&&(this._filterValue=""),this.reloadOrchestrations())},enumerable:!0,configurable:!0}),t.prototype.applyTimeFrom=function(){this._oldTimeFrom!==this._timeFrom&&this.reloadOrchestrations()},t.prototype.applyTimeTill=function(){this._oldTimeTill!==this._timeTill&&this.reloadOrchestrations()},t.prototype.applyFilterValue=function(){this._oldFilterValue!==this._filterValue&&this.reloadOrchestrations()},t.prototype.reloadOrchestrations=function(){this._orchestrations=[],this._noMorePagesToLoad=!1,this.loadOrchestrations(),this._oldFilterValue=this._filterValue,this._oldTimeFrom=this._timeFrom,this._oldTimeTill=this._timeTill},t.prototype.loadOrchestrations=function(e){var t=this;if(void 0===e&&(e=!1),!(this.inProgress||this._noMorePagesToLoad&&!this._autoRefresh)){this._inProgress=!0;var n=e?0:this._orchestrations.length,r=this._timeTill?this._timeTill:new Date,a="&$filter=createdTime ge '"+this._timeFrom.toISOString()+"' and createdTime le '"+r.toISOString()+"'";if(this._filterValue&&"0"!==this._filteredColumn)switch(a+=" and ",this._filterOperator){case l.Equals:a+=this._filteredColumn+" eq '"+this._filterValue+"'";break;case l.StartsWith:a+="startswith("+this._filteredColumn+", '"+this._filterValue+"')";break;case l.Contains:a+="contains("+this._filteredColumn+", '"+this._filterValue+"')"}var o=this._orderBy?"&$orderby="+this._orderBy+" "+this.orderByDirection:"",i="/api/orchestrations?$top="+this._pageSize+"&$skip="+n+a+o;this._getAuthorizationHeaderAsync().then(function(n){fe.a.get(i,{headers:n}).then(function(n){var r;n.data.length?e?t._orchestrations=n.data:(r=t._orchestrations).push.apply(r,n.data):t._noMorePagesToLoad=!0,t._autoRefresh&&(t._autoRefreshToken&&clearTimeout(t._autoRefreshToken),t._autoRefreshToken=setTimeout(function(){return t.loadOrchestrations(!0)},1e3*t._autoRefresh))},function(e){t._autoRefresh=0,t.errorMessage="Load failed: "+e.message+"."+(e.response?e.response.data:"")+" "}).finally(function(){t._inProgress=!1})})}},s.b([z.e],t.prototype,"inProgress",null),s.b([z.e],t.prototype,"orchestrations",null),s.b([z.e],t.prototype,"autoRefresh",null),s.b([z.e],t.prototype,"timeFrom",null),s.b([z.e],t.prototype,"timeTill",null),s.b([z.e],t.prototype,"timeTillEnabled",null),s.b([z.e],t.prototype,"orderByDirection",null),s.b([z.e],t.prototype,"orderBy",null),s.b([z.e],t.prototype,"filterValue",null),s.b([z.e],t.prototype,"filterOperator",null),s.b([z.e],t.prototype,"filteredColumn",null),s.b([z.l],t.prototype,"_inProgress",void 0),s.b([z.l],t.prototype,"_orchestrations",void 0),s.b([z.l],t.prototype,"_orderByDirection",void 0),s.b([z.l],t.prototype,"_orderBy",void 0),s.b([z.l],t.prototype,"_autoRefresh",void 0),s.b([z.l],t.prototype,"_timeFrom",void 0),s.b([z.l],t.prototype,"_timeTill",void 0),s.b([z.l],t.prototype,"_filterValue",void 0),s.b([z.l],t.prototype,"_filterOperator",void 0),s.b([z.l],t.prototype,"_filteredColumn",void 0),t}(ye),_e=function(e){function t(t){var n=e.call(this)||this;return n._getAuthorizationHeaderAsync=t,n.details=new le,n.rewindConfirmationOpen=!1,n.terminateConfirmationOpen=!1,n._inProgress=!1,n._sendEventDialogOpen=!1,n._autoRefresh=0,n}return s.c(t,e),Object.defineProperty(t.prototype,"orchestrationId",{get:function(){return this._orchestrationId},set:function(e){this._orchestrationId=e,this.loadDetails()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inProgress",{get:function(){return this._inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoRefresh",{get:function(){return this._autoRefresh},set:function(e){this._autoRefresh=e,this.loadDetails()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"raiseEventDialogOpen",{get:function(){return this._sendEventDialogOpen},set:function(e){this._sendEventDialogOpen=e,this.eventName="",this.eventData=""},enumerable:!0,configurable:!0}),t.prototype.rewind=function(){var e=this;this.rewindConfirmationOpen=!1;var t="/api/orchestrations('"+this._orchestrationId+"')/rewind";this._inProgress=!0,this._getAuthorizationHeaderAsync().then(function(n){fe.a.post(t,void 0,{headers:n}).then(function(){e.loadDetails()},function(t){e.errorMessage="Failed to rewind: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})})},t.prototype.terminate=function(){var e=this;this.terminateConfirmationOpen=!1;var t="/api/orchestrations('"+this._orchestrationId+"')/terminate";this._inProgress=!0,this._getAuthorizationHeaderAsync().then(function(n){fe.a.post(t,void 0,{headers:n}).then(function(){e.loadDetails()},function(t){e.errorMessage="Failed to terminate: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})})},t.prototype.raiseEvent=function(){var e=this,t="/api/orchestrations('"+this._orchestrationId+"')/raise-event",n={name:this.eventName,data:null};try{n.data=JSON.parse(this.eventData)}catch(r){return void(this.errorMessage="Event Data failed to parse: "+r.message)}finally{this.raiseEventDialogOpen=!1}this._inProgress=!0,this._getAuthorizationHeaderAsync().then(function(r){fe.a.post(t,n,{headers:r}).then(function(){e.loadDetails()},function(t){e.errorMessage="Failed to raise an event: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})})},t.prototype.loadDetails=function(){var e=this;if(!this.inProgress){this._inProgress=!0;var t="/api/orchestrations('"+this._orchestrationId+"')";this._getAuthorizationHeaderAsync().then(function(n){fe.a.get(t,{headers:n}).then(function(t){if(!t.data)return e.errorMessage="Orchestration '"+e._orchestrationId+"' not found.",void(e._autoRefresh=0);e.details=t.data,e._autoRefresh&&(e._autoRefreshToken&&clearTimeout(e._autoRefreshToken),e._autoRefreshToken=setTimeout(function(){return e.loadDetails()},1e3*e._autoRefresh))},function(t){e._autoRefresh=0,e.errorMessage="Load failed: "+t.message+"."+(t.response?t.response.data:"")+" "}).finally(function(){e._inProgress=!1})})}},s.b([z.e],t.prototype,"orchestrationId",null),s.b([z.e],t.prototype,"inProgress",null),s.b([z.e],t.prototype,"autoRefresh",null),s.b([z.e],t.prototype,"raiseEventDialogOpen",null),s.b([z.l],t.prototype,"rewindConfirmationOpen",void 0),s.b([z.l],t.prototype,"terminateConfirmationOpen",void 0),s.b([z.l],t.prototype,"eventName",void 0),s.b([z.l],t.prototype,"eventData",void 0),s.b([z.l],t.prototype,"_orchestrationId",void 0),s.b([z.l],t.prototype,"_inProgress",void 0),s.b([z.l],t.prototype,"_sendEventDialogOpen",void 0),s.b([z.l],t.prototype,"_autoRefresh",void 0),t}(ye),Ce=new(function(){return function(){this.loginState=new Ee,this.mainMenuState=new ve(this.loginState.getAuthorizationHeaderAsync),this.orchestrationsState=new be(this.loginState.getAuthorizationHeaderAsync),this.orchestrationDetailsState=new _e(this.loginState.getAuthorizationHeaderAsync)}}());a.render(r.createElement(he,{state:Ce}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/api/monitor",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/api/monitor/service-worker.js";o?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()}},[[114,2,1]]]);
//# sourceMappingURL=main.18676408.chunk.js.map