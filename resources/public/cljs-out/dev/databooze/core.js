// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('databooze.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.current_input !== 'undefined')){
} else {
databooze.core.current_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.user_inputs !== 'undefined')){
} else {
databooze.core.user_inputs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.database !== 'undefined')){
} else {
databooze.core.database = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$drink_DASH_name,"mojito",cljs.core.cst$kw$ingredients,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mint","sugar","lime","rum","club soda","ice"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$drink_DASH_name,"whiskey sour",cljs.core.cst$kw$ingredients,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["egg white","simple syrup","lemon","bourbon"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$drink_DASH_name,"mint julip",cljs.core.cst$kw$ingredients,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ice","bourbon","mint","simple syrup"], null)], null)], null));
}
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.last_item_id !== 'undefined')){
} else {
databooze.core.last_item_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(databooze.core.database)));
}
databooze.core.save_input = (function databooze$core$save_input(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(databooze.core.last_item_id,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(databooze.core.user_inputs,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.deref(databooze.core.last_item_id),cljs.core.cst$kw$value,clojure.string.lower_case(cljs.core.deref(databooze.core.current_input))], null));

return cljs.core.reset_BANG_(databooze.core.current_input,"");
});
databooze.core.get_user_input = (function databooze$core$get_user_input(all_ingredients,typed){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.deref(typed),cljs.core.cst$kw$on_DASH_change,(function (p1__13635_SHARP_){
return cljs.core.reset_BANG_(typed,p1__13635_SHARP_.target.value);
}),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (p1__13636_SHARP_){
var G__13637 = p1__13636_SHARP_.which;
switch (G__13637) {
case (13):
return databooze.core.save_input();

break;
default:
return null;

}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Submit",cljs.core.cst$kw$on_DASH_click,databooze.core.save_input], null)], null)], null);
});
databooze.core.delete$ = (function databooze$core$delete(id){
return cljs.core.reset_BANG_(databooze.core.user_inputs,cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x));
}),cljs.core.deref(databooze.core.user_inputs))));
});
databooze.core.title_case = (function databooze$core$title_case(name){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(name," ")));
});
databooze.core.sorted_title_string = (function databooze$core$sorted_title_string(coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(databooze.core.title_case,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll)));
});
databooze.core.things_i_have = (function databooze$core$things_i_have(user_inputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Things I have"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4529__auto__ = (function databooze$core$things_i_have_$_iter__13639(s__13640){
return (new cljs.core.LazySeq(null,(function (){
var s__13640__$1 = s__13640;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13640__$1);
if(temp__5735__auto__){
var s__13640__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13640__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13640__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13642 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13641 = (0);
while(true){
if((i__13641 < size__4528__auto__)){
var ingredient = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13641);
cljs.core.chunk_append(b__13642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),databooze.core.title_case(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(ingredient))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__13641,ingredient,c__4527__auto__,size__4528__auto__,b__13642,s__13640__$2,temp__5735__auto__){
return (function (){
return databooze.core.delete$(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ingredient));
});})(i__13641,ingredient,c__4527__auto__,size__4528__auto__,b__13642,s__13640__$2,temp__5735__auto__))
], null),"\u2716"], null)], null)], null));

var G__13643 = (i__13641 + (1));
i__13641 = G__13643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13642),databooze$core$things_i_have_$_iter__13639(cljs.core.chunk_rest(s__13640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13642),null);
}
} else {
var ingredient = cljs.core.first(s__13640__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ingredient)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,(10)], null)], null),databooze.core.title_case(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(ingredient))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (ingredient,s__13640__$2,temp__5735__auto__){
return (function (){
return databooze.core.delete$(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ingredient));
});})(ingredient,s__13640__$2,temp__5735__auto__))
], null),"\u2716"], null)], null)], null),databooze$core$things_i_have_$_iter__13639(cljs.core.rest(s__13640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(user_inputs));
})()], null)], null);
});
databooze.core.perfect_match = (function databooze$core$perfect_match(drink){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.cst$kw$ingredients.cljs$core$IFn$_invoke$arity$1(drink)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.deref(databooze.core.user_inputs)))));
});
databooze.core.can_make = (function databooze$core$can_make(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"I have everything for"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(databooze.core.perfect_match,cljs.core.deref(databooze.core.database));
var iter__4529__auto__ = (function databooze$core$can_make_$_iter__13644(s__13645){
return (new cljs.core.LazySeq(null,(function (){
var s__13645__$1 = s__13645;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13645__$1);
if(temp__5735__auto__){
var s__13645__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13645__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13645__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13647 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13646 = (0);
while(true){
if((i__13646 < size__4528__auto__)){
var drink = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13646);
cljs.core.chunk_append(b__13647,(function (){var recipe = databooze.core.sorted_title_string(cljs.core.cst$kw$ingredients.cljs$core$IFn$_invoke$arity$1(drink));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),databooze.core.title_case(cljs.core.cst$kw$drink_DASH_name.cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),"Recipe: ",recipe], null)], null);
})());

var G__13648 = (i__13646 + (1));
i__13646 = G__13648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13647),databooze$core$can_make_$_iter__13644(cljs.core.chunk_rest(s__13645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13647),null);
}
} else {
var drink = cljs.core.first(s__13645__$2);
return cljs.core.cons((function (){var recipe = databooze.core.sorted_title_string(cljs.core.cst$kw$ingredients.cljs$core$IFn$_invoke$arity$1(drink));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),databooze.core.title_case(cljs.core.cst$kw$drink_DASH_name.cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),"Recipe: ",recipe], null)], null);
})(),databooze$core$can_make_$_iter__13644(cljs.core.rest(s__13645__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(matches);
})()], null)], null);
});
databooze.core.almost_match = (function databooze$core$almost_match(drink){
return cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.deref(databooze.core.user_inputs))),cljs.core.set(cljs.core.cst$kw$ingredients.cljs$core$IFn$_invoke$arity$1(drink))));
});
databooze.core.get_missing_stuff = (function databooze$core$get_missing_stuff(drinks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (drink){
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.cst$kw$ingredients.cljs$core$IFn$_invoke$arity$1(drink)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.deref(databooze.core.user_inputs))));
var missing_string = databooze.core.sorted_title_string(missing);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(drink,cljs.core.cst$kw$missing,missing_string);
}),drinks);
});
databooze.core.almost_make = (function databooze$core$almost_make(database,user_inputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"I can almost make"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var partial_matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (drink){
if((!(databooze.core.perfect_match(drink)))){
return databooze.core.almost_match(drink);
} else {
return false;
}
}),cljs.core.deref(database));
var missing_stuff = databooze.core.get_missing_stuff(partial_matches);
var iter__4529__auto__ = (function databooze$core$almost_make_$_iter__13649(s__13650){
return (new cljs.core.LazySeq(null,(function (){
var s__13650__$1 = s__13650;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13650__$1);
if(temp__5735__auto__){
var s__13650__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13650__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13650__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13652 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13651 = (0);
while(true){
if((i__13651 < size__4528__auto__)){
var drink = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13651);
cljs.core.chunk_append(b__13652,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),databooze.core.title_case(cljs.core.cst$kw$drink_DASH_name.cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),"Missing: ",cljs.core.cst$kw$missing.cljs$core$IFn$_invoke$arity$1(drink)], null)], null));

var G__13653 = (i__13651 + (1));
i__13651 = G__13653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13652),databooze$core$almost_make_$_iter__13649(cljs.core.chunk_rest(s__13650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13652),null);
}
} else {
var drink = cljs.core.first(s__13650__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(drink)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),databooze.core.title_case(cljs.core.cst$kw$drink_DASH_name.cljs$core$IFn$_invoke$arity$1(drink))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,(20)], null)], null),"Missing: ",cljs.core.cst$kw$missing.cljs$core$IFn$_invoke$arity$1(drink)], null)], null),databooze$core$almost_make_$_iter__13649(cljs.core.rest(s__13650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(missing_stuff);
})()], null)], null);
});
databooze.core.main_app = (function databooze$core$main_app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Welcome to DataBooze"], null),databooze.core.get_user_input(databooze.core.user_inputs,databooze.core.current_input),databooze.core.things_i_have(databooze.core.user_inputs),databooze.core.can_make(),databooze.core.almost_make(databooze.core.database,databooze.core.user_inputs)], null);
});
databooze.core.mount = (function databooze$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [databooze.core.main_app], null),goog.dom.getElement("app"));
});
if((typeof databooze !== 'undefined') && (typeof databooze.core !== 'undefined') && (typeof databooze.core.start_up !== 'undefined')){
} else {
databooze.core.start_up = (function (){
databooze.core.mount();

return true;
})()
;
}
databooze.core.on_reload = (function databooze$core$on_reload(){
return databooze.core.mount();
});
