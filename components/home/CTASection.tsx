"use client";

import Link from "next/link";
import { SITE } from "@/lib/content";
import { useSound } from "@/providers/SoundProvider";
import Magnetic from "../Magnetic";
import AnimatedTitle from "../AnimatedTitle";

export default function CTASection() {
  const { play } = useSound();
  return (
    <section className="relative overflow-hidden section-pad text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] blur-[120px]" />
      <AnimatedTitle
        text="Join our growing team."
        className="text-fluid-h1 justify-center text-center"
        accentWords={["team."]}
      />
      <Magnetic className="mt-10 inline-block">
        <Link
          href="/careers"
          data-cursor="link"
          onClick={() => play("click")}
          className="inline-block rounded-full bg-accent px-9 py-5 text-lg font-medium text-white"
        >
          Check now →
        </Link>
      </Magnetic>
    </section>
  );
}
