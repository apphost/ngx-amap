(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{gKK7:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),u=function(){return function(){}}(),t=e("pMnS"),r=e("LOpI"),i=e("icah"),c=e("WFzO"),o=e("d+NZ"),s=e("vPfJ"),p=e("OQnT"),b=e("NEdW"),d=e("udNS"),m="import { Component, OnInit } from '@angular/core';\nimport { AmapPlaceSearchService, AmapPlaceSearchWrapper } from 'ngx-amap';\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit {\n  private plugin: Promise<AmapPlaceSearchWrapper>;\n\n  constructor(private amapPlaceSearch: AmapPlaceSearchService) { }\n\n  ngOnInit() {\n  }\n\n  onMapReady(map) {\n    // \u6784\u9020\u5730\u70b9\u67e5\u8be2 wrapper promise:\n    this.plugin = this.amapPlaceSearch.of({\n      pageSize: 5,\n      pageIndex: 1,\n      city: '010', // \u57ce\u5e02\n      map: map,\n      panel: 'panel'\n    });\n\n    this.plugin.then(placeSearch => placeSearch.search('\u5317\u4eac\u5927\u5b66'))\n        .then(data => {\n          console.log('place search for \u5317\u4eac\u5927\u5b66');\n          console.log('status:', data.status);\n          console.log('result:', data.result);\n        });\n  }\n}",h='<div class="relative">\n  <div id="panel"></div>\n  <ngx-amap class="demo-map-lg" [resizeEnable]="true" (ready)="onMapReady($event)"></ngx-amap>\n</div>',v=function(){function l(l){this.amapPlaceSearch=l,this.demo_md_html=h,this.demo_md_ts=m}return l.prototype.ngOnInit=function(){},l.prototype.onMapReady=function(l){this.plugin=this.amapPlaceSearch.of({pageSize:5,pageIndex:1,city:"010",map:l,panel:"panel"}),this.plugin.then(function(l){return l.search("\u5317\u4eac\u5927\u5b66")}).then(function(l){console.log("place search for \u5317\u4eac\u5927\u5b66"),console.log("status:",l.status),console.log("result:",l.result)})},l}(),g=a.pb({encapsulation:0,styles:[["#panel[_ngcontent-%COMP%]{position:absolute;background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px;z-index:200}.relative[_ngcontent-%COMP%]{position:relative}"]],data:{}});function f(l){return a.Lb(0,[a.Db(0,r.a,[]),(l()(),a.rb(1,0,null,null,38,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(l()(),a.rb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,[" \u7b80\u5355\u793a\u4f8b\uff1a\u641c\u7d22'\u5317\u4eac\u5927\u5b66' "])),(l()(),a.rb(4,0,null,null,35,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.rb(5,0,null,null,17,"div",[["class","relative"]],null,null,null,null,null)),(l()(),a.rb(6,0,null,null,0,"div",[["class","panel"],["id","panel"]],null,null,null,null,null)),(l()(),a.rb(7,0,null,null,15,"ngx-amap",[["class","demo-map-lg"]],null,[[null,"ready"]],function(l,n,e){var a=!0;return"ready"===n&&(a=!1!==l.component.onMapReady(e)&&a),a},i.d,i.b)),a.Gb(4608,null,c.G,c.G,[c.A,c.F,c.H,c.I,c.K]),a.Gb(4608,null,c.L,c.L,[c.A,c.F,c.H,c.J]),a.Gb(4608,null,c.M,c.M,[c.A,c.N,c.F]),a.Gb(4608,null,c.O,c.O,[c.A,c.F,c.H,c.N]),a.Gb(4608,null,c.P,c.P,[c.A,c.F,c.H,c.J,c.N]),a.Gb(4608,null,c.Q,c.Q,[c.A,c.N,c.F]),a.Gb(4608,null,c.R,c.R,[c.A,c.F]),a.Gb(4608,null,c.S,c.S,[c.A,c.N,c.F]),a.Gb(4608,null,c.T,c.T,[c.A,c.F,c.H,c.I]),a.Gb(4608,null,c.U,c.U,[c.A,c.N,c.F]),a.Gb(4608,null,c.V,c.V,[c.A,c.N,c.F]),a.Gb(4608,null,c.W,c.W,[c.A,c.N,c.F]),a.Gb(4608,null,c.X,c.X,[c.A,c.F,c.N]),a.Gb(512,null,c.A,c.A,[c.C,c.F]),a.qb(22,770048,null,0,c.y,[a.k,c.A,c.F],{resizeEnable:[0,"resizeEnable"]},{ready:"ready"}),(l()(),a.rb(23,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),a.rb(24,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,o.b,o.a)),a.qb(25,180224,null,0,s.a,[p.a,a.F],null,null),(l()(),a.rb(26,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),a.qb(27,212992,null,0,b.a,[s.a,a.k,a.F],{heading:[0,"heading"]},null),(l()(),a.rb(28,0,null,null,2,"markdown",[],null,null,null,d.b,d.a)),a.qb(29,4767744,null,0,r.b,[a.k,r.d],{data:[0,"data"]},null),a.Fb(30,2),(l()(),a.rb(31,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),a.qb(32,212992,null,0,b.a,[s.a,a.k,a.F],{heading:[0,"heading"]},null),(l()(),a.rb(33,0,null,null,2,"markdown",[],null,null,null,d.b,d.a)),a.qb(34,4767744,null,0,r.b,[a.k,r.d],{data:[0,"data"]},null),a.Fb(35,2),(l()(),a.rb(36,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),a.qb(37,212992,null,0,b.a,[s.a,a.k,a.F],{heading:[0,"heading"]},null),(l()(),a.rb(38,0,null,null,1,"a",[["href","api-doc/injectables/AmapPlaceSearchService.html"],["target","_blank"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(l,n){var e=n.component;l(n,22,0,!0),l(n,27,0,"HTML");var u=a.Kb(n,29,0,l(n,30,0,a.Bb(n,0),e.demo_md_html,"html"));l(n,29,0,u),l(n,32,0,"Component");var t=a.Kb(n,34,0,l(n,35,0,a.Bb(n,0),e.demo_md_ts,"typescript"));l(n,34,0,t),l(n,37,0,"API")},function(l,n){l(n,24,0,a.Bb(n,25).clazz),l(n,26,0,a.Bb(n,27).id,a.Bb(n,27).active,a.Bb(n,27).addClass),l(n,31,0,a.Bb(n,32).id,a.Bb(n,32).active,a.Bb(n,32).addClass),l(n,36,0,a.Bb(n,37).id,a.Bb(n,37).active,a.Bb(n,37).addClass)})}function S(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"app-simple",[],null,null,null,f,g)),a.qb(1,114688,null,0,v,[c.o],null,null)],function(l,n){l(n,1,0)},null)}var A=a.nb("app-simple",v,S,{},{},[]),P="import { Component, OnInit, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { AmapPlaceSearchService, AmapPlaceSearchWrapper } from 'ngx-amap';\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements OnInit, OnDestroy {\n  private _subscription: Subscription;\n  private plugin: Promise<AmapPlaceSearchWrapper>;\n\n  constructor(private amapPlaceSearch: AmapPlaceSearchService) { }\n\n  ngOnInit() {\n    // \u6784\u9020\u5730\u70b9\u67e5\u8be2 wrapper promise:\n    // \u4e0d\u5728\u5730\u56fe\u4e0a\u663e\u793amarkers\n    this.plugin = this.amapPlaceSearch.of({\n      pageSize: 5,\n      pageIndex: 1,\n      city: '010',\n      panel: 'panel'\n    });\n\n    // \u7ed1\u5b9a\u4e8b\u4ef6\u4fa6\u542c\uff1a\n    this.plugin.then(placeSearch => {\n      this._subscription = placeSearch.on('complete').subscribe(event => console.log('PlaceSearch event: \"complete\"', event));\n      this._subscription.add(placeSearch.on('error').subscribe(event => console.log('PlaceSearch event: \"error\"', event)));\n      this._subscription.add(placeSearch.on('selectChanged').subscribe(event => console.log('PlaceSearch event: \"selectChanged\"', event)));\n      this._subscription.add(\n        placeSearch.on('listElementClick').subscribe(event => console.log('PlaceSearch event: \"listElementClick\"', event))\n      );\n      this._subscription.add(\n        placeSearch.on('markerClick').subscribe(event => console.log('PlaceSearch event: \"markerClick\"', event))\n      );\n    });\n\n    this.plugin.then(placeSearch => placeSearch.search('\u5317\u4eac\u5927\u5b66'));\n  }\n\n  ngOnDestroy() {\n    if (this._subscription) {\n      this._subscription.unsubscribe();\n    }\n  }\n}",F='<div class="relative">\n  <div id="panel" class="panel"></div>\n  <ngx-amap class="demo-map-lg" [resizeEnable]="true"></ngx-amap>\n</div>',_=function(){function l(l){this.amapPlaceSearch=l,this.demo_md_html=F,this.demo_md_ts=P}return l.prototype.ngOnInit=function(){var l=this;this.plugin=this.amapPlaceSearch.of({pageSize:5,pageIndex:1,city:"010",panel:"panel"}),this.plugin.then(function(n){l._subscription=n.on("complete").subscribe(function(l){return console.log('PlaceSearch event: "complete"',l)}),l._subscription.add(n.on("error").subscribe(function(l){return console.log('PlaceSearch event: "error"',l)})),l._subscription.add(n.on("selectChanged").subscribe(function(l){return console.log('PlaceSearch event: "selectChanged"',l)})),l._subscription.add(n.on("listElementClick").subscribe(function(l){return console.log('PlaceSearch event: "listElementClick"',l)})),l._subscription.add(n.on("markerClick").subscribe(function(l){return console.log('PlaceSearch event: "markerClick"',l)}))}),this.plugin.then(function(l){return l.search("\u5317\u4eac\u5927\u5b66")})},l.prototype.ngOnDestroy=function(){this._subscription&&this._subscription.unsubscribe()},l}(),C=a.pb({encapsulation:0,styles:[["#panel[_ngcontent-%COMP%]{position:absolute;background-color:#fff;max-height:90%;overflow-y:auto;top:10px;right:10px;width:280px;z-index:200}.relative[_ngcontent-%COMP%]{position:relative}"]],data:{}});function k(l){return a.Lb(0,[a.Db(0,r.a,[]),(l()(),a.rb(1,0,null,null,40,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(l()(),a.rb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,[" \u4e8b\u4ef6 "])),(l()(),a.rb(4,0,null,null,37,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.rb(5,0,null,null,1,"div",[["class","alert alert-info mb-3"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["\u8bf7\u67e5\u770bconsole\u8f93\u51fa"])),(l()(),a.rb(7,0,null,null,17,"div",[["class","relative"]],null,null,null,null,null)),(l()(),a.rb(8,0,null,null,0,"div",[["class","panel"],["id","panel"]],null,null,null,null,null)),(l()(),a.rb(9,0,null,null,15,"ngx-amap",[["class","demo-map-lg"]],null,null,null,i.d,i.b)),a.Gb(4608,null,c.G,c.G,[c.A,c.F,c.H,c.I,c.K]),a.Gb(4608,null,c.L,c.L,[c.A,c.F,c.H,c.J]),a.Gb(4608,null,c.M,c.M,[c.A,c.N,c.F]),a.Gb(4608,null,c.O,c.O,[c.A,c.F,c.H,c.N]),a.Gb(4608,null,c.P,c.P,[c.A,c.F,c.H,c.J,c.N]),a.Gb(4608,null,c.Q,c.Q,[c.A,c.N,c.F]),a.Gb(4608,null,c.R,c.R,[c.A,c.F]),a.Gb(4608,null,c.S,c.S,[c.A,c.N,c.F]),a.Gb(4608,null,c.T,c.T,[c.A,c.F,c.H,c.I]),a.Gb(4608,null,c.U,c.U,[c.A,c.N,c.F]),a.Gb(4608,null,c.V,c.V,[c.A,c.N,c.F]),a.Gb(4608,null,c.W,c.W,[c.A,c.N,c.F]),a.Gb(4608,null,c.X,c.X,[c.A,c.F,c.N]),a.Gb(512,null,c.A,c.A,[c.C,c.F]),a.qb(24,770048,null,0,c.y,[a.k,c.A,c.F],{resizeEnable:[0,"resizeEnable"]},null),(l()(),a.rb(25,0,null,null,16,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),a.rb(26,0,null,null,15,"tabset",[],[[2,"tab-container",null]],null,null,o.b,o.a)),a.qb(27,180224,null,0,s.a,[p.a,a.F],null,null),(l()(),a.rb(28,0,null,0,4,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),a.qb(29,212992,null,0,b.a,[s.a,a.k,a.F],{heading:[0,"heading"]},null),(l()(),a.rb(30,0,null,null,2,"markdown",[],null,null,null,d.b,d.a)),a.qb(31,4767744,null,0,r.b,[a.k,r.d],{data:[0,"data"]},null),a.Fb(32,2),(l()(),a.rb(33,0,null,0,4,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),a.qb(34,212992,null,0,b.a,[s.a,a.k,a.F],{heading:[0,"heading"]},null),(l()(),a.rb(35,0,null,null,2,"markdown",[],null,null,null,d.b,d.a)),a.qb(36,4767744,null,0,r.b,[a.k,r.d],{data:[0,"data"]},null),a.Fb(37,2),(l()(),a.rb(38,0,null,0,3,"tab",[["heading","API"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),a.qb(39,212992,null,0,b.a,[s.a,a.k,a.F],{heading:[0,"heading"]},null),(l()(),a.rb(40,0,null,null,1,"a",[["href","api-doc/injectables/AmapPlaceSearchService.html"],["target","_blank"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"]))],function(l,n){var e=n.component;l(n,24,0,!0),l(n,29,0,"HTML");var u=a.Kb(n,31,0,l(n,32,0,a.Bb(n,0),e.demo_md_html,"html"));l(n,31,0,u),l(n,34,0,"Component");var t=a.Kb(n,36,0,l(n,37,0,a.Bb(n,0),e.demo_md_ts,"typescript"));l(n,36,0,t),l(n,39,0,"API")},function(l,n){l(n,26,0,a.Bb(n,27).clazz),l(n,28,0,a.Bb(n,29).id,a.Bb(n,29).active,a.Bb(n,29).addClass),l(n,33,0,a.Bb(n,34).id,a.Bb(n,34).active,a.Bb(n,34).addClass),l(n,38,0,a.Bb(n,39).id,a.Bb(n,39).active,a.Bb(n,39).addClass)})}function y(l){return a.Lb(0,[(l()(),a.rb(0,0,null,null,1,"app-events",[],null,null,null,k,C)),a.qb(1,245760,null,0,_,[c.o],null,null)],function(l,n){l(n,1,0)},null)}var G=a.nb("app-events",_,y,{},{},[]),z=e("Ip0R"),x=e("z+jS"),B=e("7PmN"),N=e("ZYCi"),O={title:"\u7b80\u5355\u793a\u4f8b"},I={title:"\u4e8b\u4ef6"},M=function(){return function(){}}();e.d(n,"AmapPlaceSearchServiceDemoModuleNgFactory",function(){return q});var q=a.ob(u,[],function(l){return a.yb([a.zb(512,a.j,a.db,[[8,[t.a,A,G]],[3,a.j],a.x]),a.zb(4608,z.n,z.m,[a.u,[2,z.u]]),a.zb(1073742336,z.c,z.c,[]),a.zb(1073742336,c.z,c.z,[]),a.zb(1073742336,x.a,x.a,[]),a.zb(1073742336,r.c,r.c,[]),a.zb(1073742336,B.a,B.a,[]),a.zb(1073742336,N.o,N.o,[[2,N.u],[2,N.l]]),a.zb(1073742336,M,M,[]),a.zb(1073742336,u,u,[]),a.zb(1024,N.j,function(){return[[{path:"",redirectTo:"/AmapPlaceSearchService/simple",pathMatch:"full"},{path:"simple",component:v,data:O},{path:"events",component:_,data:I}]]},[])])})}}]);