import { applyRateLimit } from '@/app/lib/rateLimiter';
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

export async function POST(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const identifier = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Apply rate limiting
    const rateLimit = await applyRateLimit(identifier);
    if (!rateLimit.success) {
        return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
    }
    const { prompt } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: `write text for generet meme ${prompt}` }],
        });

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generating meme text' });
    }
}
