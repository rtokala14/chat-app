import { type ReactNode } from "react";

function FullScreenCard({ children }: { children: ReactNode }) {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-gray-100">
      <div className=" max-w-md w-full">{children}</div>
    </div>
  );
}

FullScreenCard.Body = function ({ children }: { children: ReactNode }) {
  return <div className=" shadow bg-white p-6 rounded-lg">{children}</div>;
};

FullScreenCard.BelowCard = function ({ children }: { children: ReactNode }) {
  return <div className=" mt-2 justify-center flex gap-3 ">{children}</div>;
};

export default FullScreenCard;
