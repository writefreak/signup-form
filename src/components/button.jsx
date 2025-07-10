import React from "react";

export function Button({ text }) {
  return (
    <div>
      <button className="bg-black text-white text-center rounded-md px-10 py-1 hover:bg-black/70">
        {text}
      </button>
    </div>
  );
}
