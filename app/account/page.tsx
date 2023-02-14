// "use client"
// import React from "react";
// import { useSession } from "next-auth/react";
// export default function Page() {
//   const { data: session, status } = useSession();
//   if (status === "authenticated") {
//     return <p>Signed in user token {session.user?.email}</p>;
//   }
//   return <a href="/api/auth/signin">Sign in</a>;
// }
export default function page() {
  return <div>Account</div>;
}
