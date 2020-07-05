(ns ^:figwheel-hooks databooze.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

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

(defn save-input []
  (swap! item-id inc)
  (swap! user-inputs conj {:id    @item-id
                           :value (clojure.string/lower-case @current-input)})
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

(defn title-case [name]
  (clojure.string/join " "
                       (map clojure.string/capitalize
                            (clojure.string/split name
                                                  " "))))

(defn things-i-have [user-inputs]
  [:div
   [:h2 "Things I have"]
   [:ol
    (for [ingredient @user-inputs]
      [:li {:key (:id ingredient)}
       [:div
        [:label {:style {:margin 10}}
         (title-case (:value ingredient))]
        [:button {:on-click #(delete (:id ingredient))}
         "✖"]]])]])

(defn perfect-match [drink]
  (empty? (clojure.set/difference (set (:ingredients drink))
                                  (set (map :value @user-inputs)))))

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
         (let [missing (map title-case
                            (sort (clojure.set/difference (set (:ingredients drink))
                                                          (set (map :value @user-inputs)))))]
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

(defn get-app-element []
  (gdom/getElement "app"))

(defn main-app []
  [:span.main
   [:h1 "Welcome to DataBooze"]
   (get-user-input user-inputs current-input)
   (things-i-have user-inputs)
   (can-make)
   (almost-make database user-inputs)])

(defn mount [el]
  (reagent.dom/render [main-app] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))
