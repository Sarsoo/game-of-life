/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgame_of_life_web"] = self["webpackChunkgame_of_life_web"] || []).push([["index_js"],{

/***/ "../pkg/game_of_life_bg.js":
/*!*********************************!*\
  !*** ../pkg/game_of_life_bg.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"Cell\": () => (/* binding */ Cell),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbg_new_59cb74e423758ede\": () => (/* binding */ __wbg_new_59cb74e423758ede),\n/* harmony export */   \"__wbg_stack_558ba5917b466edd\": () => (/* binding */ __wbg_stack_558ba5917b466edd),\n/* harmony export */   \"__wbg_error_4bb6c2a97407129a\": () => (/* binding */ __wbg_error_4bb6c2a97407129a),\n/* harmony export */   \"__wbg_log_9a99fb1af846153b\": () => (/* binding */ __wbg_log_9a99fb1af846153b),\n/* harmony export */   \"__wbg_time_8897e55ebee4075f\": () => (/* binding */ __wbg_time_8897e55ebee4075f),\n/* harmony export */   \"__wbg_timeEnd_6186a583833a7163\": () => (/* binding */ __wbg_timeEnd_6186a583833a7163),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_of_life_bg.wasm */ \"../pkg/game_of_life_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n/**\n*/\nfunction init() {\n    _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.init();\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetInt32Memory0 = new Int32Array(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    */\n    tick() {\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} rand_threshold\n    * @param {number} seed\n    * @returns {Universe}\n    */\n    static new(width, height, rand_threshold, seed) {\n        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new(width, height, rand_threshold, seed);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);\n            _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_render(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);\n            _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_cells(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    reset() {\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_reset(this.ptr);\n    }\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_59cb74e423758ede() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_558ba5917b466edd(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_4bb6c2a97407129a(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);\n    }\n};\n\nfunction __wbg_log_9a99fb1af846153b(arg0) {\n    console.log(getObject(arg0));\n};\n\nfunction __wbg_time_8897e55ebee4075f(arg0, arg1) {\n    console.time(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbg_timeEnd_6186a583833a7163(arg0, arg1) {\n    console.timeEnd(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n});\n\n//# sourceURL=webpack://game-of-life-web/../pkg/game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/game_of_life_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/game_of_life_bg.wasm ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"de0e97b9a311abef847f\", {\n\t\t\"./game_of_life_bg.js\": {\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbg_new_59cb74e423758ede\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_59cb74e423758ede,\n\t\t\t\"__wbg_stack_558ba5917b466edd\": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_558ba5917b466edd,\n\t\t\t\"__wbg_error_4bb6c2a97407129a\": WEBPACK_IMPORTED_MODULE_0.__wbg_error_4bb6c2a97407129a,\n\t\t\t\"__wbg_log_9a99fb1af846153b\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_9a99fb1af846153b,\n\t\t\t\"__wbg_time_8897e55ebee4075f\": WEBPACK_IMPORTED_MODULE_0.__wbg_time_8897e55ebee4075f,\n\t\t\t\"__wbg_timeEnd_6186a583833a7163\": WEBPACK_IMPORTED_MODULE_0.__wbg_timeEnd_6186a583833a7163,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, (__webpack_handle_async_dependencies__) => {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./game_of_life_bg.js */ \"../pkg/game_of_life_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\treturn __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);\n}, 1);\n\n//# sourceURL=webpack://game-of-life-web/../pkg/game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-of-life */ \"../pkg/game_of_life_bg.js\");\n/* harmony import */ var game_of_life_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! game-of-life/game_of_life_bg.wasm */ \"../pkg/game_of_life_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([game_of_life__WEBPACK_IMPORTED_MODULE_0__, game_of_life_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([game_of_life__WEBPACK_IMPORTED_MODULE_0__, game_of_life_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n// let PLAY = true;\n// let PLAY = false;\n(0,game_of_life__WEBPACK_IMPORTED_MODULE_0__.init)();\nconst randSlider = document.getElementById(\"randThreshold\");\nconst randSliderLabel = document.getElementById(\"randThreshold-label\");\n\nconst CELL_SIZE = 5; // px\nconst GRID_COLOR = \"#BBBBBB\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#FF55AA\";\n\nlet universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__.Universe.new(100, 100, randSlider.value, new Date().getTime() / 1000);\nlet width = universe.width();\nlet height = universe.height();\n\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext('2d');\n  \nconst drawGrid = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= width; i++) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= height; j++) {\n        ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n    }\n\n    ctx.stroke();\n};\n\nconst getIndex = (row, column) => {\n    return row * width + column;\n};\n\nconst drawCells = () => {\n    const cellsPtr = universe.cells();\n    const cells = new Uint8Array(game_of_life_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, cellsPtr, width * height);\n\n    ctx.beginPath();\n\n    for (let row = 0; row < height; row++) {\n        for (let col = 0; col < width; col++) {\n        const idx = getIndex(row, col);\n\n        ctx.fillStyle = cells[idx] === game_of_life__WEBPACK_IMPORTED_MODULE_0__.Cell.Dead\n            ? DEAD_COLOR\n            : ALIVE_COLOR;\n\n        ctx.fillRect(\n            col * (CELL_SIZE + 1) + 1,\n            row * (CELL_SIZE + 1) + 1,\n            CELL_SIZE,\n            CELL_SIZE\n        );\n        }\n    }\n\n    ctx.stroke();\n};\n\nconst renderSingle = () => {\n    fps.render(); //new\n    universe.tick();\n  \n    drawGrid();\n    drawCells();\n}\n\nconst start = () => {\n    if(loop != null) clearInterval(loop);\n    loop = setInterval(renderSingle, frameInterval);\n}\n\nconst stop = () => {\n    if(loop != null) clearInterval(loop);\n    loop = null;\n}\n\n// const renderLoop = () => {\n//     if(PLAY){\n//         renderSingle();\n//         requestAnimationFrame(renderLoop);\n//     }\n// };\n\n// renderSingle();\n// requestAnimationFrame(renderLoop);\n\nvar frameInterval = 50;\n// var loop = setInterval(renderSingle, frameInterval);\nvar loop = null;\n\nconst frameSlider = document.getElementById(\"frameRate\");\nconst frameSliderLabel = document.getElementById(\"frameRate-label\");\nconst onFrameSlider = () => {\n    stop();\n\n    frameInterval = frameSlider.value;\n    frameSliderLabel.innerHTML = `Frame Interval: ${frameSlider.value}`;\n\n    if(playCheck.checked) start();\n}\nframeSlider.onchange = onFrameSlider;\n\nconst onRandSlider = () => {\n    stop();\n\n    universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__.Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);\n    refreshCanvas();\n    randSliderLabel.innerHTML = `Rand Threshold: ${randSlider.value}`;\n\n    if(playCheck.checked) start();\n}\nrandSlider.onchange = onRandSlider;\n\nconst refreshCanvas = () => {\n    canvas.width = (CELL_SIZE + 1) * width + 1;\n    canvas.height = (CELL_SIZE + 1) * height + 1;\n    drawGrid();\n    drawCells();\n}\n\nconst widthBox = document.getElementById(\"width\");\nconst onWidth = () => {\n    // PLAY = false;\n    width = widthBox.value;\n    universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__.Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);\n    refreshCanvas();\n    // PLAY = true;\n    // requestAnimationFrame(renderLoop);\n}\nwidthBox.onchange = onWidth;\n\nconst heightBox = document.getElementById(\"height\");\nconst onHeight = () => {\n    // PLAY = false;\n    height = heightBox.value;\n    universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__.Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);\n    refreshCanvas();\n    // PLAY = true;\n    // requestAnimationFrame(renderLoop);\n}\nheightBox.onchange = onHeight;\n\nconst playCheck = document.getElementById(\"play-check\");\nconst onPlay = () => {\n    console.log(\"play: \" + playCheck.checked);\n    if(playCheck.checked) {\n        start();\n    }else {\n        stop();\n    }\n    // PLAY = playCheck.checked;\n    // requestAnimationFrame(renderLoop);\n}\nplayCheck.onchange = onPlay;\n\nconst onStep = () => {\n    console.log(\"stepping\");\n    renderSingle();\n}\ndocument.getElementById(\"step\").onclick = onStep;\n\n\nconst onReset = () => {\n    universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__.Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);\n    refreshCanvas();\n}\ndocument.getElementById(\"reset\").onclick = onReset;\n\ndrawGrid();\ndrawCells();\n\nconst fps = new class {\n    constructor() {\n      this.fps = document.getElementById(\"fps\");\n      this.frames = [];\n      this.lastFrameTimeStamp = performance.now();\n    }\n  \n    render() {\n      // Convert the delta time since the last frame render into a measure\n      // of frames per second.\n      const now = performance.now();\n      const delta = now - this.lastFrameTimeStamp;\n      this.lastFrameTimeStamp = now;\n      const fps = 1 / delta * 1000;\n  \n      // Save only the latest 100 timings.\n      this.frames.push(fps);\n      if (this.frames.length > 100) {\n        this.frames.shift();\n      }\n  \n      // Find the max, min, and mean of our 100 latest timings.\n      let min = Infinity;\n      let max = -Infinity;\n      let sum = 0;\n      for (let i = 0; i < this.frames.length; i++) {\n        sum += this.frames[i];\n        min = Math.min(this.frames[i], min);\n        max = Math.max(this.frames[i], max);\n      }\n      let mean = sum / this.frames.length;\n  \n      // Render the statistics.\n      this.fps.textContent = `\n  Frames per Second:\n           latest = ${Math.round(fps)} // \n  avg of last 100 = ${Math.round(mean)} // \n  min of last 100 = ${Math.round(min)} // \n  max of last 100 = ${Math.round(max)}\n  `.trim();\n    }\n  };\n});\n\n//# sourceURL=webpack://game-of-life-web/./index.js?");

/***/ })

}]);