(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{1082:function(e,a,l){"use strict";var t=l(40),c=l(104),n=l(3),r=l.n(n),m=l(103),o=l.n(m),s=l(879),i=l.n(s),d=l(880),u={tag:d.s,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},E=function(e){var a=e.className,l=e.cssModule,n=e.noGutters,m=e.tag,o=e.form,s=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(d.o)(i()(a,n?"no-gutters":null,o?"form-row":"row"),l);return r.a.createElement(m,Object(t.a)({},s,{className:u}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},1083:function(e,a,l){"use strict";var t=l(40),c=l(104),n=l(944),r=l.n(n),m=l(3),o=l.n(m),s=l(103),i=l.n(s),d=l(879),u=l.n(d),E=l(880),h=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:h,offset:h})]),f={tag:E.s,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},p=function(e){var a=e.className,l=e.cssModule,n=e.widths,m=e.tag,s=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,t){var c=e[a];if(delete s[a],c||""===c){var n=!t;if(r()(c)){var m,o=n?"-":"-"+a+"-",d=x(n,a,c.size);i.push(Object(E.o)(u()(((m={})[d]=c.size||""===c.size,m["order"+o+c.order]=c.order||0===c.order,m["offset"+o+c.offset]=c.offset||0===c.offset,m)),l))}else{var h=x(n,a,c);i.push(h)}}})),i.length||i.push("col");var d=Object(E.o)(u()(a,i),l);return o.a.createElement(m,Object(t.a)({},s,{className:d}))};p.propTypes=f,p.defaultProps=N,a.a=p},1152:function(e,a,l){"use strict";var t=l(40),c=l(104),n=l(3),r=l.n(n),m=l(103),o=l.n(m),s=l(879),i=l.n(s),d=l(880),u={tag:d.s,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,n=e.innerRef,m=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.o)(i()(a,"card-body"),l);return r.a.createElement(m,Object(t.a)({},o,{className:s,ref:n}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},1157:function(e,a,l){"use strict";var t=l(40),c=l(104),n=l(3),r=l.n(n),m=l(103),o=l.n(m),s=l(879),i=l.n(s),d=l(880),u={tag:d.s,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,n=e.color,m=e.body,o=e.inverse,s=e.outline,u=e.tag,E=e.innerRef,h=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.o)(i()(a,"card",!!o&&"text-white",!!m&&"card-body",!!n&&(s?"border":"bg")+"-"+n),l);return r.a.createElement(u,Object(t.a)({},h,{className:b,ref:E}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},1161:function(e,a,l){"use strict";var t=l(40),c=l(104),n=l(3),r=l.n(n),m=l(103),o=l.n(m),s=l(879),i=l.n(s),d=l(880),u={tag:d.s,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,l=e.cssModule,n=e.tag,m=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.o)(i()(a,"card-header"),l);return r.a.createElement(n,Object(t.a)({},m,{className:o}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},1492:function(e,a,l){"use strict";var t=l(40),c=l(104),n=l(3),r=l.n(n),m=l(103),o=l.n(m),s=l(879),i=l.n(s),d=l(880),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.s,responsiveTag:d.s,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var a=e.className,l=e.cssModule,n=e.size,m=e.bordered,o=e.borderless,s=e.striped,u=e.dark,E=e.hover,h=e.responsive,b=e.tag,f=e.responsiveTag,N=e.innerRef,x=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),p=Object(d.o)(i()(a,"table",!!n&&"table-"+n,!!m&&"table-bordered",!!o&&"table-borderless",!!s&&"table-striped",!!u&&"table-dark",!!E&&"table-hover"),l),k=r.a.createElement(b,Object(t.a)({},x,{ref:N,className:p}));if(h){var v=Object(d.o)(!0===h?"table-responsive":"table-responsive-"+h,l);return r.a.createElement(f,{className:v},k)}return k};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},1763:function(e,a,l){"use strict";l.r(a);var t=l(149),c=l(150),n=l(236),r=l(235),m=l(3),o=l.n(m),s=l(1082),i=l(1083),d=l(1157),u=l(1161),E=l(1152),h=l(1492),b=l(1465),f=function(e){Object(n.a)(l,e);var a=Object(r.a)(l);function l(){return Object(t.a)(this,l),a.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(s.a,null,o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch default"),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"success",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"warning",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"info",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"danger",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"light",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"dark",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"primary",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch pills"),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"3d Switch"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"3d Switch ",o.a.createElement("small",null,o.a.createElement("code",null,"disabled"))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"3d Switch ",o.a.createElement("small",null,o.a.createElement("code",null,'outline="alt"'))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"3d Switch ",o.a.createElement("small",null,o.a.createElement("code",null,"label"))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"3d Switch ",o.a.createElement("small",null,o.a.createElement("code",null,'outline="alt" label'))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"3d Switch ",o.a.createElement("small",null,o.a.createElement("code",null,'outline="alt" label'))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch outline"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"success",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"warning",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"info",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"danger",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"light",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"dark",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch outline pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch outline alternative"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"success",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"info",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"light",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch outline alternative - pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"success",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"warning",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"info",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"danger",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"light",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"dark",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline alternative"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline alternative"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(E.a,null,o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(b.n,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,"Sizes"),o.a.createElement(E.a,{className:"p-0"},o.a.createElement(h.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Size"),o.a.createElement("th",null,"Example"),o.a.createElement("th",null,"Props"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Large"),o.a.createElement("td",null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),o.a.createElement("td",null,"Add ",o.a.createElement("code",null,"size=","lg"))),o.a.createElement("tr",null,o.a.createElement("td",null,"Normal"),o.a.createElement("td",null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),o.a.createElement("td",null,"-")),o.a.createElement("tr",null,o.a.createElement("td",null,"Small"),o.a.createElement("td",null,o.a.createElement(b.n,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),o.a.createElement("td",null,"Add ",o.a.createElement("code",null,"size=","sm"))))))))))}}]),l}(m.Component);a.default=f},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}}}]);
//# sourceMappingURL=29.bd1ad1d4.chunk.js.map