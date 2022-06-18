"use strict";(self.webpackChunkkanban_neosoft=self.webpackChunkkanban_neosoft||[]).push([[485],{3485:function(t,e,r){r.r(e),r.d(e,{default:function(){return ht}});var n=r(2791),a=r(9649),i=r(5633),o=r.n(i),l=r(8111),c=r.n(l),s=r(4786),u=r.n(s),f=r(3629),p=r.n(f),h=r(1694),y=r.n(h),d=r(5195),m=r(5185),v=r(6044),b=r(7241);function g(){return g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},g.apply(this,arguments)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(c){a=!0,i=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function w(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function j(t){var e=t.offset,r=t.layout,a=t.width,i=t.dataKey,o=t.data,l=t.dataPointFormatter,c=t.xAxis,s=t.yAxis,u=w(t,["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"]),f=(0,b.L6)(u),p=o.map((function(t,o){var u=l(t,i),p=u.x,h=u.y,y=u.value,d=u.errorVal;if(!d)return null;var m,b,O=[];if(Array.isArray(d)){var w=x(d,2);m=w[0],b=w[1]}else m=b=d;if("vertical"===r){var j=c.scale,k=h+e,A=k+a,P=k-a,E=j(y-m),S=j(y+b);O.push({x1:S,y1:A,x2:S,y2:P}),O.push({x1:E,y1:k,x2:S,y2:k}),O.push({x1:E,y1:A,x2:E,y2:P})}else if("horizontal"===r){var D=s.scale,z=p+e,N=z-a,C=z+a,R=D(y-m),I=D(y+b);O.push({x1:N,y1:I,x2:C,y2:I}),O.push({x1:z,y1:R,x2:z,y2:I}),O.push({x1:N,y1:R,x2:C,y2:R})}return n.createElement(v.m,g({className:"recharts-errorBar",key:"bar-".concat(o)},f),O.map((function(t,e){return n.createElement("line",g({},t,{key:"line-".concat(e)}))})))}));return n.createElement(v.m,{className:"recharts-errorBars"},p)}j.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"},j.displayName="ErrorBar";var k=r(1048),A=r(7970),P=r(587),E=r(3031),S=r(6768),D=r(6926);function z(t){return z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function N(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function C(){return C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},C.apply(this,arguments)}function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=L(t);if(e){var a=L(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return V(this,r)}}function V(t,e){return!e||"object"!==z(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var K=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(l,t);var e,r,a,i=T(l);function l(){var t;F(this,l);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(t=i.call.apply(i,[this].concat(r))).state={isAnimationFinished:!1},t.id=(0,P.EL)("recharts-bar-"),t.handleAnimationEnd=function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),e&&e()},t.handleAnimationStart=function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),e&&e()},t}return e=l,a=[{key:"getDerivedStateFromProps",value:function(t,e){return t.animationId!==e.prevAnimationId?{prevAnimationId:t.animationId,curData:t.data,prevData:e.curData}:t.data!==e.curData?{curData:t.data}:null}},{key:"renderRectangle",value:function(t,e){return n.isValidElement(t)?n.cloneElement(t,e):u()(t)?t(e):n.createElement(m.A,e)}}],(r=[{key:"renderRectanglesStatically",value:function(t){var e=this,r=this.props.shape,a=(0,b.L6)(this.props);return t&&t.map((function(t,i){var o=I(I(I({},a),t),{},{index:i});return n.createElement(v.m,C({className:"recharts-bar-rectangle"},(0,b.bw)(e.props,t,i),{key:"rectangle-".concat(i)}),l.renderRectangle(r,o))}))}},{key:"renderRectanglesWithAnimation",value:function(){var t=this,e=this.props,r=e.data,a=e.layout,i=e.isAnimationActive,o=e.animationBegin,l=e.animationDuration,c=e.animationEasing,s=e.animationId,u=this.state.prevData;return n.createElement(d.ZP,{begin:o,duration:l,isActive:i,easing:c,from:{t:0},to:{t:1},key:"bar-".concat(s),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(e){var i=e.t,o=r.map((function(t,e){var r=u&&u[e];if(r){var n=(0,P.k4)(r.x,t.x),o=(0,P.k4)(r.y,t.y),l=(0,P.k4)(r.width,t.width),c=(0,P.k4)(r.height,t.height);return I(I({},t),{},{x:n(i),y:o(i),width:l(i),height:c(i)})}if("horizontal"===a){var s=(0,P.k4)(0,t.height)(i);return I(I({},t),{},{y:t.y+t.height-s,height:s})}var f=(0,P.k4)(0,t.width)(i);return I(I({},t),{},{width:f})}));return n.createElement(v.m,null,t.renderRectanglesStatically(o))}))}},{key:"renderRectangles",value:function(){var t=this.props,e=t.data,r=t.isAnimationActive,n=this.state.prevData;return!(r&&e&&e.length)||n&&c()(n,e)?this.renderRectanglesStatically(e):this.renderRectanglesWithAnimation()}},{key:"renderBackground",value:function(){var t=this,e=this.props.data,r=(0,b.L6)(this.props.background);return e.map((function(e,n){e.value;var a=e.background,i=N(e,["value","background"]);if(!a)return null;var o=I(I(I(I(I({},i),{},{fill:"#eee"},a),r),(0,b.bw)(t.props,e,n)),{},{index:n,key:"background-bar-".concat(n),className:"recharts-bar-background-rectangle"});return l.renderRectangle(t.props.background,o)}))}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var t=this.props,e=t.data,r=t.xAxis,a=t.yAxis,i=t.layout,o=t.children,l=(0,E.NN)(o,j.displayName);if(!l)return null;var c="vertical"===i?e[0].height/2:e[0].width/2;function s(t,e){return{x:t.x,y:t.y,value:t.value,errorVal:(0,D.F$)(t,e)}}return l.map((function(t,o){return n.cloneElement(t,{key:"error-bar-".concat(o),data:e,xAxis:r,yAxis:a,layout:i,offset:c,dataPointFormatter:s})}))}},{key:"render",value:function(){var t=this.props,e=t.hide,r=t.data,a=t.className,i=t.xAxis,l=t.yAxis,c=t.left,s=t.top,u=t.width,f=t.height,p=t.isAnimationActive,h=t.background,d=t.id;if(e||!r||!r.length)return null;var m=this.state.isAnimationFinished,b=y()("recharts-bar",a),g=i&&i.allowDataOverflow||l&&l.allowDataOverflow,x=o()(d)?this.id:d;return n.createElement(v.m,{className:b},g?n.createElement("defs",null,n.createElement("clipPath",{id:"clipPath-".concat(x)},n.createElement("rect",{x:c,y:s,width:u,height:f}))):null,n.createElement(v.m,{className:"recharts-bar-rectangles",clipPath:g?"url(#clipPath-".concat(x,")"):null},h?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(),(!p||m)&&A.e.renderCallByParent(this.props,r))}}])&&_(e.prototype,r),a&&_(e,a),l}(n.PureComponent);K.displayName="Bar",K.defaultProps={xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",isAnimationActive:!S.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"},K.getComposedData=function(t){var e=t.props,r=t.item,n=t.barPosition,a=t.bandSize,i=t.xAxis,o=t.yAxis,l=t.xAxisTicks,c=t.yAxisTicks,s=t.stackedData,u=t.dataStartIndex,f=t.displayedData,h=t.offset,y=(0,D.Bu)(n,r);if(!y)return null;var d=e.layout,m=r.props,v=m.dataKey,b=m.children,g=m.minPointSize,x="horizontal"===d?o:i,O=s?x.scale.domain():null,w=(0,D.Yj)({numericAxis:x}),j=(0,E.NN)(b,k.b.displayName),A=f.map((function(t,e){var n,f,h,m,b,x;if(s?n=(0,D.Vv)(s[u+e],O):(n=(0,D.F$)(t,v),p()(n)||(n=[w,n])),"horizontal"===d){if(f=(0,D.Fy)({axis:i,ticks:l,bandSize:a,offset:y.offset,entry:t,index:e}),h=o.scale(n[1]),m=y.size,b=o.scale(n[0])-o.scale(n[1]),x={x:f,y:o.y,width:m,height:o.height},Math.abs(g)>0&&Math.abs(b)<Math.abs(g)){var k=(0,P.uY)(b||g)*(Math.abs(g)-Math.abs(b));h-=k,b+=k}}else f=i.scale(n[0]),h=(0,D.Fy)({axis:o,ticks:c,bandSize:a,offset:y.offset,entry:t,index:e}),m=i.scale(n[1])-i.scale(n[0]),b=y.size,x={x:i.x,y:h,width:i.width,height:b},Math.abs(g)>0&&Math.abs(m)<Math.abs(g)&&(m+=(0,P.uY)(m||g)*(Math.abs(g)-Math.abs(m)));return I(I(I({},t),{},{x:f,y:h,width:m,height:b,value:s?n:n[1],payload:t,background:x},j&&j[e]&&j[e].props),{},{tooltipPayload:[(0,D.Qo)(r,t)],tooltipPosition:{x:f+m/2,y:h+b/2}})}));return I({data:A,layout:d},h)};var H=function(){return null};H.displayName="XAxis",H.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",domain:[0,"auto"],padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0};var G=function(){return null};G.displayName="YAxis",G.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",domain:[0,"auto"],padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1};var W=r(3137),Y=(0,a.z)({chartName:"BarChart",GraphicalChild:K,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:H},{axisType:"yAxis",AxisComp:G}],formatAxisMap:W.t9});function Z(t){return Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function $(){return $=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$.apply(this,arguments)}function Q(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function et(t,e){return et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},et(t,e)}function rt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=at(t);if(e){var a=at(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return nt(this,r)}}function nt(t,e){return!e||"object"!==Z(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},at(t)}var it=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&et(t,e)}(o,t);var e,r,a,i=rt(o);function o(){return J(this,o),i.apply(this,arguments)}return e=o,a=[{key:"renderLineItem",value:function(t,e){var r;if(n.isValidElement(t))r=n.cloneElement(t,e);else if(u()(t))r=t(e);else{var a=e.x1,i=e.y1,o=e.x2,l=e.y2,c=e.key,s=Q(e,["x1","y1","x2","y2","key"]);r=n.createElement("line",$({},(0,b.L6)(s),{x1:a,y1:i,x2:o,y2:l,fill:"none",key:c}))}return r}}],(r=[{key:"renderHorizontal",value:function(t){var e=this,r=this.props,a=r.x,i=r.width,l=r.horizontal;if(!t||!t.length)return null;var c=t.map((function(t,r){var n=X(X({},e.props),{},{x1:a,y1:t,x2:a+i,y2:t,key:"line-".concat(r),index:r});return o.renderLineItem(l,n)}));return n.createElement("g",{className:"recharts-cartesian-grid-horizontal"},c)}},{key:"renderVertical",value:function(t){var e=this,r=this.props,a=r.y,i=r.height,l=r.vertical;if(!t||!t.length)return null;var c=t.map((function(t,r){var n=X(X({},e.props),{},{x1:t,y1:a,x2:t,y2:a+i,key:"line-".concat(r),index:r});return o.renderLineItem(l,n)}));return n.createElement("g",{className:"recharts-cartesian-grid-vertical"},c)}},{key:"renderVerticalStripes",value:function(t){var e=this.props.verticalFill;if(!e||!e.length)return null;var r=this.props,a=r.fillOpacity,i=r.x,o=r.y,l=r.width,c=r.height,s=t.slice().sort((function(t,e){return t-e}));i!==s[0]&&s.unshift(0);var u=s.map((function(t,r){var u=s[r+1]?s[r+1]-t:i+l-t;if(u<=0)return null;var f=r%e.length;return n.createElement("rect",{key:"react-".concat(r),x:Math.round(t+i-i),y:o,width:u,height:c,stroke:"none",fill:e[f],fillOpacity:a,className:"recharts-cartesian-grid-bg"})}));return n.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},u)}},{key:"renderHorizontalStripes",value:function(t){var e=this.props.horizontalFill;if(!e||!e.length)return null;var r=this.props,a=r.fillOpacity,i=r.x,o=r.y,l=r.width,c=r.height,s=t.slice().sort((function(t,e){return t-e}));o!==s[0]&&s.unshift(0);var u=s.map((function(t,r){var u=s[r+1]?s[r+1]-t:o+c-t;if(u<=0)return null;var f=r%e.length;return n.createElement("rect",{key:"react-".concat(r),y:Math.round(t+o-o),x:i,height:u,width:l,stroke:"none",fill:e[f],fillOpacity:a,className:"recharts-cartesian-grid-bg"})}));return n.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},u)}},{key:"renderBackground",value:function(){var t=this.props.fill;if(!t||"none"===t)return null;var e=this.props,r=e.fillOpacity,a=e.x,i=e.y,o=e.width,l=e.height;return n.createElement("rect",{x:a,y:i,width:o,height:l,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var t=this.props,e=t.x,r=t.y,a=t.width,i=t.height,o=t.horizontal,l=t.vertical,c=t.horizontalCoordinatesGenerator,s=t.verticalCoordinatesGenerator,f=t.xAxis,p=t.yAxis,h=t.offset,y=t.chartWidth,d=t.chartHeight;if(!(0,P.hj)(a)||a<=0||!(0,P.hj)(i)||i<=0||!(0,P.hj)(e)||e!==+e||!(0,P.hj)(r)||r!==+r)return null;var m=this.props,v=m.horizontalPoints,b=m.verticalPoints;return v&&v.length||!u()(c)||(v=c({yAxis:p,width:y,height:d,offset:h})),b&&b.length||!u()(s)||(b=s({xAxis:f,width:y,height:d,offset:h})),n.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),o&&this.renderHorizontal(v),l&&this.renderVertical(b),o&&this.renderHorizontalStripes(v),l&&this.renderVerticalStripes(b))}}])&&tt(e.prototype,r),a&&tt(e,a),o}(n.PureComponent);it.displayName="CartesianGrid",it.defaultProps={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};var ot=r(9913),lt=r(5667),ct=r(4296),st=r(9434),ut=r(4554),ft=r(890),pt=r(184);function ht(){var t=function(t){for(var e=[],r={title:"",completed:"",incomplete:""},n=0;n<t.length;n++){var a=t[n],i=a.cards.filter((function(t){return!0===t.completed})).length,o=a.cards.length-i;r={title:a.title,completed:i,incomplete:o},e.push(r)}return e}((0,st.v9)((function(t){return t.taskManager.boards})));return(0,pt.jsx)(pt.Fragment,{children:0===t[0].completed&&0===t[0].incomplete&&0===t[1].completed&&0===t[1].incomplete&&0===t[2].completed&&0===t[2].incomplete&&0===t[3].completed&&0===t[3].incomplete?(0,pt.jsx)(ut.Z,{display:"flex",justifyContent:"center",sx:{mt:10},children:(0,pt.jsx)(ft.Z,{variant:"subtitle1",color:"#808080",children:"Add data to show chart"})}):(0,pt.jsx)(ot.h,{width:"100%",height:"100%",children:(0,pt.jsx)(Y,{width:500,height:300,data:t,margin:{top:20,right:30,left:20,bottom:5},children:(0,pt.jsxs)(pt.Fragment,{children:[(0,pt.jsx)(it,{strokeDasharray:"3 3"}),(0,pt.jsx)(H,{dataKey:"title"}),(0,pt.jsx)(G,{}),(0,pt.jsx)(lt.u,{}),(0,pt.jsx)(ct.D,{}),(0,pt.jsx)(K,{dataKey:"completed",stackId:"a",fill:"#8884d8"}),(0,pt.jsx)(K,{dataKey:"incomplete",stackId:"a",fill:"#82ca9d"})]})})})})}}}]);
//# sourceMappingURL=485.34a077d9.chunk.js.map