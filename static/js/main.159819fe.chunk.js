(this["webpackJsonppd-dl"]=this["webpackJsonppd-dl"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(8),i=c.n(s),o=(c(16),c(17),c(2)),l=(c(18),c(4)),j=c.n(l),u=c(7),b=c(6),d=c(9),h=c.n(d),O=c(10),f="https://plain-math-7b9e.peyao.workers.dev/",p="pd-dl-output.zip",x="DocumentID",g="Scale",m="ContentType";function v(e,t){for(var c=(t+"").length,n=(e+"").length,a="",r=0;r<c-n;r++)a+="0";return"".concat(a+=e,".png")}function S(e,t,c){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.contentType,r=void 0===a?"png":a,s=n.showCfWorkerPath,i=void 0!==s&&s,o=i?"".concat(f,"?"):"";return"".concat(o).concat(e).concat(c,"?").concat(x,"=").concat(t,"&").concat(m,"=").concat(r)}function y(e,t,c){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(j.a.mark((function e(t,c,n){var a,r,s=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>3&&void 0!==s[3]?s[3]:{},t&&c||Promise.reject("Failed downloadPng : Missing params"),r=S(t,c,n,Object(u.a)(Object(u.a)({},a),{},{showCfWorkerPath:!0})),e.abrupt("return",fetch(r,{method:"GET",mode:"cors"}).then((function(e){return e.blob()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(b.a)(j.a.mark((function e(t,c){var n,a,r,s,i,o,l,u,b=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.length>2&&void 0!==b[2]?b[2]:0,n=b.length>3&&void 0!==b[3]?b[3]:1,a=b.length>4&&void 0!==b[4]?b[4]:{},r=b.length>5?b[5]:void 0,t&&c||Promise.reject("Failed downloadPngRange : Missing params"),s=new h.a,i=[],o=0;case 8:if(!(o<n)){e.next=19;break}return e.next=11,y(t,c,o,a);case 11:l=e.sent,i.push(l),u=v(o,n),s.file(u,l,{binary:!0}),r((o+1)/n*100,u);case 16:o++,e.next=8;break;case 19:return e.abrupt("return",s.generateAsync({type:"blob"}).then((function(e){Object(O.saveAs)(e,p)})));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(27);var C=/(.*)\/[0-9]+$/;var w=function(e){var t=e.url,c=e.onJobStartClick,r=e.progress,s=e.progressFileName,i=Object(a.useState)(),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(a.useState)(),d=Object(o.a)(b,2),h=d[0],O=d[1],f=Object(a.useState)("1"),p=Object(o.a)(f,2),m=p[0],v=p[1],y=Object(a.useState)("png"),N=Object(o.a)(y,2),k=N[0],w=(N[1],Object(a.useState)(!1)),P=Object(o.a)(w,2),F=P[0],L=P[1],T=Object(a.useState)(0),E=Object(o.a)(T,2),U=E[0],J=E[1],R=Object(a.useState)(1),I=Object(o.a)(R,2),D=I[0],A=I[1],B=Object(a.useState)(""),M=Object(o.a)(B,2),W=M[0],z=M[1],G=Object(a.useState)(!1),$=Object(o.a)(G,2),_=$[0],q=$[1];Object(a.useEffect)((function(){try{var e=new URL(t),c=new URLSearchParams(e.search),n=C.exec(e.pathname)[1];u("".concat(e.origin).concat(n,"/")),O(c.get(x)),c.has(g)&&v(c.get(g)),L(!1)}catch(a){if(!t)return;console.log("Couldn't extract details from URL: ",t),L(!0)}}),[t]),Object(a.useEffect)((function(){j&&z(S(j,h,D-1,{scale:m,contentType:k}))}),[j,D,h,k]),Object(a.useEffect)((function(){q(r>0&&r<100)}),[r]);var H=Object(a.useCallback)((function(){_||c(j,h,U,D,{scale:m,contentType:k})}),[j,h,k,U,D,_]);return t?Object(n.jsxs)("div",{className:"control-card card",children:[Object(n.jsx)("header",{className:"card-header",children:Object(n.jsx)("div",{className:"card-header-title",children:"Job Info"})}),Object(n.jsxs)("div",{className:"card-content",children:[F&&Object(n.jsx)("div",{className:"notification is-danger",children:"Unable to extract info from URL"}),Object(n.jsx)("table",{className:"table",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"BaseUrl"}),Object(n.jsx)("td",{children:j})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"DocumentId"}),Object(n.jsx)("td",{children:h})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"ContentType"}),Object(n.jsx)("td",{children:k})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"StartPage"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{className:"input is-small",type:"text",value:U,onChange:function(e){return J(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"EndPage"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{className:"input is-small",type:"text",value:D,onChange:function(e){return A(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"EndPage Link"}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:W,target:"_blank",rel:"noreferrer noopener",children:W})})]})]})}),Object(n.jsxs)("progress",{className:"progress is-primary",value:r,max:100,children:[r,"%"]})]}),Object(n.jsx)("footer",{className:"card-footer",children:Object(n.jsx)("a",{className:"card-footer-item button is-link",onClick:H,disabled:_,children:0===r||100===r?"Start Job":s})})]}):null};var P=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=(i[0],i[1]),j=Object(a.useState)(!1),u=Object(o.a)(j,2),b=(u[0],u[1],Object(a.useState)("")),d=Object(o.a)(b,2),h=(d[0],d[1]),O=Object(a.useState)({value:0,fileName:""}),f=Object(o.a)(O,2),p=f[0],x=f[1],g=Object(a.useCallback)((function(e,t){x({value:e,fileName:t})}),[]),m=Object(a.useCallback)((function(e,t,c,n,a){l(!0),function(e,t){return k.apply(this,arguments)}(e,t,c,n,a,g).then((function(e){return h(e)})).finally((function(){return l(!1)}))}),[g]);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:"pd-dl"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("textarea",{className:"textarea",placeholder:"URL",rows:"4",onChange:function(e){return r(e.target.value)}}),Object(n.jsx)(w,{url:c,onJobStartClick:m,progress:p.value,progressFileName:p.fileName})]})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),F()}},[[28,1,2]]]);
//# sourceMappingURL=main.159819fe.chunk.js.map