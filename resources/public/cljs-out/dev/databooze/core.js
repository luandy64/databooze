// Compiled by ClojureScript 1.10.764 {}
goog.provide('databooze.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.current_input !== 'undefined')){
} else {
databooze.core.current_input = reagent.core.atom.call(null,"");
}
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.user_inputs !== 'undefined')){
} else {
databooze.core.user_inputs = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.database !== 'undefined')){
} else {
databooze.core.database = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),"mojito",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mint","sugar","lime","rum","club soda","ice"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),"whiskey sour",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["egg white","simple syrup","lemon","bourbon"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"drink-name","drink-name",1969470184),"mint julip",new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ice","bourbon","mint","simple syrup"], null)], null)], null));
}
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.last_item_id !== 'undefined')){
} else {
databooze.core.last_item_id = reagent.core.atom.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,databooze.core.database)));
}
databooze.core.save_input = (function databooze$core$save_input(){
cljs.core.swap_BANG_.call(null,databooze.core.last_item_id,cljs.core.inc);

cljs.core.swap_BANG_.call(null,databooze.core.user_inputs,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,databooze.core.last_item_id),new cljs.core.Keyword(null,"value","value",305978217),clojure.string.lower_case.call(null,cljs.core.deref.call(null,databooze.core.current_input))], null));

return cljs.core.reset_BANG_.call(null,databooze.core.current_input,"");
});
databooze.core.get_user_input = (function databooze$core$get_user_input(all_ingredients,typed){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,typed),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25542_SHARP_){
return cljs.core.reset_BANG_.call(null,typed,p1__25542_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__25543_SHARP_){
var G__25544 = p1__25543_SHARP_.which;
switch (G__25544) {
case (13):
return databooze.core.save_input.call(null);

break;
default:
return null;

}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),databooze.core.save_input], null)], null)], null);
});
databooze.core.delete$ = (function databooze$core$delete(id){
return cljs.core.reset_BANG_.call(null,databooze.core.user_inputs,cljs.core.vec.call(null,cljs.core.filter.call(null,(function (x){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x));
}),cljs.core.deref.call(null,databooze.core.user_inputs))));
});
databooze.core.title_case = (function databooze$core$title_case(name){
return clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,name," ")));
});
databooze.core.sorted_title_string = (function databooze$core$sorted_title_string(coll){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,databooze.core.title_case,cljs.core.sort.call(null,coll)));
});
databooze.core.things_i_have = (function databooze$core$things_i_have(user_inputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Things I have"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function databooze$core$things_i_have_$_iter__25546(s__25547){
return (new cljs.core.LazySeq(null,(function (){
var s__25547__$1 = s__25547;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25547__$1);
if(temp__5735__auto__){
var s__25547__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25547__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25547__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25549 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25548 = (0);
while(true){
if((i__25548 < size__4528__auto__)){
var ingredient = cljs.core._nth.call(null,c__4527__auto__,i__25548);
cljs.core.chunk_append.call(null,b__25549,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),databooze.core.title_case.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ingredient))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25548,ingredient,c__4527__auto__,size__4528__auto__,b__25549,s__25547__$2,temp__5735__auto__){
return (function (){
return databooze.core.delete$.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient));
});})(i__25548,ingredient,c__4527__auto__,size__4528__auto__,b__25549,s__25547__$2,temp__5735__auto__))
], null),"\u2716"], null)], null)], null));

var G__25550 = (i__25548 + (1));
i__25548 = G__25550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25549),databooze$core$things_i_have_$_iter__25546.call(null,cljs.core.chunk_rest.call(null,s__25547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25549),null);
}
} else {
var ingredient = cljs.core.first.call(null,s__25547__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),databooze.core.title_case.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ingredient))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ingredient,s__25547__$2,temp__5735__auto__){
return (function (){
return databooze.core.delete$.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ingredient));
});})(ingredient,s__25547__$2,temp__5735__auto__))
], null),"\u2716"], null)], null)], null),databooze$core$things_i_have_$_iter__25546.call(null,cljs.core.rest.call(null,s__25547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.deref.call(null,user_inputs));
})()], null)], null);
});
databooze.core.perfect_match = (function databooze$core$perfect_match(drink){
return cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,databooze.core.user_inputs)))));
});
databooze.core.can_make = (function databooze$core$can_make(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"I have everything for"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var matches = cljs.core.filter.call(null,databooze.core.perfect_match,cljs.core.deref.call(null,databooze.core.database));
var iter__4529__auto__ = (function databooze$core$can_make_$_iter__25551(s__25552){
return (new cljs.core.LazySeq(null,(function (){
var s__25552__$1 = s__25552;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25552__$1);
if(temp__5735__auto__){
var s__25552__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25552__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25552__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25554 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25553 = (0);
while(true){
if((i__25553 < size__4528__auto__)){
var drink = cljs.core._nth.call(null,c__4527__auto__,i__25553);
cljs.core.chunk_append.call(null,b__25554,(function (){var recipe = databooze.core.sorted_title_string.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),databooze.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Recipe: ",recipe], null)], null);
})());

var G__25555 = (i__25553 + (1));
i__25553 = G__25555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25554),databooze$core$can_make_$_iter__25551.call(null,cljs.core.chunk_rest.call(null,s__25552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25554),null);
}
} else {
var drink = cljs.core.first.call(null,s__25552__$2);
return cljs.core.cons.call(null,(function (){var recipe = databooze.core.sorted_title_string.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),databooze.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Recipe: ",recipe], null)], null);
})(),databooze$core$can_make_$_iter__25551.call(null,cljs.core.rest.call(null,s__25552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,matches);
})()], null)], null);
});
databooze.core.almost_match = (function databooze$core$almost_match(drink){
return cljs.core.not_empty.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,databooze.core.user_inputs))),cljs.core.set.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink))));
});
databooze.core.get_missing_stuff = (function databooze$core$get_missing_stuff(drinks){
return cljs.core.map.call(null,(function (drink){
var missing = clojure.set.difference.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"ingredients","ingredients",-1855671917).cljs$core$IFn$_invoke$arity$1(drink)),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,databooze.core.user_inputs))));
var missing_string = databooze.core.sorted_title_string.call(null,missing);
return cljs.core.assoc.call(null,drink,new cljs.core.Keyword(null,"missing","missing",362507769),missing_string);
}),drinks);
});
databooze.core.almost_make = (function databooze$core$almost_make(database,user_inputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"I can almost make"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var partial_matches = cljs.core.filter.call(null,(function (drink){
if((!(databooze.core.perfect_match.call(null,drink)))){
return databooze.core.almost_match.call(null,drink);
} else {
return false;
}
}),cljs.core.deref.call(null,database));
var missing_stuff = databooze.core.get_missing_stuff.call(null,partial_matches);
var iter__4529__auto__ = (function databooze$core$almost_make_$_iter__25556(s__25557){
return (new cljs.core.LazySeq(null,(function (){
var s__25557__$1 = s__25557;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25557__$1);
if(temp__5735__auto__){
var s__25557__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25557__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__25557__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__25559 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__25558 = (0);
while(true){
if((i__25558 < size__4528__auto__)){
var drink = cljs.core._nth.call(null,c__4527__auto__,i__25558);
cljs.core.chunk_append.call(null,b__25559,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),databooze.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Missing: ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(drink)], null)], null));

var G__25560 = (i__25558 + (1));
i__25558 = G__25560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25559),databooze$core$almost_make_$_iter__25556.call(null,cljs.core.chunk_rest.call(null,s__25557__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25559),null);
}
} else {
var drink = cljs.core.first.call(null,s__25557__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),databooze.core.title_case.call(null,new cljs.core.Keyword(null,"drink-name","drink-name",1969470184).cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),"Missing: ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(drink)], null)], null),databooze$core$almost_make_$_iter__25556.call(null,cljs.core.rest.call(null,s__25557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,missing_stuff);
})()], null)], null);
});
databooze.core.get_app_element = (function databooze$core$get_app_element(){
return goog.dom.getElement("app");
});
databooze.core.main_app = (function databooze$core$main_app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to DataBooze"], null),databooze.core.get_user_input.call(null,databooze.core.user_inputs,databooze.core.current_input),databooze.core.things_i_have.call(null,databooze.core.user_inputs),databooze.core.can_make.call(null),databooze.core.almost_make.call(null,databooze.core.database,databooze.core.user_inputs)], null);
});
databooze.core.mount = (function databooze$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [databooze.core.main_app], null),el);
});
databooze.core.mount_app_element = (function databooze$core$mount_app_element(){
var temp__5735__auto__ = databooze.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return databooze.core.mount.call(null,el);
} else {
return null;
}
});
databooze.core.mount_app_element.call(null);
databooze.core.on_reload = (function databooze$core$on_reload(){
return databooze.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
