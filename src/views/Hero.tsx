"use client";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { CatToggleButton } from "@/components/hero/CatToggle";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { useLiveAge } from "@/components/hero/useLiveAge";

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
					software engineer based in Toronto. I like building things, following interesting questions, and learning just enough about a problem to
					become obsessed with it.
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 4 } as React.CSSProperties}>
				<p>
					My work tends to wander between systems, data, machine learning, with an abiding passion for environmental engineering and the occasional
					problem I probably could have left alone, for better or worse. <CatToggleButton />
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 5 } as React.CSSProperties}>
				<p>
					Outside of programming, I&apos;m usually reading, lifting, working on something in the workshop, or just exploring outside. Here&apos;s what
					I&apos;m currently up to:
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
