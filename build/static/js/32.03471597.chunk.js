(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{1001:function(e,a,t){"use strict";var i=t(12),n=t(30),l=t(701),o=t(2),s=t.n(o),r=t(64),m=t.n(r),c=t(536),u=t.n(c),d=t(1002),p=t(537),E=Object(l.a)({},d.Transition.propTypes,{children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:p.q,baseClass:m.a.string,baseClassActive:m.a.string,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])}),g=Object(l.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var a=e.tag,t=e.baseClass,l=e.baseClassActive,o=e.className,r=e.cssModule,m=e.children,c=e.innerRef,E=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=Object(p.o)(E,p.c),b=Object(p.n)(E,p.c);return s.a.createElement(d.Transition,g,(function(e){var n="entered"===e,d=Object(p.m)(u()(o,t,n&&l),r);return s.a.createElement(a,Object(i.a)({className:d},b,{ref:c}),m)}))}b.propTypes=E,b.defaultProps=g,a.a=b},1046:function(e,a,t){"use strict";var i=t(12),n=t(30),l=t(2),o=t.n(l),s=t(64),r=t.n(s),m=t(536),c=t.n(m),u=t(537),d={tag:u.q,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),r=Object(u.m)(c()(a,"card-footer"),t);return o.a.createElement(l,Object(i.a)({},s,{className:r}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},1097:function(e,a,t){"use strict";var i,n=t(12),l=t(30),o=t(556),s=t(36),r=t(701),m=t(2),c=t.n(m),u=t(64),d=t.n(u),p=t(536),E=t.n(p),g=t(1002),b=t(537),h=Object(r.a)({},g.Transition.propTypes,{isOpen:d.a.bool,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.q,className:d.a.node,navbar:d.a.bool,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object])}),x=Object(r.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:b.e.Collapse}),f=((i={})[b.d.ENTERING]="collapsing",i[b.d.ENTERED]="collapse show",i[b.d.EXITING]="collapsing",i[b.d.EXITED]="collapse",i);function q(e){return e.scrollHeight}var v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(s.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:q(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:q(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,i=a.isOpen,o=a.className,s=a.navbar,m=a.cssModule,u=a.children,d=(a.innerRef,Object(l.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,h=Object(b.o)(d,b.c),x=Object(b.n)(d,b.c);return c.a.createElement(g.Transition,Object(n.a)({},h,{in:i,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var i=function(e){return f[e]||"collapse"}(a),l=Object(b.m)(E()(o,i,s&&"navbar-collapse"),m),d=null===p?null:{height:p};return c.a.createElement(t,Object(n.a)({},x,{style:Object(r.a)({},x.style,{},d),className:l,ref:e.props.innerRef}),u)}))},a}(m.Component);v.propTypes=h,v.defaultProps=x,a.a=v},1321:function(e,a,t){"use strict";t.r(a);var i=t(92),n=t(93),l=t(172),o=t(166),s=t(165),r=t(2),m=t.n(r),c=t(628),u=t(629),d=t(642),p=t(643),E=t(640),g=t(1046),b=t(1296),h=t(1001),x=t(1097),f=t(1044),q=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggle=n.toggle.bind(Object(l.a)(n)),n.toggleFade=n.toggleFade.bind(Object(l.a)(n)),n.state={collapse:!0,fadeIn:!0,timeout:300},n}return Object(n.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState((function(e){return{fadeIn:!e}}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(c.a,null,m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Card title"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,null,m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement(g.a,null,"Card footer"))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Card with icon",m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("i",{className:"fa fa-check float-right"}))),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Card with switch",m.a.createElement("div",{className:"card-header-actions"},m.a.createElement(f.l,{className:"float-right mb-0",label:!0,color:"info",defaultChecked:!0,size:"sm"}))),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Card with label",m.a.createElement("div",{className:"card-header-actions"},m.a.createElement(b.a,{color:"success",className:"float-right"},"Success"))),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Card with label",m.a.createElement("div",{className:"card-header-actions"},m.a.createElement(b.a,{pill:!0,color:"danger",className:"float-right"},"42"))),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(c.a,null,m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"border-primary"},m.a.createElement(p.a,null,"Card outline primary"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"border-secondary"},m.a.createElement(p.a,null,"Card outline secondary"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"border-success"},m.a.createElement(p.a,null,"Card outline success"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"border-info"},m.a.createElement(p.a,null,"Card outline info"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"border-warning"},m.a.createElement(p.a,null,"Card outline warning"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"border-danger"},m.a.createElement(p.a,null,"Card outline danger"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(c.a,null,m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"card-accent-primary"},m.a.createElement(p.a,null,"Card with accent"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"card-accent-secondary"},m.a.createElement(p.a,null,"Card with accent"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"card-accent-success"},m.a.createElement(p.a,null,"Card with accent"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"card-accent-info"},m.a.createElement(p.a,null,"Card with accent"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"card-accent-warning"},m.a.createElement(p.a,null,"Card with accent"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"card-accent-danger"},m.a.createElement(p.a,null,"Card with accent"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(c.a,null,m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-primary text-center"},m.a.createElement(E.a,null,m.a.createElement("blockquote",{className:"card-bodyquote"},m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),m.a.createElement("footer",null,"Someone famous in ",m.a.createElement("cite",{title:"Source Title"},"Source Title")))))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-success text-center"},m.a.createElement(E.a,null,m.a.createElement("blockquote",{className:"card-bodyquote"},m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),m.a.createElement("footer",null,"Someone famous in ",m.a.createElement("cite",{title:"Source Title"},"Source Title")))))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-info text-center"},m.a.createElement(E.a,null,m.a.createElement("blockquote",{className:"card-bodyquote"},m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),m.a.createElement("footer",null,"Someone famous in ",m.a.createElement("cite",{title:"Source Title"},"Source Title")))))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-warning text-center"},m.a.createElement(E.a,null,m.a.createElement("blockquote",{className:"card-bodyquote"},m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),m.a.createElement("footer",null,"Someone famous in ",m.a.createElement("cite",{title:"Source Title"},"Source Title")))))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-danger text-center"},m.a.createElement(E.a,null,m.a.createElement("blockquote",{className:"card-bodyquote"},m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),m.a.createElement("footer",null,"Someone famous in ",m.a.createElement("cite",{title:"Source Title"},"Source Title")))))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-primary text-center"},m.a.createElement(E.a,null,m.a.createElement("blockquote",{className:"card-bodyquote"},m.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),m.a.createElement("footer",null,"Someone famous in ",m.a.createElement("cite",{title:"Source Title"},"Source Title"))))))),m.a.createElement(c.a,null,m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-primary"},m.a.createElement(p.a,null,"Card title"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-success"},m.a.createElement(p.a,null,"Card title"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-info"},m.a.createElement(p.a,null,"Card title"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-warning"},m.a.createElement(p.a,null,"Card title"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(d.a,{className:"text-white bg-danger"},m.a.createElement(p.a,null,"Card title"),m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),m.a.createElement(u.a,{xs:"12",sm:"6",md:"4"},m.a.createElement(h.a,{timeout:this.state.timeout,in:this.state.fadeIn},m.a.createElement(d.a,null,m.a.createElement(p.a,null,"Card actions",m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"#",className:"card-header-action btn btn-setting"},m.a.createElement("i",{className:"icon-settings"})),m.a.createElement("a",{className:"card-header-action btn btn-minimize","data-target":"#collapseExample",onClick:this.toggle},m.a.createElement("i",{className:"icon-arrow-up"})),m.a.createElement("a",{className:"card-header-action btn btn-close",onClick:this.toggleFade},m.a.createElement("i",{className:"icon-close"})))),m.a.createElement(x.a,{isOpen:this.state.collapse,id:"collapseExample"},m.a.createElement(E.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))))))}}]),t}(r.Component);a.default=q},628:function(e,a,t){"use strict";var i=t(12),n=t(30),l=t(2),o=t.n(l),s=t(64),r=t.n(s),m=t(536),c=t.n(m),u=t(537),d=r.a.oneOfType([r.a.number,r.a.string]),p={tag:u.q,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},E={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,s=e.tag,r=e.form,m=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];m.forEach((function(a,t){var i=e[a];if(delete d[a],i){var n=!t;p.push(n?"row-cols-"+i:"row-cols-"+a+"-"+i)}}));var E=Object(u.m)(c()(a,l?"no-gutters":null,r?"form-row":"row",p),t);return o.a.createElement(s,Object(i.a)({},d,{className:E}))};g.propTypes=p,g.defaultProps=E,a.a=g},629:function(e,a,t){"use strict";var i=t(12),n=t(30),l=t(2),o=t.n(l),s=t(64),r=t.n(s),m=t(536),c=t.n(m),u=t(537),d=r.a.oneOfType([r.a.number,r.a.string]),p=r.a.oneOfType([r.a.bool,r.a.number,r.a.string,r.a.shape({size:r.a.oneOfType([r.a.bool,r.a.number,r.a.string]),order:d,offset:d})]),E={tag:u.q,xs:p,sm:p,md:p,lg:p,xl:p,className:r.a.string,cssModule:r.a.object,widths:r.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,l=e.widths,s=e.tag,r=Object(n.a)(e,["className","cssModule","widths","tag"]),m=[];l.forEach((function(a,i){var n=e[a];if(delete r[a],n||""===n){var l=!i;if(Object(u.k)(n)){var o,s=l?"-":"-"+a+"-",d=b(l,a,n.size);m.push(Object(u.m)(c()(((o={})[d]=n.size||""===n.size,o["order"+s+n.order]=n.order||0===n.order,o["offset"+s+n.offset]=n.offset||0===n.offset,o)),t))}else{var p=b(l,a,n);m.push(p)}}})),m.length||m.push("col");var d=Object(u.m)(c()(a,m),t);return o.a.createElement(s,Object(i.a)({},r,{className:d}))};h.propTypes=E,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=32.03471597.chunk.js.map