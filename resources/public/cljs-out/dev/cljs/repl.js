// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26772){
var map__26773 = p__26772;
var map__26773__$1 = (((((!((map__26773 == null))))?(((((map__26773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26773):map__26773);
var m = map__26773__$1;
var n = cljs.core.get.call(null,map__26773__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26775_26807 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26776_26808 = null;
var count__26777_26809 = (0);
var i__26778_26810 = (0);
while(true){
if((i__26778_26810 < count__26777_26809)){
var f_26811 = cljs.core._nth.call(null,chunk__26776_26808,i__26778_26810);
cljs.core.println.call(null,"  ",f_26811);


var G__26812 = seq__26775_26807;
var G__26813 = chunk__26776_26808;
var G__26814 = count__26777_26809;
var G__26815 = (i__26778_26810 + (1));
seq__26775_26807 = G__26812;
chunk__26776_26808 = G__26813;
count__26777_26809 = G__26814;
i__26778_26810 = G__26815;
continue;
} else {
var temp__5735__auto___26816 = cljs.core.seq.call(null,seq__26775_26807);
if(temp__5735__auto___26816){
var seq__26775_26817__$1 = temp__5735__auto___26816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26775_26817__$1)){
var c__4556__auto___26818 = cljs.core.chunk_first.call(null,seq__26775_26817__$1);
var G__26819 = cljs.core.chunk_rest.call(null,seq__26775_26817__$1);
var G__26820 = c__4556__auto___26818;
var G__26821 = cljs.core.count.call(null,c__4556__auto___26818);
var G__26822 = (0);
seq__26775_26807 = G__26819;
chunk__26776_26808 = G__26820;
count__26777_26809 = G__26821;
i__26778_26810 = G__26822;
continue;
} else {
var f_26823 = cljs.core.first.call(null,seq__26775_26817__$1);
cljs.core.println.call(null,"  ",f_26823);


var G__26824 = cljs.core.next.call(null,seq__26775_26817__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26775_26807 = G__26824;
chunk__26776_26808 = G__26825;
count__26777_26809 = G__26826;
i__26778_26810 = G__26827;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26828 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26828);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26828)))?cljs.core.second.call(null,arglists_26828):arglists_26828));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26779_26829 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26780_26830 = null;
var count__26781_26831 = (0);
var i__26782_26832 = (0);
while(true){
if((i__26782_26832 < count__26781_26831)){
var vec__26793_26833 = cljs.core._nth.call(null,chunk__26780_26830,i__26782_26832);
var name_26834 = cljs.core.nth.call(null,vec__26793_26833,(0),null);
var map__26796_26835 = cljs.core.nth.call(null,vec__26793_26833,(1),null);
var map__26796_26836__$1 = (((((!((map__26796_26835 == null))))?(((((map__26796_26835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26796_26835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26796_26835):map__26796_26835);
var doc_26837 = cljs.core.get.call(null,map__26796_26836__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26838 = cljs.core.get.call(null,map__26796_26836__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26834);

cljs.core.println.call(null," ",arglists_26838);

if(cljs.core.truth_(doc_26837)){
cljs.core.println.call(null," ",doc_26837);
} else {
}


var G__26839 = seq__26779_26829;
var G__26840 = chunk__26780_26830;
var G__26841 = count__26781_26831;
var G__26842 = (i__26782_26832 + (1));
seq__26779_26829 = G__26839;
chunk__26780_26830 = G__26840;
count__26781_26831 = G__26841;
i__26782_26832 = G__26842;
continue;
} else {
var temp__5735__auto___26843 = cljs.core.seq.call(null,seq__26779_26829);
if(temp__5735__auto___26843){
var seq__26779_26844__$1 = temp__5735__auto___26843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26779_26844__$1)){
var c__4556__auto___26845 = cljs.core.chunk_first.call(null,seq__26779_26844__$1);
var G__26846 = cljs.core.chunk_rest.call(null,seq__26779_26844__$1);
var G__26847 = c__4556__auto___26845;
var G__26848 = cljs.core.count.call(null,c__4556__auto___26845);
var G__26849 = (0);
seq__26779_26829 = G__26846;
chunk__26780_26830 = G__26847;
count__26781_26831 = G__26848;
i__26782_26832 = G__26849;
continue;
} else {
var vec__26798_26850 = cljs.core.first.call(null,seq__26779_26844__$1);
var name_26851 = cljs.core.nth.call(null,vec__26798_26850,(0),null);
var map__26801_26852 = cljs.core.nth.call(null,vec__26798_26850,(1),null);
var map__26801_26853__$1 = (((((!((map__26801_26852 == null))))?(((((map__26801_26852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26801_26852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801_26852):map__26801_26852);
var doc_26854 = cljs.core.get.call(null,map__26801_26853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26855 = cljs.core.get.call(null,map__26801_26853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26851);

cljs.core.println.call(null," ",arglists_26855);

if(cljs.core.truth_(doc_26854)){
cljs.core.println.call(null," ",doc_26854);
} else {
}


var G__26856 = cljs.core.next.call(null,seq__26779_26844__$1);
var G__26857 = null;
var G__26858 = (0);
var G__26859 = (0);
seq__26779_26829 = G__26856;
chunk__26780_26830 = G__26857;
count__26781_26831 = G__26858;
i__26782_26832 = G__26859;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__26803 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26804 = null;
var count__26805 = (0);
var i__26806 = (0);
while(true){
if((i__26806 < count__26805)){
var role = cljs.core._nth.call(null,chunk__26804,i__26806);
var temp__5735__auto___26860__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___26860__$1)){
var spec_26861 = temp__5735__auto___26860__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26861));
} else {
}


var G__26862 = seq__26803;
var G__26863 = chunk__26804;
var G__26864 = count__26805;
var G__26865 = (i__26806 + (1));
seq__26803 = G__26862;
chunk__26804 = G__26863;
count__26805 = G__26864;
i__26806 = G__26865;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__26803);
if(temp__5735__auto____$1){
var seq__26803__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26803__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26803__$1);
var G__26866 = cljs.core.chunk_rest.call(null,seq__26803__$1);
var G__26867 = c__4556__auto__;
var G__26868 = cljs.core.count.call(null,c__4556__auto__);
var G__26869 = (0);
seq__26803 = G__26866;
chunk__26804 = G__26867;
count__26805 = G__26868;
i__26806 = G__26869;
continue;
} else {
var role = cljs.core.first.call(null,seq__26803__$1);
var temp__5735__auto___26870__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___26870__$2)){
var spec_26871 = temp__5735__auto___26870__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26871));
} else {
}


var G__26872 = cljs.core.next.call(null,seq__26803__$1);
var G__26873 = null;
var G__26874 = (0);
var G__26875 = (0);
seq__26803 = G__26872;
chunk__26804 = G__26873;
count__26805 = G__26874;
i__26806 = G__26875;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26876 = cljs.core.conj.call(null,via,t);
var G__26877 = cljs.core.ex_cause.call(null,t);
via = G__26876;
t = G__26877;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26880 = datafied_throwable;
var map__26880__$1 = (((((!((map__26880 == null))))?(((((map__26880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26880):map__26880);
var via = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26881 = cljs.core.last.call(null,via);
var map__26881__$1 = (((((!((map__26881 == null))))?(((((map__26881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26881):map__26881);
var type = cljs.core.get.call(null,map__26881__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26881__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26881__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26882 = data;
var map__26882__$1 = (((((!((map__26882 == null))))?(((((map__26882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26882):map__26882);
var problems = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26883 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26883__$1 = (((((!((map__26883 == null))))?(((((map__26883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26883):map__26883);
var top_data = map__26883__$1;
var source = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26888 = phase;
var G__26888__$1 = (((G__26888 instanceof cljs.core.Keyword))?G__26888.fqn:null);
switch (G__26888__$1) {
case "read-source":
var map__26889 = data;
var map__26889__$1 = (((((!((map__26889 == null))))?(((((map__26889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26889):map__26889);
var line = cljs.core.get.call(null,map__26889__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26889__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26891 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26891__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26891,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26891);
var G__26891__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26891__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26891__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26891__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26892 = top_data;
var G__26892__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26892,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26892);
var G__26892__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26892__$1);
var G__26892__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26892__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26892__$2);
var G__26892__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26892__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26892__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26892__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26892__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26893 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26893,(0),null);
var method = cljs.core.nth.call(null,vec__26893,(1),null);
var file = cljs.core.nth.call(null,vec__26893,(2),null);
var line = cljs.core.nth.call(null,vec__26893,(3),null);
var G__26896 = top_data;
var G__26896__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26896,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26896);
var G__26896__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26896__$1);
var G__26896__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__26896__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26896__$2);
var G__26896__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26896__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26896__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26896__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26896__$4;
}

break;
case "execution":
var vec__26897 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26897,(0),null);
var method = cljs.core.nth.call(null,vec__26897,(1),null);
var file = cljs.core.nth.call(null,vec__26897,(2),null);
var line = cljs.core.nth.call(null,vec__26897,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__26879_SHARP_){
var or__4126__auto__ = (p1__26879_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26879_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__26900 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26900__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26900,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26900);
var G__26900__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26900__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26900__$1);
var G__26900__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26900__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26900__$2);
var G__26900__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26900__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26900__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26900__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26900__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26888__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26904){
var map__26905 = p__26904;
var map__26905__$1 = (((((!((map__26905 == null))))?(((((map__26905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26905):map__26905);
var triage_data = map__26905__$1;
var phase = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26907 = phase;
var G__26907__$1 = (((G__26907 instanceof cljs.core.Keyword))?G__26907.fqn:null);
switch (G__26907__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26908_26917 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26909_26918 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26910_26919 = true;
var _STAR_print_fn_STAR__temp_val__26911_26920 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26910_26919);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26911_26920);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26902_SHARP_){
return cljs.core.dissoc.call(null,p1__26902_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26909_26918);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26908_26917);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26912_26921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26913_26922 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26914_26923 = true;
var _STAR_print_fn_STAR__temp_val__26915_26924 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26914_26923);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26915_26924);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26903_SHARP_){
return cljs.core.dissoc.call(null,p1__26903_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26913_26922);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26912_26921);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26907__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
