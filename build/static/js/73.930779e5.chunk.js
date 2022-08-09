(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[73],{1066:function(e,r,n){"use strict";var o=n(0),t=n.n(o),a=n(53),i=n(1069),l=n(582),p=n(27),s=n.n(p),c=n(2),m=s()((function(){return{pageFull:{width:"100%"}}}));r.a=function(e){var r=e.heading,n=e.breadcrumbs,o=e.children,p=e.className,s=e.restProps,g=m();return t.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},t.a.createElement(a.a,Object.assign({className:Object(c.default)(g.pageFull,p)},s),(r||n)&&t.a.createElement(i.d,{heading:r,breadcrumbComponent:n&&t.a.createElement(i.c,{items:n})}),o))}},1069:function(e,r,n){"use strict";n.d(r,"d",(function(){return u})),n.d(r,"c",(function(){return M})),n.d(r,"a",(function(){return v})),n.d(r,"b",(function(){return b}));var o=n(17),t=n(8),a=n(0),i=n.n(a),l=n(121),p=n(53),s=n(108),c=n(2),m=["heading","breadcrumbComponent","children"],g=Object(l.a)((function(e){return{pageHeaderRoot:Object(t.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(t.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),u=function(e){var r=e.heading,n=e.breadcrumbComponent,t=e.children,a=Object(o.a)(e,m),l=g();return i.a.createElement(p.a,Object.assign({className:Object(c.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},a),i.a.createElement(s.a,{component:"div",variant:"h1",className:Object(c.default)(l.titleRoot,"title")},r),i.a.createElement(p.a,{ml:{sm:"auto"}},n),t)},d=n(1110),f=n(62),h=["items"],x=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),M=function(e){var r=e.items,n=(Object(o.a)(e,h),x());return i.a.createElement(d.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},r.map((function(e,r){return e.isActive?i.a.createElement(s.a,{key:r,className:n.textSm,color:"textPrimary"},e.label):i.a.createElement(f.b,{key:r,className:Object(c.default)(n.textSm,n.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},w=n(926),y=n(35),E=n(182),k=n(1066),v=function(e){var r=e.SourceCodeComponent,n=e.SettingsComponent,o=e.children;return i.a.createElement(k.a,null,i.a.createElement(E.a,null,i.a.createElement(w.a,{item:!0,xs:12,md:7},i.a.createElement(u,{heading:"Preview"}),i.a.createElement(p.a,{mb:8},o),i.a.createElement(y.a,null,r)),i.a.createElement(w.a,{item:!0,xs:12,md:5},n)))},C=n(1071),b=function(e){var r=e.pageTitle,n=e.menus,o=e.children,t=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:r,isActive:!0}];return i.a.createElement(C.a,{pageTitle:r,breadcrumbs:t,menus:n},o)}},1071:function(e,r,n){"use strict";var o=n(8),t=n(0),a=n.n(t),i=n(53),l=n(984),p=n(108),s=n(919),c=n(920),m=n(976),g=n(121),u=n(1066),d=Object(g.a)((function(e){var r;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(r={width:"100%"},Object(o.a)(r,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(o.a)(r,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),r),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));r.a=function(e){var r=e.pageTitle,n=e.menus,o=e.breadcrumbs,t=e.children,g=d();return a.a.createElement(u.a,{heading:r,breadcrumbs:o},a.a.createElement(i.a,{className:g.root},a.a.createElement(i.a,{className:g.contentArea},t),a.a.createElement(l.a,{xsDown:!0},a.a.createElement(i.a,{className:g.contentSidebar},a.a.createElement(p.a,{component:"h4",variant:"h4"},"Contents"),a.a.createElement(s.a,null,n.map((function(e,r){return a.a.createElement(c.a,{key:r,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},a.a.createElement(m.a,{primary:e.label}))})))))))}},1439:function(e,r,n){var o={"./DrawingViewExample.txt":1440,"./GeoLocationExample.txt":1441,"./MapDirectionsExample.txt":1442,"./MapKmLayerExample.txt":1443,"./MapOverlayExample.txt":1444,"./MapPopupInfoExample.txt":1445,"./MarkerClustererExample.txt":1446,"./SimpleMapExample.txt":1447,"./StreetViewPanoramaExample.txt":1448,"./StyledMapExample.txt":1449,"./TrafficLayerExample.txt":1450};function t(e){var r=a(e);return n(r)}function a(e){if(!n.o(o,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return o[e]}t.keys=function(){return Object.keys(o)},t.resolve=a,e.exports=t,t.id=1439},1440:function(e,r,n){"use strict";n.r(r),r.default="import React from 'react';\r\nimport { GoogleMap, withGoogleMap } from 'react-google-maps';\r\nimport DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';\r\nimport { Box } from '@material-ui/core';\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\n\r\n/*\r\n * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools\r\n *\r\n * Note: requires the Google Maps drawing API library in your script src\r\n *\r\n * Credits: thanks @idolize for the contribution!\r\n */\r\n\r\nconst google = window.google;\r\n\r\nconst DrawingExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={new google.maps.LatLng(47.646935, -122.303763)}>\r\n    <DrawingManager\r\n      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}\r\n      defaultOptions={{\r\n        drawingControl: true,\r\n        drawingControlOptions: {\r\n          position: google.maps.ControlPosition.TOP_CENTER,\r\n          drawingModes: [\r\n            google.maps.drawing.OverlayType.CIRCLE,\r\n            google.maps.drawing.OverlayType.POLYGON,\r\n            google.maps.drawing.OverlayType.POLYLINE,\r\n            google.maps.drawing.OverlayType.RECTANGLE,\r\n          ],\r\n        },\r\n        circleOptions: {\r\n          fillColor: '#ff0000',\r\n          fillOpacity: 0.2,\r\n          strokeWeight: 3,\r\n          clickable: false,\r\n          editable: true,\r\n          zIndex: 1,\r\n        },\r\n        rectangleOptions: {\r\n          fillColor: '#ff0000',\r\n          fillOpacity: 0.2,\r\n          strokeWeight: 3,\r\n          clickable: false,\r\n          editable: true,\r\n          zIndex: 1,\r\n        },\r\n      }}\r\n    />\r\n  </GoogleMap>\r\n));\r\n\r\nconst DrawingViewExample = () => {\r\n  return (\r\n    <DrawingExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default DrawingViewExample;\r\n"},1441:function(e,r,n){"use strict";n.r(r),r.default="import React, { useEffect, useState } from 'react';\r\nimport { Circle, GoogleMap, InfoWindow, withGoogleMap } from 'react-google-maps';\r\nimport canUseDOM from 'can-use-dom';\r\nimport raf from 'raf';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst geoLocationExample =\r\n  canUseDOM && navigator.geolocation\r\n    ? navigator.geolocation\r\n    : {\r\n        getCurrentPosition(success, failure) {\r\n          failure(`Your browser doesn't support geolocation.`);\r\n        },\r\n      };\r\n\r\nconst GeolocationExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={10} center={props.center}>\r\n    {props.center && (\r\n      <InfoWindow position={props.center}>\r\n        <Box>{props.content}</Box>\r\n      </InfoWindow>\r\n    )}\r\n    {props.center && (\r\n      <Circle\r\n        center={props.center}\r\n        radius={props.radius}\r\n        options={{\r\n          fillColor: 'red',\r\n          fillOpacity: 0.2,\r\n          strokeColor: 'red',\r\n          strokeOpacity: 1,\r\n          strokeWeight: 1,\r\n        }}\r\n      />\r\n    )}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation\r\n *\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst GeoLocationExample = () => {\r\n  const [center, setCenter] = useState(null);\r\n  const [content, setContent] = useState(null);\r\n  const [radius, setRadius] = useState(6000);\r\n\r\n  let isUnmounted = false;\r\n\r\n  useEffect(() => {\r\n    const tick = () => {\r\n      if (isUnmounted) {\r\n        return;\r\n      }\r\n      setRadius(Math.max(radius - 20, 0));\r\n\r\n      if (radius > 200) {\r\n        raf(tick);\r\n      }\r\n    };\r\n    geoLocationExample.getCurrentPosition(\r\n      position => {\r\n        if (isUnmounted) {\r\n          return;\r\n        }\r\n        setCenter({\r\n          lat: position.coords.latitude,\r\n          lng: position.coords.longitude,\r\n        });\r\n        setContent(`Location found using HTML5.`);\r\n        raf(tick);\r\n      },\r\n      reason => {\r\n        if (isUnmounted) {\r\n          return;\r\n        }\r\n\r\n        setCenter({\r\n          lat: 60,\r\n          lng: 105,\r\n        });\r\n        setContent(`Error: The Geolocation service failed (${reason}).`);\r\n      },\r\n    );\r\n\r\n    return () => {\r\n      isUnmounted = true;\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <GeolocationExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={center}\r\n      content={content}\r\n      radius={radius}\r\n    />\r\n  );\r\n};\r\n\r\nexport default GeoLocationExample;\r\n"},1442:function(e,r,n){"use strict";n.r(r),r.default="import React, { useEffect, useState } from 'react';\r\nimport { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst google = window.google;\r\n\r\nconst DirectionsExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={7} defaultCenter={props.center}>\r\n    {props.directions && <DirectionsRenderer directions={props.directions} />}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst MapDirectionsExample = () => {\r\n  const origin = new google.maps.LatLng(41.85073, -87.65126);\r\n  const destination = new google.maps.LatLng(41.85258, -87.65141);\r\n  const [directions, setDirections] = useState(null);\r\n\r\n  useEffect(() => {\r\n    const DirectionsService = new google.maps.DirectionsService();\r\n\r\n    DirectionsService.route(\r\n      {\r\n        origin: origin,\r\n        destination: destination,\r\n        travelMode: google.maps.TravelMode.DRIVING,\r\n      },\r\n      (result, status) => {\r\n        if (status === google.maps.DirectionsStatus.OK) {\r\n          setDirections(result);\r\n        } else {\r\n          console.error(`error fetching directions ${result}`);\r\n        }\r\n      },\r\n    );\r\n  }, [destination, origin]);\r\n\r\n  return (\r\n    <DirectionsExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={origin}\r\n      directions={directions}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapDirectionsExample;\r\n"},1443:function(e,r,n){"use strict";n.r(r),r.default="import React from 'react';\r\nimport { GoogleMap, KmlLayer, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst KmlLayerExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 41.876, lng: -87.624 }}>\r\n    <KmlLayer url=\"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml\" options={{ preserveViewport: true }} />\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst MapKmLayerExample = () => {\r\n  return (\r\n    <KmlLayerExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapKmLayerExample;\r\n"},1444:function(e,r,n){"use strict";n.r(r),r.default="import React, { useState } from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport { GoogleMap, OverlayView, withGoogleMap } from 'react-google-maps';\r\nimport { Box, Typography } from '@material-ui/core';\r\n\r\nconst STYLES = {\r\n  mapContainer: {\r\n    height: 500,\r\n  },\r\n  overlayView: {\r\n    background: '#fff',\r\n    border: '1px solid #ccc',\r\n    padding: 15,\r\n  },\r\n};\r\n\r\nfunction getPixelPositionOffset(width, height) {\r\n  return { x: -(width / 2), y: -(height / 2) };\r\n}\r\n\r\nconst OverlayViewExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }}>\r\n    <OverlayView\r\n      position={{ lat: 47.646935, lng: -122.303763 }}\r\n      /*\r\n       * An alternative to specifying position is specifying bounds.\r\n       * bounds can either be an instance of google.maps.LatLngBounds\r\n       * or an object in the following format:\r\n       * bounds={{\r\n       *    ne: { lat: 62.400471, lng: -150.005608 },\r\n       *    sw: { lat: 62.281819, lng: -150.287132 }\r\n       * }}\r\n       */\r\n      /*\r\n       * 1. Specify the pane the OverlayView will be rendered to. For\r\n       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.\r\n       *    Defaults to `OverlayView.OVERLAY_LAYER`.\r\n       */\r\n      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}\r\n      /*\r\n       * 2. Tweak the OverlayView's pixel position. In this case, we're\r\n       *    centering the content.\r\n       */\r\n      getPixelPositionOffset={getPixelPositionOffset}\r\n      /*\r\n       * 3. Create OverlayView content using standard React components.\r\n       */\r\n    >\r\n      <Box style={STYLES.overlayView}>\r\n        <Typography component=\"h1\" variant=\"h1\">\r\n          OverlayView\r\n        </Typography>\r\n        <Button variant=\"contained\" color=\"primary\" onClick={props.onClick}>\r\n          I have been clicked {props.count} time{props.count === 1 ? `` : `s`}\r\n        </Button>\r\n      </Box>\r\n    </OverlayView>\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst MapOverlayExample = () => {\r\n  const [count, setCount] = useState(0);\r\n\r\n  const handleClick = () => {\r\n    setCount(count + 1);\r\n  };\r\n\r\n  return (\r\n    <OverlayViewExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      count={count}\r\n      onClick={handleClick}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapOverlayExample;\r\n"},1445:function(e,r,n){"use strict";n.r(r),r.default='import React, { useState } from \'react\';\r\nimport { GoogleMap, InfoWindow, Marker, withGoogleMap } from \'react-google-maps\';\r\nimport { Box, Typography } from \'@material-ui/core\';\r\n\r\nconst google = window.google;\r\n\r\nconst PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={15} center={props.center}>\r\n    {props.markers.map((marker, index) => (\r\n      <Marker\r\n        defaultIcon={require(\'../../../../assets/images/marker.png\'}\r\n        key={index}\r\n        position={marker.position}\r\n        onClick={() => props.onMarkerClick(marker)}>\r\n        {/*\r\n          Show info window only if the \'showInfo\' key of the marker is true.\r\n          That is, when the Marker pin has been clicked and \'onCloseClick\' has been\r\n          Successfully fired.\r\n        */}\r\n        {marker.showInfo && (\r\n          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>\r\n            <Box>{marker.infoContent}</Box>\r\n          </InfoWindow>\r\n        )}\r\n      </Marker>\r\n    ))}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n *\r\n *  Add <script src="https://maps.googleapis.com/maps/api/js"><\/script>\r\n *  to your HTML to provide google.maps reference\r\n *\r\n *  @author: @chiwoojo\r\n */\r\nconst MapPopupInfoExample = () => {\r\n  const center = {\r\n    lat: 47.646935,\r\n    lng: -122.303763,\r\n  };\r\n\r\n  const [markers, setMarkers] = useState([\r\n    {\r\n      position: new google.maps.LatLng(47.646145, -122.303763),\r\n      showInfo: false,\r\n      infoContent: (\r\n        <Box display="flex">\r\n          <Box>\r\n            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\r\n              <path\r\n                d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0\r\n              .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5\r\n              3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11\r\n              5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0\r\n              1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"\r\n              />\r\n            </svg>\r\n          </Box>\r\n          <Box ml={1}>\r\n            <Typography>UW Medical Center</Typography>\r\n            <Typography>1959 NE Pacific St</Typography>\r\n            <Typography>Seattle, WA 98195</Typography>\r\n          </Box>\r\n        </Box>\r\n      ),\r\n    },\r\n    {\r\n      position: new google.maps.LatLng(47.647935, -122.303763),\r\n      showInfo: false,\r\n      infoContent: (\r\n        <Box display="flex">\r\n          <Box>\r\n            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\r\n              <path\r\n                d="M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672\r\n              13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5\r\n              1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16\r\n              8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368\r\n              2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"\r\n              />\r\n            </svg>\r\n          </Box>\r\n          <Box ml={1}>\r\n            <Typography>University of Washington Intramural Activities (IMA) Building</Typography>\r\n            <Typography>3924 Montlake Blvd NE</Typography>\r\n            <Typography>Seattle, WA 98195</Typography>\r\n          </Box>\r\n        </Box>\r\n      ),\r\n    },\r\n  ]);\r\n\r\n  // Toggle to \'true\' to show InfoWindow and re-renders simple\r\n  const handleMarkerClick = targetMarker => {\r\n    setMarkers(() => {\r\n      markers.map(marker => {\r\n        if (marker === targetMarker) {\r\n          return {\r\n            ...marker,\r\n            showInfo: true,\r\n          };\r\n        }\r\n        return marker;\r\n      });\r\n    });\r\n  };\r\n\r\n  const handleMarkerClose = targetMarker => {\r\n    setMarkers(() => {\r\n      markers.map(marker => {\r\n        if (marker === targetMarker) {\r\n          return {\r\n            ...marker,\r\n            showInfo: false,\r\n          };\r\n        }\r\n        return marker;\r\n      });\r\n    });\r\n  };\r\n\r\n  return (\r\n    <PopUpInfoWindowExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={center}\r\n      markers={markers}\r\n      onMarkerClick={handleMarkerClick}\r\n      onMarkerClose={handleMarkerClose}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapPopupInfoExample;\r\n'},1446:function(e,r,n){"use strict";n.r(r),r.default="import React, { useEffect, useState } from 'react';\r\n\r\nimport fetch from 'isomorphic-fetch';\r\nimport { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';\r\nimport MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst MarkerClustererExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>\r\n    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>\r\n      {props.markers.map(marker => (\r\n        <Marker position={{ lat: marker.latitude, lng: marker.longitude }} key={marker.photo_id} />\r\n      ))}\r\n    </MarkerClusterer>\r\n  </GoogleMap>\r\n));\r\n\r\nconst MarkerClustererExample = () => {\r\n  const [markers, setMarkers] = useState([]);\r\n\r\n  useEffect(() => {\r\n    fetch(\r\n      `https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,\r\n    )\r\n      .then(res => res.json())\r\n      .then(data => {\r\n        setMarkers(data.photos);\r\n      });\r\n  }, []);\r\n\r\n  return (\r\n    <MarkerClustererExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      markers={markers}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MarkerClustererExample;\r\n"},1447:function(e,r,n){"use strict";n.r(r),r.default="import React from 'react';\r\nimport { GoogleMap, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\n/*\r\n * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple\r\n */\r\n\r\nconst SimpleMapExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }} />\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst SimpleMapExample = () => {\r\n  return (\r\n    <SimpleMapExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default SimpleMapExample;\r\n"},1448:function(e,r,n){"use strict";n.r(r),r.default="import React from 'react';\r\nimport { GoogleMap, OverlayView, StreetViewPanorama, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst coordinates = { lat: 49.2853171, lng: -123.1119202 };\r\n\r\nconst STYLES = {\r\n  overlayView: {\r\n    background: `red`,\r\n    color: `white`,\r\n    padding: 5,\r\n    borderRadius: `50%`,\r\n  },\r\n};\r\n\r\nfunction getPixelPositionOffset(width, height) {\r\n  return { x: -(width / 2), y: -(height / 2) };\r\n}\r\n\r\nconst StreetViewPanoramaExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={8} defaultCenter={coordinates}>\r\n    <StreetViewPanorama defaultPosition={coordinates} visible>\r\n      <OverlayView\r\n        position={{ lat: 49.28590291211115, lng: -123.11248166065218 }}\r\n        mapPaneName={OverlayView.OVERLAY_LAYER}\r\n        getPixelPositionOffset={getPixelPositionOffset}>\r\n        <div style={STYLES.overlayView}>OverlayView</div>\r\n      </OverlayView>\r\n    </StreetViewPanorama>\r\n  </GoogleMap>\r\n));\r\n\r\n/**\r\n * You can pass in an `containerElement` to render `StreetViewPanorama` in its own containers\r\n * At this point the `GoogleMap` wrapper and `withGoogleMap` HOC become optional,\r\n * so you can either render a map and StreetView at the same time,\r\n * or just the StreetView on its own\r\n *    <StreetViewPanorama\r\n *      containerElement={<div style={{ width: `100%`, height: `100%` }} />}\r\n *      defaultPosition={coordinates}\r\n *      visible\r\n *    />\r\n */\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst StreetViewPanoramaExample = () => {\r\n  return (\r\n    <StreetViewPanoramaExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default StreetViewPanoramaExample;\r\n"},1449:function(e,r,n){"use strict";n.r(r),r.default="import React from 'react';\r\nimport { GoogleMap, withGoogleMap } from 'react-google-maps';\r\n\r\nimport InfoBox from 'react-google-maps/lib/components/addons/InfoBox';\r\n\r\nimport fancyMapStyles from '../data/fancyMapStyles.json';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst google = window.google;\r\n\r\nconst StyledMapExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={11} defaultCenter={props.center} defaultOptions={{ styles: fancyMapStyles }}>\r\n    <InfoBox defaultPosition={props.center} options={{ closeBoxURL: ``, enableEventPropagation: true }}>\r\n      <Box\r\n        style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `20px` }}\r\n        onClick={props.onClickFromChildrenOfInfoBox}>\r\n        <Box fontSize={16} color=\"#08233B\">\r\n          Taipei\r\n        </Box>\r\n      </Box>\r\n    </InfoBox>\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst StyledMapExample = () => {\r\n  const handleClickFromChildrenOfInfoBox = e => {\r\n    console.log(e);\r\n  };\r\n\r\n  return (\r\n    <StyledMapExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={new google.maps.LatLng(44.8799929, 21.3190073)}\r\n      onClickFromChildrenOfInfoBox={handleClickFromChildrenOfInfoBox}\r\n    />\r\n  );\r\n};\r\n\r\nexport default StyledMapExample;\r\n"},1450:function(e,r,n){"use strict";n.r(r),r.default="import React from 'react';\r\nimport { GoogleMap, TrafficLayer, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst TrafficLayerExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }}>\r\n    <TrafficLayer autoUpdate />\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst TrafficLayerExample = () => {\r\n  return (\r\n    <TrafficLayerExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default TrafficLayerExample;\r\n"},3265:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DrawingManager=void 0;var o=d(n(1165)),t=d(n(1156)),a=d(n(1157)),i=d(n(1158)),l=d(n(1159)),p=d(n(1160)),s=d(n(1327)),c=d(n(0)),m=d(n(4)),g=n(1173),u=n(1166);function d(e){return e&&e.__esModule?e:{default:e}}var f=r.DrawingManager=function(e){function r(e,n){(0,a.default)(this,r);var i=(0,l.default)(this,(r.__proto__||(0,t.default)(r)).call(this,e,n));(0,s.default)(google.maps.drawing,'Did you include "libraries=drawing" in the URL?');var p=new google.maps.drawing.DrawingManager;return(0,g.construct)(r.propTypes,x,i.props,p),p.setMap(i.context[u.MAP]),i.state=(0,o.default)({},u.DRAWING_MANAGER,p),i}return(0,p.default)(r,e),(0,i.default)(r,[{key:"componentDidMount",value:function(){(0,g.componentDidMount)(this,this.state[u.DRAWING_MANAGER],h)}},{key:"componentDidUpdate",value:function(e){(0,g.componentDidUpdate)(this,this.state[u.DRAWING_MANAGER],h,x,e)}},{key:"componentWillUnmount",value:function(){(0,g.componentWillUnmount)(this);var e=this.state[u.DRAWING_MANAGER];e&&e.setMap(null)}},{key:"render",value:function(){return!1}},{key:"getDrawingMode",value:function(){return this.state[u.DRAWING_MANAGER].getDrawingMode()}}]),r}(c.default.PureComponent);f.propTypes={defaultDrawingMode:m.default.any,defaultOptions:m.default.any,drawingMode:m.default.any,options:m.default.any,onCircleComplete:m.default.func,onMarkerComplete:m.default.func,onOverlayComplete:m.default.func,onPolygonComplete:m.default.func,onPolylineComplete:m.default.func,onRectangleComplete:m.default.func},f.contextTypes=(0,o.default)({},u.MAP,m.default.object),r.default=f;var h={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},x={drawingMode:function(e,r){e.setDrawingMode(r)},options:function(e,r){e.setOptions(r)}}},3640:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return y}));var o=n(0),t=n.n(o),a=n(53),i=n(108),l=n(331),p=n(398),s=n(1487),c=n(3265),m=n.n(c),g=window.google,u=Object(s.withGoogleMap)((function(){return t.a.createElement(s.GoogleMap,{defaultZoom:15,defaultCenter:new g.maps.LatLng(47.646935,-122.303763)},t.a.createElement(m.a,{defaultDrawingMode:g.maps.drawing.OverlayType.CIRCLE,defaultOptions:{drawingControl:!0,drawingControlOptions:{position:g.maps.ControlPosition.TOP_CENTER,drawingModes:[g.maps.drawing.OverlayType.CIRCLE,g.maps.drawing.OverlayType.POLYGON,g.maps.drawing.OverlayType.POLYLINE,g.maps.drawing.OverlayType.RECTANGLE]},circleOptions:{fillColor:"#ff0000",fillOpacity:.2,strokeWeight:3,clickable:!1,editable:!0,zIndex:1},rectangleOptions:{fillColor:"#ff0000",fillOpacity:.2,strokeWeight:3,clickable:!1,editable:!0,zIndex:1}}}))})),d=function(){return t.a.createElement(u,{loadingElement:t.a.createElement(a.a,{height:1}),containerElement:t.a.createElement(a.a,{height:{xs:300,sm:400}}),mapElement:t.a.createElement(a.a,{height:1})})},f=n(1071),h=Object(l.a)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),x=n(1439),M=[{label:"Drawing View",link:"drawing-view",component:t.a.createElement(d,null),filename:"./DrawingViewExample.txt"}],w=[{label:"Home",link:"/"},{label:"Maps",link:"/visualization/map"},{label:"Drawing View Map",isActive:!0}];function y(){var e=h();return t.a.createElement(f.a,{pageTitle:"Drawing View Map",menus:M,breadcrumbs:w},M.map((function(r,n){return t.a.createElement(a.a,{key:n,id:r.link,className:e.section},t.a.createElement(i.a,{component:"h3",variant:"inherit",className:e.sectionHeading},r.label),t.a.createElement(p.a,{code:x(r.filename).default,language:"jsx"},r.component))})))}}}]);
//# sourceMappingURL=73.930779e5.chunk.js.map