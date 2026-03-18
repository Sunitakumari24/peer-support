import Navbar from '../components/Navbar'
import GroupCard from '../components/GroupCard'

const GROUPS = [
	{
		id: 1,
		name: 'Anxiety Support Circle',
		description: 'A safe space to discuss anxiety, share coping techniques, and support each other.',
		members: 128,
		category: 'anxiety',
		emoji: '🌿',
	},
	{
		id: 2,
		name: 'Depression Recovery',
		description: 'Connect with others on the path to recovery. You are not alone in this journey.',
		members: 94,
		category: 'depression',
		emoji: '💙',
	},
	{
		id: 3,
		name: 'Work & Burnout',
		description: 'Discuss workplace stress, burnout, and strategies to reclaim your wellbeing.',
		members: 76,
		category: 'work',
		emoji: '💼',
	},
	{
		id: 4,
		name: 'Student Life',
		description: 'Academic pressure, relationships, future worries — talk about it all here.',
		members: 210,
		category: 'general',
		emoji: '📚',
	},
	{
		id: 5,
		name: 'Grief & Loss',
		description: 'Find comfort and understanding with others who know the weight of loss.',
		members: 57,
		category: 'other',
		emoji: '🕊️',
	},
	{
		id: 6,
		name: 'Relationship Talks',
		description: 'Navigate the complexities of relationships with peer guidance and empathy.',
		members: 143,
		category: 'relationships',
		emoji: '💬',
	},
]

function Groups() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Navbar />
			<div className="mx-auto max-w-6xl px-4 py-10">
				<h1 className="text-3xl font-extrabold text-slate-800">Support Groups</h1>
				<p className="mt-2 text-slate-500">
					Find your community — groups are open to everyone.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
					{GROUPS.map((group) => (
						<GroupCard key={group.id} group={group} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Groups
