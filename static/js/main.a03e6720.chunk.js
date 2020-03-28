(this.webpackJsonpfinapp=this.webpackJsonpfinapp||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(63),i=a.n(o),s=a(2),l=a(4),c=a(3),d=a(5),u=a(7),m={display:"inline",textAlign:"center"},p={width:"35px",height:"35px"};var h=function(){return r.a.createElement("div",{class:"p-3",style:m},r.a.createElement(u.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("i",{class:"fas fa-tachometer-alt border rounded-circle p-2",style:p})),r.a.createElement(u.b,{to:"/liquidassets",className:"/liquidassets"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("i",{class:"fas fa-tint border rounded-circle p-2",style:p})),r.a.createElement(u.b,{to:"/frozenassets",className:"/frozenassets"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("i",{class:"fas fa-icicles border rounded-circle p-2",style:p})),r.a.createElement(u.b,{to:"/liabilities",className:"/liabilities"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("i",{class:"fas fa-file-invoice-dollar border rounded-circle p-2",style:p})))},b=a(16),f=a(6),E=a(15),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).grabAllCorrespondingEntries=function(){var e="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/assetbreakdown/".concat(localStorage.getItem("activeUserUUID"));fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({correspondingEntries:e})}))},a.state={correspondingEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllCorrespondingEntries()}},{key:"render",value:function(){var e=[],t=[],a=parseFloat(this.state.correspondingEntries.currentLiquidValue),n=parseFloat(this.state.correspondingEntries.currentFrozenValue);e.push("Liquid"),e.push("Frozen"),t.push(a.toFixed(2)),t.push(n.toFixed(2));var o={labels:e.reverse(),datasets:[{label:"Amount",fill:!1,lineTension:.1,backgroundColor:["rgba(214,28,96,0.4)","rgba(101,194,174,0.4)"],borderColor:["rgba(214,28,96,0.4)","rgba(101,194,174,0.4)"],borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:["rgba(214,28,96,0.4)","rgba(101,194,174,0.4)"],pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:["rgba(214,28,96,0.4)","rgba(101,194,174,0.4)"],pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.reverse()}]},i=r.a.createElement(E.b,{data:o,height:250,width:500});return r.a.createElement("div",{className:"col-md-6 col-sm-12 mb-4"},r.a.createElement("div",{className:"card shadow rounded",onClick:this.handleClick},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"float-left"},"Current Liquidity"),r.a.createElement("div",{className:"float-right"})),r.a.createElement("div",{className:"card-body text-center"},i)))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).grabAllCorrespondingEntries=function(){var e="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/timeline/".concat(localStorage.getItem("activeUserUUID"));fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({correspondingEntries:e})}))},a.state={correspondingEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllCorrespondingEntries()}},{key:"render",value:function(){var e=[],t=[];if(this.state.correspondingEntries)for(var a=0;a<this.state.correspondingEntries.length;a++){var n=parseFloat(this.state.correspondingEntries[a].liquidsAccum)+parseFloat(this.state.correspondingEntries[a].frozensAccum)-parseFloat(this.state.correspondingEntries[a].liabilitiesAccum);t.push(n.toFixed(2)),e.push(this.state.correspondingEntries[a].month)}var o={labels:e.reverse(),datasets:[{label:"Amount",fill:!1,lineTension:.1,backgroundColor:"rgba(54,106,179,0.4)",borderColor:"rgba(54,106,179,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(54,106,179,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(54,106,179,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.reverse()}]},i=r.a.createElement(E.a,{data:o,options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},height:250,width:500});return r.a.createElement("div",{className:"col-md-6 col-sm-12 mb-4"},r.a.createElement("div",{className:"card shadow rounded",onClick:this.handleClick},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"float-left"},"Networth Timeline"),r.a.createElement("div",{className:"float-right"})),r.a.createElement("div",{className:"card-body text-center"},i)))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).grabAllCorrespondingEntries=function(){var e="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/timeline/".concat(localStorage.getItem("activeUserUUID"));fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({correspondingEntries:e})}))},a.state={correspondingEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllCorrespondingEntries()}},{key:"render",value:function(){var e=[],t=[],a=[];if(this.state.correspondingEntries)for(var n=0;n<this.state.correspondingEntries.length;n++){var o=parseFloat(this.state.correspondingEntries[n].liquidsAccum)+parseFloat(this.state.correspondingEntries[n].frozensAccum),i=parseFloat(this.state.correspondingEntries[n].liabilitiesAccum);t.push(o.toFixed(2)),a.push(i.toFixed(2)),e.push(this.state.correspondingEntries[n].month)}var s={labels:e.reverse(),datasets:[{label:"Assets",fill:!1,lineTension:.1,backgroundColor:"rgba(81, 184, 37, 0.4)",borderColor:"rgba(81, 184, 37, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(81, 184, 37, 1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(81, 184, 37, 1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.reverse()},{label:"Liabilities",fill:!1,lineTension:.1,backgroundColor:"rgba(235, 64, 52, 0.4)",borderColor:"rgba(235, 64, 52, 1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(235, 64, 52, 0.1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a.reverse()}]},l=r.a.createElement(E.c,{data:s,options:{legend:{display:!1},maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},height:250,width:500});return r.a.createElement("div",{className:"col-md-12 col-sm-12 mb-4"},r.a.createElement("div",{className:"card shadow rounded",onClick:this.handleClick},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"float-left"},"Historical Analysis"),r.a.createElement("div",{className:"float-right"})),r.a.createElement("div",{className:"card-body text-center"},l)))}}]),t}(n.Component),N=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"animated fadeInUpBig"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-left"},r.a.createElement("h3",null,"Overview")),r.a.createElement("div",{className:"row"},r.a.createElement(y,null),r.a.createElement(g,null),r.a.createElement(v,null)))))}}]),t}(n.Component),j={fontFamily:"Roboto"},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleDelete=function(e){console.log("attempting to delete");var t="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/entries/".concat(e);fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)}))},a.state={allUserEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{style:j},r.a.createElement("td",null,this.props.data.entry_date),r.a.createElement("td",null,"$",this.props.data.amount.toFixed(2)),r.a.createElement("td",null,this.props.data.comments),r.a.createElement("td",{className:"text-right"},r.a.createElement("div",{className:"btn btn-outline-danger",onClick:function(){return e.handleDelete(e.props.data.id)}},"Delete")))}}]),t}(n.Component),w=(n.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this,t=localStorage.getItem("activeSourceUUID"),a="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/sourcedetail/".concat(t);fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({allUserEntries:t})}))}},{key:"render",value:function(){var e,t=this.state.allUserEntries.map((function(e){return r.a.createElement(C,{data:e})}));return e=void 0===this.state.allUserEntries?r.a.createElement("div",{class:"spinner-border text-info",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading...")):0===this.state.allUserEntries.length?r.a.createElement("p",{className:"p-2"},"No entries exist for this source yet."):t,r.a.createElement("div",{className:"animated fadeInUpBig pl-5 pr-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-left"},r.a.createElement("h3",null,"Source Detail")),r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement(u.b,{to:"/addnewentry"},r.a.createElement("button",{className:"btn"},r.a.createElement("i",{class:"fas fa-plus-circle fa-2x text-primary"}))))),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead thead-light"},r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Comments"),r.a.createElement("th",{className:"text-right"},"Delete")),e))}}]),t}(n.Component)),x=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.deleteCorrespondingSource()},r.a.createElement("a",null,"Delete"))}}]),t}(n.Component),O=a(46),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleClick=function(){localStorage.setItem("activeUserUUID",a.state.loggedInUser),localStorage.setItem("activeSourceUUID",a.state.sourceUUID)},a.grabAllCorrespondingEntries=function(){var e="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/sourcedetail/".concat(a.props.data.uuid);fetch(e).then((function(e){return e.json()})).then((function(e){var t=e;t.forEach((function(e){e.entry_date=O(e.entry_date).format("MMM 'YY")})),a.setState({correspondingEntries:t})}))},a.deleteCorrespondingSource=function(){var e="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/liquidassets/".concat(a.props.data.uuid);fetch(e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)}))},a.state={loggedInUser:localStorage.getItem("activeUserUUID"),sourceUUID:a.props.data.uuid},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllCorrespondingEntries()}},{key:"render",value:function(){var e=this,t=[],a=[];if(this.state.correspondingEntries)for(var n=0;n<this.state.correspondingEntries.length;n++)a.push(this.state.correspondingEntries[n].amount.toFixed(2)),t.push(this.state.correspondingEntries[n].entry_date);var o,i={labels:t.reverse(),datasets:[{label:"Amount",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a.reverse()}]};return o=void 0===this.state.correspondingEntries?r.a.createElement("div",{class:"spinner-border text-info",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading...")):this.state.correspondingEntries.length<2?r.a.createElement("p",null,"Add more entries for this source to see trends."):r.a.createElement(E.c,{data:i,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},height:250,width:500}),r.a.createElement("div",{className:"col-md-6 col-sm-12 mb-4"},r.a.createElement("div",{className:"card shadow rounded",onClick:this.handleClick},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"float-left"},this.props.data.source_name),r.a.createElement("div",{className:"float-right"},r.a.createElement(x,{deleteCorrespondingSource:function(){return e.deleteCorrespondingSource},uuid:this.state.sourceUUID}))),r.a.createElement(u.b,{to:"/sourcedetail"},r.a.createElement("div",{className:"card-body text-center"},o))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this,t=localStorage.getItem("activeUserUUID"),a="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/liquidassets/".concat(t);fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({allUserEntries:t})}))}},{key:"render",value:function(){var e,t=this.state.allUserEntries,a=t.map((function(e,t){return r.a.createElement(k,{key:t,data:e})}));return e=0===t.length?r.a.createElement("div",{className:"container"},"No sources found."):a,r.a.createElement("div",{className:"animated fadeInUpBig"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-left"},r.a.createElement("h3",null,"Liquid Assets")),r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement(u.b,{to:"/addnewsource"},r.a.createElement("button",{className:"btn"},r.a.createElement("i",{class:"fas fa-plus-circle fa-2x text-primary"}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this,t=localStorage.getItem("activeUserUUID"),a="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/frozenassets/".concat(t);fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({allUserEntries:t})}))}},{key:"render",value:function(){var e,t=this.state.allUserEntries,a=t.map((function(e,t){return r.a.createElement(k,{key:t,data:e})}));return e=0===t.length?r.a.createElement("div",{className:"container"},"No sources found."):a,r.a.createElement("div",{className:"animated fadeInUpBig"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-left"},r.a.createElement("h3",null,"Frozen Assets")),r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement(u.b,{to:"/addnewsource"},r.a.createElement("button",{className:"btn"},r.a.createElement("i",{class:"fas fa-plus-circle fa-2x text-primary"}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={allUserEntries:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.grabAllUserEntries()}},{key:"grabAllUserEntries",value:function(){var e=this,t=localStorage.getItem("activeUserUUID"),a="https://central-api-node-2-6wevi67jwa-uc.a.run.app"+"/NetworthyMax/api/liabilities/".concat(t);fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({allUserEntries:t})}))}},{key:"render",value:function(){var e,t=this.state.allUserEntries,a=t.map((function(e,t){return r.a.createElement(k,{key:t,data:e})}));return e=0===t.length?r.a.createElement("div",{className:"container"},"No sources found."):a,r.a.createElement("div",{className:"animated fadeInUpBig"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-left"},r.a.createElement("h3",null,"Liabilities")),r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement(u.b,{to:"/addnewsource"},r.a.createElement("button",{className:"btn"},r.a.createElement("i",{class:"fas fa-plus-circle fa-2x text-primary"}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component),A=a(30),D={width:"300px"},B={display:"flex",justifyContent:"center",alignItems:"center"},H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(A.a)({},n,t))},a.handleFormSubmit=function(e){if(e.preventDefault(),""===a.state.entry_name||""===a.state.amount)alert("New entries require a name and an amount.");else{var t="https://central-api-node-2-6wevi67jwa-uc.a.run.app/NetworthyMax/api/sourcedetail";console.log(t),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source_name:a.state.source_name,type:a.state.type,user_uuid:a.state.user_uuid,source_uuid:a.state.source_uuid,entry_date:a.state.entry_date,amount:a.state.amount,comments:a.state.comments})}).then((function(e){console.log(e),window.history.back()}))}},a.state={user_uuid:localStorage.getItem("activeUserUUID"),entry_date:"",amount:"",comments:"",source_uuid:localStorage.getItem("activeSourceUUID")},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"full-height animated flipInY",style:B},r.a.createElement("div",{className:"card rounded shadow p-4",style:D},r.a.createElement("h3",null,"Add an Entry"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Effective Date"),r.a.createElement("input",{type:"date",class:"form-control",placeholder:"Effective date",name:"entry_date",onChange:this.handleInputChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Amount"),r.a.createElement("input",{type:"number",step:"0.01",class:"form-control",placeholder:"Amount",name:"amount",onChange:this.handleInputChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Comments"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Comments",name:"comments",onChange:this.handleInputChange})),r.a.createElement("button",{onClick:this.handleFormSubmit,type:"submit",class:"btn btn-primary mr-2"},"Add"),r.a.createElement("a",{href:"javascript:history.back()",className:"btn btn-secondary"},"Go Back"))))}}]),t}(n.Component),_={width:"300px"},F={display:"flex",justifyContent:"center",alignItems:"center"},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(A.a)({},n,t))},a.handleFormSubmit=function(e){if(e.preventDefault(),""===a.state.source_name||""===a.state.type)alert("New sources require a name and a type.");else{var t,n="https://central-api-node-2-6wevi67jwa-uc.a.run.app";"Liquid Asset"===a.state.type?t=n+"/NetworthyMax/api/liquidassets":"Frozen Asset"===a.state.type?t=n+"/NetworthyMax/api/frozenassets":"Liability"===a.state.type&&(t=n+"/NetworthyMax/api/liabilities"),console.log(t),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source_name:a.state.source_name,type:a.state.type,user_uuid:a.state.user_uuid})}).then((function(e){console.log(e),window.history.back()}))}},a.state={user_uuid:localStorage.getItem("activeUserUUID"),source_name:"",type:""},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"full-height animated flipInY",style:F},r.a.createElement("div",{className:"card rounded shadow p-4",style:_},r.a.createElement("h3",null,"Add a Source"),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Source Name"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Source name",name:"source_name",onChange:this.handleInputChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Source Type"),r.a.createElement("select",{onChange:this.handleInputChange,name:"type",class:"form-control"},r.a.createElement("option",{selected:!0,disabled:!0},"Select a source type"),r.a.createElement("option",{value:"Liquid Asset"},"Liquid Asset"),r.a.createElement("option",{value:"Frozen Asset"},"Frozen Asset"),r.a.createElement("option",{value:"Liability"},"Liability"))),r.a.createElement("button",{onClick:this.handleFormSubmit,type:"submit",class:"btn btn-primary mr-2"},"Create"),r.a.createElement("a",{href:"javascript:history.back()",className:"btn btn-secondary"},"Go Back"))))}}]),t}(n.Component);var z=function(){return r.a.createElement("div",{className:"p-3 pt-5 full-height"},r.a.createElement(b.a,{exact:!0,path:"/",component:N}),r.a.createElement(b.a,{exact:!0,path:"/liquidassets",component:U}),r.a.createElement(b.a,{exact:!0,path:"/frozenassets",component:I}),r.a.createElement(b.a,{exact:!0,path:"/liabilities",component:S}),r.a.createElement(b.a,{exact:!0,path:"/sourcedetail",component:w}),r.a.createElement(b.a,{exact:!0,path:"/addnewsource",component:M}),r.a.createElement(b.a,{exact:!0,path:"/addnewentry",component:H}))},R={padding:"0px"},q={position:"relative"},L={position:"fixed",bottom:"0px",left:"10px",zIndex:"999"};var T=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"container-fluid full-height",style:R},r.a.createElement("div",{className:"row full-height",style:q},r.a.createElement("div",{className:"animated fadeInDownBig",style:L},r.a.createElement(h,null)),r.a.createElement("div",{className:"col-12 p-5"},r.a.createElement(z,null)))))},W=a(67),J=a(43),G=(a(174),{apiKey:"AIzaSyCI_SxzntQv8nO8JNxpYUOOakZCwIAmBXk",authDomain:"networthy-36c14.firebaseapp.com",databaseURL:"https://networthy-36c14.firebaseio.com",projectId:"networthy-36c14",storageBucket:"",messagingSenderId:"1063101103669",appId:"1:1063101103669:web:df1a9e71bbbe2eec223b7c"}),Y=a(68),P=a.n(Y),Z=J.initializeApp(G).auth(),Q={googleProvider:new J.auth.GoogleAuthProvider},V={backgroundImage:"url('https://images.unsplash.com/photo-1484242780561-6aff8688c36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80')",backgroundSize:"cover",backgroundRepeat:"repeat",backgroundAttachment:"fixed",display:"flex",justifyContent:"center",alignItems:"center"},K={position:"relative"},X={position:"absolute",top:"10px",right:"10px",zIndex:"999"},$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props,t=e.user,n=e.signOut,o=e.signInWithGoogle;return t&&localStorage.setItem("activeUserUUID",t.uid),r.a.createElement("div",{class:"full-height"},t?r.a.createElement("div",{class:"full-height",style:K},r.a.createElement("div",{style:X},r.a.createElement("button",{className:"btn",onClick:n},r.a.createElement("i",{class:"fas fa-sign-out-alt fa-2x border rounded-circle p-2 text-primary"}))),r.a.createElement(T,null)):r.a.createElement("div",{class:"full-height"},r.a.createElement("div",{class:"full-height",style:V},r.a.createElement("div",{class:"text-center card p-3 border rounded shadow animated fadeInDownBig"},r.a.createElement("img",{src:P.a,height:"200px",width:"200px"}),r.a.createElement("button",{className:"btn btn-danger",onClick:o},r.a.createElement("i",{class:"fab fa-google border rounded-circle p-2"})," Sign in with Google")))))},a}return Object(d.a)(t,e),t}(n.Component),ee=Object(W.a)({providers:Q,firebaseAppAuth:Z})($);i.a.render(r.a.createElement(ee,null),document.getElementById("root"))},68:function(e,t,a){e.exports=a.p+"static/media/logo.0d84e59a.png"},69:function(e,t,a){e.exports=a(176)}},[[69,1,2]]]);
//# sourceMappingURL=main.a03e6720.chunk.js.map