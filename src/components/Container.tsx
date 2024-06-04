import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5 border-[1px] rounded-xl border-gray-500 p-10">
      {children}
    </div>
  );
}
