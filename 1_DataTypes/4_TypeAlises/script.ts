type UserID = string;
let uid: UserID = "abc123"; // same as string
//
type User = {
  name: string;
  age: number;
};
const us: User = {
  name: "John",
  age: 30,
};
//
type Status = "pending" | "success" | "error"; // union
type Admin = User & { role: "admin" }; // intersection
