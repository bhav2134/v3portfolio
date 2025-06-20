import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";

const ProfilePic = "/images/ProfilePic.jpeg";

function ProfileAvatar({ src, alt }: { src: string; alt: string }) {
	return (
		<Image
			src={src}
			alt={alt}
			width={50}
			height={56}
			className="fade-in-down cursor-pointer rounded-full border-2 object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl"
		/>
	);
}

export function HeroSection() {
	return (
		<section id="about" className="mx-auto max-w-[50rem] space-y-4 lg:-mt-10">
			<div className="flex items-center gap-3">
				<ProfileAvatar src={ProfilePic} alt="Bhavdeep Arora profile picture" />
				<SectionTitle text="Hi, I'm Bhavdeep Arora 🐰" className="fade-in-down mt-2" />
			</div>

			<div className="fade-in-down">
				<HeroIcons />
			</div>

			<div className="fade-in-down">
				<p className="mb-2">
					I&apos;m a computer science Student currently studying at{" "}
					<a
						href="https://www.torontomu.ca/programs/undergraduate/computer-science/"
						className="underline-dotted-highlight inline-block"
						target="_blank"
						rel="noopener noreferrer"
					>
						Toronto Metropolitan University
					</a>{" "}
					(formerly known as Ryerson University).
				</p>
			</div>

			<div className="fade-in-down">
				<p>
					I&apos;ve been programming for over six years, and I&apos;m obsessed with learning. I&apos;m currently focused on{" "}
					<span className="font-bold">embedded systems</span> and <span className="font-bold">IoT security</span>, particularly{" "}
					<span className="font-bold">reverse engineering</span> and <span className="font-bold">vulnerability research</span>, but I&apos;m always
					deep diving into various aspects of <span className="font-bold">offensive security</span> and{" "}
					<span className="font-bold">cryptography</span>.
				</p>
			</div>

			<div className="fade-in-down">
				<p>Outside of programming, I love learning new things, Reading Fantasy Books, and Exploring Outside! This is what I&apos;m currently up to:</p>
			</div>

			<div className="fade-in-down">
				<HeroBadges />
			</div>

			<div className="fade-in-down">
				<HeroButtons />
			</div>
		</section>
	);
}
