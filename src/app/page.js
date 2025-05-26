import Image from "next/image";
import Header from "./_components/header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header and Hero */}
      <Header />
      <Hero />

      {/* Footer */}
      <div className="mt-auto px-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} TrackWise. All rights reserved.
      </div>
    </div>
  );
}
