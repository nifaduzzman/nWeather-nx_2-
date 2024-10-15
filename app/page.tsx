import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Next.js + Tailwind CSS</h1>
      <Image src="/next-tailwind.png" width={256} height={256} alt="logo" />
    </main>
  );
}
