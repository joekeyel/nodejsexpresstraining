(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1082:function(e,a,t){"use strict";var n=t(40),s=t(104),o=t(3),r=t.n(o),l=t(103),c=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},f=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,l=e.tag,c=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.o)(u()(a,o?"no-gutters":null,c?"form-row":"row"),t);return r.a.createElement(l,Object(n.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1083:function(e,a,t){"use strict";var n=t(40),s=t(104),o=t(944),r=t.n(o),l=t(3),c=t.n(l),i=t(103),u=t.n(i),m=t(879),d=t.n(m),f=t(880),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:b,offset:b})]),g={tag:f.s,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.widths,l=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach((function(a,n){var s=e[a];if(delete i[a],s||""===s){var o=!n;if(r()(s)){var l,c=o?"-":"-"+a+"-",m=j(o,a,s.size);u.push(Object(f.o)(d()(((l={})[m]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l)),t))}else{var b=j(o,a,s);u.push(b)}}})),u.length||u.push("col");var m=Object(f.o)(d()(a,u),t);return c.a.createElement(l,Object(n.a)({},i,{className:m}))};v.propTypes=g,v.defaultProps=h,a.a=v},1152:function(e,a,t){"use strict";var n=t(40),s=t(104),o=t(3),r=t.n(o),l=t(103),c=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,l=e.tag,c=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.o)(u()(a,"card-body"),t);return r.a.createElement(l,Object(n.a)({},c,{className:i,ref:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1157:function(e,a,t){"use strict";var n=t(40),s=t(104),o=t(3),r=t.n(o),l=t(103),c=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.color,l=e.body,c=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.o)(u()(a,"card",!!c&&"text-white",!!l&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return r.a.createElement(d,Object(n.a)({},b,{className:p,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1161:function(e,a,t){"use strict";var n=t(40),s=t(104),o=t(3),r=t.n(o),l=t(103),c=t.n(l),i=t(879),u=t.n(i),m=t(880),d={tag:m.s,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),c=Object(m.o)(u()(a,"card-header"),t);return r.a.createElement(o,Object(n.a)({},l,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1179:function(e,a,t){"use strict";var n=t(40),s=t(104),o=t(929),r=t(67),l=t(3),c=t.n(l),i=t(103),u=t.n(i),m=t(879),d=t.n(m),f=t(880),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.s,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,l=e.close,i=e.cssModule,u=e.color,m=e.outline,b=e.size,p=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof h.children&&(h.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(m?"-outline":"")+"-"+u,v=Object(f.o)(d()(r,{close:l},l||"btn",l||j,!!b&&"btn-"+b,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===p&&(p="a");var N=l?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&h.onClick?"button":void 0},h,{className:v,ref:g,onClick:this.onClick,"aria-label":t||N}))},a}(c.a.Component);p.propTypes=b,p.defaultProps={color:"secondary",tag:"button"},a.a=p},1831:function(e,a,t){"use strict";t.r(a);var n=t(149),s=t(150),o=t(236),r=t(235),l=t(3),c=t.n(l),i=t(1082),u=t(1083),m=t(1157),d=t(1161),f=t(1152),b=t(40),p=t(104),g=t(103),h=t.n(g),j=t(879),v=t.n(j),N=t(880),E={tag:N.s,fluid:h.a.bool,className:h.a.string,cssModule:h.a.object},y=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=e.fluid,o=Object(p.a)(e,["className","cssModule","tag","fluid"]),r=Object(N.o)(v()(a,"jumbotron",!!s&&"jumbotron-fluid"),t);return c.a.createElement(n,Object(b.a)({},o,{className:r}))};y.propTypes=E,y.defaultProps={tag:"div"};var O=y,M=t(1179),k=t(1508),T=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Jumbotron"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/jumbotron/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(f.a,null,c.a.createElement(O,null,c.a.createElement("h1",{className:"display-3"},"Hello, world!"),c.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."),c.a.createElement("hr",{className:"my-2"}),c.a.createElement("p",null,"It uses utility classes for typgraphy and spacing to space content out within the larger container."),c.a.createElement("p",{className:"lead"},c.a.createElement(M.a,{color:"primary"},"Learn More")))))),c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Jumbotron"),c.a.createElement("small",null," fluid")),c.a.createElement(f.a,null,c.a.createElement(O,{fluid:!0},c.a.createElement(k.a,{fluid:!0},c.a.createElement("h1",{className:"display-3"},"Fluid jumbotron"),c.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))))))))}}]),t}(l.Component);a.default=T},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}}}]);
//# sourceMappingURL=28.004c8430.chunk.js.map