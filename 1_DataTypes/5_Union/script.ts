// Union
// A variable that can be either a number or a string
let id: number | string;
id = 123; // OK
id = "abc"; // OK

// A function that can accept specific string values
type HTTPStatus = "pending" | "success" | "error";
function printStatus(status: HTTPStatus) {
  console.log(`Current status: ${status}`);
}
