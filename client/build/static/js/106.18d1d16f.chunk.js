(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1792:function(e,t,a){"use strict";a.r(t);var n=a(150),r=a(151),l=a(242),c=a(241),i=a(243),s=a(3),u=a.n(s),d=a(1134),m=a(1135),o=a(1198),E=a(1204),S=a(1194),f=a(1009),h=a(1258),p=a.n(h),b=a(1295),I=a.n(b),x=a(248),D=a(1699),T=a.n(D),F=a(1316),_=D.Search.SearchBar,g=D.Search.ClearSearchButton,v=[{dataField:"SITE_ID",text:"Site ID"},{dataField:"SITE_NAME",text:"Site Name"},{dataField:"SITE_ADDE_ID",text:"Site Address ID"},{dataField:"SITE_TYPE",text:"Site Type"},{dataField:"SITE_PARENT_ID",text:"Site Parent ID"},{dataField:"SITE_ABBR",text:"Site Abbr"},{dataField:"SITE_MGR",text:"Site Manager"},{dataField:"SITE_MGR_NO",text:"Site Manager No"},{dataField:"SITE_STATUS",text:"Site Status"},{dataField:"SITE_DESC",text:"Site Desc"},{text:"Action",isDummyField:!0,formatter:function(e,t){return u.a.createElement(x.Link,{className:"btn btn-success btn-sm",to:{pathname:"/product offering/services",state:{state:t}}},"Select")}}],y=function(e){var t=Object(s.useState)(!1),a=Object(f.a)(t,2);a[0],a[1];return u.a.createElement(T.a,{keyField:"id",data:e.data,columns:v,search:!0},function(e){return u.a.createElement("div",null,u.a.createElement(o.a,{xl:"6"},u.a.createElement(S.a,null,u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:"6"},u.a.createElement("h6",null,"* Input any columns name"),u.a.createElement(_,Object.assign({},e.searchProps,{placeholder:"Enter Keyword",style:{width:"300%"}}))),u.a.createElement(m.a,{xs:"6"},u.a.createElement(F.a,{style:{marginLeft:"80px",marginTop:"20px"}},u.a.createElement(g,Object.assign({},e.searchProps,{className:"btn btn-danger"}))))),u.a.createElement("hr",null),u.a.createElement(p.a,Object.assign({},e.baseProps,{pagination:I()(),noDataIndication:(a[0],a[1],function(){return u.a.createElement("div",{style:{marginLeft:"400px"}},u.a.createElement("i",{className:"fa fa-database"}),u.a.createElement("span",null,"\xa0No Data Found"),"\xa0\xa0")})})))))})},j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={formValues:"",open:!1,message:"",data:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchDCSiteList()}},{key:"fetchDCSiteList",value:function(){var e=this;fetch("/claritybqm/reportFetch/?scriptName=DC_SITE").then(function(e){return e.json()}).then(function(t){return e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:"12"},u.a.createElement(o.a,null,u.a.createElement(E.a,null,u.a.createElement("strong",null,"Rack Details")),u.a.createElement(S.a,null,u.a.createElement(y,{data:e}))))))}}]),t}(s.Component);t.default=j}}]);
//# sourceMappingURL=106.18d1d16f.chunk.js.map