(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{1107:function(e,a,t){!function(e){"use strict";function a(e){var a=this,t="above",r="below",l="chartjs-tooltip",n="no-transform",o="tooltip-body",c="tooltip-body-item",s="tooltip-body-item-color",d="tooltip-body-item-label",i="tooltip-body-item-value",m="tooltip-header",u="tooltip-header-item",p={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},h=document.getElementById(p.TOOLTIP);if(h||((h=document.createElement("div")).id=p.TOOLTIP,h.className=l,this._chart.canvas.parentNode.appendChild(h)),0!==e.opacity){if(h.classList.remove(t,r,n),e.yAlign?h.classList.add(e.yAlign):h.classList.add(n),e.body){var b=e.title||[],E=document.createElement(p.DIV);E.className=m,b.forEach((function(e){var a=document.createElement(p.DIV);a.className=u,a.innerHTML=e,E.appendChild(a)}));var g=document.createElement(p.DIV);g.className=o,e.body.map((function(e){return e.lines})).forEach((function(a,t){var r=document.createElement(p.DIV);r.className=c;var l=e.labelColors[t],n=document.createElement(p.SPAN);if(n.className=s,n.style.backgroundColor=l.backgroundColor,r.appendChild(n),a[0].split(":").length>1){var o=document.createElement(p.SPAN);o.className=d,o.innerHTML=a[0].split(": ")[0],r.appendChild(o);var m=document.createElement(p.SPAN);m.className=i,m.innerHTML=a[0].split(": ").pop(),r.appendChild(m)}else{var u=document.createElement(p.SPAN);u.className=i,u.innerHTML=a[0],r.appendChild(u)}g.appendChild(r)})),h.innerHTML="",h.appendChild(E),h.appendChild(g)}var f=this._chart.canvas.getBoundingClientRect(),v=this._chart.canvas.offsetTop,C=this._chart.canvas.offsetLeft+e.caretX,N=v+e.caretY,y=e.width/2;C+y>f.width?C-=y:C<y&&(C+=y),h.style.opacity=1,h.style.left=C+"px",h.style.top=N+"px"}else h.style.opacity=0}var t=a;e.CustomTooltips=a,e.customTooltips=t,Object.defineProperty(e,"__esModule",{value:!0})}(a)},1391:function(e,a,t){"use strict";t.r(a);var r=t(92),l=t(93),n=t(166),o=t(165),c=t(2),s=t.n(c),d=t(1079),i=t(12),m=t(30),u=t(64),p=t.n(u),h=t(536),b=t.n(h),E=t(537),g={tag:E.q,className:p.a.string,cssModule:p.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(m.a)(e,["className","cssModule","tag"]),n=Object(E.m)(b()(a,"card-columns"),t);return s.a.createElement(r,Object(i.a)({},l,{className:n}))};f.propTypes=g,f.defaultProps={tag:"div"};var v=f,C=t(642),N=t(643),y=t(640),w=t(1107),B={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},j={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},F={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},M={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},k={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},O={datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},T={tooltips:{enabled:!1,custom:w.CustomTooltips},maintainAspectRatio:!1},A=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(v,{className:"cols-2"},s.a.createElement(C.a,null,s.a.createElement(N.a,null,"Line Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(y.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.c,{data:B,options:T})))),s.a.createElement(C.a,null,s.a.createElement(N.a,null,"Bar Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(y.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.a,{data:j,options:T})))),s.a.createElement(C.a,null,s.a.createElement(N.a,null,"Doughnut Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(y.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.b,{data:F})))),s.a.createElement(C.a,null,s.a.createElement(N.a,null,"Radar Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(y.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.f,{data:M})))),s.a.createElement(C.a,null,s.a.createElement(N.a,null,"Pie Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(y.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.d,{data:k})))),s.a.createElement(C.a,null,s.a.createElement(N.a,null,"Polar Area Chart",s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(y.a,null,s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(d.e,{data:O,options:T}))))))}}]),t}(c.Component);a.default=A},640:function(e,a,t){"use strict";var r=t(12),l=t(30),n=t(2),o=t.n(n),c=t(64),s=t.n(c),d=t(536),i=t.n(d),m=t(537),u={tag:m.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,c=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),d=Object(m.m)(i()(a,"card-body"),t);return o.a.createElement(c,Object(r.a)({},s,{className:d,ref:n}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},643:function(e,a,t){"use strict";var r=t(12),l=t(30),n=t(2),o=t.n(n),c=t(64),s=t.n(c),d=t(536),i=t.n(d),m=t(537),u={tag:m.q,className:s.a.string,cssModule:s.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.m)(i()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},c,{className:s}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=41.233d33c8.chunk.js.map