"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === "/T&C") {
      router.push("/T&C/terms");
    }
  }, [router, pathname]);
  
  return <div></div>;
}
