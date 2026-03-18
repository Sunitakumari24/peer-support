import Navbar from '../components/Navbar';
import GroupCard from '../components/GroupCard';

const GROUPS = [
  {
    id: 1,
    name: 'Anxiety Support Circle',
    description: 'A safe space to share and manage anxiety with peers who understand.',
    members: 124,
    category: 'Mental Health',
  },
  {
    id: 2,
    name: 'Student Wellness Hub',
    description: 'For students navigating academic stress and personal challenges.',
    members: 89,
    category: 'Students',
  },
  {
    id: 3,
    name: 'Grief & Loss Support',
    description: 'Compassionate community for those dealing with loss and grief.',
    members: 57,
    category: 'Grief',
  },
  {
    id: 4,
    name: 'Work-Life Balance',
    description: 'Strategies and peer support for managing professional stress.',
    members: 201,
    category: 'Workplace',
  },
  {
    id: 5,
    name: 'Recovery Together',
    description: 'Peer-led recovery group for substance use and addiction support.',
    members: 73,
    category: 'Recovery',
  },
  {
    id: 6,
    name: 'Mindfulness & Meditation',
    description: 'Daily mindfulness practices shared in a caring community.',
    members: 156,
    category: 'Wellness',
  },
];

function Groups() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-extrabold text-rose-600">Support Groups</h1>
        <p className="mb-8 text-slate-500">
          Find your community and connect with peers who share your experiences.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Groups;
