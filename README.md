# Vanilla Javascript SPA

This project is about adding to my portfolio a Single Page Application built with just Vanilla JS. See this in action [here](https://vanilla-js-spa.doolien.repl.co).

# Screenshots

## Home

![Home](screenshots/01.png)

## Search term log

![Search term log](screenshots/02.png)

## Running The project

Considering this project uses ES6 modules - that are subject to Same-origin policy - messing with files requires a local server like  __live-server__(for instance), which can be easily installed on VS Code.

## Key features:

- The app is fully responsive
- A modularized yet minimalist code base achieved with ES6+ modules and template strings
- Search log history can be used to trigger same searches again
- Search log history is precisely dated, showing always the last searches
- Search log is saved to local storage
- Searching terms also works in the url
- Routing between pages keeps navigation history 


## Project´s intentional restrictions:

- No Javascript frameworks
- No DOM/UI libraries such as jQuery or Zepto
- No bundlers like gulp or webpack
- No Javascript or CSS processors/transpilers of any nature
- No package managers(ex: npm, yarn)

## What was allowed:

- A CSS framework with a design system approach, since it doesn´t break project´s restrictions
- Running a local host server(as ES6+ modules require one)
- A routing library(Also in Vanilla JS) for helping on SPA behaviors

