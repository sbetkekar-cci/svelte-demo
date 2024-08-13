export function GET() {
	const randomNumber = Math.floor(Math.random() * 101); // Random number between 0 and 100
	return new Response(String(randomNumber));
}
