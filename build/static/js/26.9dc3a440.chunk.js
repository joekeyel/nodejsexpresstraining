(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{1042:function(e,t,a){"use strict";var n=a(12),o=a(701),r=a(30),s=a(36),i=a(2),l=a.n(i),c=a(64),p=a.n(c),d=a(536),u=a.n(d),b=a(1319),h=a(861),g=a(537),m={tag:g.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},f={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,s=t.cssModule,i=t.right,c=t.tag,p=t.flip,d=t.modifiers,h=t.persist,m=t.positionFixed,O=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),E=Object(g.m)(u()(a,"dropdown-menu",{"dropdown-menu-right":i,show:this.context.isOpen}),s),j=c;if(h||this.context.isOpen&&!this.context.inNavbar){var N=(v[this.context.direction]||"bottom")+"-"+(i?"end":"start"),x=p?d:Object(o.a)({},d,{},f),y=!!m;return l.a.createElement(b.a,{placement:N,modifiers:x,positionFixed:y},(function(t){var a=t.ref,o=t.style,r=t.placement;return l.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:o},O,{"aria-hidden":!e.context.isOpen,className:E,"x-placement":r}))}))}return l.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu"},O,{"aria-hidden":!this.context.isOpen,className:E,"x-placement":O.placement}))},t}(l.a.Component);O.propTypes=m,O.defaultProps={tag:"div",flip:!0},O.contextType=h.a,t.a=O},1043:function(e,t,a){"use strict";var n=a(12),o=a(30),r=a(556),s=a(36),i=a(2),l=a.n(i),c=a(64),p=a.n(c),d=a(536),u=a.n(d),b=a(861),h=a(537),g={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:h.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(h.n)(this.props,["toggle"]),r=a.className,s=a.cssModule,i=a.divider,c=a.tag,p=a.header,d=a.active,b=Object(o.a)(a,["className","cssModule","divider","tag","header","active"]),g=Object(h.m)(u()(r,{disabled:b.disabled,"dropdown-item":!i&&!p,active:d,"dropdown-header":p,"dropdown-divider":i}),s);return"button"===c&&(p?c="h6":i?c="div":b.href&&(c="a")),l.a.createElement(c,Object(n.a)({type:"button"===c&&(b.onClick||this.props.toggle)?"button":void 0},b,{tabIndex:e,role:t,className:g,onClick:this.onClick}))},t}(l.a.Component);m.propTypes=g,m.defaultProps={tag:"button",toggle:!0},m.contextType=b.a,t.a=m},1045:function(e,t,a){"use strict";var n=a(12),o=a(30),r=a(556),s=a(36),i=a(2),l=a.n(i),c=a(64),p=a.n(c),d=a(536),u=a.n(d),b=a(573),h=a.n(b),g=a(596),m=a.n(g),f=a(1011),v=a.n(f),O=a(587),E=a.n(O),j=a(1021),N=a.n(j),x=a(1020),y=a(1029),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,E()(m()(t),"refHandler",(function(e){Object(y.b)(t.props.innerRef,e),Object(y.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(y.b)(this.props.innerRef,null)},a.render=function(){return N()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(y.c)(this.props.children)({ref:this.refHandler})},t}(i.Component);function C(e){return i.createElement(x.b.Consumer,null,(function(t){return i.createElement(k,h()({setReferenceNode:t},e))}))}var T=a(861),M=a(537),R=a(631),w={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:M.q,nav:p.a.bool},I=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,r=a.className,s=a.color,i=a.cssModule,c=a.caret,p=a.split,d=a.nav,b=a.tag,h=a.innerRef,g=Object(o.a)(a,["className","color","cssModule","caret","split","nav","tag","innerRef"]),m=g["aria-label"]||"Toggle Dropdown",f=Object(M.m)(u()(r,{"dropdown-toggle":c||p,"dropdown-toggle-split":p,"nav-link":d}),i),v="undefined"!==typeof g.children?g.children:l.a.createElement("span",{className:"sr-only"},m);return d&&!b?(e="a",g.href="#"):b?e=b:(e=R.a,g.color=s,g.cssModule=i),this.context.inNavbar?l.a.createElement(e,Object(n.a)({},g,{className:f,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v})):l.a.createElement(C,{innerRef:h},(function(a){var o,r=a.ref;return l.a.createElement(e,Object(n.a)({},g,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:f,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:v}))}))},t}(l.a.Component);I.propTypes=w,I.defaultProps={"aria-haspopup":!0,color:"secondary"},I.contextType=T.a;t.a=I},1092:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(701),o=a(12),r=a(556),s=a(36),i=a(2),l=a.n(i),c=a(64),p=a.n(c),d=a(1040),u=a(537),b=["defaultOpen"],h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return l.a.createElement(d.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.n)(this.props,b)))},t}(i.Component);h.propTypes=Object(n.a)({defaultOpen:p.a.bool,onToggle:p.a.func},d.a.propTypes)},1097:function(e,t,a){"use strict";var n,o=a(12),r=a(30),s=a(556),i=a(36),l=a(701),c=a(2),p=a.n(c),d=a(64),u=a.n(d),b=a(536),h=a.n(b),g=a(1002),m=a(537),f=Object(l.a)({},g.Transition.propTypes,{isOpen:u.a.bool,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),tag:m.q,className:u.a.node,navbar:u.a.bool,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])}),v=Object(l.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:m.e.Collapse}),O=((n={})[m.d.ENTERING]="collapsing",n[m.d.ENTERED]="collapse show",n[m.d.EXITING]="collapsing",n[m.d.EXITED]="collapse",n);function E(e){return e.scrollHeight}var j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(s.a)(a))})),a}Object(i.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:E(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:E(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,s=t.className,i=t.navbar,c=t.cssModule,d=t.children,u=(t.innerRef,Object(r.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),b=this.state.height,f=Object(m.o)(u,m.c),v=Object(m.n)(u,m.c);return p.a.createElement(g.Transition,Object(o.a)({},f,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return O[e]||"collapse"}(t),r=Object(m.m)(h()(s,n,i&&"navbar-collapse"),c),u=null===b?null:{height:b};return p.a.createElement(a,Object(o.a)({},v,{style:Object(l.a)({},v.style,{},u),className:r,ref:e.props.innerRef}),d)}))},t}(c.Component);j.propTypes=f,j.defaultProps=v,t.a=j},1383:function(e,t,a){"use strict";a.r(t);var n=a(92),o=a(93),r=a(172),s=a(166),i=a(165),l=a(2),c=a.n(l),p=a(642),d=a(643),u=a(640),b=a(12),h=a(30),g=a(64),m=a.n(g),f=a(536),v=a.n(f),O=a(537),E={light:m.a.bool,dark:m.a.bool,full:m.a.bool,fixed:m.a.string,sticky:m.a.string,color:m.a.string,role:m.a.string,tag:O.q,className:m.a.string,cssModule:m.a.object,expand:m.a.oneOfType([m.a.bool,m.a.string])},j=function(e){var t,a=e.expand,n=e.className,o=e.cssModule,r=e.light,s=e.dark,i=e.fixed,l=e.sticky,p=e.color,d=e.tag,u=Object(h.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),g=Object(O.m)(v()(n,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(a),((t={"navbar-light":r,"navbar-dark":s})["bg-"+p]=p,t["fixed-"+i]=i,t["sticky-"+l]=l,t)),o);return c.a.createElement(d,Object(b.a)({},u,{className:g}))};j.propTypes=E,j.defaultProps={tag:"nav",expand:!1};var N=j,x={tag:O.q,className:m.a.string,cssModule:m.a.object},y=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(h.a)(e,["className","cssModule","tag"]),r=Object(O.m)(v()(t,"navbar-brand"),a);return c.a.createElement(n,Object(b.a)({},o,{className:r}))};y.propTypes=x,y.defaultProps={tag:"a"};var k=y,C={tag:O.q,type:m.a.string,className:m.a.string,cssModule:m.a.object,children:m.a.node},T=function(e){var t=e.className,a=e.cssModule,n=e.children,o=e.tag,r=Object(h.a)(e,["className","cssModule","children","tag"]),s=Object(O.m)(v()(t,"navbar-toggler"),a);return c.a.createElement(o,Object(b.a)({"aria-label":"Toggle navigation"},r,{className:s}),n||c.a.createElement("span",{className:Object(O.m)("navbar-toggler-icon",a)}))};T.propTypes=C,T.defaultProps={tag:"button",type:"button"};var M=T,R=a(1097),w=a(1297),I=a(1294),q=a(1295),P=a(1092),S=a(1045),D=a(1042),F=a(1043),G=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).toggle=o.toggle.bind(Object(r.a)(o)),o.toggleNavbar=o.toggleNavbar.bind(Object(r.a)(o)),o.state={isOpen:!1,collapsed:!0},o}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Navbar"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/navbar/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(u.a,null,c.a.createElement(N,{color:"info",light:!0,expand:"md"},c.a.createElement(k,{href:"/"},"Bootstrap"),c.a.createElement(M,{onClick:this.toggle}),c.a.createElement(R.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(w.a,{className:"ml-auto",navbar:!0},c.a.createElement(I.a,null,c.a.createElement(q.a,{href:"#/components/navbars"},"Components")),c.a.createElement(I.a,null,c.a.createElement(q.a,{href:"https://github.com/reactstrap/reactstrap",target:"_blank"},"Github")),c.a.createElement(P.a,{nav:!0,inNavbar:!0},c.a.createElement(S.a,{nav:!0,caret:!0},"Options"),c.a.createElement(D.a,null,c.a.createElement(F.a,null,"Option 1"),c.a.createElement(F.a,null,"Option 2"),c.a.createElement(F.a,{divider:!0}),c.a.createElement(F.a,null,"Reset")))))))),c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Navbar Toggler")),c.a.createElement(u.a,null,c.a.createElement(N,{color:"success",light:!0},c.a.createElement(k,{href:"/",className:"mr-auto"},"Bootstrap"),c.a.createElement(M,{onClick:this.toggleNavbar,className:"mr-2"}),c.a.createElement(R.a,{isOpen:!this.state.collapsed,navbar:!0},c.a.createElement(w.a,{navbar:!0},c.a.createElement(I.a,null,c.a.createElement(q.a,{href:"#/components/navbars"},"Components")),c.a.createElement(I.a,null,c.a.createElement(q.a,{href:"https://github.com/reactstrap/reactstrap"},"Github"))))))))}}]),a}(l.Component);t.default=G},631:function(e,t,a){"use strict";var n=a(12),o=a(30),r=a(556),s=a(36),i=a(2),l=a.n(i),c=a(64),p=a.n(c),d=a(536),u=a.n(d),b=a(537),h={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:b.q,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,s=e.className,i=e.close,c=e.cssModule,p=e.color,d=e.outline,h=e.size,g=e.tag,m=e.innerRef,f=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof f.children&&(f.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+p,O=Object(b.m)(u()(s,{close:i},i||"btn",i||v,!!h&&"btn-"+h,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),c);f.href&&"button"===g&&(g="a");var E=i?"Close":null;return l.a.createElement(g,Object(n.a)({type:"button"===g&&f.onClick?"button":void 0},f,{className:O,ref:m,onClick:this.onClick,"aria-label":a||E}))},t}(l.a.Component);g.propTypes=h,g.defaultProps={color:"secondary",tag:"button"},t.a=g}}]);
//# sourceMappingURL=26.9dc3a440.chunk.js.map