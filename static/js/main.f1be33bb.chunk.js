(this.webpackJsonpyhatzee=this.webpackJsonpyhatzee||[]).push([[0],[,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(3),c=[{key:"ones",label:"Ones",assignable:!0,calculate:function(e){return e.filter((function(e){return 1===e.value})).length||0}},{key:"twos",label:"Twos",assignable:!0,calculate:function(e){return 2*e.filter((function(e){return 2===e.value})).length||0}},{key:"threes",label:"Threes",assignable:!0,calculate:function(e){return 3*e.filter((function(e){return 3===e.value})).length||0}},{key:"fours",label:"Fours",assignable:!0,calculate:function(e){return 4*e.filter((function(e){return 4===e.value})).length||0}},{key:"fives",label:"Fives",assignable:!0,calculate:function(e){return 5*e.filter((function(e){return 5===e.value})).length||0}},{key:"sixes",label:"Sixes",assignable:!0,calculate:function(e){return 6*e.filter((function(e){return 6===e.value})).length||0}},{key:"totalTop",label:"Total 1-6",assignable:!1},{key:"bonusTop",label:"Top Bonus",assignable:!1},{key:"threeOfKind",label:"3 of Kind",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a={};return t.forEach((function(e){return a[e]=a[e]?a[e]+1:1})),Math.max.apply(Math,Object(n.a)(Object.keys(a).map((function(e){return a[e]}))))>=3?t.reduce((function(e,t){return e+t}),0):0}},{key:"fourOfKind",label:"4 of Kind",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a={};return t.forEach((function(e){return a[e]=a[e]?a[e]+1:1})),Math.max.apply(Math,Object(n.a)(Object.keys(a).map((function(e){return a[e]}))))>=4?t.reduce((function(e,t){return e+t}),0):0}},{key:"fullHouse",label:"Full House",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a=Object(n.a)(new Set(t)),c={};return t.forEach((function(e){return c[e]=c[e]?c[e]+1:1})),3===Math.max.apply(Math,Object(n.a)(Object.keys(c).map((function(e){return c[e]}))))&&2===a.length?25:0}},{key:"smallStraight",label:"Small Straight",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort(),a=Object(n.a)(new Set(t));return["1234","12345","12346","13456","2345","23456","3456"].indexOf(a.join(""))>-1?30:0}},{key:"largeStraight",label:"Large Straight",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value})).sort();return["12345","23456"].indexOf(t.join(""))>-1?40:0}},{key:"yhatzee",label:"YHATZEE",assignable:!0,calculate:function(e){var t=e.map((function(e){return e.value}));return 1===Object(n.a)(new Set(t)).length?50:0}},{key:"chance",label:"Chance",assignable:!0,calculate:function(e){return e.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0)}},{key:"bonusYhatzee",label:"YHATZEE Bonus",assignable:!1},{key:"total",label:"Score",assignable:!1}]},function(e,t,a){"use strict";var n=a(0),c=a.n(n).a.createContext({});t.a=c},,,,,function(e,t,a){e.exports=a.p+"static/media/1.b64f64ba.svg"},function(e,t,a){e.exports=a.p+"static/media/2.f2b87a0b.svg"},function(e,t,a){e.exports=a.p+"static/media/3.1e4cb8cb.svg"},function(e,t,a){e.exports=a.p+"static/media/4.847aadb1.svg"},function(e,t,a){e.exports=a.p+"static/media/5.74512224.svg"},function(e,t,a){e.exports=a.p+"static/media/6.d92b4406.svg"},function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_contexts_game__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_style_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),_style_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__),Scoreboard=function Scoreboard(props){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_game__WEBPACK_IMPORTED_MODULE_4__.a),rollIndex=_useContext.rollIndex,players=_useContext.players,currentPlayerIndex=_useContext.currentPlayerIndex,dice=_useContext.dice,turnPlayed=_useContext.turnPlayed,setTurnPlayed=_useContext.setTurnPlayed,scores=_useContext.scores,setScores=_useContext.setScores,turns=_useContext.turns,gameOver=_useContext.gameOver,lastPlay=_useContext.lastPlay,setLastPlay=_useContext.setLastPlay,updateLog=_useContext.updateLog,onesRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),twosRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),threesRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),foursRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),fivesRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),sixesRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),threeOfKindRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),fourOfKindRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),fullHouseRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),smallStraightRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),largeStraightRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),yhatzeeRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),chanceRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),undoRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){_constants__WEBPACK_IMPORTED_MODULE_5__.a.forEach((function(row){row.assignable&&(row.ref=eval("".concat(row.key,"Ref")))}))}),[currentPlayerIndex]);var hotKeyAction=function(e){e.current.classList.add("Scoreboard-Scores-Column-Score--selected"),e.current.click(),setTimeout((function(){e.current.classList.remove("Scoreboard-Scores-Column-Score--selected")}),500)};Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+1,control+1,command+1",(function(){return hotKeyAction(onesRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+2,control+2,command+2",(function(){return hotKeyAction(twosRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+3,control+3,command+3",(function(){return hotKeyAction(threesRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+4,control+4,command+4",(function(){return hotKeyAction(foursRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+5,control+5,command+5",(function(){return hotKeyAction(fivesRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+6,control+6,command+6",(function(){return hotKeyAction(sixesRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+t,control+t,command+t",(function(){return hotKeyAction(threeOfKindRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+f,control+f,command+f",(function(){return hotKeyAction(fourOfKindRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+h,control+h,command+h",(function(){return hotKeyAction(fullHouseRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+s,control+s,command+s",(function(){return hotKeyAction(smallStraightRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+l,control+l,command+l",(function(){return hotKeyAction(largeStraightRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+y,control+y,command+y",(function(){return hotKeyAction(yhatzeeRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("option+c,control+c,command+c",(function(){return hotKeyAction(chanceRef)})),Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_3__.a)("ctrl+z",(function(){return undoRef.current.click()})),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){if(!Object.keys(scores).length){var e={};players.forEach((function(t){var a={};_constants__WEBPACK_IMPORTED_MODULE_5__.a.forEach((function(e){a[e.key]={actual:null,possible:null,assignable:e.assignable}})),e[t]=a})),setScores(e)}}),[players,scores,setScores]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){var e=Object(_Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},scores);if(Object.keys(e).length){var t=players[currentPlayerIndex];players.filter((function(e){return e!==t})).forEach((function(t){_constants__WEBPACK_IMPORTED_MODULE_5__.a.forEach((function(a){e[t][a.key].possible=null}))})),_constants__WEBPACK_IMPORTED_MODULE_5__.a.filter((function(e){return e.assignable})).forEach((function(a){e[t][a.key].possible=a.calculate(dice)})),setScores(e),setTurnPlayed(!1)}}),[dice]);var updateTotals=function(){var e=Object(_Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},scores),t=e[players[currentPlayerIndex]];t.totalTop.actual=t.ones.actual+t.twos.actual+t.threes.actual+t.fours.actual+t.fives.actual+t.sixes.actual,t.bonusTop.actual=t.totalTop.actual>=63?35:null,t.total.actual=t.totalTop.actual+t.threeOfKind.actual+t.fourOfKind.actual+t.fullHouse.actual+t.smallStraight.actual+t.largeStraight.actual+t.yhatzee.actual+t.chance.actual+t.bonusTop.actual+t.bonusYhatzee.actual,setScores(e),updateLog("".concat(players[currentPlayerIndex]," has a total score of ").concat(t.total.actual))},handleMouseOver=function(e,t,a){0!==turns&&-1!==rollIndex&&!turnPlayed&&t.assignable&&a===players[currentPlayerIndex]&&null===scores[a][t.key].actual&&e.target.classList.add("Scoreboard-Scores-Column-Score--selected")},handleMouseOut=function(e){e.target.classList.remove("Scoreboard-Scores-Column-Score--selected")},handleCellClick=function(e,t){if(0!==turns&&-1!==rollIndex&&!turnPlayed&&e.assignable&&t===players[currentPlayerIndex]&&null===scores[t][e.key].actual){var a=Object(_Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},scores),n=dice.map((function(e){return e.value}));1===Object(_Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(new Set(n)).length&&a[t].yhatzee.actual>0&&(a[t].bonusYhatzee.actual+=50),a[t][e.key].actual=a[t][e.key].possible,setLastPlay({row:e,player:t}),setScores(a),updateLog("".concat(players[currentPlayerIndex]," scored ").concat(a[t][e.key].actual," points on ").concat(e.label)),setTurnPlayed(!0),updateTotals()}},undoLastEntry=function(){var e=Object(_Users_dwayne_Documents_yhatzee_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},scores),t=lastPlay.row;e[lastPlay.player][t.key].actual=null,updateLog("".concat(players[currentPlayerIndex]," removed last score entry")),setScores(e),updateTotals(),setTurnPlayed(!1)};return Object.keys(scores).length?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"Scoreboard"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"Scoreboard-Scores"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"Scoreboard-Scores-RowLabels"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"Scoreboard-Scores-RowLabels-Label Scoreboard-Scores-Column-Header",style:{opacity:"0"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udc36")),_constants__WEBPACK_IMPORTED_MODULE_5__.a.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{key:t,className:"Scoreboard-Scores-RowLabels-Label"},e.label)}))),players.map((function(e){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{key:e,className:"Scoreboard-Scores-Column ".concat(e===players[currentPlayerIndex]?"Scoreboard-Scores-Column--current":"")},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"Scoreboard-Scores-Column-Header"},e.substring(0,2)),_constants__WEBPACK_IMPORTED_MODULE_5__.a.map((function(t,a){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{key:t.key,player:e,className:"".concat(t.key," Scoreboard-Scores-Column-Score ").concat(t.assignable?"":"Scoreboard-Scores-Column-Score--unassignable"),onMouseOver:function(a){return handleMouseOver(a,t,e)},onMouseOut:handleMouseOut,onClick:function(){return handleCellClick(t,e)},ref:players[currentPlayerIndex]===e?t.ref:null},null!==scores[e][t.key].actual?scores[e][t.key].actual:null)})))}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"Scoreboard-Buttons",style:{position:"absolute",left:"-999999px"}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{ref:undoRef,onClick:undoLastEntry,disabled:!turnPlayed||gameOver},"undo last entry"))):null};__webpack_exports__.a=Scoreboard},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=a(3),_=a(2),u=a(1),s=a(5),i=["\ud83d\udc36","\ud83d\udc31","\ud83d\udc2d","\ud83d\udc39","\ud83d\udc30","\ud83e\udd8a","\ud83e\udd9d","\ud83d\udc3b","\ud83d\udc3c","\ud83d\udc28","\ud83d\udc2f","\ud83e\udd81","\ud83d\udc2e","\ud83d\udc37","\ud83d\udc14","\ud83d\udc27","\ud83d\udc26","\ud83d\udc24","\ud83d\udc23","\ud83d\udc25","\ud83e\udd86","\ud83e\udd8d","\ud83e\udd8c","\ud83e\udd89","\ud83d\udc34","\ud83e\udd84","\ud83d\udc1d","\ud83d\udc1b","\ud83e\udd8b","\ud83d\udc0c","\ud83d\udc1e","\ud83d\udd77","\ud83e\udd82","\ud83e\udd94","\ud83d\udc19","\ud83e\udd91","\ud83e\udd80","\ud83d\udc21","\ud83d\udc20","\ud83d\udc1f","\ud83d\udc2c","\ud83d\udc33","\ud83d\udc0b","\ud83e\udd88","\ud83d\udc0a","\ud83d\udc13","\ud83d\udc3f","\ud83c\udf41","\ud83c\udf44","\ud83c\udf1e","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83c\udf52","\ud83c\udf51","\ud83c\udf46","\ud83e\uddc0","\ud83c\udf2d","\ud83c\udf54","\ud83c\udf5f","\ud83c\udf55","\ud83c\udf2e","\ud83c\udf66","\ud83e\udd64","\ud83c\udfb9","\ud83e\udd41","\ud83c\udfb8","\ud83c\udfb2","\ud83d\ude00","\ud83d\ude02","\ud83e\udd23","\ud83d\ude0e","\ud83d\ude0d","\ud83d\ude44","\ud83d\ude21","\ud83e\udd20","\ud83e\udd21","\ud83d\udc80","\ud83d\udc7b","\ud83d\udc7d","\ud83e\udd16","\ud83d\udca9","\ud83d\ude3a","\ud83d\ude3b","\ud83d\ude40","\ud83d\ude3e","\ud83d\udc4d","\u270a","\ud83e\udd18"],f=(a(22),function(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(""),s=Object(_.a)(u,2),f=s[0],d=s[1],E=Object(n.useState)(""),b=Object(_.a)(E,2),O=b[0],m=b[1],y=Object(n.useRef)(null);Object(n.useEffect)((function(){y.current.focus()}),[]);return c.a.createElement("div",{className:"Players"},c.a.createElement("p",null,"Player ",r.length+1,", choose your fighter:"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t="".concat(O," ").concat(f);f&&!r.includes(t)&&O&&(l([].concat(Object(o.a)(r),[t])),d(""),m(""),y.current.focus())}},c.a.createElement("div",{className:"emojis"},i.map((function(e){return c.a.createElement("div",{key:e,className:"emojis-emoji ".concat(e===O?"emojis-emoji--selected":""),onClick:function(){return function(e){m(e),y.current.focus()}(e)}},c.a.createElement("span",null,e))}))),c.a.createElement("input",{name:"player",value:f,placeholder:"Player ".concat(r.length+1),onChange:function(e){d(e.target.value)},ref:y}),c.a.createElement("button",{type:"submit",disabled:!f||!O},"Add Player")),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",{key:e},e)}))),!!r.length&&c.a.createElement("button",{onClick:function(){e.startGame(r)}},"start game"))}),d=a(10),E=a.n(d),b=a(11),O=a.n(b),m=a(12),y=a.n(m),P=a(13),p=a.n(P),h=a(14),D=a.n(h),M=a(15),v=a.n(M),R=(a(23),[E.a,O.a,y.a,p.a,D.a,v.a]),j=function(e){var t=e.rolling,a=e.value,r=e.saved,l=e.onClick,o=Object(n.useState)(0),u=Object(_.a)(o,2),s=u[0],i=u[1];return Object(n.useEffect)((function(){var e=setInterval((function(){i(Math.floor(6*Math.random()))}),30);return function(){clearInterval(e)}}),[]),t&&!r?c.a.createElement("div",{className:"Die Die-Rolling"},c.a.createElement("img",{src:R[s],alt:""})):c.a.createElement("div",{ref:e.refRef,className:"Die Die-".concat(a," ").concat(r?"saved":""),onClick:l},c.a.createElement("img",{src:R[a-1],alt:(a-1).toString()}))},g=(a(24),function(){var e=Object(n.useContext)(s.a),t=e.rolling,a=e.setRolling,r=e.dice,l=e.setDice,_=e.players,u=e.currentPlayerIndex,i=e.updateLog,f=e.rollIndex,d=e.turns,E=e.turnPlayed,b=e.refs,O=r.map((function(e){return e.value}));Object(n.useEffect)((function(){i("".concat(_[u]," rolled ").concat(O.join(", "))),a(!0),setTimeout((function(){a(!1)}),500)}),[f,u,d]);return c.a.createElement("div",{className:"Dice"},r.map((function(e,a){return c.a.createElement(j,{refRef:b[a],key:a,value:e.value,saved:e.saved,rolling:t,onClick:function(){!function(e){if(!E){var t=Object(o.a)(r);t[e].saved=!t[e].saved,l(t)}}(a)}})})))}),k=a(16),C=a(7),T=a.n(C),I=(a(28),function(e){var t=function(){return{saved:!1,value:T.a.random(1,6)}},a=function(){return new Array(5).fill(null).map(t)},r=Object(n.useState)(!1),l=Object(_.a)(r,2),i=l[0],d=l[1],E=Object(n.useState)(!0),b=Object(_.a)(E,2),O=b[0],m=b[1],y=Object(n.useState)(!1),P=Object(_.a)(y,2),p=P[0],h=P[1],D=Object(n.useState)([]),M=Object(_.a)(D,2),v=M[0],R=M[1],j=Object(n.useState)(0),C=Object(_.a)(j,2),I=C[0],S=C[1],K=Object(n.useState)(0),L=Object(_.a)(K,2),A=L[0],U=L[1],B=Object(n.useState)(a()),W=Object(_.a)(B,2),x=W[0],w=W[1],N=Object(n.useState)(0),G=Object(_.a)(N,2),z=G[0],H=G[1],q=Object(n.useState)([]),F=Object(_.a)(q,2),Y=F[0],Z=F[1],J=Object(n.useState)({}),V=Object(_.a)(J,2),$=V[0],Q=V[1],X=Object(n.useState)(null),ee=Object(_.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!0),ce=Object(_.a)(ne,2),re=ce[0],le=ce[1],oe=Object(n.useRef)(null),_e=Object(n.useRef)(null),ue=Object(n.useRef)(null),se=Object(n.useState)(null),ie=Object(_.a)(se,2),fe=ie[0],de=ie[1],Ee=Object(n.useRef)(null),be=Object(n.useRef)(null),Oe=Object(n.useRef)(null),me=Object(n.useRef)(null),ye=Object(n.useRef)(null);Object(n.useEffect)((function(){v.length&&m(!0)}),[v]),Object(n.useEffect)((function(){O&&v.length&&(Y.length||(he("Keyboard commands enabled."),he("Press ? to view commands"),he(""),he("Game started with ".concat(v.length," players:")),he("".concat(v.join(", "))),he("")))}),[z,O,v,v.length,Y]),Object(n.useEffect)((function(){oe&&oe.current&&(oe.current.scrollTop=oe.current.scrollHeight)}),[Y]),Object(n.useEffect)((function(){if(v.length&&!p){for(var e=0,t=0,a=Object.keys($);t<a.length;t++)for(var n=a[t],c=0,r=Object.keys($[n]);c<r.length;c++){var l=r[c],o=$[n][l];e+=o.assignable&&null!==o.actual?1:0}if(e===13*v.length){he("GAME OVER!");var _=[],u=!0,s=!1,i=void 0;try{for(var f,d=v[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var E=f.value;_.push({player:E,score:$[E].total.actual}),he("".concat(E," has a total score of ").concat($[E].total.actual))}}catch(b){s=!0,i=b}finally{try{u||null==d.return||d.return()}finally{if(s)throw i}}_.sort((function(e,t){return e.score>t.score?-1:1})),he("".concat(_[0].player," wins! \ud83c\udfc6")),ae(_),h(!0)}}}),[$,p,v]),Object(u.a)("1",(function(){return Ee.current&&Ee.current.click()}),{keydown:!0,keyup:!1}),Object(u.a)("2",(function(){return be.current&&be.current.click()}),{keydown:!0,keyup:!1}),Object(u.a)("3",(function(){return Oe.current&&Oe.current.click()}),{keydown:!0,keyup:!1}),Object(u.a)("4",(function(){return me.current&&me.current.click()}),{keydown:!0,keyup:!1}),Object(u.a)("5",(function(){return ye.current&&ye.current.click()}),{keydown:!0,keyup:!1}),Object(u.a)("r",(function(){return ue.current&&ue.current.click()})),Object(u.a)("n",(function(){return _e.current&&_e.current.click()})),Object(u.a)("shift+/",(function(){return Pe()})),window.onbeforeunload=function(){return"Are you sure you want to leave?"};var Pe=function(){he("Keyboard commands enabled:"),he("\u2022 R - roll again"),he("\u2022 N - next turn"),he("\u2022 [1,2,3,4,5] - toggle selected dice"),he("\u2022 OPTION+[1-6,T,F,H,S,L,Y,C] - enter score"),he("\u2022 CTRL+Z - undo last entry (in current turn)"),he("")},pe=function(){S(z%v.length),H(z+1),De(!0)},he=function(e){Z((function(t){return[].concat(Object(o.a)(t),[e])}))},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e?a():Object(o.a)(x).map((function(e){return e.value=e.saved?e.value:T.a.random(1,6),e}));w(t),U(e?0:A+1)};return v.length?c.a.createElement(s.a.Provider,{value:{turns:z,setTurns:H,turnPlayed:i,setTurnPlayed:d,players:v,currentPlayerIndex:I,rolling:re,setRolling:le,rollIndex:A,setDice:w,dice:x,updateLog:he,refs:[Ee,be,Oe,me,ye],gameOver:p,scores:$||{},setScores:Q,lastPlay:fe,setLastPlay:de,log:Y}},c.a.createElement("div",{className:"Game"},c.a.createElement("div",{className:"Game-Playfield"},0===z&&c.a.createElement("div",{className:"Game-Playfield-StartGame"},c.a.createElement("button",{onClick:pe},"Player 1 go!")),p&&c.a.createElement("div",{className:"Game-Playfield-Fragment"},c.a.createElement("div",{className:"Game-Playfield-GameOver"},c.a.createElement("div",null,c.a.createElement("strong",null,"".concat(te[0].player," wins! \ud83c\udfc6"))),c.a.createElement("div",null,"Good game, ".concat(te[0].player,"!")),c.a.createElement("table",null,c.a.createElement("tbody",null,te.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,"#".concat(t+1)),c.a.createElement("td",null,e.player),c.a.createElement("td",null,"".concat(e.score," points")))})))))),!p&&A>=0&&z>0&&c.a.createElement("div",{className:"Game-Playfield-Fragment"},c.a.createElement("div",{className:"Game-Playfield-TurnIndicator ".concat(2===A?"last":"")},c.a.createElement("div",{className:"Game-Playfield-TurnIndicator-Player"},"".concat(v[I],"'s turn")),c.a.createElement("div",{className:"Game-Playfield-TurnIndicator-Roll"},"Roll # ".concat(A+1))),c.a.createElement("div",{className:"Game-Playfield-Dice"},c.a.createElement(g,null)),c.a.createElement("div",{className:"Game-Playfield-Buttons"},c.a.createElement("button",{ref:ue,onClick:function(){return De(!1)},disabled:A>1||i},"roll again!"),c.a.createElement("button",{ref:_e,onClick:pe,disabled:!i||13*v.length===z},"next turn!"))),c.a.createElement("div",{className:"Game-Playfield-Log"},c.a.createElement("textarea",{ref:oe,value:Y.join("\n")}))),O&&c.a.createElement("div",{className:"Game-Scoreboard"},c.a.createElement(k.a,null)))):c.a.createElement(f,{startGame:function(e){R(e)},players:v,setPlayers:R})}),S=(a(29),function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(I,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.f1be33bb.chunk.js.map