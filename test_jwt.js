const jwt = require("jsonwebtoken");

// Create a JWT - jwt.sign( palyload, secret-code, expire-time )

// const token = jwt.sign(
//   {
//     email: "aaa@gmailcom",
//     username: "aaa",
//     userid: 123456,
//   },
//   "1234#456@",
//   {
//     expiresIn: "10s",
//   }
// );

// console.log(token);

const oldToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBnbWFpbGNvbSIsInVzZXJuYW1lIjoiYWFhIiwidXNlcmlkIjoxMjM0NTYsImlhdCI6MTY5NTE5NDEzMiwiZXhwIjoxNjk1MTk0MTQyfQ.bKobzGsWsH72thgNhDv7MOpQxMFUw_esXcyIy5-P7bQ";

// Verify - jwt.verify( token, secret, (err,decode)=>{})

jwt.verify(oldToken, "1234#456@", (err, decode) => {
  if (err) return console.log(err);
  console.log(decode);
});
