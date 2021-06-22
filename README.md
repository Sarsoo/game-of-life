Game of Life
===============

![gof-ci](https://github.com/sarsoo/game-of-life/actions/workflows/test.yml/badge.svg)

## [Try it Out!](https://sarsoo.github.io/game-of-life/)

WASM-based game of life following the [Rust WASM book](https://rustwasm.github.io/docs/book/introduction.html) tutorial.

Rust WASM module for game logic with a JS frontend for rendering and processing user input.

## Building

1. Setup a Rust + wasm-pack environment and a Node environment
2. Build the Rust library into a WASM module 
    - `wasm-pack build`
3. Move to the Js workspace 
    - `cd www`
4. Install the Js dependencies
    - `npm install`
5. Build the Js frontend with Rust WASM module
    - `npm run build`