import { http, HttpResponse } from "msw";
import { mockFeed, PAGE_SIZE } from "./mockFeedData";

export const handlers = [
  // Handle GET requests to /api/feed
  http.get("/api/feed", ({ request }) => {
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
