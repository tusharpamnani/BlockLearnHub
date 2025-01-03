import Image from "next/image";
import profile from "@/public/x-pfp.png";
import Link from "next/link";

export default function Appbar() {
  return (
    <header className="sticky top-0 bg-white flex h-16 items-center justify-between border-b px-4 lg:px-6">
      <Link href="/share">
        <a className="mr-10 text-lg font-medium">Share resources</a>
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Curated with love by</span>
        <span>
          <Link href="https://x.com/Tushar_Pamnani_">
            <a>
              <Image
                className="rounded-full"
                src={profile}
                alt="Profile picture of Tushar Pamnani"
                height={50}
                width={50}
              />
            </a>
          </Link>
        </span>
      </div>
    </header>
  );
}
