!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=225)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},10:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(16),o=n.n(r),a=n(10),s=n.n(a),i=n(11),c=n.n(i),u=n(8),l=n.n(u),p=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s()(this,e),this.url=t,this.origin=new URL(t).origin,this.eventHandlers=Object.assign({success:{type:"",callback:function(){}},error:{type:"",callback:function(){}}},n),this.options=Object.assign({height:570,width:340,title:""},r),this.popup=null,this.createPopup=this.createPopup.bind(this),this.messageHandler=this.messageHandler.bind(this),this.getPopup=this.getPopup.bind(this)}var t;return c()(e,[{key:"createPopup",value:function(){var e=this.options,t=e.height,n=e.width,r=e.title,o=["top="+(window.top.outerHeight/2+window.top.screenY-t/2),"left="+(window.top.outerWidth/2+window.top.screenX-n/2),"width="+n,"height="+t,"resizable=1","scrollbars=1","status=0"];this.popup&&!this.popup.closed||(this.popup=window.open(this.url,r,o.join(","))),this.popup&&this.popup.focus(),window.addEventListener("message",this.messageHandler,!1)}},{key:"messageHandler",value:(t=o()(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data,r=t.source,t.origin===this.origin&&this.popup===r){e.next=3;break}return e.abrupt("return");case 3:if(n.type!==this.eventHandlers.success.type){e.next=8;break}return this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),e.next=8,this.eventHandlers.success.callback(n);case 8:if(n.type!==this.eventHandlers.error.type){e.next=13;break}return this.popup.close(),window.removeEventListener("message",this.messageHandler,!1),e.next=13,this.eventHandlers.error.callback(n);case 13:case"end":return e.stop()}}),e,this)}))),function(_x){return t.apply(this,arguments)})},{key:"getPopup",value:function(){return this.popup}},{key:"isClosed",value:function(){return!this.popup||this.popup.closed}},{key:"focus",value:function(){this.isClosed()||this.popup.focus()}}]),e}()},101:function(e,t,n){"use strict";var r=n(0),o=n(1),a=n.n(o),s=n(2),i=n(38),c=n.n(i),u=n(5),l=function(e){var t=Object(s.sprintf)(
/* translators: %s expands to a link to open the Wincher login popup. */
Object(s.__)("It seems like something went wrong when retrieving your website's data. Please %s and try again.","wordpress-seo"),"{{reconnectToWincher/}}","Wincher");return Object(r.createElement)(u.Alert,{type:"error"},c()({mixedString:t,components:{reconnectToWincher:Object(r.createElement)("a",{href:"#",onClick:e.onReconnect},Object(s.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(s.__)("reconnect to %s","wordpress-seo"),"Wincher"))}}))};l.propTypes={onReconnect:a.a.func.isRequired},t.a=l},104:function(e,t,n){"use strict";var r=n(4),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=n(76),s=n(105),i=n(106),c="function"==typeof Symbol&&Symbol.iterator;function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}var l=/\/+/g;function p(e){return(""+e).replace(l,"$&/")}var d,f,h=b,b=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function m(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function y(e,t,n){var o,s,i=e.result,c=e.keyPrefix,u=e.func,l=e.context,d=u.call(l,t,e.count++);Array.isArray(d)?w(d,i,n,a.thatReturnsArgument):null!=d&&(r.isValidElement(d)&&(o=d,s=c+(!d.key||t&&t.key===d.key?"":p(d.key)+"/")+n,d=r.cloneElement(o,{key:s},void 0!==o.props?o.props.children:void 0)),i.push(d))}function w(e,t,n,r,a){var i="";null!=n&&(i=p(n)+"/");var l=m.getPooled(t,i,r,a);!function(e,t,n){null==e||function e(t,n,r,a){var i,l=typeof t;if("undefined"!==l&&"boolean"!==l||(t=null),null===t||"string"===l||"number"===l||"object"===l&&t.$$typeof===o)return r(a,t,""===n?"."+u(t,0):n),1;var p=0,d=""===n?".":n+":";if(Array.isArray(t))for(var f=0;f<t.length;f++)p+=e(i=t[f],d+u(i,f),r,a);else{var h=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(h)for(var b,m=h.call(t),y=0;!(b=m.next()).done;)p+=e(i=b.value,d+u(i,y++),r,a);else if("object"===l){var w=""+t;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===w?"object with keys {"+Object.keys(t).join(", ")+"}":w,"")}}return p}(e,"",t,n)}(e,y,l),m.release(l)}m.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)},(f=m).instancePool=[],f.getPooled=d||h,f.poolSize||(f.poolSize=10),f.release=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)w(e[n],t,n,a.thatReturnsArgument);return t}},105:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,s,i],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},106:function(e,t,n){"use strict";var r=n(76);e.exports=r},107:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},11:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},13:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},14:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},140:function(e,t){e.exports=window.yoast.analysisReport},16:function(e,t){function n(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var s=e.apply(t,r);function i(e){n(s,o,a,i,c,"next",e)}function c(e){n(s,o,a,i,c,"throw",e)}i(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},18:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.__esModule=!0,e.exports.default=e.exports},2:function(e,t){e.exports=window.wp.i18n},20:function(e,t,n){var r=n(56);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},21:function(e,t,n){var r=n(41).default,o=n(14);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},225:function(e,t,n){"use strict";n.r(t);var r,o,a,s,i=n(16),c=n.n(i),u=n(10),l=n.n(u),p=n(11),d=n.n(p),f=n(14),h=n.n(f),b=n(20),m=n.n(b),y=n(21),w=n.n(y),g=n(13),v=n.n(g),j=n(0),O=n(8),x=n.n(O),k=n(5),_=n(25),E=n(140),T=n(9),S=n(18),P=n.n(S),D=n(1),R=n.n(D),L=n(7),C=n.n(L),I=n(2),A=n(3),M=n(38),W=n.n(M),N=Object(T.makeOutboundLink)(),H=Object(T.makeOutboundLink)(),q=function(){var e=Object(I.sprintf)(Object(I.__)(
/* translators: %1$s expands to a link to Wincher, %2$s expands to a link to the keyphrase tracking article on Yoast.com */
"Connect %1$s with %2$s to track the ranking position of your site in the search results based on your keyphrase(s). %3$s","wordpress-seo"),"Yoast SEO","{{wincherLink/}}","{{wincherReadMoreLink/}}");return Object(j.createElement)("p",null,W()({mixedString:e,components:{wincherLink:Object(j.createElement)(N,{href:wpseoAdminGlobalL10n["links.wincher.website"]},"Wincher"),wincherReadMoreLink:Object(j.createElement)(H,{href:wpseoAdminL10n["shortlinks.wincher.seo_performance"]},Object(I.__)("Read more about keyphrase tracking with Wincher","wordpress-seo"))}}))},F=function(){return Object(j.createElement)(k.Alert,{type:"warning"},Object(I.sprintf)(
/* translators: %s: Expands to "Wincher". */
Object(I.__)('Your %s account does not contain any keyphrases for this website yet. You can track keyphrases by using the "Track SEO Performance" button in the post editor.',"wordpress-seo"),"Wincher"))},K=n(96),V=n(101),$=Object(T.makeOutboundLink)(),z=Object(T.makeOutboundLink)(),Y=Object(T.makeOutboundLink)(),B=C.a.div(r||(r=P()(["\n"]))),G=C.a.div(o||(o=P()(["\n\tfont-size: 14px;\n"]))),U=C.a.h3(a||(a=P()(["\n\tmargin: 8px 0;\n\tfont-size: 1em;\n"]))),Q=C.a.div(s||(s=P()(["\n\twidth: 100%;\n\toverflow-y: auto;\n"]))),X=function(e){var t=e.websiteId,n=e.id;return Object(I.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",t,n)},J=function(e){var t=e.className,n=e.onConnectAction;return Object(j.createElement)(G,{className:"".concat(t,"__text")},Object(j.createElement)(q,null),Object(j.createElement)("div",{className:"yoast"},Object(j.createElement)(k.NewButton,{variant:"secondary",id:"yoast-connect-wincher-dashboard-widget",onClick:n},Object(I.sprintf)(
/* translators: %s expands to Wincher */
Object(I.__)("Connect with %s","wordpress-seo"),"Wincher"))))};J.propTypes={className:R.a.string,onConnectAction:R.a.func.isRequired},J.defaultProps={className:""};var Z=function(e){var t=e.keyphrase,n=e.websiteId,r=t.id,o=t.keyword;return Object(j.createElement)("tr",null,Object(j.createElement)("td",null,o),Object(j.createElement)("td",null,Object(K.c)(t)),Object(j.createElement)("td",{className:"yoast-table--nopadding"},Object(j.createElement)(K.a,{chartData:t})),Object(j.createElement)("td",{className:"yoast-table--nobreak"},Object(j.createElement)($,{href:X({websiteId:n,id:r})},Object(I.__)("View","wordpress-seo"))))};Z.propTypes={keyphrase:R.a.object.isRequired,websiteId:R.a.string.isRequired};var ee=function(e){var t=e.isLoggedIn,n=e.data,r=e.onConnectAction;return t?Object(A.isEmpty)(n)||404!==n.status?!n||Object(A.isEmpty)(n.results)?Object(j.createElement)(F,null):null:Object(j.createElement)(V.a,{onReconnect:r}):Object(j.createElement)(J,e)};ee.propTypes={isLoggedIn:R.a.bool.isRequired,data:R.a.object.isRequired,onConnectAction:R.a.func.isRequired};var te=function(){var e=Object(I.sprintf)(
/* translators: %s expands to a link to Wincher login */
Object(I.__)("This overview only shows you keyphrases added to Yoast SEO. There may be other keyphrases added to your %s.","wordpress-seo"),"{{wincherAccountLink/}}");return Object(j.createElement)("p",null,W()({mixedString:e,components:{wincherAccountLink:Object(j.createElement)(Y,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(I.sprintf)(
/* translators: %s : Expands to "Wincher". */
Object(I.__)("%s account","wordpress-seo"),"Wincher"))}}))},ne=function(e){var t=e.className,n=e.websiteId,r=e.isLoggedIn,o=e.data;return Object(j.createElement)(B,{className:t},Object(j.createElement)(U,{className:"".concat(t,"__header")},Object(I.__)("Top performing keyphrases on your site","wordpress-seo")),Object(j.createElement)(ee,e),r&&o&&!Object(A.isEmpty)(o)&&!Object(A.isEmpty)(o.results)&&Object(j.createElement)(j.Fragment,null,Object(j.createElement)(te,null),Object(j.createElement)(Q,null,Object(j.createElement)("table",{className:"yoast yoast-table"},Object(j.createElement)("thead",null,Object(j.createElement)("tr",null,Object(j.createElement)("th",{scope:"col",abbr:Object(I.__)("Keyphrase","wordpress-seo")},Object(I.__)("Keyphrase","wordpress-seo")),Object(j.createElement)("th",{scope:"col",abbr:Object(I.__)("Position","wordpress-seo")},Object(I.__)("Position","wordpress-seo")),Object(j.createElement)("th",{scope:"col",abbr:Object(I.__)("Position over time","wordpress-seo")},Object(I.__)("Position over time","wordpress-seo")),Object(j.createElement)("td",{className:"yoast-table--nobreak"}))),Object(j.createElement)("tbody",null,Object(A.map)(o.results,(function(e,t){return Object(j.createElement)(Z,{key:"keyphrase-".concat(t),keyphrase:e,websiteId:n})}))))),Object(j.createElement)("p",{style:{marginBottom:0,position:"relative"}},Object(j.createElement)(z,{href:wpseoAdminGlobalL10n["links.wincher.login"]},Object(I.sprintf)(
/* translators: %s expands to Wincher */
Object(I.__)("Get more insights over at %s","wordpress-seo"),"Wincher")))))};ne.propTypes={className:R.a.string,data:R.a.object.isRequired,websiteId:R.a.string.isRequired,isLoggedIn:R.a.bool.isRequired},ne.defaultProps={className:"wincher-seo-performance"};var re=ne,oe=n(50),ae=n(100);var se=function(e){m()(i,e);var t,n,r,o,a,s=(o=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v()(o);if(a){var n=v()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w()(this,e)});function i(){var e;return l()(this,i),(e=s.call(this)).state={statistics:null,feed:null,wincherData:{},wincherWebsiteId:wpseoDashboardWidgetL10n.wincher_website_id,wincherIsLoggedIn:"1"===wpseoDashboardWidgetL10n.wincher_is_logged_in,isDataFetched:!1},e.onConnect=e.onConnect.bind(h()(e)),e.getWincherData=e.getWincherData.bind(h()(e)),e.performAuthenticationRequest=e.performAuthenticationRequest.bind(h()(e)),e}return d()(i,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("#wpseo-dashboard-overview-hide");t.is(":checked")&&this.fetchData(),t.on("click",(function(){e.fetchData()}))}},{key:"fetchData",value:function(){this.state.isDataFetched||(this.getStatistics(),this.getFeed(),this.state.wincherIsLoggedIn&&this.getWincherData(),this.setState({isDataFetched:!0}))}},{key:"getStatistics",value:function(){var e=this;wpseoApi.get("statistics",(function(t){var n={};t&&t.seo_scores&&(n.seoScores=t.seo_scores.map((function(e){return{value:parseInt(e.count,10),color:i.getColorFromScore(e.seo_rank),html:'<a href="'.concat(e.link,'">').concat(e.label,"</a>")}})),n.header=jQuery("<div>".concat(t.header,"</div>")).text(),e.setState({statistics:n}))}))}},{key:"getFeed",value:function(){var e=this;Object(T.getPostFeed)("https://yoast.com/feed/widget/?wp_version="+wpseoDashboardWidgetL10n.wp_version+"&php_version="+wpseoDashboardWidgetL10n.php_version,2).then((function(t){t.items=t.items.map((function(e){return e.description=jQuery("<div>".concat(e.description,"</div>")).text(),e.description=e.description.replace("The post ".concat(e.title," appeared first on Yoast."),"").trim(),e})),e.setState({feed:t})})).catch((function(e){return console.log(e)}))}},{key:"getWincherData",value:(r=c()(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.c)();case 2:200===(t=e.sent).status&&(n=Object(A.filter)(t.results,(function(e){return!Object(A.isEmpty)(e.position)})),r=Object(A.sortBy)(n,(function(e){return e.position.value})).splice(0,5),this.setState({wincherData:{results:r,status:t.status}}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getSeoAssessment",value:function(){return null===this.state.statistics?null:Object(j.createElement)(E.SiteSEOReport,{key:"yoast-seo-posts-assessment",seoAssessmentText:this.state.statistics.header,seoAssessmentItems:this.state.statistics.seoScores})}},{key:"getYoastFeed",value:function(){return null===this.state.feed?null:Object(j.createElement)(k.ArticleList,{className:"wordpress-feed",key:"yoast-seo-blog-feed",title:wpseoDashboardWidgetL10n.feed_header,feed:this.state.feed,footerLinkText:wpseoDashboardWidgetL10n.feed_footer})}},{key:"performAuthenticationRequest",value:(n=c()(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.a)(t);case 2:if(200===e.sent.status){e.next=5;break}return e.abrupt("return");case 5:return this.setState({wincherIsLoggedIn:!0,wincherWebsiteId:t.websiteId.toString()}),e.next=8,this.getWincherData();case 8:(n=this.loginPopup.getPopup())&&n.close();case 10:case"end":return e.stop()}}),e,this)}))),function(_x){return n.apply(this,arguments)})},{key:"onConnect",value:(t=c()(x.a.mark((function e(){var t,n,r=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loginPopup||this.loginPopup.isClosed()){e.next=3;break}return this.loginPopup.focus(),e.abrupt("return");case 3:return e.next=5,Object(oe.b)();case 5:t=e.sent,n=t.url,this.loginPopup=new ae.a(n,{success:{type:"wincher:oauth:success",callback:function(e){return r.performAuthenticationRequest(e)}},error:{type:"wincher:oauth:error",callback:function(){}}},{title:"Wincher_login",width:500,height:700}),this.loginPopup.createPopup();case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getWincherSEOPerformance",value:function(){if("0"!==wpseoDashboardWidgetL10n.is_wincher_active&&this.state.wincherIsLoggedIn)return Object(j.createElement)(re,{key:"wincher-performance-report",data:this.state.wincherData,websiteId:this.state.wincherWebsiteId,isLoggedIn:this.state.wincherIsLoggedIn,onConnectAction:this.onConnect})}},{key:"render",value:function(){var e=[this.getSeoAssessment(),this.getWincherSEOPerformance(),this.getYoastFeed()].filter((function(e){return null!==e}));return 0===e.length?null:Object(j.createElement)("div",null,e)}}],[{key:"getColorFromScore",value:function(e){return _.colors["$color_".concat(e)]||_.colors.$color_grey}}]),i}(j.Component),ie=document.getElementById("yoast-seo-dashboard-widget");ie&&Object(j.render)(Object(j.createElement)(se,null),ie)},25:function(e,t){e.exports=window.yoast.styleGuide},28:function(e,t,n){var r=n(78),o=n(79),a=n(49),s=n(80);e.exports=function(e){return r(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},3:function(e,t){e.exports=window.lodash},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(n(4)),a=i(n(104)),s=i(n(107));function i(e){return e&&e.__esModule?e:{default:e}}var c=void 0;t.default=function(e){var t=e.mixedString,n=e.components,i=e.throwErrors;if(c=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var u=(0,s.default)(t);try{return function e(t,n){var s,i,u,l,p,d,f,h,b=[],m={};for(d=0;d<t.length;d++)if("string"!==(p=t[d]).type){if(!n.hasOwnProperty(p.value)||void 0===n[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(n[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+c);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){s=n[p.value],u=d;break}b.push(n[p.value])}else b.push(p.value);return s&&(l=function(e,t){var n,r,o=t[e],a=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){a++;continue}if("componentClose"===n.type){if(0===a)return r;a--}}throw new Error("Missing closing component token `"+o.value+"`")}(u,t),f=e(t.slice(u+1,l),n),i=o.default.cloneElement(s,{},f),b.push(i),l<t.length-1&&(h=e(t.slice(l+1),n),b=b.concat(h))),1===b.length?b[0]:(b.forEach((function(e,t){e&&(m["interpolation-child-"+t]=e)})),(0,a.default)(m))}(u,n)}catch(e){if(i)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p}));var r=n(16),o=n.n(r),a=n(8),s=n.n(a),i=n(46),c=n.n(i);function u(_x,e,t){return l.apply(this,arguments)}function l(){return(l=o()(s.a.mark((function e(t,n,r){var o,a,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.length>3&&void 0!==i[3]?i[3]:200,e.prev=1,e.next=4,t();case 4:if(!(a=e.sent)){e.next=9;break}if(a.status!==o){e.next=8;break}return e.abrupt("return",n(a));case 8:return e.abrupt("return",r(a));case 9:return e.abrupt("return",!1);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=o()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()(t);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),!e.t0.error||!e.t0.status){e.next=10;break}return e.abrupt("return",e.t0);case 10:if(!(e.t0 instanceof Response)){e.next=14;break}return e.next=13,e.t0.json();case 13:return e.abrupt("return",e.sent);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}},4:function(e,t){e.exports=window.React},41:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},46:function(e,t){e.exports=window.wp.apiFetch},47:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},49:function(e,t,n){var r=n(47);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5:function(e,t){e.exports=window.yoast.componentsNew},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return y}));var r=n(16),o=n.n(r),a=n(8),s=n.n(a),i=n(3),c=n(39);function u(){return l.apply(this,arguments)}function l(){return(l=o()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({path:"yoast/v1/wincher/authorization-url",method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(_x){return d.apply(this,arguments)}function d(){return(d=o()(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.code,r=t.websiteId,e.next=3,Object(c.a)({path:"yoast/v1/wincher/authenticate",method:"POST",data:{code:n,websiteId:r}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=o()(s.a.mark((function e(){var t,n,r,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:null,n=o.length>1&&void 0!==o[1]?o[1]:null,r=o.length>2?o[2]:void 0,e.next=5,Object(c.a)({path:"yoast/v1/wincher/keyphrases",method:"POST",data:{keyphrases:t,permalink:n},signal:r});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=o()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(i.isArray)(t)||(t=[t]),e.next=3,Object(c.a)({path:"yoast/v1/wincher/keyphrases/track",method:"POST",data:{keyphrases:t}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=o()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)({path:"yoast/v1/wincher/keyphrases/untrack",method:"DELETE",data:{keyphraseID:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},56:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},7:function(e,t){e.exports=window.yoast.styledComponents},73:function(e,t,n){"use strict";var r=n(28),o=n.n(r),a=n(0),s=n(1),i=n.n(s),c=n(2),u=function(e){var t=e.data,n=e.mapChartDataToTableData,r=e.dataTableCaption,o=e.dataTableHeaderLabels,s=e.isDataTableVisuallyHidden;return t.length!==o.length?Object(a.createElement)("p",null,Object(c.__)("The number of headers and header labels don't match.","wordpress-seo")):Object(a.createElement)("div",{className:s?"screen-reader-text":null},Object(a.createElement)("table",null,Object(a.createElement)("caption",null,r),Object(a.createElement)("thead",null,Object(a.createElement)("tr",null,o.map((function(e,t){return Object(a.createElement)("th",{key:t},e)})))),Object(a.createElement)("tbody",null,Object(a.createElement)("tr",null,t.map((function(e,t){return Object(a.createElement)("td",{key:t},n(e.y))}))))))};u.propTypes={data:i.a.arrayOf(i.a.shape({x:i.a.number,y:i.a.number})).isRequired,mapChartDataToTableData:i.a.func,dataTableCaption:i.a.string.isRequired,dataTableHeaderLabels:i.a.array.isRequired,isDataTableVisuallyHidden:i.a.bool},u.defaultProps={mapChartDataToTableData:null,isDataTableVisuallyHidden:!0};var l=u,p=function(e){var t=e.data,n=e.width,r=e.height,s=e.fillColor,i=e.strokeColor,c=e.strokeWidth,u=e.className,p=e.mapChartDataToTableData,d=e.dataTableCaption,f=e.dataTableHeaderLabels,h=e.isDataTableVisuallyHidden,b=Math.max(1,Math.max.apply(Math,o()(t.map((function(e){return e.x}))))),m=Math.max(1,Math.max.apply(Math,o()(t.map((function(e){return e.y}))))),y=r-c,w=t.map((function(e){var t=e.x/b*n,r=y-e.y/m*y+c;return"".concat(t,",").concat(r)})).join(" "),g="0,".concat(y+c," ")+w+" ".concat(n,",").concat(y+c);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("svg",{width:n,height:r,viewBox:"0 0 ".concat(n," ").concat(r),className:u,role:"img","aria-hidden":"true",focusable:"false"},Object(a.createElement)("polygon",{fill:s,points:g}),Object(a.createElement)("polyline",{fill:"none",stroke:i,strokeWidth:c,strokeLinejoin:"round",strokeLinecap:"round",points:w})),p&&Object(a.createElement)(l,{data:t,mapChartDataToTableData:p,dataTableCaption:d,dataTableHeaderLabels:f,isDataTableVisuallyHidden:h}))};p.propTypes={data:i.a.arrayOf(i.a.shape({x:i.a.number,y:i.a.number})).isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,fillColor:i.a.string,strokeColor:i.a.string,strokeWidth:i.a.number,className:i.a.string,mapChartDataToTableData:i.a.func,dataTableCaption:i.a.string.isRequired,dataTableHeaderLabels:i.a.array.isRequired,isDataTableVisuallyHidden:i.a.bool},p.defaultProps={fillColor:null,strokeColor:"#000000",strokeWidth:1,className:"",mapChartDataToTableData:null,isDataTableVisuallyHidden:!0},t.a=p},76:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},78:function(e,t,n){var r=n(47);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e,t){e.exports=window.regeneratorRuntime},80:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},82:function(e,t){e.exports=window.moment},9:function(e,t){e.exports=window.yoast.helpers},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return w}));var r=n(0),o=n(1),a=n.n(o),s=n(2),i=n(3),c=n(82),u=n.n(c),l=n(5),p=n(9),d=n(73),f=function(){return Object(r.createElement)("p",{className:"yoast-wincher-seo-performance-modal__loading-message"},Object(s.__)("Tracking the ranking position...","wordpress-seo")," ",Object(r.createElement)(l.SvgIcon,{icon:"loading-spinner"}))},h=Object(p.makeOutboundLink)();function b(e){return Math.round(100*e)}function m(e){var t=e.chartData;if(Object(i.isEmpty)(t)||Object(i.isEmpty)(t.position))return"?";var n=function(e){return Array.from({length:e.position.history.length},(function(e,t){return t+1})).map((function(e){
/* translators: %d expands to the amount of days */
return Object(s.sprintf)(Object(s._n)("%d day","%d days",e,"wordpress-seo"),e)}))}(t),o=t.position.history.map((function(e,t){return{x:t,y:101-e.value}}));return Object(r.createElement)(d.a,{width:66,height:24,data:o,strokeWidth:1.8,strokeColor:"#498afc",fillColor:"#ade3fc",className:"yoast-related-keyphrases-modal__chart",mapChartDataToTableData:b,dataTableCaption:Object(s.__)("Keyphrase position in the last 90 days on a scale from 0 to 100.","wordpress-seo"),dataTableHeaderLabels:n})}function y(e){return!e||!e.position||e.position.value>100?"> 100":e.position.value}function w(e){var t=e.keyphrase,n=e.rowData,o=e.onTrackKeyphrase,a=e.onUntrackKeyphrase,c=e.isFocusKeyphrase,p=e.isDisabled,d=e.isLoading,b=!Object(i.isEmpty)(n),w=Object(r.useCallback)((function(){p||(b?a(t,n.id):o(t))}),[t,o,a,b,n,p]);return Object(r.createElement)("tr",null,Object(r.createElement)("td",{className:"yoast-table--nopadding"},function(e){var t=e.keyphrase,n=e.isEnabled,o=e.toggleAction;return e.isLoading?Object(r.createElement)(l.SvgIcon,{icon:"loading-spinner"}):Object(r.createElement)(l.Toggle,{id:"toggle-keyphrase-tracking-".concat(t),className:"wincher-toggle",isEnabled:n,onSetToggleState:o,showToggleStateLabel:!1})}({keyphrase:t,isEnabled:b,toggleAction:w,isLoading:d})),Object(r.createElement)("td",null,t,c&&Object(r.createElement)("span",null,"*")),function(e){var t=e.rowData,n=e.websiteId,o=!Object(i.isEmpty)(t),a=t&&t.updated_at&&u()(t.updated_at)>=u()().subtract(7,"days"),c=t?Object(s.sprintf)("https://app.wincher.com/websites/%s/keywords?serp=%s&utm_medium=plugin&utm_source=yoast&referer=yoast&partner=yoast",n,t.id):null;return o?a?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,y(t)),Object(r.createElement)("td",{className:"yoast-table--nopadding"},Object(r.createElement)(m,{chartData:t})),Object(r.createElement)("td",{className:"yoast-table--nobreak"},Object(r.createElement)(h,{href:c},Object(s.__)("View","wordpress-seo")))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",{className:"yoast-table--nopadding",colSpan:"3"},Object(r.createElement)(f,null))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("td",null,"?"),Object(r.createElement)("td",{className:"yoast-table--nopadding"},"?"),Object(r.createElement)("td",{className:"yoast-table--nobreak"}))}(e))}m.propTypes={chartData:a.a.object},m.defaultProps={chartData:{}},w.propTypes={rowData:a.a.object,keyphrase:a.a.string.isRequired,onTrackKeyphrase:a.a.func,onUntrackKeyphrase:a.a.func,isFocusKeyphrase:a.a.bool,isDisabled:a.a.bool,isLoading:a.a.bool,websiteId:a.a.string},w.defaultProps={rowData:{},onTrackKeyphrase:function(){},onUntrackKeyphrase:function(){},isFocusKeyphrase:!1,isDisabled:!1,isLoading:!1,websiteId:""}}});