(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[170],{1066:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(53),l=a(1069),o=a(582),i=a(27),m=a.n(i),u=a(2),s=m()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,i=e.className,m=e.restProps,d=s();return r.a.createElement(o.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(c.a,Object.assign({className:Object(u.default)(d.pageFull,i)},m),(t||a)&&r.a.createElement(l.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(l.c,{items:a})}),n))}},1069:function(e,t,a){"use strict";a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return E})),a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return w}));var n=a(17),r=a(8),c=a(0),l=a.n(c),o=a(121),i=a(53),m=a(108),u=a(2),s=["heading","breadcrumbComponent","children"],d=Object(o.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),b=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,c=Object(n.a)(e,s),o=d();return l.a.createElement(i.a,Object.assign({className:Object(u.default)(o.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},c),l.a.createElement(m.a,{component:"div",variant:"h1",className:Object(u.default)(o.titleRoot,"title")},t),l.a.createElement(i.a,{ml:{sm:"auto"}},a),r)},p=a(1110),f=a(62),h=["items"],g=Object(o.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),E=function(e){var t=e.items,a=(Object(n.a)(e,h),g());return l.a.createElement(p.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?l.a.createElement(m.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):l.a.createElement(f.b,{key:t,className:Object(u.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},v=a(926),k=a(35),x=a(182),y=a(1066),j=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return l.a.createElement(y.a,null,l.a.createElement(x.a,null,l.a.createElement(v.a,{item:!0,xs:12,md:7},l.a.createElement(b,{heading:"Preview"}),l.a.createElement(i.a,{mb:8},n),l.a.createElement(k.a,null,t)),l.a.createElement(v.a,{item:!0,xs:12,md:5},a)))},O=a(1071),w=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return l.a.createElement(O.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1071:function(e,t,a){"use strict";var n=a(8),r=a(0),c=a.n(r),l=a(53),o=a(984),i=a(108),m=a(919),u=a(920),s=a(976),d=a(121),b=a(1066),p=Object(d.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,d=p();return c.a.createElement(b.a,{heading:t,breadcrumbs:n},c.a.createElement(l.a,{className:d.root},c.a.createElement(l.a,{className:d.contentArea},r),c.a.createElement(o.a,{xsDown:!0},c.a.createElement(l.a,{className:d.contentSidebar},c.a.createElement(i.a,{component:"h4",variant:"h4"},"Contents"),c.a.createElement(m.a,null,a.map((function(e,t){return c.a.createElement(u.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},c.a.createElement(s.a,{primary:e.label}))})))))))}},3526:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1066),l=a(1741),o=a(12),i=a.n(o),m=a(98).a.events,u=(new Date).getFullYear(),s=Object(l.b)(i.a);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("p",{className:"mb-4"},"Click an event to see more info, or drag the mouse over the calendar to select a date/time range."),r.a.createElement(l.a,{localizer:s,events:m,selectable:!0,defaultView:"week",scrollToTime:new Date(1970,1,1,6),defaultDate:new Date(u,3,1),onSelectEvent:function(e){return alert(e.title)},onSelectSlot:function(e){return alert("selected slot: \n\nstart ".concat(e.start.toLocaleString()," ")+"\nend: ".concat(e.end.toLocaleString())+"\naction: ".concat(e.action))}}))}}}]);
//# sourceMappingURL=170.deeefd7d.chunk.js.map