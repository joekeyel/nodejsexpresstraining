(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{1082:function(e,a,t){"use strict";var r=t(40),s=t(104),c=t(3),n=t.n(c),l=t(103),o=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},b=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,l=e.tag,o=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.o)(u()(a,c?"no-gutters":null,o?"form-row":"row"),t);return n.a.createElement(l,Object(r.a)({},i,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},1083:function(e,a,t){"use strict";var r=t(40),s=t(104),c=t(944),n=t.n(c),l=t(3),o=t.n(l),i=t(103),u=t.n(i),m=t(879),d=t.n(m),b=t(880),f=u.a.oneOfType([u.a.number,u.a.string]),g=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:f,offset:f})]),p={tag:b.s,xs:g,sm:g,md:g,lg:g,xl:g,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,c=e.widths,l=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];c.forEach((function(a,r){var s=e[a];if(delete i[a],s||""===s){var c=!r;if(n()(s)){var l,o=c?"-":"-"+a+"-",m=j(c,a,s.size);u.push(Object(b.o)(d()(((l={})[m]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l)),t))}else{var f=j(c,a,s);u.push(f)}}})),u.length||u.push("col");var m=Object(b.o)(d()(a,u),t);return o.a.createElement(l,Object(r.a)({},i,{className:m}))};E.propTypes=p,E.defaultProps=v,a.a=E},1152:function(e,a,t){"use strict";var r=t(40),s=t(104),c=t(3),n=t.n(c),l=t(103),o=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,l=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.o)(u()(a,"card-body"),t);return n.a.createElement(l,Object(r.a)({},o,{className:i,ref:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},1157:function(e,a,t){"use strict";var r=t(40),s=t(104),c=t(3),n=t.n(c),l=t(103),o=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.body,o=e.inverse,i=e.outline,d=e.tag,b=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(m.o)(u()(a,"card",!!o&&"text-white",!!l&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return n.a.createElement(d,Object(r.a)({},f,{className:g,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},1161:function(e,a,t){"use strict";var r=t(40),s=t(104),c=t(3),n=t.n(c),l=t(103),o=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(m.o)(u()(a,"card-header"),t);return n.a.createElement(c,Object(r.a)({},l,{className:o}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},1824:function(e,a,t){"use strict";t.r(a);var r=t(149),s=t(150),c=t(236),n=t(235),l=t(3),o=t.n(l),i=t(1082),u=t(1083),m=t(1157),d=t(1161),b=t(1152),f=t(40),g=t(104),p=t(103),v=t.n(p),j=t(879),E=t.n(j),N=t(880),O={tag:N.s,listTag:N.s,className:v.a.string,listClassName:v.a.string,cssModule:v.a.object,children:v.a.node,"aria-label":v.a.string},h=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,c=e.tag,n=e.listTag,l=e["aria-label"],i=Object(g.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(N.o)(E()(a),r),m=Object(N.o)(E()("breadcrumb",t),r);return o.a.createElement(c,Object(f.a)({},i,{className:u,"aria-label":l}),o.a.createElement(n,{className:m},s))};h.propTypes=O,h.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var y=h,M={tag:N.s,active:v.a.bool,className:v.a.string,cssModule:v.a.object},T=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,c=Object(g.a)(e,["className","cssModule","active","tag"]),n=Object(N.o)(E()(a,!!r&&"active","breadcrumb-item"),t);return o.a.createElement(s,Object(f.a)({},c,{className:n,"aria-current":r?"page":void 0}))};T.propTypes=M,T.defaultProps={tag:"li"};var w=T,x=function(e){Object(c.a)(t,e);var a=Object(n.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(i.a,null,o.a.createElement(u.a,{xs:"12"},o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Breadcrumbs"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(b.a,null,o.a.createElement(y,null,o.a.createElement(w,{active:!0},"Home")),o.a.createElement(y,null,o.a.createElement(w,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(w,{active:!0},"Library")),o.a.createElement(y,null,o.a.createElement(w,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(w,null,o.a.createElement("a",{href:"#"},"Library")),o.a.createElement(w,{active:!0},"Data")),o.a.createElement(y,{tag:"nav"},o.a.createElement(w,{tag:"a",href:"#"},"Home"),o.a.createElement(w,{tag:"a",href:"#"},"Library"),o.a.createElement(w,{tag:"a",href:"#"},"Data"),o.a.createElement(w,{active:!0,tag:"span"},"Bootstrap")))))))}}]),t}(l.Component);a.default=x},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}}}]);
//# sourceMappingURL=33.45920d20.chunk.js.map