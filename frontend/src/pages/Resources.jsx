import Navbar from '../components/Navbar'
import ResourceCard from '../components/ResourceCard'

const RESOURCES = [
	{
		id: 1,
		icon: '🧠',
		category: 'Mental Health',
		title: 'Understanding Anxiety',
		description:
			'A comprehensive guide to recognizing anxiety symptoms and practical coping techniques.',
		link: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
	},
	{
		id: 2,
		icon: '😴',
		category: 'Sleep & Rest',
		title: 'Better Sleep Habits',
		description:
			'Evidence-based tips for improving sleep quality and establishing a healthy bedtime routine.',
		link: 'https://www.sleepfoundation.org/sleep-hygiene',
	},
	{
		id: 3,
		icon: '🏃',
		category: 'Physical Wellness',
		title: 'Exercise & Mental Health',
		description:
			'How regular physical activity reduces stress, anxiety, and depression — backed by research.',
		link: 'https://www.health.harvard.edu/mind-and-mood/exercise-is-an-all-natural-treatment-to-fight-depression',
	},
	{
		id: 4,
		icon: '🧘',
		category: 'Mindfulness',
		title: 'Beginner Meditation Guide',
		description:
			'Step-by-step introduction to mindfulness meditation for stress reduction and emotional clarity.',
		link: 'https://www.mindful.org/meditation/mindfulness-getting-started/',
	},
	{
		id: 5,
		icon: '📞',
		category: 'Crisis Support',
		title: 'iCall Counselling',
		description:
			'Free professional counselling helpline for students and professionals across India.',
		link: 'https://icallhelpline.org/',
	},
	{
		id: 6,
		icon: '📖',
		category: 'Self-Help',
		title: 'Journaling for Mental Health',
		description:
			'How expressive writing can improve mood, reduce stress, and build emotional resilience.',
		link: null,
	},
]

const CATEGORIES = ['All', 'Mental Health', 'Sleep & Rest', 'Physical Wellness', 'Mindfulness', 'Crisis Support', 'Self-Help']

export default function Resources() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Navbar />

			<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
				<h1 className="text-3xl font-extrabold text-slate-800">Resources</h1>
				<p className="mt-1 text-slate-500">
					Curated articles, guides, and tools to support your wellbeing journey.
				</p>

				<div className="mt-6 flex flex-wrap gap-2">
					{CATEGORIES.map((cat) => (
						<button
							key={cat}
							className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 hover:border-rose-400 hover:text-rose-600 transition"
						>
							{cat}
						</button>
					))}
				</div>

				<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{RESOURCES.map((resource) => (
						<ResourceCard key={resource.id} resource={resource} />
					))}
				</div>
			</div>
		</div>
	)
}
