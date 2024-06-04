import React from "react";

export function Container({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="flex flex-col gap-5 border-[1px] rounded-xl border-gray-500 p-10"
    >
      {children}
    </div>
  );
}
