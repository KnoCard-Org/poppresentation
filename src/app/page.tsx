import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/bg.jpg')] bg-center flex justify-center items-center relative">
      <div className="fixed w-screen h-screen bg-black/70">

      </div>
      <Link
        href={'https://knocard.poppresentation.com/'}
        className="z-10"

      >
        <Image
          src={'/home.svg'}
          width={600}
          height={450}
          alt="poppresntations"
        />
      </Link>
    </div>
  );
}
