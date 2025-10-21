"use client";
import { usePathname } from "next/navigation";
import Heading from "./Heading";
import Footer from "./footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Heading />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
