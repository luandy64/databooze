// Compiled by ClojureScript 1.10.520 {}
goog.provide('db2.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
if((typeof db2 !== 'undefined') && (typeof db2.core !== 'undefined') && (typeof db2.core.item_id !== 'undefined')){
} else {
db2.core.item_id = reagent.core.atom.call(null,(4));
}
if((typeof db2 !== 'undefined') && (typeof db2.core !== 'undefined') && (typeof db2.core.current_input !== 'undefined')){
} else {
db2.core.current_input = reagent.core.atom.call(null,"");
}
if((typeof db2 !== 'undefined') && (typeof db2.core !== 'undefined') && (typeof db2.core.user_inputs !== 'undefined')){
} else {
db2.core.user_inputs = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof db2 !== 'undefined') && (typeof db2.core !== 'undefined') && (typeof db2.core.database !== 'undefined')){
} else {
db2.core.database = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),"mojito",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mint","sugar","lime","rum","club soda","ice"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),"whiskey sour",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["egg white","simple syrup","lemon","bourbon"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),"mint julip",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ice","bourbon","mint","simple syrup"], null)], null)], null));
}
db2.core.save_input = (function db2$core$save_input(){
cljs.core.swap_BANG_.call(null,db2.core.item_id,cljs.core.inc);

cljs.core.swap_BANG_.call(null,db2.core.user_inputs,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,db2.core.item_id),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,db2.core.current_input)], null));

return cljs.core.reset_BANG_.call(null,db2.core.current_input,"");
});
db2.core.get_user_input = (function db2$core$get_user_input(all_ingredients,typed){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,typed),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15591_SHARP_){
return cljs.core.reset_BANG_.call(null,typed,p1__15591_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),db2.core.save_input], null)], null)], null);
});
db2.core.delete$ = (function db2$core$delete(id){
return cljs.core.reset_BANG_.call(null,db2.core.user_inputs,cljs.core.vec.call(null,cljs.core.filter.call(null,(function (x){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x));
}),cljs.core.deref.call(null,db2.core.user_inputs))));
});
db2.core.things_i_have = (function db2$core$things_i_have(user_inputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Things I have"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function db2$core$things_i_have_$_iter__15592(s__15593){
return (new cljs.core.LazySeq(null,(function (){
var s__15593__$1 = s__15593;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15593__$1);
if(temp__5457__auto__){
var s__15593__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15593__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15593__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15595 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15594 = (0);
while(true){
if((i__15594 < size__4522__auto__)){
var ingredient = cljs.core._nth.call(null,c__4521__auto__,i__15594);
cljs.core.chunk_append.call(null,b__15595,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15594,ingredient,c__4521__auto__,size__4522__auto__,b__15595,s__15593__$2,temp__5457__auto__){
return (function (){
return db2.core.delete$.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient));
});})(i__15594,ingredient,c__4521__auto__,size__4522__auto__,b__15595,s__15593__$2,temp__5457__auto__))
], null),"\u2716"], null)], null)], null));

var G__15596 = (i__15594 + (1));
i__15594 = G__15596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15595),db2$core$things_i_have_$_iter__15592.call(null,cljs.core.chunk_rest.call(null,s__15593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15595),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__15593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ingredient,s__15593__$2,temp__5457__auto__){
return (function (){
return db2.core.delete$.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient));
});})(ingredient,s__15593__$2,temp__5457__auto__))
], null),"\u2716"], null)], null)], null),db2$core$things_i_have_$_iter__15592.call(null,cljs.core.rest.call(null,s__15593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,user_inputs));
})()], null)], null);
});
db2.core.title_case = (function db2$core$title_case(name){
return clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,name," ")));
});
db2.core.perfect_match = (function db2$core$perfect_match(drink){
return cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,db2.core.user_inputs)))));
});
db2.core.can_make = (function db2$core$can_make(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"I have everything for"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var matches = cljs.core.filter.call(null,db2.core.perfect_match,cljs.core.deref.call(null,db2.core.database));
var iter__4523__auto__ = ((function (matches){
return (function db2$core$can_make_$_iter__15597(s__15598){
return (new cljs.core.LazySeq(null,((function (matches){
return (function (){
var s__15598__$1 = s__15598;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15598__$1);
if(temp__5457__auto__){
var s__15598__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15598__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15598__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15600 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15599 = (0);
while(true){
if((i__15599 < size__4522__auto__)){
var drink = cljs.core._nth.call(null,c__4521__auto__,i__15599);
cljs.core.chunk_append.call(null,b__15600,(function (){var recipe = clojure.string.join.call(null,", ",cljs.core.sort.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),db2.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Recipe: ",recipe], null)], null);
})());

var G__15601 = (i__15599 + (1));
i__15599 = G__15601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15600),db2$core$can_make_$_iter__15597.call(null,cljs.core.chunk_rest.call(null,s__15598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15600),null);
}
} else {
var drink = cljs.core.first.call(null,s__15598__$2);
return cljs.core.cons.call(null,(function (){var recipe = clojure.string.join.call(null,", ",cljs.core.sort.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),db2.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Recipe: ",recipe], null)], null);
})(),db2$core$can_make_$_iter__15597.call(null,cljs.core.rest.call(null,s__15598__$2)));
}
} else {
return null;
}
break;
}
});})(matches))
,null,null));
});})(matches))
;
return iter__4523__auto__.call(null,matches);
})()], null)], null);
});
db2.core.almost_match = (function db2$core$almost_match(drink){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,db2.core.user_inputs))),cljs.core.set.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)));
});
db2.core.get_missing_stuff = (function db2$core$get_missing_stuff(drinks){
return cljs.core.map.call(null,(function (drink){
var missing = cljs.core.sort.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,db2.core.user_inputs)))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink),new cljs.core.Keyword(null,"missing","missing",362507769),clojure.string.join.call(null,", ",missing)], null);
}),drinks);
});
db2.core.almost_make = (function db2$core$almost_make(database,user_inputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"I can almost make"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var partial_matches = cljs.core.filter.call(null,(function (drink){
var and__4120__auto__ = (!(db2.core.perfect_match.call(null,drink)));
if(and__4120__auto__){
return db2.core.almost_match.call(null,drink);
} else {
return and__4120__auto__;
}
}),cljs.core.deref.call(null,database));
var missing_stuff = db2.core.get_missing_stuff.call(null,partial_matches);
var iter__4523__auto__ = ((function (partial_matches,missing_stuff){
return (function db2$core$almost_make_$_iter__15602(s__15603){
return (new cljs.core.LazySeq(null,((function (partial_matches,missing_stuff){
return (function (){
var s__15603__$1 = s__15603;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15603__$1);
if(temp__5457__auto__){
var s__15603__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15603__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15603__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15605 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15604 = (0);
while(true){
if((i__15604 < size__4522__auto__)){
var drink = cljs.core._nth.call(null,c__4521__auto__,i__15604);
cljs.core.chunk_append.call(null,b__15605,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),db2.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Missing: ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(drink)], null)], null));

var G__15606 = (i__15604 + (1));
i__15604 = G__15606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15605),db2$core$almost_make_$_iter__15602.call(null,cljs.core.chunk_rest.call(null,s__15603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15605),null);
}
} else {
var drink = cljs.core.first.call(null,s__15603__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),db2.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Missing: ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(drink)], null)], null),db2$core$almost_make_$_iter__15602.call(null,cljs.core.rest.call(null,s__15603__$2)));
}
} else {
return null;
}
break;
}
});})(partial_matches,missing_stuff))
,null,null));
});})(partial_matches,missing_stuff))
;
return iter__4523__auto__.call(null,missing_stuff);
})()], null)], null);
});
db2.core.get_app_element = (function db2$core$get_app_element(){
return goog.dom.getElement("app");
});
db2.core.hello_world = (function db2$core$hello_world(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to DataBooze"], null),db2.core.get_user_input.call(null,db2.core.user_inputs,db2.core.current_input),db2.core.things_i_have.call(null,db2.core.user_inputs),db2.core.can_make.call(null),db2.core.almost_make.call(null,db2.core.database,db2.core.user_inputs)], null);
});
db2.core.mount = (function db2$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db2.core.hello_world], null),el);
});
db2.core.mount_app_element = (function db2$core$mount_app_element(){
var temp__5457__auto__ = db2.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return db2.core.mount.call(null,el);
} else {
return null;
}
});
db2.core.mount_app_element.call(null);
db2.core.on_reload = (function db2$core$on_reload(){
return db2.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
