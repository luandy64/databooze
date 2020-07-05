// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__17910__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17911__i = 0, G__17911__a = new Array(arguments.length -  0);
while (G__17911__i < G__17911__a.length) {G__17911__a[G__17911__i] = arguments[G__17911__i + 0]; ++G__17911__i;}
  args = new cljs.core.IndexedSeq(G__17911__a,0,null);
} 
return G__17910__delegate.call(this,args);};
G__17910.cljs$lang$maxFixedArity = 0;
G__17910.cljs$lang$applyTo = (function (arglist__17912){
var args = cljs.core.seq(arglist__17912);
return G__17910__delegate(args);
});
G__17910.cljs$core$IFn$_invoke$arity$variadic = G__17910__delegate;
return G__17910;
})()
);

(o.error = (function() { 
var G__17913__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17914__i = 0, G__17914__a = new Array(arguments.length -  0);
while (G__17914__i < G__17914__a.length) {G__17914__a[G__17914__i] = arguments[G__17914__i + 0]; ++G__17914__i;}
  args = new cljs.core.IndexedSeq(G__17914__a,0,null);
} 
return G__17913__delegate.call(this,args);};
G__17913.cljs$lang$maxFixedArity = 0;
G__17913.cljs$lang$applyTo = (function (arglist__17915){
var args = cljs.core.seq(arglist__17915);
return G__17913__delegate(args);
});
G__17913.cljs$core$IFn$_invoke$arity$variadic = G__17913__delegate;
return G__17913;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
