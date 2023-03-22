"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[492],{4787:function(n,e,r){var t=r(1413),o=r(9439),a=r(5987),i=r(1613),c=r(5705),u=r(184),s=["name"];e.Z=function(n){var e=n.name,r=(0,a.Z)(n,s),l=(0,c.U$)(e),d=(0,o.Z)(l,2),f=d[0],p=d[1],m=(0,t.Z)((0,t.Z)((0,t.Z)({},f),r),{},{fullWidth:!0,variant:"outlined"});return p&&p.touched&&p.error&&(m.error=!0,m.helperText=p.error),(0,u.jsx)(i.Z,(0,t.Z)((0,t.Z)({},m),{},{color:"secondary"}))}},6492:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t=r(2791),o=r(9434),a=r(1614),i=r(890),c=r(1889),u=r(4554),s=r(5705),l=r(2797),d=r(6151),f=r(9201),p=r(184),m=(0,f.Z)((0,p.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall"),h=r(4787),v="NOT_FOUND";var x=function(n,e){return n===e};function Z(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?x:t,a=r.maxSize,i=void 0===a?1:a,c=r.resultEqualityCheck,u=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),s=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:v},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return v}return{get:t,put:function(e,o){t(e)===v&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,u);function l(){var e=s.get(arguments);if(e===v){if(e=n.apply(null,arguments),c){var r=s.getEntries(),t=r.find((function(n){return c(n.value,e)}));t&&(e=t.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function g(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function j(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a,i=0,c={memoizeOptions:void 0},u=t.pop();if("object"===typeof u&&(c=u,u=t.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var s=c,l=s.memoizeOptions,d=void 0===l?r:l,f=Array.isArray(d)?d:[d],p=g(t),m=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(f)),h=n((function(){for(var n=[],e=p.length,r=0;r<e;r++)n.push(p[r].apply(null,arguments));return a=m.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var y=j(Z),b=function(n){return n.contacts.items},C=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},k=function(n){return n.filter},M=y([b,k],(function(n,e){var r=function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}(n,e);return r})),P=r(3634),R={name:"",number:""},S=l.Ry().shape({name:l.Z_().required(),number:l.Rx().integer().typeError("Please enter a valid phone number").required()}),A=function(){var n=(0,o.v9)(b),e=(0,o.I0)();return(0,p.jsxs)(p.Fragment,{children:[" ",(0,p.jsx)(a.Z,{maxWidth:"sm",children:(0,p.jsx)(s.J9,{initialValues:R,validationSchema:S,onSubmit:function(r,t){var o=t.resetForm;n.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):e((0,P.uK)(r)),o()},children:(0,p.jsx)(s.l0,{children:(0,p.jsxs)(c.ZP,{container:!0,spacing:2,columns:1,children:[(0,p.jsx)(c.ZP,{item:!0,xs:12,children:(0,p.jsx)(i.Z,{variant:"h4",component:"h3",align:"center",mb:2,children:"Add your new contact here"})}),(0,p.jsx)(c.ZP,{item:!0,xs:6,children:(0,p.jsx)(h.Z,{name:"name",label:"Name",placeholder:"James Bond"})}),(0,p.jsx)(c.ZP,{item:!0,xs:6,children:(0,p.jsx)(h.Z,{name:"number",label:"Number",placeholder:"+380999614658"})}),(0,p.jsx)(c.ZP,{item:!0,xs:6,children:(0,p.jsx)(d.Z,{variant:"contained",type:"submit",color:"secondary",fullWidth:!0,endIcon:(0,p.jsx)(m,{}),children:"Add contact"})})]})})})})]})},I=r(1613),N=r(4808),z=function(){var n=(0,o.v9)(k),e=(0,o.I0)();return(0,p.jsx)(I.Z,{label:"Find contacts by name",variant:"filled",fullWidth:!0,color:"secondary",type:"search",value:n,onChange:function(n){e((0,N.T)(n.currentTarget.value))},sx:{mb:"1.5rem"}})},W=r(7462),E=r(3366),F=r(8182),L=r(4419),_=r(6934),q=r(1402),O=r(5527),T=r(5878),V=r(1217);function B(n){return(0,V.Z)("MuiCard",n)}(0,T.Z)("MuiCard",["root"]);var G=["className","raised"],J=(0,_.ZP)(O.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),K=t.forwardRef((function(n,e){var r=(0,q.Z)({props:n,name:"MuiCard"}),t=r.className,o=r.raised,a=void 0!==o&&o,i=(0,E.Z)(r,G),c=(0,W.Z)({},r,{raised:a}),u=function(n){var e=n.classes;return(0,L.Z)({root:["root"]},B,e)}(c);return(0,p.jsx)(J,(0,W.Z)({className:(0,F.Z)(u.root,t),elevation:a?8:void 0,ref:e,ownerState:c},i))}));function U(n){return(0,V.Z)("MuiCardContent",n)}(0,T.Z)("MuiCardContent",["root"]);var D=["className","component"],H=(0,_.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),$=t.forwardRef((function(n,e){var r=(0,q.Z)({props:n,name:"MuiCardContent"}),t=r.className,o=r.component,a=void 0===o?"div":o,i=(0,E.Z)(r,D),c=(0,W.Z)({},r,{component:a}),u=function(n){var e=n.classes;return(0,L.Z)({root:["root"]},U,e)}(c);return(0,p.jsx)(H,(0,W.Z)({as:a,className:(0,F.Z)(u.root,t),ownerState:c,ref:e},i))}));function Q(n){return(0,V.Z)("MuiCardActions",n)}(0,T.Z)("MuiCardActions",["root","spacing"]);var X=["disableSpacing","className"],Y=(0,_.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,W.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),nn=t.forwardRef((function(n,e){var r=(0,q.Z)({props:n,name:"MuiCardActions"}),t=r.disableSpacing,o=void 0!==t&&t,a=r.className,i=(0,E.Z)(r,X),c=(0,W.Z)({},r,{disableSpacing:o}),u=function(n){var e=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,L.Z)(r,Q,e)}(c);return(0,p.jsx)(Y,(0,W.Z)({className:(0,F.Z)(u.root,a),ownerState:c,ref:e},i))})),en=(0,f.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),rn=(0,f.Z)((0,p.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),tn=r(3400),on=function(n){var e=n.contact,r=e.name,t=e.number,a=e.id,u=(0,o.I0)();return(0,p.jsx)(c.ZP,{item:!0,xs:8,children:(0,p.jsxs)(K,{width:"100%",sx:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)($,{sx:{display:"flex",flexWrap:{xs:"wrap",sm:"noWrap",md:"noWrap"},alignItems:"center",justifyContent:"start",flexGrow:1},children:[(0,p.jsx)(en,{color:"secondary"}),(0,p.jsx)(i.Z,{variant:"h6",component:"h3",ml:2,children:r}),(0,p.jsx)(i.Z,{variant:"body1",ml:2,children:t})]}),(0,p.jsx)(nn,{children:(0,p.jsx)(tn.Z,{size:"large",edge:"start",color:"inherit",onClick:function(){return u((0,P.GK)(a))},children:(0,p.jsx)(rn,{})})})]})})},an=function(){var n=(0,o.v9)(M);return 0===n.length?null:(0,p.jsx)(c.ZP,{container:!0,spacing:2,columns:1,xs:12,children:n.map((function(n){return(0,p.jsx)(on,{contact:n},n.id)}))})},cn=r(2027),un=r(5427);function sn(){var n=(0,o.I0)(),e=(0,o.v9)(C),r=(0,o.v9)(w);return(0,t.useEffect)((function(){n((0,P.yF)())}),[n]),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{variant:"h3",component:"h1",align:"center",mb:3,mt:3,children:"Phonebook"}),(0,p.jsxs)(c.ZP,{mb:3,sx:{display:"flex",flexWrap:{xs:"wrap",sm:"wrap",md:"noWrap"},justifyContent:"center",alignItems:"center"},children:[(0,p.jsx)(c.ZP,{item:!0,mb:3,children:(0,p.jsx)(A,{})}),(0,p.jsx)(c.ZP,{item:!0,sx:{width:{xs:"100%",sm:"100%",md:800}},children:(0,p.jsx)(u.Z,{sx:{backgroundImage:"url(".concat(un,")"),backgroundRepeat:"no-repeat",backgroundColor:"black",backgroundAttachment:"fixed",objectFit:"cover",height:600,width:"100%"},children:(0,p.jsxs)(u.Z,{p:3,children:[(0,p.jsx)(u.Z,{mb:2,p:1,sx:{background:"white",opacity:"0.5"},borderRadius:2,children:(0,p.jsx)(i.Z,{variant:"h4",component:"h2",align:"center",children:"Contacts"})}),(0,p.jsx)(z,{}),e&&!r&&(0,p.jsx)(cn.a,{}),(0,p.jsx)(an,{})]})})})]})]})}},5427:function(n,e,r){n.exports=r.p+"static/media/ContactListImage.04c8e49dcc36185d1d9b.jpg"}}]);
//# sourceMappingURL=492.27dfae0f.chunk.js.map