(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(19),r=a.n(c),l=(a(26),a(8)),o=(a(27),a(10)),i=a(2),d=a(0),b=function(){var e=Object(i.f)(),t=Object(i.g)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(o.b,{className:"navbar-brand",to:"/",children:"iNotebook"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link ".concat("/"===t.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/about",children:"About"})})]}),localStorage.getItem("token")?Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("token"),e.push("/login")},className:"btn btn-primary",children:"Logout"}):Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)(o.b,{className:"btn btn-primary mx-2",to:"/login",href:"#",role:"button",children:"Login"}),Object(d.jsx)(o.b,{className:"btn btn-primary mx-2",to:"./signup",href:"#",role:"button",children:"signup"})]})]})]})})},j=a(11),m=a(9),h=Object(s.createContext)(),u=function(e){var t=Object(s.useContext)(h).deleteNote,a=e.note,n=e.updateNote;return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{className:"card my-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:a.title}),Object(d.jsx)("p",{className:"card-text",children:a.description}),Object(d.jsx)("i",{className:"fa-solid fa-trash-can mx-2",onClick:function(){t(a._id)}}),Object(d.jsx)("i",{className:"far fa-edit mx-2",onClick:function(){n(a)}})]})})})},p=function(){var e=Object(s.useContext)(h).addNote,t=Object(s.useState)({title:"",description:"",tag:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=function(e){console.log("onchange"),c(Object(m.a)(Object(m.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("h1",{children:"Add a Note"}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"mb-3 my-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:n.title,"aria-describedby":"emailHelp",onChange:r})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"description",value:n.description,id:"description",onChange:r})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:n.tag,onChange:r,minLength:5,required:!0})]}),Object(d.jsx)("button",{disabled:n.title.length<5||n.description.length<5,type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault(),console.log("submit"),e(n.title,n.description,n.tag),c({title:"",description:"",tag:""})},children:"Add Note"})]})]})},x=function(e){var t=Object(s.useContext)(h),a=Object(i.f)(),n=t.notes,c=t.getNotes,r=t.editNote,o=e.showAlert;Object(s.useEffect)((function(){localStorage.getItem("token")?c():a.push("/login")}),[]);var b=Object(s.useRef)(null),x=Object(s.useRef)(null),O=Object(s.useState)({id:"",etitle:"",edescription:"",etag:""}),f=Object(l.a)(O,2),g=f[0],N=f[1],v=function(t){b.current.click(),N({id:t._id,etitle:t.title,edescription:t.description,etag:t.tag}),e.showAlert("Updated successfully","success")},y=function(e){N(Object(m.a)(Object(m.a)({},g),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"row my-3",children:[Object(d.jsx)(p,{showAlert:o}),Object(d.jsx)("button",{ref:b,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(d.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsxs)("form",{className:"my-3",children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:g.etitle,"aria-describedby":"emailHelp",onChange:y,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:g.edescription,onChange:y,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:g.etag,onChange:y})]})]})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{ref:x,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(d.jsx)("button",{disabled:g.etitle.length<5||g.edescription.length<5,onClick:function(e){r(g.id,g.etitle,g.edescription,g.etag),x.current.click()},type:"button",className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(d.jsxs)("div",{className:"row my-3",children:[Object(d.jsx)("h2",{children:"Your Notes"}),Object(d.jsx)("div",{className:"container mx-2",children:0===n.length&&"No notes to display"}),n.map((function(e){return Object(d.jsx)(u,{updateNote:v,note:e},e._id)}))]})]})},O=function(e){var t=e.showAlert;return Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsx)(x,{showAlert:t})})},f=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"my-3",children:"About Us"}),Object(d.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(d.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(d.jsx)("strong",{children:"Keep a Note "})})}),Object(d.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body",children:"INotebook is a Mern Application for managing personal notes on the cloud."})})]}),Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(d.jsx)("strong",{children:"Free to use "})})}),Object(d.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body",children:"This app is fully free to use. you can keep your notes with title and description which is stored on the local Storage."})})]}),Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(d.jsx)("strong",{children:"Browser Compatible "})})}),Object(d.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body",children:"This iNotebook software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera."})})]})]})]})},g=a(4),N=a.n(g),v=a(12),y=function(e){var t="http://localhost:5000",a=Object(s.useState)([]),n=Object(l.a)(a,2),c=n[0],r=n[1],o=function(){var e=Object(v.a)(N.a.mark((function e(){var a,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,r(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(v.a)(N.a.mark((function e(a,s,n){var l,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:s,tag:n})});case 2:return l=e.sent,e.next=5,l.json();case 5:o=e.sent,r(c.concat(o));case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(N.a.mark((function e(a){var s,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:s=e.sent,s.json(),n=c.filter((function(e){return e._id!==a})),r(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(N.a.mark((function e(a,s,n,l){var o,i,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:s,description:n,tag:l})});case 2:return o=e.sent,e.next=5,o.json();case 5:e.sent,i=JSON.parse(JSON.stringify(c)),d=0;case 8:if(!(d<i.length)){e.next=18;break}if(i[d]._id!==a){e.next=15;break}return i[d].title=s,i[d].description=n,i[d].tag=l,e.abrupt("break",18);case 15:d++,e.next=8;break;case 18:r(i);case 19:case"end":return e.stop()}}),e)})));return function(t,a,s,n){return e.apply(this,arguments)}}();return Object(d.jsx)(h.Provider,{value:{notes:c,addNote:i,deleteNote:b,editNote:j,getNotes:o},children:e.children})};var w=function(e){return Object(d.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},k=function(e){var t=Object(s.useState)({name:"",email:"",password:"",cpassword:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(i.f)(),o=function(){var t=Object(v.a)(N.a.mark((function t(a){var s,c,l,o,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=n.name,c=n.email,l=n.password,n.cpassword,t.next=4,fetch("http://localhost:5000/api/auth/createUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:c,password:l})});case 4:return o=t.sent,t.next=7,o.json();case 7:i=t.sent,console.log(i),i.success?(localStorage.setItem("token",i.authtoken),r.push("/"),e.showAlert("accound Created successfully","success")):e.showAlert("Invalid credentials","danger");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:o,children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",onChange:b,"aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email",onChange:b,"aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",onChange:b,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"password",name:"cpassword",onChange:b,minLength:5,required:!0})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},C=function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(i.f)(),o=function(){var t=Object(v.a)(N.a.mark((function t(a){var s,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,password:n.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:c=t.sent,console.log("Submitting"),console.log(c),c.success?(localStorage.setItem("token",c.authtoken),r.push("/"),e.showAlert("Logged in  successfully","success")):(alert("Invalid credentials"),e.showAlert("Invalid credentials","danger"));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:o,children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",value:n.email,onChange:b,id:"email",name:"email","aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",value:n.password,onChange:b,name:"password",id:"password"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};var S=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(e,t){n({msg:e,type:t}),setTimeout((function(){n(null)}),1500)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(w,{alert:a}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{showAlert:c})}),Object(d.jsx)(i.a,{exact:!0,path:"/about",children:Object(d.jsx)(f,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/login",children:Object(d.jsx)(C,{showAlert:c})}),Object(d.jsx)(i.a,{exact:!0,path:"/signup",children:Object(d.jsx)(k,{showAlert:c})})]})})]})})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b79d5d72.chunk.js.map