(this["webpackJsonpcode-names"]=this["webpackJsonpcode-names"]||[]).push([[0],{32:function(e,a,t){e.exports=t(54)},54:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(26),c=t(4),l=t(5),s=t(7),i=t(6),m=t(17),p=t(13),u=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Not Found"),n.a.createElement(m.b,{to:"/"},"Go Home"))}}]),t}(n.a.Component),d=t(31),h=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).keyHandle=function(a){console.log(a.keyCode),13===a.keyCode&&e.props.cardReveal(a),32===a.keyCode&&e.props.cardReveal(a)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement("div",{role:"button",tabIndex:e.revealed?"-1":"0",onKeyDown:this.keyHandle,onClick:this.props.cardReveal,index:this.props.index,className:"card".concat(e.revealed?" revealed ".concat(e.team):"").concat(this.props.spymaster?" ".concat(e.team):"")},n.a.createElement("p",{className:"card-word"},e.word))}}]),t}(n.a.Component),g=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"control-bar island"},n.a.createElement("h2",{className:"headline-6"},"Control Bar"),n.a.createElement("p",null,n.a.createElement("span",{className:"bold"},"Gamecode:")," ",n.a.createElement("em",{className:"gamecode"},this.props.gamecode)),n.a.createElement("div",{className:"switch push"},n.a.createElement("label",null,n.a.createElement("strong",null,"Spymaster:"),n.a.createElement("input",{onChange:this.props.spymasterSwitch,type:"checkbox",checked:!!this.props.spymaster}),n.a.createElement("span",{className:"lever"}))),n.a.createElement("button",{className:"btn",onClick:this.props.generateCards},"New Game"))}}]),t}(n.a.Component),b=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.props.state;return n.a.createElement("div",{className:"gameboard wrapper gutter spread-top spread-bottom"},n.a.createElement("section",{className:"cards".concat(a.spymaster?" spymaster":"")},Object.keys(a.cards).map((function(t){return n.a.createElement(h,{key:t,index:t,data:a.cards[t],cardReveal:e.props.cardReveal,spymaster:a.spymaster})}))),n.a.createElement("aside",{className:"info"},n.a.createElement(g,{gamecode:this.props.gamecode,spymasterSwitch:this.props.spymasterSwitch,generateCards:this.props.generateCards,spymaster:a.spymaster})))}}]),t}(n.a.Component);function y(e){return e[Math.floor(Math.random()*e.length)]}function f(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var v=["Hollywood","Well","Foot","New York","Spring","Court","Tube","Point","Tablet","Slip","Date","Drill","Lemon","Bell","Screen","Fair","Torch","State","Match","Iron","Block","France","Australia","Limousine","Stream","Glove","Nurse","Leprechaun","Play","Tooth","Arm","Bermuda","Diamond","Whale","Comic","Mammoth","Green","Pass","Missile","Paste","Drop","Pheonix","Marble","Staff","Figure","Park","Centaur","Shadow","Fish","Cotton","Egypt","Theater","Scale","Fall","Track","Force","Dinosaur","Bill","Mine","Turkey","March","Contract","Bridge","Robin","Line","Plate","Band","Fire","Bank","Boom","Cat","Shot","Suit","Chocolate","Roulette","Mercury","Moon","Net","Lawyer","Satellite","Angel","Spider","Germany","Fork","Pitch","King","Crane","Trip","Dog","Conductor","Part","Bugle","Witch","Ketchup","Press","Spine","Worm","Alps","Bond","Pan","Beijing","Racket","Cross","Seal","Aztec","Maple","Parachute","Hotel","Berry","Soldier","Ray","Post","Greece","Square","Mass","Bat","Wave","Car","Smuggler","England","Crash","Tail","Card","Horn","Capital","Fence","Deck","Buffalo","Microscope","Jet","Duck","Ring","Train","Field","Gold","Tick","Check","Queen","Strike","Kangaroo","Spike","Scientist","Engine","Shakespeare","Wind","Kid","Embassy","Robot","Note","Ground","Draft","Ham","War","Mouse","Center","Chick","China","Bolt","Spot","Piano","Pupil","Plot","Lion","Police","Head","Litter","Concert","Mug","Vacuum","Atlantis","Straw","Switch","Skyscraper","Laser","Scuba Diver","Africa","Plastic","Dwarf","Lap","Life","Honey","Horseshoe","Unicorn","Spy","Pants","Wall","Paper","Sound","Ice","Tag","Web","Fan","Orange","Temple","Canada","Scorpion","Undertaker","Mail","Europe","Soul","Apple","Pole","Tap","Mouth","Ambulance","Dress","Ice Cream","Rabbit","Buck","Agent","Sock","Nut","Boot","Ghost","Oil","Superhero","Code","Kiwi","Hospital","Saturn","Film","Button","Snowman","Helicopter","Loch Ness","Log","Princess","Time","Cook","Revolution","Shoe","Mole","Spell","Grass","Washer","Game","Beat","Hole","Horse","Pirate","Link","Dance","Fly","Pit","Server","School","Lock","Brush","Pool","Star","Jam","Organ","Berlin","Face","Luck","Amazon","Cast","Gas","Club","Sink","Water","Chair","Shark","Jupiter","Copper","Jack","Platypus","Stick","Olive","Grace","Bear","Glass","Row","Pistol","London","Rock","Van","Vet","Beach","Charge","Port","Disease","Palm","Moscow","Pin","Washington","Pyramid","Opera","Casino","Pilot","String","Night","Chest","Yard","Teacher","Pumpkin","Thief","Bark","Bug","Mint","Cycle","Telescope","Calf","Air","Box","Mount","Thumb","Antactica","Trunk","Snow","Penguin","Root","Bar","File","Hawk","Battery","Compound","Slug","Octopus","Whip","America","Ivory","Pound","Sub","Cliff","Lab","Eagle","Genious","Ship","Dice","Hood","Heart","Novel","Pipe","Himalayas","Crown","Round","India","Needle","Shop","Watch","Lead","Tie","Table","Cell","Cover","Czech","Back","Bomb","Ruler","Forest","Bottle","Space","Hook","Doctor","Ball","Bow","Degree","Rome","Plane","Giant","Nail","Dragon","Stadium","Flute","Carrot","Wake","Fighter","Model","Tokyo","Eye","Mexico","Hand","Swing","Key","Alien","Tower","Poison","Cricket","Cold","Knife","Church","Board","Cloak","Ninja","Olympus","Belt","Light","Death","Stock","Millionarie","Day","Knight","Pie","Bed","Circle","Rose","Change","Cap","Triangle"];function S(){return function(){for(var e=[],a=0;a<25;a++){var t=y(v);e.push(t)}return e}()}var C=t(29),k=t.n(C),E=t(30),w=t.n(E).a.initializeApp({apiKey:"AIzaSyDNF0tW0P_WQmbTug2hN7zG97MDKpKDVvQ",authDomain:"arobillard-games.firebaseapp.com",databaseURL:"https://arobillard-games.firebaseio.com"}),O=k.a.createClass(w.database()),N=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={cards:[],spymaster:!1},e.generateCards=function(){var a=S(),t={},r=1;a.forEach((function(e){var a={word:e,team:"civilian",revealed:!1};t["word".concat(r)]=a,r++}));var n=[];!function e(a){if(!(a.length>=18)){var t=Math.floor(25*Math.random()+1);a.indexOf(t)<0&&a.push(t),e(a)}}(n);for(var o=0;o<9;o++)t["word".concat(n[o])].team="red",console.log("team red: "+n[o]);n.splice(0,9);for(var c=0;c<8;c++)t["word".concat(n[c])].team="blue",console.log("team blue: "+n[c]);n.splice(0,8),t["word".concat(n[0])].team="assassin",e.setState({cards:t})},e.cardReveal=function(a){var t=a.currentTarget.getAttribute("index"),r=Object(d.a)({},e.state.cards);r[t].revealed=!0,e.setState({cards:r})},e.spymasterSwitch=function(a){a.currentTarget.checked?e.setState({spymaster:!0}):e.setState({spymaster:!1})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.gamecode);if(e){var a=JSON.parse(e);this.setState({cards:a.cards,spymaster:a.spymaster}),this.ref=O.syncState(this.props.match.params.gamecode,{context:this,state:"cards"})}else this.ref=O.syncState(this.props.match.params.gamecode,{context:this,state:"cards"}),console.log(this.state.cards)}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.gamecode,JSON.stringify(this.state))}},{key:"render",value:function(){return n.a.createElement(b,{state:this.state,cardReveal:this.cardReveal,spymasterSwitch:this.spymasterSwitch,gamecode:this.props.match.params.gamecode,generateCards:this.generateCards})}}]),t}(n.a.Component),P=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).gcInput=n.a.createRef(),e.goToGame=function(a){a.preventDefault();var t=e.gcInput.current.value;e.props.history.push("/".concat(f(t)))},e}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper pad-t-b-2 gutter"},n.a.createElement("form",{className:"welcome-form island-2",onSubmit:this.goToGame},n.a.createElement("h2",{className:"headline-4"},"Join or host a game!"),n.a.createElement("p",null,"To start a new game, simply enter a new unique ",n.a.createElement("strong",null,"Gamecode")," in the form below and hit ",n.a.createElement("em",null,"Start Playing"),"! If you wish to join a game someone else created, enter their ",n.a.createElement("strong",null,"Gamecode")," and hit ",n.a.createElement("em",null,"Start Playing"),"!"),n.a.createElement("div",{className:"grid-input-btn"},n.a.createElement("input",{type:"text",ref:this.gcInput,required:!0,placeholder:"Enter Gamecode",defaultValue:f("".concat(y(v),"-").concat(y(v),"-").concat(y(v)))}),n.a.createElement("button",{className:"btn",type:"submit"},"Start Playing!"))))}}]),t}(n.a.Component),j=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"masthead"},n.a.createElement("div",{className:"wrapper gutter pad-t"},n.a.createElement("h1",{className:"push-0"},n.a.createElement(m.b,{to:"/"},"Codenames"))))}}]),t}(n.a.Component),B=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer pad-t-b-2 gutter",role:"contentinfo"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",null,n.a.createElement("small",{className:"block push"},"Based on popular table top game ",n.a.createElement("a",{href:"https://czechgames.com",target:"_blank"},"Codenames")," by ",n.a.createElement("a",{href:"https://czechgames.com/en/codenames/",target:"_blank"},"Czech Games"),"."),n.a.createElement("small",{className:"block"},"This site was built for personal use only, not for monetary gain.")),n.a.createElement("div",null,n.a.createElement("small",{className:"block"},"Site designed and developed by ",n.a.createElement("a",{href:"https://adamrobillard.ca"},"Adam Robillard")))))}}]),t}(n.a.Component),T=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement(j,null),n.a.createElement("main",{id:"main",role:"main",className:"pad-t-b-4"},n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",component:P}),n.a.createElement(p.a,{path:"/:gamecode",component:N}),n.a.createElement(p.a,{component:u}))),n.a.createElement(B,null))}}]),t}(n.a.Component);Object(o.render)(n.a.createElement(T,null),document.querySelector("#react-loader"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f9320f04.chunk.js.map