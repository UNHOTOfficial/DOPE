"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { redirect } from "next/dist/server/api-utils";
export default function Page() {
  type SessionData = {
    data: Session | null;
    status: "loading" | "authenticated" | "unauthenticated";
  };
  const { data: session, status } = useSession();
  const router = useRouter();

  function handleSignout() {
    signOut();
    router.push("/");
  }

  if (status === "unauthenticated") {
    // Redirect to the login page if the user is not signed in
    router.push("/auth/signin");
  }
  if (status === "authenticated") {
    return (
      <div>
        <p>Signed in user token {session.user?.email}</p>
        <button onClick={handleSignout}>Sign out</button>
      </div>
    );
  }
  return <Link href="/api/auth/signin">Sign in</Link>;
}
