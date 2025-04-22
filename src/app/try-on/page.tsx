"use client";
import { useRef, useState } from "react";

export default function TryOnPage() {
  const wallInput = useRef<HTMLInputElement>(null);
  const [wallStatus, setWallStatus] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Try-on Art</h1>
      <section>
        <h2 className="font-semibold mb-2">Upload a Wall Image</h2>
        <input ref={wallInput} type="file" accept="image/*" className="block mb-2" />
        <div className="text-sm text-gray-600">{wallStatus || "No wall image uploaded (placeholder)"}</div>
      </section>
      <section>
        <h2 className="font-semibold mb-2">Select Artwork</h2>
        <div className="grid grid-cols-4 gap-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded flex items-center justify-center text-gray-400">
              Art {i}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-semibold mb-2">3D Preview</h2>
        <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">
          3D preview placeholder
        </div>
      </section>
    </div>
  );
}
