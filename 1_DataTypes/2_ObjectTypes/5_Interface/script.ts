// Interface (defines object shape)
interface demo {
  name: string;
  email?: string; //optional
  password: string;
}

let user1: demo = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
};
