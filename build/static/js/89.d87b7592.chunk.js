(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[89],{1066:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(53),o=r(1069),l=r(582),c=r(27),s=r.n(c),m=r(2),u=s()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,r=e.breadcrumbs,n=e.children,c=e.className,s=e.restProps,p=u();return a.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},a.a.createElement(i.a,Object.assign({className:Object(m.default)(p.pageFull,c)},s),(t||r)&&a.a.createElement(o.d,{heading:t,breadcrumbComponent:r&&a.a.createElement(o.c,{items:r})}),n))}},1069:function(e,t,r){"use strict";r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return v})),r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return S}));var n=r(17),a=r(8),i=r(0),o=r.n(i),l=r(121),c=r(53),s=r(108),m=r(2),u=["heading","breadcrumbComponent","children"],p=Object(l.a)((function(e){return{pageHeaderRoot:Object(a.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(a.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),f=function(e){var t=e.heading,r=e.breadcrumbComponent,a=e.children,i=Object(n.a)(e,u),l=p();return o.a.createElement(c.a,Object.assign({className:Object(m.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),o.a.createElement(s.a,{component:"div",variant:"h1",className:Object(m.default)(l.titleRoot,"title")},t),o.a.createElement(c.a,{ml:{sm:"auto"}},r),a)},h=r(1110),d=r(62),g=["items"],y=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),v=function(e){var t=e.items,r=(Object(n.a)(e,g),y());return o.a.createElement(h.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?o.a.createElement(s.a,{key:t,className:r.textSm,color:"textPrimary"},e.label):o.a.createElement(d.b,{key:t,className:Object(m.default)(r.textSm,r.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},b=r(926),k=r(35),A=r(182),E=r(1066),T=function(e){var t=e.SourceCodeComponent,r=e.SettingsComponent,n=e.children;return o.a.createElement(E.a,null,o.a.createElement(A.a,null,o.a.createElement(b.a,{item:!0,xs:12,md:7},o.a.createElement(f,{heading:"Preview"}),o.a.createElement(c.a,{mb:8},n),o.a.createElement(k.a,null,t)),o.a.createElement(b.a,{item:!0,xs:12,md:5},r)))},x=r(1071),S=function(e){var t=e.pageTitle,r=e.menus,n=e.children,a=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return o.a.createElement(x.a,{pageTitle:t,breadcrumbs:a,menus:r},n)}},1071:function(e,t,r){"use strict";var n=r(8),a=r(0),i=r.n(a),o=r(53),l=r(984),c=r(108),s=r(919),m=r(920),u=r(976),p=r(121),f=r(1066),h=Object(p.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,r=e.menus,n=e.breadcrumbs,a=e.children,p=h();return i.a.createElement(f.a,{heading:t,breadcrumbs:n},i.a.createElement(o.a,{className:p.root},i.a.createElement(o.a,{className:p.contentArea},a),i.a.createElement(l.a,{xsDown:!0},i.a.createElement(o.a,{className:p.contentSidebar},i.a.createElement(c.a,{component:"h4",variant:"h4"},"Contents"),i.a.createElement(s.a,null,r.map((function(e,t){return i.a.createElement(m.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},i.a.createElement(u.a,{primary:e.label}))})))))))}},1110:function(e,t,r){"use strict";var n=r(1),a=r(116),i=r(7),o=r(0),l=(r(267),r(2)),c=r(10),s=r(108),m=r(24),u=r(18),p=Object(u.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=r(332);var h=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=Object(i.a)(e,["classes"]);return o.createElement(f.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},r),o.createElement(p,{className:t.icon}))}));var d=o.forwardRef((function(e,t){var r=e.children,c=e.classes,m=e.className,u=e.component,p=void 0===u?"nav":u,f=e.expandText,d=void 0===f?"Show path":f,g=e.itemsAfterCollapse,y=void 0===g?1:g,v=e.itemsBeforeCollapse,b=void 0===v?1:v,k=e.maxItems,A=void 0===k?8:k,E=e.separator,T=void 0===E?"/":E,x=Object(i.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=o.useState(!1),O=S[0],w=S[1],C=o.Children.toArray(r).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return o.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return o.createElement(s.a,Object(n.a)({ref:t,component:p,color:"textSecondary",className:Object(l.default)(c.root,m)},x),o.createElement("ol",{className:c.ol},function(e,t,r){return e.reduce((function(n,a,i){return i<e.length-1?n=n.concat(a,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},r)):n.push(a),n}),[])}(O||A&&C.length<=A?C:function(e){return b+y>=e.length?e:[].concat(Object(a.a)(e.slice(0,b)),[o.createElement(h,{"aria-label":d,key:"ellipsis",onClick:function(e){w(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(a.a)(e.slice(e.length-y,e.length)))}(C),c.separator,T)))}));t.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(d)},1465:function(e,t,r){"use strict";var n=r(29),a=r(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(0)),o=(0,n(r(33)).default)(i.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=o},2874:function(e,t,r){var n={"./ActionAlerts.txt":2875,"./ColorAlerts.txt":2876,"./DescriptionAlerts.txt":2877,"./FilledAlerts.txt":2878,"./IconAlerts.txt":2879,"./OutlinedAlerts.txt":2880,"./SimpleAlerts.txt":2881,"./TransitionAlerts.txt":2882};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=2874},2875:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Alert from '@material-ui/lab/Alert';\r\nimport Button from '@material-ui/core/Button';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function ActionAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert onClose={() => {}}>This is a success alert \u2014 check it out!</Alert>\r\n      <Alert\r\n        action={\r\n          <Button color=\"inherit\" size=\"small\">\r\n            UNDO\r\n          </Button>\r\n        }>\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n    </Box>\r\n  );\r\n}\r\n"},2876:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Alert from '@material-ui/lab/Alert';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function ColorAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert severity=\"success\" color=\"info\">\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n    </Box>\r\n  );\r\n}\r\n"},2877:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport { Alert, AlertTitle } from '@material-ui/lab';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function DescriptionAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert severity=\"error\">\r\n        <AlertTitle>Error</AlertTitle>\r\n        This is an error alert \u2014 <strong>check it out!</strong>\r\n      </Alert>\r\n      <Alert severity=\"warning\">\r\n        <AlertTitle>Warning</AlertTitle>\r\n        This is a warning alert \u2014 <strong>check it out!</strong>\r\n      </Alert>\r\n      <Alert severity=\"info\">\r\n        <AlertTitle>Info</AlertTitle>\r\n        This is an info alert \u2014 <strong>check it out!</strong>\r\n      </Alert>\r\n      <Alert severity=\"success\">\r\n        <AlertTitle>Success</AlertTitle>\r\n        This is a success alert \u2014 <strong>check it out!</strong>\r\n      </Alert>\r\n    </Box>\r\n  );\r\n}\r\n"},2878:function(e,t,r){"use strict";r.r(t),t.default='import React from \'react\';\r\nimport { makeStyles } from \'@material-ui/core/styles\';\r\nimport Alert from \'@material-ui/lab/Alert\';\r\nimport { Box } from \'@material-ui/core\';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: \'100%\',\r\n    \'& > * + *\': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function SimpleAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert variant="filled" severity="error">\r\n        This is an error alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert variant="filled" severity="warning">\r\n        This is a warning alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert variant="filled" severity="info">\r\n        This is an info alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert variant="filled" severity="success">\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n    </Box>\r\n  );\r\n}\r\n'},2879:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Alert from '@material-ui/lab/Alert';\r\nimport CheckIcon from '@material-ui/icons/Check';\r\nimport CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function IconAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert icon={<CheckIcon fontSize=\"inherit\" />} severity=\"success\">\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize=\"inherit\" /> }}>\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert icon={false} severity=\"success\">\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n    </Box>\r\n  );\r\n}\r\n"},2880:function(e,t,r){"use strict";r.r(t),t.default='import React from \'react\';\r\nimport { makeStyles } from \'@material-ui/core/styles\';\r\nimport Alert from \'@material-ui/lab/Alert\';\r\nimport { Box } from \'@material-ui/core\';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: \'100%\',\r\n    \'& > * + *\': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function SimpleAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert variant="outlined" severity="error">\r\n        This is an error alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert variant="outlined" severity="warning">\r\n        This is a warning alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert variant="outlined" severity="info">\r\n        This is an info alert \u2014 check it out!\r\n      </Alert>\r\n      <Alert variant="outlined" severity="success">\r\n        This is a success alert \u2014 check it out!\r\n      </Alert>\r\n    </Box>\r\n  );\r\n}\r\n'},2881:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Alert from '@material-ui/lab/Alert';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function SimpleAlerts() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Alert severity=\"error\">This is an error alert \u2014 check it out!</Alert>\r\n      <Alert severity=\"warning\">This is a warning alert \u2014 check it out!</Alert>\r\n      <Alert severity=\"info\">This is an info alert \u2014 check it out!</Alert>\r\n      <Alert severity=\"success\">This is a success alert \u2014 check it out!</Alert>\r\n    </Box>\r\n  );\r\n}\r\n"},2882:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Alert from '@material-ui/lab/Alert';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport Collapse from '@material-ui/core/Collapse';\r\nimport Button from '@material-ui/core/Button';\r\nimport CloseIcon from '@material-ui/icons/Close';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    width: '100%',\r\n    '& > * + *': {\r\n      marginTop: theme.spacing(4),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function TransitionAlerts() {\r\n  const classes = useStyles();\r\n  const [open, setOpen] = React.useState(true);\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Collapse in={open}>\r\n        <Alert\r\n          action={\r\n            <IconButton\r\n              aria-label=\"close\"\r\n              color=\"inherit\"\r\n              size=\"small\"\r\n              onClick={() => {\r\n                setOpen(false);\r\n              }}>\r\n              <CloseIcon fontSize=\"inherit\" />\r\n            </IconButton>\r\n          }>\r\n          Close me!\r\n        </Alert>\r\n      </Collapse>\r\n      <Button\r\n        disabled={open}\r\n        variant=\"outlined\"\r\n        onClick={() => {\r\n          setOpen(true);\r\n        }}>\r\n        Re-open\r\n      </Button>\r\n    </Box>\r\n  );\r\n}\r\n"},3564:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Y}));var n=r(0),a=r.n(n),i=r(1069),o=r(53),l=r(108),c=r(331),s=r(397),m=r(121),u=r(394),p=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function f(){var e=p();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{severity:"error"},"This is an error alert \u2014 check it out!"),a.a.createElement(u.a,{severity:"warning"},"This is a warning alert \u2014 check it out!"),a.a.createElement(u.a,{severity:"info"},"This is an info alert \u2014 check it out!"),a.a.createElement(u.a,{severity:"success"},"This is a success alert \u2014 check it out!"))}var h=r(1),d=r(7),g=r(10),y=r(2),v=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=Object(d.a)(e,["classes","className"]);return n.createElement(l.a,Object(h.a)({gutterBottom:!0,component:"div",ref:t,className:Object(y.default)(r.root,a)},i))})),b=Object(g.a)((function(e){return{root:{fontWeight:e.typography.fontWeightMedium,marginTop:-2}}}),{name:"MuiAlertTitle"})(v),k=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function A(){var e=k();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{severity:"error"},a.a.createElement(b,null,"Error"),"This is an error alert \u2014 ",a.a.createElement("strong",null,"check it out!")),a.a.createElement(u.a,{severity:"warning"},a.a.createElement(b,null,"Warning"),"This is a warning alert \u2014 ",a.a.createElement("strong",null,"check it out!")),a.a.createElement(u.a,{severity:"info"},a.a.createElement(b,null,"Info"),"This is an info alert \u2014 ",a.a.createElement("strong",null,"check it out!")),a.a.createElement(u.a,{severity:"success"},a.a.createElement(b,null,"Success"),"This is a success alert \u2014 ",a.a.createElement("strong",null,"check it out!")))}var E=r(381),T=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function x(){var e=T();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{onClose:function(){}},"This is a success alert \u2014 check it out!"),a.a.createElement(u.a,{action:a.a.createElement(E.a,{color:"inherit",size:"small"},"UNDO")},"This is a success alert \u2014 check it out!"))}var S=r(9),O=r(265),w=r(391),C=r(128),B=r.n(C),j=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function N(){var e=j(),t=a.a.useState(!0),r=Object(S.a)(t,2),n=r[0],i=r[1];return a.a.createElement(o.a,{className:e.root},a.a.createElement(w.a,{in:n},a.a.createElement(u.a,{action:a.a.createElement(O.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){i(!1)}},a.a.createElement(B.a,{fontSize:"inherit"}))},"Close me!")),a.a.createElement(E.a,{disabled:n,variant:"outlined",onClick:function(){i(!0)}},"Re-open"))}var R=r(1465),I=r.n(R),z=r(470),D=r.n(z),M=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function F(){var e=M();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{icon:a.a.createElement(I.a,{fontSize:"inherit"}),severity:"success"},"This is a success alert \u2014 check it out!"),a.a.createElement(u.a,{iconMapping:{success:a.a.createElement(D.a,{fontSize:"inherit"})}},"This is a success alert \u2014 check it out!"),a.a.createElement(u.a,{icon:!1,severity:"success"},"This is a success alert \u2014 check it out!"))}var H=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function W(){var e=H();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{variant:"outlined",severity:"error"},"This is an error alert \u2014 check it out!"),a.a.createElement(u.a,{variant:"outlined",severity:"warning"},"This is a warning alert \u2014 check it out!"),a.a.createElement(u.a,{variant:"outlined",severity:"info"},"This is an info alert \u2014 check it out!"),a.a.createElement(u.a,{variant:"outlined",severity:"success"},"This is a success alert \u2014 check it out!"))}var L=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function P(){var e=L();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{variant:"filled",severity:"error"},"This is an error alert \u2014 check it out!"),a.a.createElement(u.a,{variant:"filled",severity:"warning"},"This is a warning alert \u2014 check it out!"),a.a.createElement(u.a,{variant:"filled",severity:"info"},"This is an info alert \u2014 check it out!"),a.a.createElement(u.a,{variant:"filled",severity:"success"},"This is a success alert \u2014 check it out!"))}var U=Object(m.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function _(){var e=U();return a.a.createElement(o.a,{className:e.root},a.a.createElement(u.a,{severity:"success",color:"info"},"This is a success alert \u2014 check it out!"))}var J=Object(c.a)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),q=r(2874),V=[{label:"Simple alerts",link:"simple-alerts",component:a.a.createElement(f,null),filename:"./SimpleAlerts.txt"},{label:"Description",link:"description",component:a.a.createElement(A,null),filename:"./DescriptionAlerts.txt"},{label:"Actions",link:"actions",component:a.a.createElement(x,null),filename:"./ActionAlerts.txt"},{label:"Transition",link:"transition",component:a.a.createElement(N,null),filename:"./TransitionAlerts.txt"},{label:"Icons",link:"icons",component:a.a.createElement(F,null),filename:"./IconAlerts.txt"},{label:"Outlined",link:"outlined",component:a.a.createElement(W,null),filename:"./OutlinedAlerts.txt"},{label:"Filled",link:"filled",component:a.a.createElement(P,null),filename:"./FilledAlerts.txt"},{label:"Color",link:"color",component:a.a.createElement(_,null),filename:"./ColorAlerts.txt"}];function Y(){var e=J();return a.a.createElement(i.b,{pageTitle:"Alert",menus:V},V.map((function(t,r){return a.a.createElement(o.a,{key:r,id:t.link,className:e.section},a.a.createElement(l.a,{component:"h3",variant:"inherit",className:e.sectionHeading},t.label),a.a.createElement(s.a,{code:q(t.filename).default,language:"jsx"},t.component))})))}}}]);
//# sourceMappingURL=89.d87b7592.chunk.js.map