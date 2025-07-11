// Use type or interface to define the shape of a function.
// Type
type MathOperation = (a: number, b: number) => number;
const divide: MathOperation = (a, b) => a / b;

// Interface
interface MathFunc {
  (a: number, b: number): number;
}
const mod: MathFunc = (a, b) => a % b;
