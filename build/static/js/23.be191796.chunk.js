(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{1089:function(e,a,t){"use strict";var l=t(12),r=t(701),n=t(30),c=t(2),s=t.n(c),m=t(64),o=t.n(m),u=t(536),i=t.n(u),b=t(537),E={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:b.q,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},d=function(e){var a=e.children,t=e.className,c=e.barClassName,m=e.cssModule,o=e.value,u=e.min,E=e.max,d=e.animated,v=e.striped,g=e.color,f=e.bar,p=e.multi,N=e.tag,j=e.style,y=e.barAriaValueText,O=e.barAriaLabelledBy,x=Object(n.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),h=Object(b.s)(o)/Object(b.s)(E)*100,w=Object(b.m)(i()(t,"progress"),m),P=Object(b.m)(i()("progress-bar",f&&t||c,d?"progress-bar-animated":null,g?"bg-"+g:null,v||d?"progress-bar-striped":null),m),M=p?a:s.a.createElement("div",{className:P,style:Object(r.a)({},j,{width:h+"%"}),role:"progressbar","aria-valuenow":o,"aria-valuemin":u,"aria-valuemax":E,"aria-valuetext":y,"aria-labelledby":O,children:a});return f?M:s.a.createElement(N,Object(l.a)({},x,{className:w,children:M}))};d.propTypes=E,d.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},a.a=d},1330:function(e,a,t){"use strict";t.r(a);var l=t(92),r=t(93),n=t(166),c=t(165),s=t(2),m=t.n(s),o=t(642),u=t(643),i=t(640),b=t(1089),E=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/progress/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(i.a,null,m.a.createElement("div",{className:"text-center"},"0%"),m.a.createElement(b.a,null),m.a.createElement("div",{className:"text-center"},"25%"),m.a.createElement(b.a,{value:"25"}),m.a.createElement("div",{className:"text-center"},"50%"),m.a.createElement(b.a,{value:50}),m.a.createElement("div",{className:"text-center"},"75%"),m.a.createElement(b.a,{value:75}),m.a.createElement("div",{className:"text-center"},"100%"),m.a.createElement(b.a,{value:"100"}),m.a.createElement("div",{className:"text-center"},"Multiple bars"),m.a.createElement(b.a,{multi:!0},m.a.createElement(b.a,{bar:!0,value:"15"}),m.a.createElement(b.a,{bar:!0,color:"success",value:"30"}),m.a.createElement(b.a,{bar:!0,color:"info",value:"25"}),m.a.createElement(b.a,{bar:!0,color:"warning",value:"20"}),m.a.createElement(b.a,{bar:!0,color:"danger",value:"5"})))),m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," color variants")),m.a.createElement(i.a,null,m.a.createElement(b.a,{value:10,className:"mb-3"}),m.a.createElement(b.a,{color:"success",value:"25",className:"mb-3"}),m.a.createElement(b.a,{color:"info",value:50,className:"mb-3"}),m.a.createElement(b.a,{color:"warning",value:75,className:"mb-3"}),m.a.createElement(b.a,{color:"danger",value:"100",className:"mb-3"}))),m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," labels")),m.a.createElement(i.a,null,m.a.createElement(b.a,{value:"25",className:"mb-3"},"25%"),m.a.createElement(b.a,{value:50,className:"mb-3"},"1/2"),m.a.createElement(b.a,{value:75,className:"mb-3"},"You're almost there!"),m.a.createElement(b.a,{color:"success",value:"100",className:"mb-3"},"You did it!"),m.a.createElement(b.a,{multi:!0,className:"mb-3"},m.a.createElement(b.a,{bar:!0,value:"15"},"Meh"),m.a.createElement(b.a,{bar:!0,color:"success",value:"30"},"Wow!"),m.a.createElement(b.a,{bar:!0,color:"info",value:"25"},"Cool"),m.a.createElement(b.a,{bar:!0,color:"warning",value:"20"},"20%"),m.a.createElement(b.a,{bar:!0,color:"danger",value:"5"},"!!")))),m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," striped")),m.a.createElement(i.a,null,m.a.createElement(b.a,{striped:!0,value:10,className:"mb-3"}),m.a.createElement(b.a,{striped:!0,color:"success",value:"25",className:"mb-3"}),m.a.createElement(b.a,{striped:!0,color:"info",value:50,className:"mb-3"}),m.a.createElement(b.a,{striped:!0,color:"warning",value:75,className:"mb-3"}),m.a.createElement(b.a,{striped:!0,color:"danger",value:"100",className:"mb-3"}),m.a.createElement(b.a,{multi:!0,className:"mb-3"},m.a.createElement(b.a,{striped:!0,bar:!0,value:"10"}),m.a.createElement(b.a,{striped:!0,bar:!0,color:"success",value:"30"}),m.a.createElement(b.a,{striped:!0,bar:!0,color:"warning",value:"20"}),m.a.createElement(b.a,{striped:!0,bar:!0,color:"danger",value:"20"})))),m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," animated")),m.a.createElement(i.a,null,m.a.createElement(b.a,{animated:!0,value:10,className:"mb-3"}),m.a.createElement(b.a,{animated:!0,color:"success",value:"25",className:"mb-3"}),m.a.createElement(b.a,{animated:!0,color:"info",value:50,className:"mb-3"}),m.a.createElement(b.a,{animated:!0,color:"warning",value:75,className:"mb-3"}),m.a.createElement(b.a,{animated:!0,color:"danger",value:"100",className:"mb-3"}),m.a.createElement(b.a,{multi:!0},m.a.createElement(b.a,{animated:!0,bar:!0,value:"10"}),m.a.createElement(b.a,{animated:!0,bar:!0,color:"success",value:"30"}),m.a.createElement(b.a,{animated:!0,bar:!0,color:"warning",value:"20"}),m.a.createElement(b.a,{animated:!0,bar:!0,color:"danger",value:"20"})))),m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," multiple bars / stacked")),m.a.createElement(i.a,null,m.a.createElement("div",{className:"text-center"},"Plain"),m.a.createElement(b.a,{multi:!0},m.a.createElement(b.a,{bar:!0,value:"15"}),m.a.createElement(b.a,{bar:!0,color:"success",value:"20"}),m.a.createElement(b.a,{bar:!0,color:"info",value:"25"}),m.a.createElement(b.a,{bar:!0,color:"warning",value:"20"}),m.a.createElement(b.a,{bar:!0,color:"danger",value:"15"})),m.a.createElement("div",{className:"text-center"},"With Labels"),m.a.createElement(b.a,{multi:!0},m.a.createElement(b.a,{bar:!0,value:"15"},"Meh"),m.a.createElement(b.a,{bar:!0,color:"success",value:"35"},"Wow!"),m.a.createElement(b.a,{bar:!0,color:"warning",value:"25"},"25%"),m.a.createElement(b.a,{bar:!0,color:"danger",value:"25"},"LOOK OUT!!")),m.a.createElement("div",{className:"text-center"},"Stripes and Animations"),m.a.createElement(b.a,{multi:!0},m.a.createElement(b.a,{bar:!0,striped:!0,value:"15"},"Stripes"),m.a.createElement(b.a,{bar:!0,animated:!0,color:"success",value:"30"},"Animated Stripes"),m.a.createElement(b.a,{bar:!0,color:"info",value:"25"},"Plain")))),m.a.createElement(o.a,null,m.a.createElement(u.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Progress"),m.a.createElement("small",null," max value")),m.a.createElement(i.a,null,m.a.createElement("div",{className:"text-center"},"1 of 5"),m.a.createElement(b.a,{value:"1",max:"5"}),m.a.createElement("div",{className:"text-center"},"50 of 135"),m.a.createElement(b.a,{value:50,max:"135"}),m.a.createElement("div",{className:"text-center"},"75 of 111"),m.a.createElement(b.a,{value:75,max:111}),m.a.createElement("div",{className:"text-center"},"463 of 500"),m.a.createElement(b.a,{value:"463",max:500}),m.a.createElement("div",{className:"text-center"},"Various (40) of 55"),m.a.createElement(b.a,{multi:!0},m.a.createElement(b.a,{bar:!0,value:"5",max:55},"5"),m.a.createElement(b.a,{bar:!0,color:"success",value:"15",max:55},"15"),m.a.createElement(b.a,{bar:!0,color:"warning",value:"10",max:55},"10"),m.a.createElement(b.a,{bar:!0,color:"danger",value:"10",max:55},"10")))))}}]),t}(s.Component);a.default=E},541:function(e,a,t){"use strict";function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return l}))},640:function(e,a,t){"use strict";var l=t(12),r=t(30),n=t(2),c=t.n(n),s=t(64),m=t.n(s),o=t(536),u=t.n(o),i=t(537),b={tag:i.q,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,m=Object(r.a)(e,["className","cssModule","innerRef","tag"]),o=Object(i.m)(u()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},m,{className:o,ref:n}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E},642:function(e,a,t){"use strict";var l=t(12),r=t(30),n=t(2),c=t.n(n),s=t(64),m=t.n(s),o=t(536),u=t.n(o),i=t(537),b={tag:i.q,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,m=e.inverse,o=e.outline,b=e.tag,E=e.innerRef,d=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),v=Object(i.m)(u()(a,"card",!!m&&"text-white",!!s&&"card-body",!!n&&(o?"border":"bg")+"-"+n),t);return c.a.createElement(b,Object(l.a)({},d,{className:v,ref:E}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E},643:function(e,a,t){"use strict";var l=t(12),r=t(30),n=t(2),c=t.n(n),s=t(64),m=t.n(s),o=t(536),u=t.n(o),i=t(537),b={tag:i.q,className:m.a.string,cssModule:m.a.object},E=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),m=Object(i.m)(u()(a,"card-header"),t);return c.a.createElement(n,Object(l.a)({},s,{className:m}))};E.propTypes=b,E.defaultProps={tag:"div"},a.a=E},701:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var l=t(541);function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){Object(l.a)(e,a,t[a])}))}return e}}}]);
//# sourceMappingURL=23.be191796.chunk.js.map