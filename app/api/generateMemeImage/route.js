import { applyRateLimit } from '@/app/lib/rateLimiter';
import OpenAI from 'openai'
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});
export async function POST(req) {
    const { description } = await req.json();
    console.log('description', description);

    const identifier = req.headers.get('x-forwarded-for') || req.ip;

    // Apply rate limiting
    const ratelimit = await applyRateLimit(identifier);
    if (!ratelimit.success) {
        return new NextResponse(JSON.stringify({ message: "Rate limit exceeded. Please try again later." }), { status: 429 });
    }

    console.log('openai', openai);

    try {

        const response = await openai.images.generate({
            model: 'dall-e-3',
            prompt: `${description}`, // Use description here
            size: '1024x1024',
            quality: 'standard',
            n: 1,
        });
        console.log(response);



        const imageUrl = response.data.data[0].url;
        return new Response(JSON.stringify({ imageUrl }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Error generating meme image', { status: 500 });
    }
}
