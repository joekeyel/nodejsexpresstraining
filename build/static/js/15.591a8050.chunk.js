(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15,105],{1003:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}t.d(a,"a",(function(){return r}))},1046:function(e,a,t){"use strict";var r=t(12),n=t(30),o=t(2),l=t.n(o),c=t(64),s=t.n(c),i=t(536),m=t.n(i),u=t(537),d={tag:u.q,className:s.a.string,cssModule:s.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),s=Object(u.m)(m()(a,"card-footer"),t);return l.a.createElement(o,Object(r.a)({},c,{className:s}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1060:function(e,a,t){"use strict";var r=t(544);a.__esModule=!0,a.getScrollbarWidth=l,a.setScrollbarWidth=c,a.isBodyOverflowing=s,a.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},a.conditionallyUpdateScrollbar=function(){var e=l(),a=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],t=a?parseInt(a.style.paddingRight||0,10):0;s()&&c(t+e)},a.setGlobalCssModule=function(e){n=e},a.mapToCssModules=function(e,a){void 0===e&&(e="");void 0===a&&(a=n);return a?e.split(" ").map((function(e){return a[e]||e})).join(" "):e},a.omit=function(e,a){var t={};return Object.keys(e).forEach((function(r){-1===a.indexOf(r)&&(t[r]=e[r])})),t},a.pick=function(e,a){var t,r=Array.isArray(a)?a:[a],n=r.length,o={};for(;n>0;)t=r[n-=1],o[t]=e[t];return o},a.warnOnce=m,a.deprecated=function(e,a){return function(t,r,n){null!==t[r]&&"undefined"!==typeof t[r]&&m('"'+r+'" property of "'+n+'" has been deprecated.\n'+a);for(var o=arguments.length,l=new Array(o>3?o-3:0),c=3;c<o;c++)l[c-3]=arguments[c];return e.apply(void 0,[t,r,n].concat(l))}},a.DOMElement=d,a.isReactRefObj=g,a.toNumber=function(e){var a=typeof e;if("number"===a)return e;if("symbol"===a||"object"===a&&"[object Symbol]"===v(e))return NaN;if(h(e)){var t="function"===typeof e.valueOf?e.valueOf():e;e=h(t)?""+t:t}if("string"!==a)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},a.isObject=h,a.isFunction=E,a.findDOMElements=y,a.isArrayOrNodeList=x,a.getTarget=function(e,a){var t=y(e);return a?x(t)?t:null===t?[]:[t]:x(t)?t[0]:t},a.addMultipleEventListeners=function(e,a,t,r){var n=e;x(n)||(n=[n]);var o=t;"string"===typeof o&&(o=o.split(/\s+/));if(!x(n)||"function"!==typeof a||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(n,(function(t){t.addEventListener(e,a,r)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(n,(function(t){t.removeEventListener(e,a,r)}))}))}},a.focusableElements=a.defaultToggleEvents=a.canUseDOM=a.PopperPlacements=a.keyCodes=a.TransitionStatuses=a.TransitionPropTypeKeys=a.TransitionTimeouts=a.tagPropType=a.targetPropType=void 0;var n,o=r(t(64));function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}var i={};function m(e){i[e]||("undefined"!==typeof console&&console.error(e),i[e]=!0)}var u="object"===typeof window&&window.Element||function(){};function d(e,a,t){if(!(e[a]instanceof u))return new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")}var f=o.default.oneOfType([o.default.string,o.default.func,d,o.default.shape({current:o.default.any})]);a.targetPropType=f;var p=o.default.oneOfType([o.default.func,o.default.string,o.default.shape({$$typeof:o.default.symbol,render:o.default.func}),o.default.arrayOf(o.default.oneOfType([o.default.func,o.default.string,o.default.shape({$$typeof:o.default.symbol,render:o.default.func})]))]);a.tagPropType=p;a.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};a.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];a.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};a.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};a.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var b=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return!(!e||"object"!==typeof e)&&"current"in e}function v(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function h(e){var a=typeof e;return null!=e&&("object"===a||"function"===a)}function E(e){if(!h(e))return!1;var a=v(e);return"[object Function]"===a||"[object AsyncFunction]"===a||"[object GeneratorFunction]"===a||"[object Proxy]"===a}function y(e){if(g(e))return e.current;if(E(e))return e();if("string"===typeof e&&b){var a=document.querySelectorAll(e);if(a.length||(a=document.querySelectorAll("#"+e)),!a.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return a}return e}function x(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}a.canUseDOM=b;a.defaultToggleEvents=["touchstart","click"];a.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},1089:function(e,a,t){"use strict";var r=t(12),n=t(701),o=t(30),l=t(2),c=t.n(l),s=t(64),i=t.n(s),m=t(536),u=t.n(m),d=t(537),f={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:d.q,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},p=function(e){var a=e.children,t=e.className,l=e.barClassName,s=e.cssModule,i=e.value,m=e.min,f=e.max,p=e.animated,b=e.striped,g=e.color,v=e.bar,h=e.multi,E=e.tag,y=e.style,x=e.barAriaValueText,O=e.barAriaLabelledBy,j=Object(o.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),T=Object(d.s)(i)/Object(d.s)(f)*100,N=Object(d.m)(u()(t,"progress"),s),w=Object(d.m)(u()("progress-bar",v&&t||l,p?"progress-bar-animated":null,g?"bg-"+g:null,b||p?"progress-bar-striped":null),s),M=h?a:c.a.createElement("div",{className:w,style:Object(n.a)({},y,{width:T+"%"}),role:"progressbar","aria-valuenow":i,"aria-valuemin":m,"aria-valuemax":f,"aria-valuetext":x,"aria-labelledby":O,children:a});return v?M:c.a.createElement(E,Object(r.a)({},j,{className:N,children:M}))};p.propTypes=f,p.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},a.a=p},1108:function(e,a,t){"use strict";t.r(a);var r=t(1003),n=t(92),o=t(93),l=t(166),c=t(165),s=t(2),i=t.n(s),m=t(536),u=t.n(m),d=t(1060),f=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.className,n=e.cssModule,o=e.dataBox,l=(Object(r.a)(e,["children","className","cssModule","dataBox"]),o()),c=l.variant;if(!c||["facebook","twitter","linkedin","google-plus"].indexOf(c)<0)return null;var s="bg-"+c,m="fa fa-"+c,f=Object.keys(l),p=Object.values(l),b=u()("".concat("brand-card","-header"),s),g=u()("".concat("brand-card","-body")),v=Object(d.mapToCssModules)(u()("brand-card",t),n);return i.a.createElement("div",{className:v},i.a.createElement("div",{className:b},i.a.createElement("i",{className:m}),a),i.a.createElement("div",{className:g},i.a.createElement("div",null,i.a.createElement("div",{className:"text-value"},p[1]),i.a.createElement("div",{className:"text-uppercase text-muted small"},f[1])),i.a.createElement("div",null,i.a.createElement("div",{className:"text-value"},p[2]),i.a.createElement("div",{className:"text-uppercase text-muted small"},f[2]))))}}]),t}(s.Component);f.defaultProps={dataBox:function(){return{variant:"facebook",friends:"-",feeds:"-"}}},a.default=f},1381:function(e,a,t){"use strict";t.r(a);var r=t(92),n=t(93),o=t(166),l=t(165),c=t(2),s=t.n(c),i=t(628),m=t(629),u=t(12),d=t(30),f=t(64),p=t.n(f),b=t(536),g=t.n(b),v=t(537),h={tag:v.q,className:p.a.string,cssModule:p.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(d.a)(e,["className","cssModule","tag"]),o=Object(v.m)(g()(a,"card-group"),t);return s.a.createElement(r,Object(u.a)({},n,{className:o}))};E.propTypes=h,E.defaultProps={tag:"div"};var y=E,x=t(1003),O=t(642),j=t(640),T=t(1089),N=t(1060),w=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cssModule,r=e.header,n=e.mainText,o=e.smallText,l=e.color,c=e.value,i=e.children,m=e.variant,u=Object(x.a)(e,["className","cssModule","header","mainText","smallText","color","value","children","variant"]),d={style:"",color:l,value:c},f={style:"",bgColor:""};"inverse"===m&&(d.style="progress-white",d.color="",f.style="text-white",f.bgColor="bg-"+l);var p=Object(N.mapToCssModules)(g()(a,f.style,f.bgColor),t);return d.style=g()("progress-xs my-3",d.style),s.a.createElement(O.a,Object.assign({className:p},u),s.a.createElement(j.a,null,s.a.createElement("div",{className:"h4 m-0"},r),s.a.createElement("div",null,n),s.a.createElement(T.a,{className:d.style,color:d.color,value:d.value}),s.a.createElement("small",{className:"text-muted"},o),s.a.createElement("div",null,i)))}}]),t}(c.Component);w.defaultProps={header:"89.9%",mainText:"Lorem ipsum...",smallText:"Lorem ipsum dolor sit amet enim.",value:"25",variant:""};var M=w,k=t(1046),C=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cssModule,r=e.header,n=e.mainText,o=e.icon,l=e.color,c=e.footer,i=e.link,m=(e.children,e.variant),u=Object(x.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),d="0"===m?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===m?{card:"p-0",icon:"p-4",lead:"pt-3"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},f={style:"clearfix",color:l,icon:o,classes:""};f.classes=Object(N.mapToCssModules)(g()(a,f.style,d.card),t);var p={style:"h5 mb-0",color:l,classes:""};p.classes=g()(p.style,"text-"+f.color,d.lead);return s.a.createElement(O.a,null,s.a.createElement(j.a,Object.assign({className:f.classes},u),function(e){var a=g()(e,"bg-"+f.color,d.icon,"font-2xl mr-3 float-left");return s.a.createElement("i",{className:a})}(f.icon),s.a.createElement("div",{className:p.classes},r),s.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},n)),function(){if(c)return s.a.createElement(k.a,{className:"px-3 py-2"},s.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:i},"View More",s.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),t}(c.Component);C.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"};var P=C,A=t(1108),I=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.cssModule,r=e.header,n=e.icon,o=e.color,l=e.value,c=e.children,i=e.invert,m=Object(x.a)(e,["className","cssModule","header","icon","color","value","children","invert"]),u={style:"",color:o,value:l},d={style:"",bgColor:"",icon:n};i&&(u.style="progress-white",u.color="",d.style="text-white",d.bgColor="bg-"+o);var f=Object(N.mapToCssModules)(g()(a,d.style,d.bgColor),t);return u.style=g()("progress-xs mt-3 mb-0",u.style),s.a.createElement(O.a,Object.assign({className:f},m),s.a.createElement(j.a,null,s.a.createElement("div",{className:"h1 text-muted text-right mb-2"},s.a.createElement("i",{className:d.icon})),s.a.createElement("div",{className:"h4 mb-0"},r),s.a.createElement("small",{className:"text-muted text-uppercase font-weight-bold"},c),s.a.createElement(T.a,{className:u.style,color:u.color,value:u.value})))}}]),t}(c.Component);I.defaultProps={header:"87.500",icon:"icon-people",color:"info",value:"25",children:"Visitors",invert:!1};var $=I,B=t(1079),R=function(e){var a=[{data:[65,59,84,84,51,55,40],label:"facebook"},{data:[1,13,9,17,34,41,38],label:"twitter"},{data:[78,81,80,45,34,12,40],label:"linkedin"},{data:[35,23,56,22,97,23,64],label:"google"}][e],t={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:a.data,label:a.label}]};return function(){return t}},S={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},V=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"success",header:"89.9%"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"info",header:"12.124"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"warning",header:"$98.111,00",smallText:""},s.a.createElement("small",{className:"text-muted"},"Excepteur sint occaecat..."))),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"danger",value:"95",header:"1.9 TB",mainText:"Danger!",smallText:"This is your final warning..."})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"primary",variant:"inverse",header:"89.9%"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"warning",variant:"inverse",header:"12.124"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"danger",variant:"inverse",header:"$98.111,00",smallText:""},s.a.createElement("small",{className:"text-muted"},"Excepteur sint occaecat..."))),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(M,{color:"info",variant:"inverse",value:"95",header:"1.9 TB",mainText:"Danger!",smallText:"This is your final warning..."}))),s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary",footer:!0,link:"#/charts"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info",footer:!0})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning",footer:!0})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger",footer:!0}))),s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger",variant:"1"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"2"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-laptop",color:"info",variant:"2"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-moon-o",color:"warning",variant:"2"})),s.a.createElement(m.a,{xs:"12",sm:"6",lg:"3"},s.a.createElement(P,{header:"$1.999,50",mainText:"Income",icon:"fa fa-bell",color:"danger",variant:"2"}))),s.a.createElement(i.a,null,s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(A.default,{dataBox:function(){return{variant:"facebook",friends:"89k",feeds:"459"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(B.c,{data:R(0),options:S,height:90})))),s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(A.default,{dataBox:function(){return{variant:"twitter",followers:"973k",tweets:"1.792"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(B.c,{data:R(1),options:S,height:90})))),s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(A.default,{dataBox:function(){return{variant:"linkedin",contacts:"500+",feeds:"292"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(B.c,{data:R(2),options:S,height:90})))),s.a.createElement(m.a,{xs:12,sm:6,md:3},s.a.createElement(A.default,{dataBox:function(){return{variant:"google-plus",followers:"894",circles:"92"}}},s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(B.c,{data:R(3),options:S,height:90}))))),s.a.createElement(y,{className:"mb-4"},s.a.createElement($,{icon:"icon-people",color:"info",header:"87.500",value:"25"},"Visitors"),s.a.createElement($,{icon:"icon-user-follow",color:"success",header:"385",value:"25"},"New Clients"),s.a.createElement($,{icon:"icon-basket-loaded",color:"warning",header:"1238",value:"25"},"Products sold"),s.a.createElement($,{icon:"icon-pie-chart",color:"primary",header:"28%",value:"25"},"Returning Visitors"),s.a.createElement($,{icon:"icon-speedometer",color:"danger",header:"5:34:11",value:"25"},"Avg. Time")),s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-people",color:"info",header:"87.500",value:"25"},"Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-user-follow",color:"success",header:"385",value:"25"},"New Clients")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-basket-loaded",color:"warning",header:"1238",value:"25"},"Products sold")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-pie-chart",color:"primary",header:"28%",value:"25"},"Returning Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-speedometer",color:"danger",header:"5:34:11",value:"25"},"Avg. Time")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-speech",color:"info",header:"972",value:"25"},"Comments"))),s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-people",color:"info",header:"87.500",value:"25",invert:!0},"Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-user-follow",color:"success",header:"385",value:"25",invert:!0},"New Clients")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-basket-loaded",color:"warning",header:"1238",value:"25",invert:!0},"Products sold")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-pie-chart",color:"primary",header:"28%",value:"25",invert:!0},"Returning Visitors")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-speedometer",color:"danger",header:"5:34:11",value:"25",invert:!0},"Avg. Time")),s.a.createElement(m.a,{sm:"6",md:"2"},s.a.createElement($,{icon:"icon-speech",color:"info",header:"972",value:"25",invert:!0},"Comments"))))}}]),t}(c.Component);a.default=V},541:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return r}))},544:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},628:function(e,a,t){"use strict";var r=t(12),n=t(30),o=t(2),l=t.n(o),c=t(64),s=t.n(c),i=t(536),m=t.n(i),u=t(537),d=s.a.oneOfType([s.a.number,s.a.string]),f={tag:u.q,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,s=e.form,i=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var r=e[a];if(delete d[a],r){var n=!t;f.push(n?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var p=Object(u.m)(m()(a,o?"no-gutters":null,s?"form-row":"row",f),t);return l.a.createElement(c,Object(r.a)({},d,{className:p}))};b.propTypes=f,b.defaultProps=p,a.a=b},629:function(e,a,t){"use strict";var r=t(12),n=t(30),o=t(2),l=t.n(o),c=t(64),s=t.n(c),i=t(536),m=t.n(i),u=t(537),d=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:d,offset:d})]),p={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,s=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,r){var n=e[a];if(delete s[a],n||""===n){var o=!r;if(Object(u.k)(n)){var l,c=o?"-":"-"+a+"-",d=g(o,a,n.size);i.push(Object(u.m)(m()(((l={})[d]=n.size||""===n.size,l["order"+c+n.order]=n.order||0===n.order,l["offset"+c+n.offset]=n.offset||0===n.offset,l)),t))}else{var f=g(o,a,n);i.push(f)}}})),i.length||i.push("col");var d=Object(u.m)(m()(a,i),t);return l.a.createElement(c,Object(r.a)({},s,{className:d}))};v.propTypes=p,v.defaultProps=b,a.a=v},640:function(e,a,t){"use strict";var r=t(12),n=t(30),o=t(2),l=t.n(o),c=t(64),s=t.n(c),i=t(536),m=t.n(i),u=t(537),d={tag:u.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,s=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(m()(a,"card-body"),t);return l.a.createElement(c,Object(r.a)({},s,{className:i,ref:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},701:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(541);function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){Object(r.a)(e,a,t[a])}))}return e}}}]);
//# sourceMappingURL=15.591a8050.chunk.js.map