"use strict";
function printId(id) {
    // Type Narrowing
    // Common ways to narrowing types:
    // typeof check (for primitives: string, number, boolean, symbol, bigint, undefined, object, function)
    // instanceof checks (for classes)
    // in operator (for properties on objects)
    // Equality checks (==, ===)
    if (typeof id === "string") {
        // In this block, TypeScript knows 'id' is a string
    }
    else {
        // In this block, TypeScript knows 'id' is a number
    }
}
