import Image from "next/image";
import profile from "@/public/pfp.jpg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-[#5D2CA8] pt-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/share">
            <p className="text-lg font-bold text-white">Share resources</p>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white">Curated with love by</span>
            <Link href="https://x.com/Tushar_Pamnani_">
                <Image
                  className="rounded-full"
                  src={profile}
                  alt="Profile picture of Tushar Pamnani"
                  height={50}
                  width={50}
                />
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center">
          © 2025 Blockies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
