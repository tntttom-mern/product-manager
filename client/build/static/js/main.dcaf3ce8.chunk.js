(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(1),s=c.n(i),a=c(17),r=c.n(a),o=(c(25),c(5)),l=c(2),d=c(4),u=c.n(d),j=function(t){var e=t.err,c=t.initialTitle,s=t.initialPrice,a=t.initialDescription,r=Object(i.useState)(c),o=Object(l.a)(r,2),d=o[0],u=o[1],j=Object(i.useState)(s),b=Object(l.a)(j,2),p=b[0],O=b[1],h=Object(i.useState)(a),m=Object(l.a)(h,2),f=m[0],x=m[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t.onSubmitProp({title:d,price:p,description:f}),u(""),O(),x("")},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"mr-2",children:"Title"})," ",e.title?Object(n.jsx)("span",{className:"small text-danger",children:e.title.message}):null,Object(n.jsx)("input",{className:"form-control form-control-sm",type:"text",value:d,onChange:function(t){return u(t.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"mr-2",children:"Price"})," ",e.price?Object(n.jsx)("span",{className:"small text-danger",children:e.price.message}):null,Object(n.jsx)("input",{className:"form-control form-control-sm",type:"text",onChange:function(t){return O(parseFloat(t.target.value))}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"mr-2",children:"Description"})," ",e.description?Object(n.jsx)("span",{className:"small text-danger",children:e.description.message}):null,Object(n.jsx)("input",{className:"form-control form-control-sm",type:"text",value:f,onChange:function(t){return x(t.target.value)}})]}),Object(n.jsx)("input",{className:"btn btn-info btn-lg",type:"submit",value:"Create"})]})})},b=function(t){var e=t.productId,c=t.successCallback;return Object(n.jsx)("button",{className:"btn btn-danger btn-sm ml-4",onClick:function(t){u.a.delete("http://localhost:8000/product/".concat(e)).then(c()).catch((function(t){return console.log("Error deleting product",t)}))},children:"Delete"})},p=function(t){var e=Object(i.useState)(t.products),c=Object(l.a)(e,2),s=c[0],a=c[1];return console.log(t.products),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"All Products: "}),Object(n.jsx)("ul",{className:"list-group list-group-flush",children:s.map((function(t,e){return Object(n.jsxs)("div",{className:"list-group-item",children:[Object(n.jsx)(o.a,{to:"/product/".concat(t._id),children:t.title}),Object(n.jsx)(b,{productId:t._id,successCallback:function(){return a(s.filter((function(e){return e._id!=t._id})))}})]},e)}))})]})},O=function(t){var e=Object(i.useState)([]),c=Object(l.a)(e,2),s=c[0],a=c[1],r=Object(i.useState)(!1),d=Object(l.a)(r,2),b=d[0],O=d[1],h=Object(i.useState)({}),m=Object(l.a)(h,2),f=m[0],x=m[1];Object(i.useEffect)((function(){u.a.get("http://localhost:8000/products").then((function(t){a(t.data),console.log(t),O(!0)}))}),[]);return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row mt-4",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h1",{children:"Add a new Product"}),Object(n.jsx)(j,{onSubmitProp:function(t){var e=t.title,c=t.price,n=t.description;u.a.post("http://localhost:8000/products/new",{title:e,price:c,description:n}).then((function(t){t.data.errors?(x(t.data.errors),console.log(f)):Object(o.c)("/product/".concat(t.data._id)),console.log(t.data)})).catch((function(t){return console.log(t)}))},err:f,initialTitle:"",initialPrice:"",initialDescription:""})]}),Object(n.jsx)("div",{className:"col",children:b&&Object(n.jsx)(p,{products:s})})]})})},h=c(19),m=function(t){var e=Object(o.d)(),c=Object(i.useState)({}),s=Object(l.a)(c,2),a=s[0],r=s[1];return Object(i.useEffect)((function(){u.a.get("http://localhost:8000/product/".concat(t.id)).then((function(t){return r(Object(h.a)({},t.data[0]))})).catch((function(t){return console.log(t)}))}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"card mt-4",style:{width:"24rem"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{className:"card-title",children:a.title?a.title:"Loading Title"}),Object(n.jsxs)("ul",{className:"list-group-flush",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Price:"})," ",a.price?"$".concat(a.price):"Loading Price"," "]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Description:"}),a.description?a.description:"Loading Description"]})]}),Object(n.jsxs)("div",{className:"p-2",children:[Object(n.jsx)(o.a,{to:"/product/".concat(t.id,"/edit"),children:Object(n.jsx)("button",{className:"m-1 btn btn-sm btn-primary",children:"Edit"})}),Object(n.jsx)(b,{productId:t.id,successCallback:function(){return e("/")}})]})]})})})},f=function(t){var e=Object(o.d)(),c=Object(i.useState)(),s=Object(l.a)(c,2),a=s[0],r=s[1],d=t.id,b=Object(i.useState)(""),p=Object(l.a)(b,2),O=(p[0],p[1]),h=Object(i.useState)(""),m=Object(l.a)(h,2),f=(m[0],m[1]),x=Object(i.useState)(""),g=Object(l.a)(x,2),v=(g[0],g[1]),N=Object(i.useState)(!1),S=Object(l.a)(N,2),P=S[0],C=S[1],D=Object(i.useState)({}),y=Object(l.a)(D,2),w=y[0],T=y[1];Object(i.useEffect)((function(){u.a.get("http://localhost:8000/product/".concat(d)).then((function(t){console.log(t.data),r(t.data[0]),O(t.data[0].title),f("".concat(t.data[0].price)),v(t.data[0].description),C(!0)})).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}),[]);return Object(n.jsxs)("div",{className:"container w-50",children:[Object(n.jsx)("h1",{className:"mt-4",children:"Update Product"}),P&&Object(n.jsx)(j,{onSubmitProp:function(t){var c=t.title,n=t.price,i=t.description;u.a.put("http://localhost:8000/product/".concat(d),{title:c,price:n,description:i}).then((function(t){t.data.errors?(T(t.data.errors),O(a.title),f("".concat(a.price)),v(a.description)):e("/product/".concat(a._id)),console.log(t.data)})).catch((function(t){return console.log(t)}))},err:w,initialTitle:a.title,initialPrice:"",initialDescription:a.description})]})};c(49);var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.b,{children:[Object(n.jsx)(O,{path:"/"}),Object(n.jsx)(m,{path:"/product/:id"}),Object(n.jsx)(f,{path:"/product/:id/edit"})]})})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),n(t),i(t),s(t),a(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.dcaf3ce8.chunk.js.map