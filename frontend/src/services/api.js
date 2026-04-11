export async function askAi(message, userId) {
	const res = await fetch('/api/chat/ai', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message, userId })
	});
	if (!res.ok) throw new Error('AI response failed');
	return res.json();
}
