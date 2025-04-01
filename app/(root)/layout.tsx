import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {" "}
      <div className="root-layout">
        <nav>
          <Link href="/" className="flex items-center gap-2" />
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Interview AI</h2>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Rootlayout;
