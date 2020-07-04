# DataBooze

This is the DataBooze project.

## Overview

This project is a little static site that takes input from the user,
compares it to recipes it knows about, and reports what can be made.

The goal here was to practice writing Clojure/script to practice using
Reagent.

## Development

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min


Copyright © 2018 Andy Lu
