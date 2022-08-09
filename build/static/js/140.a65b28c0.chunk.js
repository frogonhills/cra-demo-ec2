(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[140],{1066:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(53),o=a(1069),l=a(582),c=a(27),m=a.n(c),s=a(2),d=m()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,c=e.className,m=e.restProps,p=d();return r.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(i.a,Object.assign({className:Object(s.default)(p.pageFull,c)},m),(t||a)&&r.a.createElement(o.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(o.c,{items:a})}),n))}},1069:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return C}));var n=a(17),r=a(8),i=a(0),o=a.n(i),l=a(121),c=a(53),m=a(108),s=a(2),d=["heading","breadcrumbComponent","children"],p=Object(l.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),u=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,i=Object(n.a)(e,d),l=p();return o.a.createElement(c.a,Object.assign({className:Object(s.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),o.a.createElement(m.a,{component:"div",variant:"h1",className:Object(s.default)(l.titleRoot,"title")},t),o.a.createElement(c.a,{ml:{sm:"auto"}},a),r)},b=a(1110),f=a(62),g=["items"],h=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),x=function(e){var t=e.items,a=(Object(n.a)(e,g),h());return o.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?o.a.createElement(m.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):o.a.createElement(f.b,{key:t,className:Object(s.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},v=a(926),E=a(35),k=a(182),j=a(1066),y=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return o.a.createElement(j.a,null,o.a.createElement(k.a,null,o.a.createElement(v.a,{item:!0,xs:12,md:7},o.a.createElement(u,{heading:"Preview"}),o.a.createElement(c.a,{mb:8},n),o.a.createElement(E.a,null,t)),o.a.createElement(v.a,{item:!0,xs:12,md:5},a)))},O=a(1071),C=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return o.a.createElement(O.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1071:function(e,t,a){"use strict";var n=a(8),r=a(0),i=a.n(r),o=a(53),l=a(984),c=a(108),m=a(919),s=a(920),d=a(976),p=a(121),u=a(1066),b=Object(p.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,p=b();return i.a.createElement(u.a,{heading:t,breadcrumbs:n},i.a.createElement(o.a,{className:p.root},i.a.createElement(o.a,{className:p.contentArea},r),i.a.createElement(l.a,{xsDown:!0},i.a.createElement(o.a,{className:p.contentSidebar},i.a.createElement(c.a,{component:"h4",variant:"h4"},"Contents"),i.a.createElement(m.a,null,a.map((function(e,t){return i.a.createElement(s.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},i.a.createElement(d.a,{primary:e.label}))})))))))}},1110:function(e,t,a){"use strict";var n=a(1),r=a(116),i=a(7),o=a(0),l=(a(267),a(2)),c=a(10),m=a(108),s=a(24),d=a(18),p=Object(d.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(332);var b=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(s.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(i.a)(e,["classes"]);return o.createElement(u.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),o.createElement(p,{className:t.icon}))}));var f=o.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.component,p=void 0===d?"nav":d,u=e.expandText,f=void 0===u?"Show path":u,g=e.itemsAfterCollapse,h=void 0===g?1:g,x=e.itemsBeforeCollapse,v=void 0===x?1:x,E=e.maxItems,k=void 0===E?8:E,j=e.separator,y=void 0===j?"/":j,O=Object(i.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=o.useState(!1),N=C[0],w=C[1],R=o.Children.toArray(a).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return o.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return o.createElement(m.a,Object(n.a)({ref:t,component:p,color:"textSecondary",className:Object(l.default)(c.root,s)},O),o.createElement("ol",{className:c.ol},function(e,t,a){return e.reduce((function(n,r,i){return i<e.length-1?n=n.concat(r,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},a)):n.push(r),n}),[])}(N||k&&R.length<=k?R:function(e){return v+h>=e.length?e:[].concat(Object(r.a)(e.slice(0,v)),[o.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(e){w(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-h,e.length)))}(R),c.separator,y)))}));t.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},1461:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(53),o=a(121),l=Object(o.a)((function(e){return{timelineRoot:{position:"relative","&.right":{textAlign:"right"}}}})),c=a(2),m=function(e){var t=e.children,a=e.align,n=l();return r.a.createElement(i.a,{className:Object(c.default)(n.timelineRoot,"Cmt-timeline-root",a)},t)};t.a=m;m.defaultProps={align:"center"}},1462:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(8),o=a(121),l=Object(o.a)((function(e){var t;return{timelineItem:{position:"relative",paddingLeft:80,"&:not(:last-child)":{paddingBottom:25},"&:before":{content:'""',position:"absolute",left:25,top:36,bottom:-38,zIndex:1,width:2,borderLeft:"2px solid #dee2e6",".right &":{left:"auto",right:22}},"&:first-child::before, &:last-child::before":{borderLeftStyle:"dashed"},"&:last-child::before":{bottom:0},".right &":{paddingLeft:0,paddingRight:80},".zigzag &":(t={},Object(i.a)(t,e.breakpoints.up("sm"),{paddingLeft:100,"&:before":{left:0,top:20,bottom:-26,transform:"rotate(25deg)"},"&:nth-child(2n)":{paddingLeft:0,paddingRight:100,"&:before":{transform:"rotate(-25deg)"},"& $timelineBadge":{right:25}},"&:last-child::before":{bottom:-5},"& .Cmt-timeline-root-inner":{maxHeight:150,overflowY:"auto",paddingRight:7}}),Object(i.a)(t,e.breakpoints.up("md"),{paddingLeft:150,"&:nth-child(2n)":{paddingLeft:0,paddingRight:150}}),t),".center &, .zigzag &":Object(i.a)({},e.breakpoints.up("sm"),{paddingLeft:55,width:"50%",left:"50%",boxSizing:"border-box","&:before":{left:-1},"& $makeDot":{left:-7},"& .Cmt-timeline-time > div":{display:"flex",flexDirection:"column",alignItems:"flex-end"},"&:nth-child(2n)":{left:0,textAlign:"right",paddingLeft:0,paddingRight:55,"&:before":{left:"auto",right:-3},"& $timelineBadge":{left:"auto",right:-25},"& .Cmt-timeline-root":{"&:before":{left:"auto",right:-15,borderWidth:"15px 0 15px 15px"},"&:after":{left:"auto",right:-14,borderWidth:"14px 0 14px 14px"}},"& $timelineTime":{left:"auto",right:-225},"& $makeDot":{left:"auto",right:-7},"& .Cmt-timeline-time > div":{alignItems:"flex-start"}}})},timelineBadge:{width:50,height:50,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:0,top:16,zIndex:2,"& img":{maxWidth:"100%"},".right &":{left:"auto",right:0},".zigzag &":Object(i.a)({},e.breakpoints.up("sm"),{left:25}),".center &, .zigzag &":Object(i.a)({},e.breakpoints.up("sm"),{left:-25})},timelineTime:{fontSize:14,marginTop:10,".center &, .zigzag &":Object(i.a)({minWidth:170},e.breakpoints.up("sm"),{fontSize:14,position:"absolute",top:18,left:-225,zIndex:2,marginTop:0}),".right &":{"& > div":{display:"flex",flexDirection:"column",alignItems:"flex-end"}}},makeDot:{height:14,width:14,borderRadius:"50%",display:"block",position:"absolute",left:19,top:35,zIndex:1,boxShadow:"0px 4px 4px -1px rgba(0,0,0,.25)",border:"2px solid white",boxSizing:"border-box",".right &":{left:"auto",right:19}}}})),c=a(2),m=a(53);t.a=function(e){var t=e.point,a=e.pointColor,n=e.head,i=e.content,o=l(),s=a?{backgroundColor:a}:{};return r.a.createElement(m.a,{className:Object(c.default)(o.timelineItem,"Cmt-timeline-item")},t?r.a.createElement(m.a,{className:Object(c.default)(o.timelineBadge,"Cmt-timeline-badge"),style:s},t):r.a.createElement(m.a,{component:"span",className:Object(c.default)(o.makeDot,"CmtTimeline-dot"),style:{backgroundColor:a}}),i,n?r.a.createElement(m.a,{className:Object(c.default)(o.timelineTime,"Cmt-timeline-time")},n):null)}},1463:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(121),o=a(24),l=Object(i.a)((function(e){return{timelineCard:{padding:"22px 26px 26px",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 8px -1px rgba(0,0,0,.2)",borderRadius:6,position:"relative","&:before, &:after":{content:'""',position:"absolute",borderStyle:"solid",display:"inline-flex"},"&:before":{borderColor:"transparent ".concat(Object(o.a)(e.palette.divider,.1)),borderWidth:"15px 15px 15px 0",left:-15,top:27,".right &":{left:"auto",right:-15,borderWidth:"15px 0 15px 15px"}},"&:after":{borderColor:"transparent ".concat(e.palette.background.paper),borderWidth:"14px 14px 14px 0",left:-14,top:27,".right &":{left:"auto",right:-14,borderWidth:"14px 0 14px 14px"}},"& .Cmt-timeline-root-inner":{"& > :last-child":{marginBottom:0}}}}})),c=a(2),m=function(e){var t=e.children,a=e.isWrapper,n=l();return a?r.a.createElement("div",{className:Object(c.default)(n.timelineCard,"Cmt-timeline-root")},r.a.createElement("div",{className:"Cmt-timeline-root-inner"},t)):r.a.createElement("div",{className:"Cmt-timeline-root-inner"},t)};m.defaultProps={isWrapper:!1};t.a=m},3515:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1066),o=a(1461),l=a(1462),c=a(41),m=a(1463),s=a(67),d=a(53),p=a(98),u=[{label:"Home",link:"/"},{label:"Custom Timelines",link:"/custom-timeline"},{label:"Center Align Timeline",isActive:!0}];t.default=function(){var e=p.c.timeline;return r.a.createElement(i.a,{heading:"Center Align Timeline",breadcrumbs:u},r.a.createElement(o.a,null,e.map((function(e,t){return r.a.createElement(l.a,{key:t,head:r.a.createElement(d.a,null,r.a.createElement(s.a,{src:e.avatar}),r.a.createElement(d.a,{component:"p",mb:0,mt:2},e.time)),point:r.a.createElement(c.a,{src:e.point,alt:e.title}),content:r.a.createElement(m.a,{isWrapper:!0},r.a.createElement(d.a,{component:"h2",fontSize:20,mt:0,mb:3},e.title),r.a.createElement("p",null,e.description))})}))))}}}]);
//# sourceMappingURL=140.a65b28c0.chunk.js.map