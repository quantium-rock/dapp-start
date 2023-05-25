// /* @/services/controllers/firebase/auth.firebase.ts */

// import { FB_AUTH } from "./connection";

// async function addUser(
//   email: string,
//   password: string,
//   displayName: string
// ): Promise<true | Error> {
//   try {
//     const userRecord = await FB_AUTH.createUser({
//       email: email,
//       password: password,
//       displayName: displayName,
//     });

//     console.log("Successfully created new user:", userRecord.uid);
//     return true;
//   } catch (error) {
//     console.error("Error creating new user:", error);
//     return error as Error;
//   }
// }

// console.log("creating user");

// console.log(addUser("acolls@g4al.com", "Abcd1234!", "alex")); // {};

// /* END OF SCRIPT */
// /* v1.0 */
// /* 2023-05-21 */
