import { http, HttpResponse, delay } from "msw";
import { mockFeed, PAGE_SIZE } from "./mockFeedData";

export const handlers = [
  http.get("/api/feed", async ({ request }) => {
    // simple timer (fake network delay)
    await delay(800); // 800ms

    const url = new URL(request.url);

    // Read "page" from query string, default to page 1
    const page = Number(url.searchParams.get("page")) || 1;

    // Calculate array slice range based on page number
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    // Get only the posts for the current page
    const data = mockFeed.slice(start, end);

    // Determine if there is a next page
    const nextPage = end < mockFeed.length ? page + 1 : null;

    return HttpResponse.json({
      data,
      nextPage,
    });
  }),
];
