import Navbar from '../components/Navbar'
import GroupCard from '../components/GroupCard'

const GROUPS = [
	{
		id: 1,
		icon: '🎓',
		name: 'Student Support Circle',
		description:
			'A safe space for students dealing with academic pressure, exam anxiety, and campus life stress.',
		members: 234,
		category: 'Academic Stress',
	},
	{
		id: 2,
		icon: '💼',
		name: 'Workplace Wellness',
		description:
			'Professionals supporting each other through burnout, work stress, and career transitions.',
		members: 189,
		category: 'Work Stress',
	},
	{
		id: 3,
		icon: '🌙',
		name: 'Anxiety & Sleep',
		description:
			'Connect with others managing anxiety disorders and sleep difficulties. Share strategies that work.',
		members: 312,
		category: 'Anxiety',
	},
	{
		id: 4,
		icon: '🤝',
		name: 'Grief & Loss',
		description:
			'Compassionate support for those navigating grief, loss, and life transitions.',
		members: 97,
		category: 'Grief',
	},
	{
		id: 5,
		icon: '🌿',
		name: 'Mindfulness & Meditation',
		description:
			'Practice mindfulness together. Weekly guided sessions and shared resources.',
		members: 156,
		category: 'Mindfulness',
	},
	{
		id: 6,
		icon: '🏳️‍🌈',
		name: 'LGBTQ+ Safe Space',
		description:
			'Affirming, non-judgmental peer support for LGBTQ+ individuals facing unique challenges.',
		members: 78,
		category: 'Identity',
	},
]

export default function Groups() {
	function handleJoin(group) {
		alert(`You have joined "${group.name}"! Welcome to the community.`)
	}

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Navbar />

			<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
				<h1 className="text-3xl font-extrabold text-slate-800">Support Groups</h1>
				<p className="mt-1 text-slate-500">
					Find your community. Join a group that understands your journey.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{GROUPS.map((group) => (
						<GroupCard key={group.id} group={group} onJoin={handleJoin} />
					))}
				</div>
			</div>
		</div>
	)
}
