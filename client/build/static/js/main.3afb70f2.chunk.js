(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{245:function(e,t,n){"use strict";var r=n(150),a=n(151),c=(n(364),function(){function e(){var t=this;Object(r.a)(this,e),this.handleLogin=function(e,n,r){console.log("username",e);var a=new FormData;a.append("username",e),a.append("password",n),t.authenticated.status=!0,t.authenticated.username=e,t.authenticated.password=n,e&&fetch("/claritybqm/reportFetch/?scriptName=DC_USER&userid="+e.toUpperCase()).then(function(e){return e.json()}).then(function(t){r(e,r),console.log("user",t)}).catch(function(e){})},this.authenticated={status:!1,region:"",division:"",username:"",password:""}}return Object(a.a)(e,[{key:"login",value:function(e,t){this.authenticated.status=!0,this.authenticated.username=e,t()}},{key:"logout",value:function(e){this.authenticated.status=!1,this.authenticated.username="",e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}());t.a=new c},365:function(e,t,n){e.exports=n(902)},894:function(e,t,n){},895:function(e,t,n){},902:function(e,t,n){"use strict";n.r(t);n(366),n(416),n(603),n(604),n(605),n(606),n(607),n(608),n(609),n(610),n(611),n(612),n(613),n(614),n(615),n(616),n(617),n(618),n(619),n(620),n(621),n(622),n(623),n(624),n(625),n(626),n(627),n(628),n(629),n(172),n(630),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(645),n(646),n(647),n(648),n(650),n(651),n(653),n(654),n(655),n(656),n(227),n(657),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(670),n(671),n(672),n(673),n(674),n(675),n(676),n(677),n(678),n(679),n(680),n(681),n(682),n(683),n(684),n(685),n(686),n(687),n(688),n(689),n(690),n(691),n(692),n(693),n(694),n(695),n(696),n(697),n(698),n(699),n(700),n(701),n(702),n(703),n(704),n(705),n(706),n(707),n(708),n(709),n(711),n(712),n(713),n(714),n(715),n(716),n(717),n(719),n(720),n(721),n(722),n(723),n(724),n(725),n(726),n(727),n(728),n(729),n(730),n(731),n(732),n(733),n(347),n(734),n(735),n(736),n(737),n(348),n(738),n(739),n(740),n(741),n(742),n(743),n(744),n(745),n(746),n(747),n(748),n(749),n(750),n(751),n(752),n(753),n(754),n(755),n(756),n(757),n(758),n(759),n(760),n(761),n(762),n(763),n(764),n(765),n(766),n(767),n(768),n(769),n(770),n(771),n(772),n(773),n(774),n(775),n(776),n(777),n(778),n(779),n(780),n(781),n(782),n(783),n(784),n(785),n(786),n(787),n(788),n(789),n(790),n(791),n(792),n(793),n(794),n(795),n(796),n(237),n(797),n(798),n(799),n(800),n(801),n(802),n(803),n(804),n(805),n(806),n(807),n(808),n(809),n(810),n(811),n(813),n(814),n(815),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),n(827),n(828),n(829),n(830),n(831),n(832),n(833),n(834),n(835),n(836),n(837),n(838),n(839),n(840),n(841),n(842),n(843),n(844),n(845),n(846),n(847),n(848),n(849),n(850),n(851),n(852),n(853),n(854),n(855),n(856),n(857),n(858),n(859),n(860),n(861),n(862),n(863),n(864),n(865),n(866),n(867),n(868),n(869),n(872),n(873),n(874),n(875),n(876),n(877),n(878),n(879),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(889),n(358);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var r=n(3),a=n.n(r),c=n(149),u=n.n(c),o=(n(894),n(150)),i=n(151),s=n(242),l=n(241),f=n(243),h=n(248),p=n(91),b=(n(895),n(244)),m=n(92),d=n(361),C={user:{},badge:{},items1:[],rack:{},rackID:[],site:{},location:{},bandwidth:{},port:{},ups:{},pdu:{},crac:{},dashboard:{}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=Object(d.a)({},e);switch(t.type){case"FETCH_DATA_USER":n.user=t.value;break;case"FETCH_DATA_RACK":n.rack=t.value,n.rackID=t.value.RACK_ID;break;case"FETCH_DATA_DCSITE":n.site=t.value;break;case"FETCH_DATA_DCLOCATION":n.location=t.value;break;case"FETCH_DATA_BANDWIDTH":n.bandwidth=t.value;break;case"FETCH_DATA_PORT":n.port=t.value;break;case"FETCH_DATA_UPS":n.ups=t.value;break;case"FETCH_DATA_PDU":n.pdu=t.value;break;case"FETCH_DATA_CRAC":n.crac=t.value;break;case"FETCH_DATA_DASHBOARD":n.dashboard=t.value}return n},T=n(362),A=n(31),E=n.n(A),_=n(24),D=n(245),O=E.a.mark(P),j=E.a.mark(I),w=E.a.mark(S),x=E.a.mark(U),F=E.a.mark(q),H=E.a.mark(B),y=E.a.mark(W),k=E.a.mark(K),R=E.a.mark(L),g=E.a.mark(z),N=E.a.mark(J);function P(){var e,t;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=D.a.authenticated.username.toUpperCase(),n.next=3,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_USER&userid="+e).then(function(e){return e.json()}).then(function(e){return e})});case 3:return t=n.sent,n.next=6,Object(_.b)({type:"FETCH_DATA_USER",value:t});case 6:case"end":return n.stop()}},O)}function I(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_RACK").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_RACK",value:e});case 5:case"end":return t.stop()}},j)}function S(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_SITE").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_DCSITE",value:e});case 5:case"end":return t.stop()}},w)}function U(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_LOCATION").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_DCLOCATION",value:e});case 5:case"end":return t.stop()}},x)}function q(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_NETWORK_BANDWIDTH").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_BANDWIDTH",value:e});case 5:case"end":return t.stop()}},F)}function B(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_NETWORK_PORT").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_PORT",value:e});case 5:case"end":return t.stop()}},H)}function W(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_UPS").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_UPS",value:e});case 5:case"end":return t.stop()}},y)}function K(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_PDU").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_PDU",value:e});case 5:case"end":return t.stop()}},k)}function L(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_CRAC").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_CRAC",value:e});case 5:case"end":return t.stop()}},R)}function z(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(function(){return fetch("/claritybqm/reportFetch/?scriptName=DC_DASHBOARD_INFO").then(function(e){return e.json()}).then(function(e){return e})});case 2:return e=t.sent,t.next=5,Object(_.b)({type:"FETCH_DATA_DASHBOARD",value:e});case 5:console.log("fetchDashboard",e);case 6:case"end":return t.stop()}},g)}function J(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)("FETCH_USER",P);case 2:return e.next=4,Object(_.c)("FETCH_RACK",I);case 4:return e.next=6,Object(_.c)("FETCH_DCSITE",S);case 6:return e.next=8,Object(_.c)("FETCH_DCLOCATION",U);case 8:return e.next=10,Object(_.c)("FETCH_BANDWIDTH",q);case 10:return e.next=12,Object(_.c)("FETCH_PORT",B);case 12:return e.next=14,Object(_.c)("FETCH_UPS",W);case 14:return e.next=16,Object(_.c)("FETCH_PDU",K);case 16:return e.next=18,Object(_.c)("FETCH_CRAC",L);case 18:return e.next=20,Object(_.c)("FETCH_DASHBOARD",z);case 20:case"end":return e.stop()}},N)}var M=Object(T.a)(),$=Object(m.d)(v,Object(m.a)(M));M.run(J);var G=a.a.lazy(function(){return Promise.all([n.e(14),n.e(101)]).then(n.bind(null,1777))}),Q=a.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(14),n.e(93)]).then(n.bind(null,1717))}),V=a.a.lazy(function(){return Promise.all([n.e(0),n.e(84),n.e(99)]).then(n.bind(null,1794))}),X=a.a.lazy(function(){return Promise.all([n.e(87),n.e(105)]).then(n.bind(null,1718))}),Y=a.a.lazy(function(){return Promise.all([n.e(89),n.e(103)]).then(n.bind(null,1719))}),Z=a.a.lazy(function(){return Promise.all([n.e(88),n.e(104)]).then(n.bind(null,1720))}),ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,{store:$},a.a.createElement(h.HashRouter,null,a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},a.a.createElement(p.g,null,a.a.createElement(p.d,{exact:!0,path:"/login",name:"Login Page",render:function(e){return a.a.createElement(V,e)}}),a.a.createElement(p.d,{exact:!0,path:"/main-menu",name:"Menu",render:function(e){return a.a.createElement(Q,e)}}),a.a.createElement(p.d,{exact:!0,path:"/register",name:"Register Page",render:function(e){return a.a.createElement(X,e)}}),a.a.createElement(p.d,{exact:!0,path:"/404",name:"Page 404",render:function(e){return a.a.createElement(Y,e)}}),a.a.createElement(p.d,{exact:!0,path:"/500",name:"Page 500",render:function(e){return a.a.createElement(Z,e)}}),a.a.createElement(p.d,{path:"/",name:"Home",render:function(e){return a.a.createElement(G,e)}})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[365,50,51]]]);
//# sourceMappingURL=main.3afb70f2.chunk.js.map