"use client";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { CatToggleButton } from "@/components/hero/CatToggle";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { useLiveAge } from "@/components/hero/useLiveAge";
import { RoughNotation } from "react-rough-notation";

export default function HeroSection() {
	const age = useLiveAge();

	return (
		<section id="home" className="mx-auto max-w-160 space-y-4">
			<div className="fade-in-up flex items-center gap-3" style={{ "--delay-index": 0 } as React.CSSProperties}>
				<div className="relative h-12 w-12 shrink-0">
					<img src="/images/ProfilePic.jpeg" alt="Profile" className="h-12 w-12 rounded-full object-cover" />
					<span className="absolute right-1 bottom-2 h-3 w-3">🧸</span>
				</div>
				<SectionTitle text="Hi, I'm Bhavdeep Arora" />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 2 } as React.CSSProperties}>
				<HeroIcons />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 3 } as React.CSSProperties}>
				<p>
					I&apos;m a{" "}
					<span className="text-stone-400 tabular-nums" suppressHydrationWarning>
						{age} y/o
					</span>{" "}
					<RoughNotation type="box" show={true} color="#f97316a3" iterations={2} padding={2} multiline={true}>
						systems focused software engineer
					</RoughNotation>{" "}
					based in Toronto. I&apos;ve been{" "}
					<RoughNotation type="underline" show={true} color="#3c9666" iterations={2}>
						programming for over six years
					</RoughNotation>
					, always chasing whatever problem catches my interest.
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 4 } as React.CSSProperties}>
				<p>
					My interests span{" "}
					<span className="inline-block">
						<RoughNotation type="circle" show={true} color="#b45309">
							low-level systems
						</RoughNotation>
					</span>
					,{" "}
					<span className="inline-block">
						<RoughNotation type="circle" show={true} color="#2d7a52">
							security tooling
						</RoughNotation>
					</span>
					,{" "}
					<span className="inline-block">
						<RoughNotation type="circle" show={true} color="#3b6fa0">
							applied ML
						</RoughNotation>
					</span>
					, and{" "}
					<span className="inline-block">
						<RoughNotation type="circle" show={true} color="#8a3a6b">
							distributed systems
						</RoughNotation>
					</span>
					, with a quiet passion for{" "}
					<RoughNotation type="underline" show={true} color="#02933f" multiline={true} iterations={2}>
						environmental engineering.
					</RoughNotation>{" "}
					Distributed systems and machine learning is where most of my curiosity lives. <CatToggleButton />
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 5 } as React.CSSProperties}>
				<p>
					Outside of programming, I love learning new things,{" "}
					<RoughNotation type="highlight" show={true} color="#002cbcb2" multiline={true} iterations={2}>
						reading books,
					</RoughNotation>{" "}
					<RoughNotation type="highlight" show={true} color="#8a6d18b2" multiline={true} iterations={2}>
						messing around in the workshop
					</RoughNotation>
					, and{" "}
					<RoughNotation type="highlight" show={true} color="#14802fb2" multiline={true} iterations={2}>
						exploring outside!
					</RoughNotation>{" "}
					Here&apos;s what I&apos;m currently up to:
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 6 } as React.CSSProperties}>
				<HeroBadges />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 7 } as React.CSSProperties}>
				<HeroButtons />
			</div>
		</section>
	);
}
