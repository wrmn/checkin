import React from "react";
import { useEffect, useState } from "react";

export default function DigiClock() {
  const [s, setS] = useState("00");
  const [m, setM] = useState("00");
  const [h, setH] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setS(d.getSeconds().toString().padStart(2, "0"));
      setM(d.getMinutes().toString().padStart(2, "0"));
      setH(d.getHours().toString().padStart(2, "0"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-10 text-5xl">
      {h}:{m}:{s}
    </div>
  );
}
