"use client";
import { useRef, useState } from "react";

export default function UploadPage() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState("");

  const handleUpload = () => {
    setStatus("Uploading (placeholder)...");
    // Placeholder: actual upload logic goes here
    setTimeout(() => setStatus("Upload complete (mock)"), 1000);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Upload Artwork</h1>
      <input ref={fileInput} type="file" accept="image/*" className="block" />
      <button onClick={handleUpload} className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
      <div className="text-sm text-gray-600">{status}</div>
    </div>
  );
}
