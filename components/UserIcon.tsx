"use client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function UserIcon() {
  type SessionData = {
    data: Session | null;
    status: "loading" | "authenticated" | "unauthenticated";
  };

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    return <i className="bi bi-person" style={{ fontSize: "1.5rem" }}></i>;
  }
  return (
    <Image
      className="rounded-full"
      src={session?.user?.image!}
      alt="User Avatar"
      width={30}
      height={30}
    />
  );
}
