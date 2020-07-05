# DataBooze

This is the DataBooze project.

## Overview

This project is a little static site that takes input from the user,
compares it to recipes it knows about, and reports what can be made.

The goal here was to practice writing Clojure/script to practice using
Reagent.

## Development

In Emacs, open the `cljs` code in a buffer and run `M-x cider-jack-in-cljs`. A series of prompts will pop up, use the following answers:
    * `lein`
    * `figwheel-main`
    * `dev`

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min

Then copy the `.js` file it created into `/docs/`

Copyright © 2020 Andy Lu
