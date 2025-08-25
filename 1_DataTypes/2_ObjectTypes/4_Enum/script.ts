// Enum
// Numeric enum with default values
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
// Numeric enum with custom values
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}
// String enum with custom values
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let color: Color = Color.Red;
let dstatus: HttpStatus = HttpStatus.OK;
let direction: Direction = Direction.Up;
