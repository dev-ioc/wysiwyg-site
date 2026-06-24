"use client";

import LogoPulseLoader from "./LogoPulseLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LogoPulseLoader />
      {children}
    </>
  );
}
