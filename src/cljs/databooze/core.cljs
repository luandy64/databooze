(ns databooze.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))

;; -------------------------
;; State
(defonce item-id (atom 4))
(defonce current-input (atom ""))
(defonce user-inputs (atom []))
(defonce database (atom [{:id 1
                          :drink-name "mojito"
                          :ingredients ["mint" "sugar" "lime" "rum" "club soda" "ice"]}
                         {:id 2
                          :drink-name "whiskey sour"
                          :ingredients ["egg white" "simple syrup" "lemon" "bourbon"]}
                         {:id 3
                          :drink-name "mint julip"
                          :ingredients ["ice" "bourbon" "mint" "simple syrup"]}]))


;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components

(defn get-list-items []
  [:ul
   [:li [:a {:href (path-for :items)} "Items of databooze"]]
   [:li [:a {:href "/broken/link"} "Broken link"]]
   [:li [:p "Here is the drink you can make"]]])

(defn save-input []
  (swap! item-id inc)
  (swap! user-inputs conj {:id    @item-id
                           :value @current-input})
  (reset! current-input ""))

(defn get-user-input [all-ingredients typed]
  [:div
   [:input {:type "text"
            :value @typed
            :on-change #(reset! typed
                                (-> %
                                    .-target
                                    .-value))}]
   [:input {:type "button"
            :value "Submit"
            :on-click save-input}]])

(defn delete [id]
  (->> @user-inputs
       (filter (fn [x] (not= id (:id x))))
       vec
       (reset! user-inputs)))

(defn things-i-have [user-inputs]
  [:div
   [:h2 "Things I have"]
   [:ol
    (for [ingredient @user-inputs]
      [:li {:key (:id ingredient)}
       [:div
        [:label {:style {:margin 10}}(:value ingredient)]
        [:button {:on-click #(delete (:id ingredient))}
         "✖"]]])]])

(defn title-case [name]
  (clojure.string/join " "
                       (map clojure.string/capitalize
                            (clojure.string/split name
                                                  " "))))

(defn perfect-match [drink]
  (= (set (map :value @user-inputs))
     (set (:ingredients drink))))

(defn can-make []
  [:div
   [:h2 "I have everything for"]
   [:ol
    (let [matches (filter perfect-match
                          @database)]
      (for [drink matches]
        (let [recipe (clojure.string/join ", "
                                          (sort (:ingredients drink)))]
          [:li {:key (:id drink)}
           [:span {:style {:margin-right 20}} (title-case (:drink-name drink))]
           [:span {:style {:margin-right 20}} "Recipe: " recipe]])))]])

(defn almost-match [drink]
  (clojure.set/intersection (set (map :value @user-inputs))
                            (set (:ingredients drink))))

(defn get-missing-stuff [drinks]
  (map (fn [drink]
         (let [missing (sort (clojure.set/difference (set (:ingredients drink))
                                                     (set (map :value @user-inputs))))]
           {:id (:id drink)
            :drink-name (:drink-name drink)
            :missing (clojure.string/join ", " missing)}))
       drinks))

(defn almost-make [database user-inputs]
  [:div
   [:h2 "I can almost make"]
   [:ol
    (let [partial-matches (filter (fn [drink]
                                    (and (not (perfect-match drink))
                                         (almost-match drink)))
                                  @database)
          missing-stuff (get-missing-stuff partial-matches)]
      (for [drink missing-stuff]
        [:li {:key (:id drink)}
         [:span {:style {:margin-right 20}} (title-case (:drink-name drink))]
         [:span {:style {:margin-right 20}} "Missing: " (:missing drink)]]))]])

(defn home-page []
  (fn []
    (let [
          ]
      [:span.main
       [:h1 "Welcome to DataBooze"]
       (get-user-input user-inputs current-input)
       (things-i-have user-inputs)
       (can-make)
       (almost-make database user-inputs)])))



(defn items-page []
  (fn []
    [:span.main
     [:h1 "The items of databooze"]
     [:ul (map (fn [item-id]
                 [:li {:name (str "item-" item-id) :key (str "item-" item-id)}
                  [:a {:href (path-for :item {:item-id item-id})} "Item: " item-id]])
               (range 1 60))]]))


(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:span.main
       [:h1 (str "Item " item " of databooze")]
       [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))


(defn about-page []
  (fn [] [:span.main
          [:h1 "About databooze"]]))


;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About databooze"]]]
       [page]
       [:footer
        [:p "databooze was created by "
         [:a {:href "https://github.com/luandy64"}
          "Andy Lu"]]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
