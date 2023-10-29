import Image from "next/image";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="group relative flex aspect-square flex-col justify-center overflow-hidden text-center xl:aspect-video">
      <Image
        alt="A giant document is being discussed by two men wearing suits and holding tailor tools"
        src="/hero.webp"
        fill={true}
        className="object-[center_bottom] transition-transform duration-1000 ease-in-out group-hover:scale-105"
        objectFit="cover"
      />
      <div className="relative flex h-full flex-col items-center justify-center text-white backdrop-brightness-50 transition-[backdrop-filter] duration-1000 ease-in-out group-hover:backdrop-brightness-[.65]">
        <h1 className="mb-2 text-4xl font-bold">Resume Tailor</h1>
        <p className="mb-12 text-xl">Craft your perfect resume in no time</p>
        <Button
          className="mx-auto py-7"
          variant="destructive"
          size="lg"
          asChild
        >
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
