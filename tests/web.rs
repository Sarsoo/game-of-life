//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
// use wasm_bindgen_test::*;
use wasm_bindgen_test::{wasm_bindgen_test, wasm_bindgen_test_configure};

wasm_bindgen_test_configure!(run_in_browser);

extern crate gameoflife;
use gameoflife::Universe;

#[wasm_bindgen_test]
fn get_width() {
    let uni = Universe::new(10, 15, 1, 1.0);
    assert_eq!(uni.width(), 10);
}

#[wasm_bindgen_test]
fn get_height() {
    let uni = Universe::new(10, 15, 1, 1.0);
    assert_eq!(uni.height(), 15);
}

#[wasm_bindgen_test]
fn get_cells() {
    let uni = Universe::new(10, 15, 1, 1.0);
    uni.cells();
}


