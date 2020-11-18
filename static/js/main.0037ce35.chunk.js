(this.webpackJsonpemp_list=this.webpackJsonpemp_list||[]).push([[0],{46:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r(0),c=r.n(n),a=r(17),i=r.n(a),o=(r(46),r(12)),l=r(3),h=r(9),d=r(16),u=r.n(d),j=r(23),b="GET_EMPLOYEES",p="CREATE_ABC_SORTED_LIST",m="CREATE_MONTH_SORTED_LIST",y="EMPLOYEES_ERROR ",O="CLEAR_EMPLOYEES",f="SET_SHOWBIRTHDAY",x=" CREATE_SHOWBIRTHDAY_LIST",g=r(36),v=r.n(g),S=function(e){var t,r=JSON.parse(localStorage.getItem("employees"));t=null===localStorage.getItem("showBirthdayInfo")?[]:JSON.parse(localStorage.getItem("showBirthdayInfo"));var s=r.find((function(t){return t.id===e.id}));s.showBirthday=e.showBirthday,t.find((function(e){return e.id===s.id}))?t=t.filter((function(e){return e.id!==s.id})):t.push(s),localStorage.setItem("showBirthdayInfo",JSON.stringify(t))},E=function(e){var t,r=JSON.parse(localStorage.getItem("showBirthdayInfo"));if(null!==r&&r.length>0&&(t=r.find((function(t){return t.id===e.id}))),t)return!0},N=function(){return function(e){try{var t=JSON.parse(localStorage.getItem("showBirthdayInfo"));e({type:x,payload:t})}catch(r){console.error(r.message)}}};var w=function(e){var t=e.logo,r=e.icon,n=e.clearEmployees;return Object(s.jsxs)("nav",{className:"nav bg-primary",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsxs)(o.b,{to:"/",onClick:function(){return n()},children:[" ",Object(s.jsx)("i",{className:r})," ",t]})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/employees",children:"Employees"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/IgorNep/emp_list",target:"_blank",rel:"noreferrer",children:"Github"})})]})]})};w.defaultProps={logo:"Employees List",icon:"fa fa-users"};var B=Object(h.b)(null,{clearEmployees:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:O})}catch(r){t({type:y,payload:r.message})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(w),I=function(){return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"80vh"},children:[Object(s.jsxs)("h1",{children:[Object(s.jsx)("span",{className:"text-primary",children:"Hello!"})," This is home page"]}),Object(s.jsx)("p",{className:"my-2",children:"Press button to show list of employees"}),Object(s.jsx)("p",{children:Object(s.jsx)(o.b,{to:"/employees",className:"btn btn-primary",children:"Employees"})})]})},L=r.p+"static/media/spinner.223e1344.gif",A=function(){return Object(s.jsx)(n.Fragment,{children:Object(s.jsx)("img",{src:L,alt:"Loading",style:{width:"200px",margin:"auto",display:"block"}})})},M=r(39),T=Object(h.b)(null,{changeUsersShowBirthday:function(e){return function(t){var r=new Date(e.dob).getMonth();try{t({type:f,payload:{user:e,index:r}}),S(e)}catch(s){console.error(s.message)}}},getShowBirthdayInfo:N})((function(e){var t=e.user,r=e.changeUsersShowBirthday,c=e.getShowBirthdayInfo,a=Object(n.useState)(t.showBirthday),i=Object(M.a)(a,2),o=i[0],l=i[1];return Object(s.jsxs)("div",{className:"bigbox",children:[Object(s.jsxs)("label",{htmlFor:t.id,children:[t.lastName," ",t.firstName," "]}),Object(s.jsx)("input",{id:t.id,type:"checkbox",value:o,checked:o,onChange:function(){t.showBirthday=!o,r(t),l(!o),c()}})]})})),_=Object(h.b)((function(e){return{abcSortedList:e.lists.abcSortedList}}),{sortEmployeesByAbc:function(e){return function(t){try{var r=[];"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((function(t){var s={title:t,employeesAbc:[]};r.push(s),e.forEach((function(e){e.lastName.charAt(0)===s.title&&s.employeesAbc.push(e)}))})),t({type:p,payload:r})}catch(s){console.error(s.message)}}}})((function(e){var t=e.employees,r=e.sortEmployeesByAbc,c=e.abcSortedList;return Object(n.useEffect)((function(){r(t)}),[r,t]),Object(s.jsxs)("div",{className:"emp-data",children:[Object(s.jsx)("h2",{children:"Employees"}),Object(s.jsx)("div",{className:"line"}),Object(s.jsxs)("div",{className:"emp-abc",children:[c&&c.map((function(e){return Object(s.jsxs)("div",{className:"emp-item",children:[Object(s.jsx)("h3",{className:"abc-title",children:e.title}),Object(s.jsx)("div",{children:0===e.employeesAbc.length?"----":e.employeesAbc.map((function(e){return Object(s.jsx)(T,{user:e},e.id)}))})]},e.title)}))," "]})]})})),D=function(e){var t=e.users,r=function(e){var t=new Date(e);return t.getDay()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+", "+t.getFullYear()+" year"};return Object(s.jsx)(n.Fragment,{children:t.map((function(e){return Object(s.jsxs)("p",{children:[e.lastName," ",e.firstName," - ",r(e.dob)]},e.id)}))})},J=function(e){var t=e.month;return Object(s.jsx)(n.Fragment,{children:t.users&&t.users.length>0&&Object(s.jsxs)("div",{className:"emp-birthday-item",children:[Object(s.jsxs)("h4",{children:[t.title," "]}),Object(s.jsx)("div",{className:"emp-birthday-list",children:Object(s.jsx)(D,{users:t.users},t.id)})]})})},R=Object(h.b)((function(e){return{lists:e.lists}}),{sortEmployeesByMonth:function(e){return function(t){var r=["January","February","March","April","May","June","July","August","September","October","November","December"];try{var s=[];r.forEach((function(e,t){var r={id:t,title:e,users:[]};s.push(r)})),e.forEach((function(e){if(e.showBirthday){var t=new Date(e.dob).getMonth();s[t].users.push(e)}})),t({type:m,payload:s})}catch(n){console.error(n.message)}}},getShowBirthdayInfo:N})((function(e){var t=e.lists,r=t.monthSortedList,c=t.showBirthdayList,a=e.employees,i=e.sortEmployeesByMonth,o=e.getShowBirthdayInfo;return Object(n.useEffect)((function(){i(a),o()}),[i,a,o]),Object(s.jsxs)("div",{className:"emp-birthday",children:[Object(s.jsx)("h2",{children:"Employees birthday"}),Object(s.jsx)("div",{className:"line"}),Object(s.jsx)("div",{className:"birthday-block",children:r&&null!==c&&c.length>0?r.map((function(e){return Object(s.jsx)(J,{month:e},e.id)})):Object(s.jsx)("h4",{children:"No selected employees"})})]})})),k=Object(h.b)((function(e){return{lists:e.lists}}),{getEmployees:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 3:r=e.sent,s=[],r.data.forEach((function(e){E(e)?e.showBirthday=!0:e.showBirthday=!1,s.push(e)})),localStorage.setItem("employees",JSON.stringify(s)),t({type:b,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:y,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getEmployees,r=e.lists,c=r.loading,a=r.employees;return Object(n.useEffect)((function(){t()}),[t]),Object(s.jsx)("div",{className:"my-2",children:c?Object(s.jsx)(A,{}):Object(s.jsxs)("div",{className:"employees",children:[Object(s.jsx)(_,{employees:a}),Object(s.jsx)(R,{employees:a})]})})})),C=function(){return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"80vh"},children:[Object(s.jsxs)("h1",{children:[Object(s.jsx)("span",{className:"text-primary",children:"404"})," Not Found"]}),Object(s.jsx)("p",{children:"Sorry this page does not exist"})]})},F=function(){return Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"80vh"},children:[Object(s.jsx)("h1",{children:Object(s.jsx)("span",{className:"text-primary",children:"About"})}),Object(s.jsx)("p",{children:"Simple application for display birthday's of employees"}),Object(s.jsx)("p",{children:"Version 1.0.0"})]})},H=r(11),Y=r(37),P=r(38),W=r(40),G=r(8),U={employees:[],loading:!0,error:null,abcSortedList:[],monthSortedList:[],showBirthdayList:[]},V=Object(H.combineReducers)({lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,r=t.payload,s=t.type;switch(s){case b:return Object(G.a)(Object(G.a)({},e),{},{employees:r,loading:!1});case p:return Object(G.a)(Object(G.a)({},e),{},{abcSortedList:r,loading:!1});case m:return Object(G.a)(Object(G.a)({},e),{},{monthSortedList:r,loading:!1});case O:return{employees:[],loading:!1,error:null};case y:return Object(G.a)(Object(G.a)({},e),{},{error:r,loading:!1});case f:return Object(G.a)(Object(G.a)({},e),{},{monthSortedList:[].concat(Object(W.a)(e.monthSortedList),[r.user.showBirthday?e.monthSortedList[r.index].users.push(r.user):e.monthSortedList[r.index].users=e.monthSortedList[r.index].users.filter((function(e){return e.id!==r.user.id}))]),loading:!1});case x:return Object(G.a)(Object(G.a)({},e),{},{showBirthdayList:r,loading:!1});default:return e}}}),K=[Y.a],Q=Object(H.createStore)(V,{},Object(P.composeWithDevTools)(H.applyMiddleware.apply(void 0,K))),X=function(){return Object(s.jsx)(h.a,{store:Q,children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(B,{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",component:I})," ",Object(s.jsx)(l.a,{exact:!0,path:"/employees",component:k}),Object(s.jsx)(l.a,{exact:!0,path:"/about",component:F}),Object(s.jsx)(l.a,{component:C})]})})]})})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(X,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.0037ce35.chunk.js.map