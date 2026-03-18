import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ResourceCard from '../components/ResourceCard'
import api from '../services/api'

const FALLBACK_RESOURCES = [
	{
		_id: '1',
		title: 'Crisis Text Line',
		description: 'Text HOME to 741741 to connect with a trained crisis counselor, available 24/7.',
		url: 'https://www.crisistextline.org',
		category: 'hotline',
	},
	{
		_id: '2',
		title: 'NAMI Helpline',
		description: 'The National Alliance on Mental Illness helpline — (800) 950-NAMI.',
		url: 'https://www.nami.org/help',
		category: 'hotline',
	},
	{
		_id: '3',
		title: 'Understanding Anxiety',
		description: 'A comprehensive guide to understanding and managing anxiety symptoms.',
		url: 'https://www.mentalhealth.gov/what-to-look-for/anxiety-disorders',
		category: 'article',
	},
	{
		_id: '4',
		title: 'Headspace — Meditation for Beginners',
		description: 'Guided meditation and mindfulness exercises to reduce stress and improve sleep.',
		url: 'https://www.headspace.com',
		category: 'tool',
	},
	{
		_id: '5',
		title: 'Peer Support — How It Works',
		description: 'Learn about the power of peer support and how lived experience creates connection.',
		url: 'https://www.mentalhealthfirstaid.org',
		category: 'article',
	},
	{
		_id: '6',
		title: 'Therapy for All — Finding Affordable Care',
		description: 'A video guide on finding affordable mental health therapy options near you.',
		url: 'https://www.youtube.com',
		category: 'video',
	},
]

function Resources() {
	const [resources, setResources] = useState([])
	const [loading, setLoading] = useState(true)
	const [category, setCategory] = useState('')

	useEffect(() => {
		const fetchResources = async () => {
			setLoading(true)
			try {
				const { data } = await api.get('/resources', { params: category ? { category } : {} })
				setResources(data.length ? data : FALLBACK_RESOURCES)
			} catch {
				setResources(FALLBACK_RESOURCES)
			} finally {
				setLoading(false)
			}
		}
		fetchResources()
	}, [category])

	const categories = ['article', 'video', 'hotline', 'tool', 'other']

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Navbar />
			<div className="mx-auto max-w-6xl px-4 py-10">
				<h1 className="text-3xl font-extrabold text-slate-800">Mental Health Resources</h1>
				<p className="mt-2 text-slate-500">
					Curated resources to help you on your journey.
				</p>

				<div className="mt-6 flex flex-wrap gap-2">
					<button
						onClick={() => setCategory('')}
						className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${!category ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
					>
						All
					</button>
					{categories.map((c) => (
						<button
							key={c}
							onClick={() => setCategory(c)}
							className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${category === c ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
						>
							{c.charAt(0).toUpperCase() + c.slice(1)}
						</button>
					))}
				</div>

				{loading ? (
					<p className="mt-10 text-center text-slate-500">Loading resources…</p>
				) : (
					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{resources.map((resource) => (
							<ResourceCard key={resource._id} resource={resource} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Resources
