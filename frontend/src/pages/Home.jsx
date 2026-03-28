import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="min-h-screen text-white">
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
					{/* <span className="mb-4 inline-block rounded-full bg-rose-600 px-4 py-2 text-sm font-bold">
						Trusted Community Since 2024
					</span> */}
					<h1 className="m-0 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
						Professional <span className="text-rose-500">Peer Support</span>{' '}
						Network
					</h1>
					<p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
						Connect with people who understand your journey. Get guidance,
						resources, and real conversations in a safe and supportive space.
					</p>

					<div className="mt-6 flex gap-4">
						<Link to="/services">
							<button className="cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-700">
								Join Now
							</button>
						</Link>
						<Link to="/resources">
							<button className="cursor-pointer rounded-lg border border-white/50 bg-transparent px-5 py-3 text-base font-bold text-white transition hover:bg-white/10">
								Learn More
							</button>
						</Link>
					</div>
				</div>

				   {/* Guidance form removed as per user request */}
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
							src="/mohe2.png"
							alt="Support team and workspace"
							className="h-full min-h-70 w-full rounded-md object-cover"
						/>
					</div>
				</div>
			</section>

		 {/* <section className="border-t-8 border-slate-200 bg-slate-50 px-5 pb-16 pt-12 text-slate-800 sm:px-[6vw] lg:pb-20">
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
			</section>  */}

	<Footer />
		</div>
	)
}

export default Home
