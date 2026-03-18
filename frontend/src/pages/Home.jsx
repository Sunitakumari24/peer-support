import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
	return (
		<div className="min-h-screen text-white">
			<div className="notice-animate group border-b border-white/20 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-center text-xs font-semibold tracking-wide text-rose-100 transition-all duration-300 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 hover:text-rose-50 sm:text-sm">
				<span className="text-rose-400 transition-transform duration-300 group-hover:scale-110">⚠</span>{' '}
				Important note: This is a safe peer-support space. Please be respectful,
				 avoid sharing personal or financial details, and if you are in immediate
				 crisis, contact emergency help first.{' '}
				<span className="text-rose-400 transition-transform duration-300 group-hover:scale-110">⚠</span>
			</div>

			<header className="flex h-auto flex-col items-center justify-between gap-1 bg-slate-100 px-4 py-2 text-sm text-slate-700 sm:h-10 sm:flex-row sm:px-[6vw] sm:py-0">
				<span>peer.support@gmail.com</span>
				<span>24x7 Community Support</span>
			</header>

			<Navbar />

			<section
				className="relative grid min-h-[calc(100vh-114px)] grid-cols-1 items-center gap-10 overflow-hidden bg-cover bg-center px-5 py-8 sm:px-[6vw] md:grid-cols-[1.1fr_0.9fr]"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')",
				}}
			>
				<div className="absolute inset-0 bg-slate-900/55" />

				<div className="relative z-10">
					<span className="mb-4 inline-block rounded-full bg-rose-600 px-4 py-2 text-sm font-bold">
						Trusted Community Since 2024
					</span>
					<h1 className="m-0 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
						Professional <span className="text-rose-500">Peer Support</span>{' '}
						Network
					</h1>
					<p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
						Connect with people who understand your journey. Get guidance,
						resources, and real conversations in a safe and supportive space.
					</p>

					<div className="mt-6 flex gap-4">
						<Link
							to="/signup"
							className="cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-700"
						>
							Join Now
						</Link>
						<Link
							to="/resources"
							className="cursor-pointer rounded-lg border border-white/50 bg-transparent px-5 py-3 text-base font-bold text-white transition hover:bg-white/10"
						>
							Learn More
						</Link>
					</div>
				</div>

				<div className="relative z-10 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
					<h2 className="m-0 text-3xl font-bold">Get Free Guidance</h2>
					<p className="mb-5 mt-2 text-slate-500">
						Fill this quick form and we will connect you.
					</p>

					<form>
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<input
								type="text"
								placeholder="Your Name"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500"
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500"
							/>
							<input
								type="email"
								placeholder="Email Address"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500 sm:col-span-2"
							/>
							<input
								type="text"
								placeholder="Your Concern"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500 sm:col-span-2"
							/>
						</div>
						<button
							type="submit"
							className="mt-4 w-full cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-700"
						>
							Get Free Support
						</button>
					</form>
				</div>
			</section>

			<section className="border-t-8 border-rose-100 bg-white px-5 py-16 text-slate-800 sm:px-[6vw] lg:py-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<span className="inline-flex rounded-full bg-rose-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-700">
							About Us Section
						</span>
						<h2 className="mt-3 text-4xl font-extrabold text-rose-600">Who We Are</h2>
						<div className="mt-2 h-1 w-20 rounded bg-rose-500" />
						<p className="mt-4 text-lg leading-8 text-slate-700">
							<span className="font-bold text-slate-900">Peer Support</span> is a
							 community-first platform offering trusted emotional help,
							 conversations, and practical guidance for students and young
							 professionals.
						</p>
						<p className="mt-4 text-lg leading-8 text-slate-700">
							Our trained moderators and volunteers create a safe space where you
							 can share, heal, and grow with confidence.
						</p>

						<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">🏅</div>
								<div>
									<h3 className="text-lg font-bold">2+ Years Experience</h3>
									<p className="text-slate-600">Trusted support partner</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">👥</div>
								<div>
									<h3 className="text-lg font-bold">Expert Team</h3>
									<p className="text-slate-600">Skilled professionals</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">🛡️</div>
								<div>
									<h3 className="text-lg font-bold">100% Safe</h3>
									<p className="text-slate-600">Private and secure chats</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">💬</div>
								<div>
									<h3 className="text-lg font-bold">Affordable Help</h3>
									<p className="text-slate-600">Transparent resources</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1300&q=80"
							alt="Support team and workspace"
							className="h-full min-h-70 w-full rounded-md object-cover"
						/>

						<div className="absolute -bottom-7 left-6 rounded-2xl bg-white px-6 py-5 shadow-2xl sm:left-10">
							<div className="flex items-center gap-3">
								<span className="text-3xl text-rose-600">🚚</span>
								<div>
									<h3 className="text-4xl font-extrabold leading-none text-slate-800">
										10,000+
									</h3>
									<p className="mt-1 text-slate-500">Successful Connections</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t-8 border-slate-200 bg-slate-50 px-5 pb-16 pt-12 text-slate-800 sm:px-[6vw] lg:pb-20">
				<div className="mx-auto max-w-7xl">
					<div className="text-center">
						<span className="inline-flex rounded-full bg-slate-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
							Services Section
						</span>
						<span className="mt-3 inline-flex rounded-full bg-rose-600 px-6 py-2 text-sm font-bold uppercase tracking-wider text-white">
							Our Services
						</span>
						<p className="mx-auto mt-5 max-w-2xl text-2xl font-semibold leading-10 text-slate-600">
							Expert guidance, secure support & tailored solutions for every
							 situation.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{[
							{
								icon: '🏠',
								title: 'Home Guidance',
								desc: 'Personal support plans with practical daily guidance.',
							},
							{
								icon: '🏢',
								title: 'Office Wellbeing',
								desc: 'Work-stress handling and emotional productivity support.',
							},
							{
								icon: '📦',
								title: 'Resource Support',
								desc: 'Useful tools and resources for safe recovery journeys.',
							},
							{
								icon: '🚲',
								title: 'Peer Connect',
								desc: 'Connect with trusted peers who understand your situation.',
							},
							{
								icon: '🚗',
								title: '1:1 Sessions',
								desc: 'Private sessions with moderators and trained mentors.',
							},
							{
								icon: '🗂️',
								title: 'Community Hub',
								desc: 'Safe forum spaces for long-term growth and support.',
							},
						].map((service) => (
							<div
								key={service.title}
								className="rounded-2xl bg-white px-6 py-8 text-center shadow-sm"
							>
								<div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-rose-600 text-3xl text-white">
									{service.icon}
								</div>
								<h3 className="mt-5 text-4xl/none font-bold text-slate-800">
									{service.title}
								</h3>
								<p className="mt-3 text-lg leading-7 text-slate-500">{service.desc}</p>
								<button className="mt-5 rounded-lg bg-rose-600 px-6 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-rose-700">
									View More
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			<footer className="border-t border-slate-700 bg-slate-900 px-5 pb-8 pt-10 text-white sm:px-[6vw]">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<h2 className="text-4xl font-extrabold leading-tight">Subscribe to our</h2>
							<h2 className="text-4xl font-extrabold leading-tight">newsletter</h2>
						</div>

						<form className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
							<input
								type="text"
								placeholder="First Name *"
								className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
							/>
							<input
								type="text"
								placeholder="Last Name *"
								className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
							/>
							<input
								type="email"
								placeholder="Email *"
								className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
							/>
							<button className="rounded-full bg-rose-600 px-5 py-3 text-lg font-bold text-white transition hover:bg-rose-700">
								Submit
							</button>
						</form>
					</div>

					<div className="mt-10 h-px bg-white/20" />

					<div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-5">
						<div className="lg:col-span-2">
							<h3 className="text-3xl font-extrabold">PEER SUPPORT</h3>
							<p className="mt-4 max-w-md text-lg leading-8 text-white/90">
								500 Montgomery Street, Suite 820
								<br />
								Alexandria, VA 22314
								<br />
								Phone: (703) 684.7722
								<br />
								Toll Free: (800) 969.6642
							</p>
							<p className="mt-6 max-w-md text-base leading-7 text-white/75">
								©2026 Peer Support. All rights reserved. This site is protected by
								privacy and terms policies.
							</p>
						</div>

						<div>
							<h4 className="text-4xl/none font-extrabold text-rose-400">Quick links</h4>
							<ul className="mt-4 space-y-3 text-lg text-white/90">
								<li>Contact</li>
								<li>Donate</li>
								<li>Careers</li>
								<li>Financials</li>
								<li>In the news</li>
							</ul>
						</div>

						<div>
							<h4 className="text-4xl/none font-extrabold text-rose-400">Learn</h4>
							<ul className="mt-4 space-y-3 text-lg text-white/90">
								<li>Mental health learning hub</li>
								<li>Blog</li>
								<li>Workplace learning hub</li>
								<li>Research & reports</li>
							</ul>
						</div>

						<div>
							<h4 className="text-4xl/none font-extrabold text-rose-400">Get help</h4>
							<ul className="mt-4 space-y-3 text-lg text-white/90">
								<li>Call or text 988</li>
								<li>Crisis services</li>
								<li>Take a mental health test</li>
								<li>Explore treatment options</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-base text-white/80 md:flex-row md:items-center md:justify-between">
						<div className="flex items-center gap-3 text-lg text-rose-400">
							<span>f</span>
							<span>X</span>
							<span>▶</span>
							<span>◎</span>
							<span>in</span>
						</div>
						<div className="flex flex-wrap gap-5">
							<span>Privacy policy</span>
							<span>Terms of use</span>
							<span>Site by Great Believer</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Home

	return (
		<div className="min-h-screen text-white">
			<div className="notice-animate group border-b border-white/20 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-center text-xs font-semibold tracking-wide text-rose-100 transition-all duration-300 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 hover:text-rose-50 sm:text-sm">
				<span className="text-rose-400 transition-transform duration-300 group-hover:scale-110">⚠</span>{' '}
				Important note: This is a safe peer-support space. Please be respectful,
				 avoid sharing personal or financial details, and if you are in immediate
				 crisis, contact emergency help first.{' '}
				<span className="text-rose-400 transition-transform duration-300 group-hover:scale-110">⚠</span>
			</div>

			<header className="flex h-auto flex-col items-center justify-between gap-1 bg-slate-100 px-4 py-2 text-sm text-slate-700 sm:h-10 sm:flex-row sm:px-[6vw] sm:py-0">
				<span>peer.support@gmail.com</span>
				<span>24x7 Community Support</span>
			</header>

			<nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-18.5 sm:flex-row sm:px-[6vw] sm:py-0">
				<div className="text-xl font-extrabold tracking-wide text-rose-600">PEER SUPPORT</div>
				<ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Resources</li>
					<li>Contact</li>
				</ul>
			</nav>

			<section
				className="relative grid min-h-[calc(100vh-114px)] grid-cols-1 items-center gap-10 overflow-hidden bg-cover bg-center px-5 py-8 sm:px-[6vw] md:grid-cols-[1.1fr_0.9fr]"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')",
				}}
			>
				<div className="absolute inset-0 bg-slate-900/55" />

				<div className="relative z-10">
					<span className="mb-4 inline-block rounded-full bg-rose-600 px-4 py-2 text-sm font-bold">
						Trusted Community Since 2024
					</span>
					<h1 className="m-0 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
						Professional <span className="text-rose-500">Peer Support</span>{' '}
						Network
					</h1>
					<p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
						Connect with people who understand your journey. Get guidance,
						resources, and real conversations in a safe and supportive space.
					</p>

					<div className="mt-6 flex gap-4">
						<button className="cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-700">
							Join Now
						</button>
						<button className="cursor-pointer rounded-lg border border-white/50 bg-transparent px-5 py-3 text-base font-bold text-white transition hover:bg-white/10">
							Learn More
						</button>
					</div>
				</div>

				<div className="relative z-10 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
					<h2 className="m-0 text-3xl font-bold">Get Free Guidance</h2>
					<p className="mb-5 mt-2 text-slate-500">
						Fill this quick form and we will connect you.
					</p>

					<form>
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<input
								type="text"
								placeholder="Your Name"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500"
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500"
							/>
							<input
								type="email"
								placeholder="Email Address"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500 sm:col-span-2"
							/>
							<input
								type="text"
								placeholder="Your Concern"
								className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm outline-none focus:border-rose-500 sm:col-span-2"
							/>
						</div>
						<button
							type="submit"
							className="mt-4 w-full cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-700"
						>
							Get Free Support
						</button>
					</form>
				</div>
			</section>

			<section className="border-t-8 border-rose-100 bg-white px-5 py-16 text-slate-800 sm:px-[6vw] lg:py-20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<span className="inline-flex rounded-full bg-rose-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-700">
							About Us Section
						</span>
						<h2 className="mt-3 text-4xl font-extrabold text-rose-600">Who We Are</h2>
						<div className="mt-2 h-1 w-20 rounded bg-rose-500" />
						<p className="mt-4 text-lg leading-8 text-slate-700">
							<span className="font-bold text-slate-900">Peer Support</span> is a
							 community-first platform offering trusted emotional help,
							 conversations, and practical guidance for students and young
							 professionals.
						</p>
						<p className="mt-4 text-lg leading-8 text-slate-700">
							Our trained moderators and volunteers create a safe space where you
							 can share, heal, and grow with confidence.
						</p>

						<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">🏅</div>
								<div>
									<h3 className="text-lg font-bold">2+ Years Experience</h3>
									<p className="text-slate-600">Trusted support partner</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">👥</div>
								<div>
									<h3 className="text-lg font-bold">Expert Team</h3>
									<p className="text-slate-600">Skilled professionals</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">🛡️</div>
								<div>
									<h3 className="text-lg font-bold">100% Safe</h3>
									<p className="text-slate-600">Private and secure chats</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="rounded-xl bg-rose-600 p-3 text-xl text-white">💬</div>
								<div>
									<h3 className="text-lg font-bold">Affordable Help</h3>
									<p className="text-slate-600">Transparent resources</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1300&q=80"
							alt="Support team and workspace"
							className="h-full min-h-70 w-full rounded-md object-cover"
						/>

						<div className="absolute -bottom-7 left-6 rounded-2xl bg-white px-6 py-5 shadow-2xl sm:left-10">
							<div className="flex items-center gap-3">
								<span className="text-3xl text-rose-600">🚚</span>
								<div>
									<h3 className="text-4xl font-extrabold leading-none text-slate-800">
										10,000+
									</h3>
									<p className="mt-1 text-slate-500">Successful Connections</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t-8 border-slate-200 bg-slate-50 px-5 pb-16 pt-12 text-slate-800 sm:px-[6vw] lg:pb-20">
				<div className="mx-auto max-w-7xl">
					<div className="text-center">
						<span className="inline-flex rounded-full bg-slate-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700">
							Services Section
						</span>
						<span className="mt-3 inline-flex rounded-full bg-rose-600 px-6 py-2 text-sm font-bold uppercase tracking-wider text-white">
							Our Services
						</span>
						<p className="mx-auto mt-5 max-w-2xl text-2xl font-semibold leading-10 text-slate-600">
							Expert guidance, secure support & tailored solutions for every
							 situation.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{[
							{
								icon: '🏠',
								title: 'Home Guidance',
								desc: 'Personal support plans with practical daily guidance.',
							},
							{
								icon: '🏢',
								title: 'Office Wellbeing',
								desc: 'Work-stress handling and emotional productivity support.',
							},
							{
								icon: '📦',
								title: 'Resource Support',
								desc: 'Useful tools and resources for safe recovery journeys.',
							},
							{
								icon: '🚲',
								title: 'Peer Connect',
								desc: 'Connect with trusted peers who understand your situation.',
							},
							{
								icon: '🚗',
								title: '1:1 Sessions',
								desc: 'Private sessions with moderators and trained mentors.',
							},
							{
								icon: '🗂️',
								title: 'Community Hub',
								desc: 'Safe forum spaces for long-term growth and support.',
							},
						].map((service) => (
							<div
								key={service.title}
								className="rounded-2xl bg-white px-6 py-8 text-center shadow-sm"
							>
								<div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-rose-600 text-3xl text-white">
									{service.icon}
								</div>
								<h3 className="mt-5 text-4xl/none font-bold text-slate-800">
									{service.title}
								</h3>
								<p className="mt-3 text-lg leading-7 text-slate-500">{service.desc}</p>
								<button className="mt-5 rounded-lg bg-rose-600 px-6 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-rose-700">
									View More
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			<footer className="border-t border-slate-700 bg-slate-900 px-5 pb-8 pt-10 text-white sm:px-[6vw]">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<h2 className="text-4xl font-extrabold leading-tight">Subscribe to our</h2>
							<h2 className="text-4xl font-extrabold leading-tight">newsletter</h2>
						</div>

						<form className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
							<input
								type="text"
								placeholder="First Name *"
								className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
							/>
							<input
								type="text"
								placeholder="Last Name *"
								className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
							/>
							<input
								type="email"
								placeholder="Email *"
								className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
							/>
							<button className="rounded-full bg-rose-600 px-5 py-3 text-lg font-bold text-white transition hover:bg-rose-700">
								Submit
							</button>
						</form>
					</div>

					<div className="mt-10 h-px bg-white/20" />

					<div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-5">
						<div className="lg:col-span-2">
							<h3 className="text-3xl font-extrabold">PEER SUPPORT</h3>
							<p className="mt-4 max-w-md text-lg leading-8 text-white/90">
								500 Montgomery Street, Suite 820
								<br />
								Alexandria, VA 22314
								<br />
								Phone: (703) 684.7722
								<br />
								Toll Free: (800) 969.6642
							</p>
							<p className="mt-6 max-w-md text-base leading-7 text-white/75">
								©2026 Peer Support. All rights reserved. This site is protected by
								privacy and terms policies.
							</p>
						</div>

						<div>
							<h4 className="text-4xl/none font-extrabold text-rose-400">Quick links</h4>
							<ul className="mt-4 space-y-3 text-lg text-white/90">
								<li>Contact</li>
								<li>Donate</li>
								<li>Careers</li>
								<li>Financials</li>
								<li>In the news</li>
							</ul>
						</div>

						<div>
							<h4 className="text-4xl/none font-extrabold text-rose-400">Learn</h4>
							<ul className="mt-4 space-y-3 text-lg text-white/90">
								<li>Mental health learning hub</li>
								<li>Blog</li>
								<li>Workplace learning hub</li>
								<li>Research & reports</li>
							</ul>
						</div>

						<div>
							<h4 className="text-4xl/none font-extrabold text-rose-400">Get help</h4>
							<ul className="mt-4 space-y-3 text-lg text-white/90">
								<li>Call or text 988</li>
								<li>Crisis services</li>
								<li>Take a mental health test</li>
								<li>Explore treatment options</li>
							</ul>
						</div>
					</div>

					<div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-base text-white/80 md:flex-row md:items-center md:justify-between">
						<div className="flex items-center gap-3 text-lg text-rose-400">
							<span>f</span>
							<span>X</span>
							<span>▶</span>
							<span>◎</span>
							<span>in</span>
						</div>
						<div className="flex flex-wrap gap-5">
							<span>Privacy policy</span>
							<span>Terms of use</span>
							<span>Site by Great Believer</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Home
