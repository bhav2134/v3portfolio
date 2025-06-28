import TerminalAbout from "@/views/Terminal";
import { SectionTitle } from "@/components/typography/SectionTitle";

export default function About() {
	return (
		<div className="-mt-40">
			{/* Header Section */}
			<div className="relative overflow-hidden">
				<div className="relative py-36 sm:py-24 lg:px-8">
					<div className="slide-in-left mx-auto max-w-2xl text-left">
						<SectionTitle
							text={
								<>
									Hey There<span className="inline-block origin-bottom-right animate-waving-hand">👋🏻</span>
								</>
							}
						/>

						{/* Subtitle */}
						<p className="mt-4 max-w-4xl text-lg font-semibold leading-8 text-slate-300">
							I&apos;ve kept this About section just the way I like things — interactive. You won&apos;t find the usual repeated bio here.
						</p>

						{/* Quick tip */}
						<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/50 px-4 py-2">
							<div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
							<span className="text-sm text-slate-400">
								Try typing <span className="text-emerald-400">help</span> to get started
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Terminal Section */}
			<div className="md:-mt-38 relative -mb-32 -mt-44 pb-16">
				<div className="mx-auto max-w-full">
					<TerminalAbout />
				</div>
			</div>
		</div>
	);
}
