# React

# Key Concepts

##  Declarative
- React does all DOM updates
- React is declarative vs imperative like raw JS
- Everything stored in State
- Reusable components

## One-Way Data Flow
- Creating a Virtual DOM

## How to be a great React Developer
- 1. Decide on Components
- 2. Decide the State and where it lives
- 3. What changes when state changes?

## Run Build
- npm run build (yarn run build?)

## Don't eject!
- It's already as good as its going to get

## Classes vs Hooks 
- Hooks are React-specific
- Classes apply throughout JS

## Classes
- Classes can return HTML

## Props.children
- anything between the tags

## String Interpolation
- Use the back tick ` and NOT regular single or double quotes (' and ") for string interpolation on image src. This is an easy mistake to make as you cannot interpolate the strings when using regular quotes, you must use back ticks!

## Synthetic Events
- Fake React events when a dom-change happens like "onChange"

# Destructuring
- const { monsters, searchField } = this.state;
  - IS THE SAME AS:
    - const monsters = this.state.monsters;
    - const searchField = this.state.searchField;

# Class Methods and Arrow Functions
- JS does not set the scope of "this" on functions
  - EX: a method function
- It has to explicitly state the context
- Declare in the constructor
  - use .bind to set the context of "this" to whatever is passed to it
  - ex: this.handlechange = this.handlechange.bind(this);
    - When placed within the constructor (but not directly inside the state) it "binds" the ".this" context to that of the App component

- Better practice:
  - Use ES6 arrow functions!!!
  - Arrow functions use "lexical" scoping to automatically bind the "this" scope to where they were first defined
  - Less verbose
  - Arrow functions automatically allow you to set "this" when the function is defined