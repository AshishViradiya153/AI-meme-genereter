import { Ratelimit } from "@unkey/ratelimit";

const limiter = new Ratelimit({
  namespace: "nextjs-meme-generator",
  limit: 2, // Maximum requests per timeframe
  duration: "30s", // Time window for rate limiting
  rootKey: process.env.UNKEY_ROOT_KEY || "",
});

export async function applyRateLimit(identifier: string) {
  return await limiter.limit(identifier);
}
