# 📱 Feed Reader Web App

A **Feed Reader** web application that mimics a modern social media feed (like Facebook / Instagram / X).

Built with **React + TypeScript**, styled using **Tailwind CSS + Ant Design**, powered by **TanStack Query** for data fetching, and backed by a **robust Mock API using MSW**.

---

## Features

* Social-media–style feed (text + images)
* Infinite scrolling
* Pull-to-refresh (mobile + desktop)
* Like button interaction
* Skeleton loading UI
* Retry / refetch UX
* Robust mock API with MSW
* Simulated network latency

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development server

```bash
pnpm dev
```

### 3. Open browser

```
http://localhost:5173
```

MSW will automatically start in development mode.

---

## 🧪 Testing the Mock API

```bash
curl "http://localhost:5173/api/feed?page=1"
```

---


## Tech Stack

| Category        | Tech                            |
| --------------- | ------------------------------- |
| Framework       | React 19 + TypeScript           |
| Styling         | Tailwind CSS + Ant Design       |
| Data Fetching   | TanStack Query (Infinite Query) |
| Mock API        | MSW (Mock Service Worker)       |
| HTTP Client     | Axios                           |
| Build Tool      | Vite                            |
| Package Manager | pnpm                            |
| Node            | v22                             |

---

## Project Structure

```
feed-reader/
├─ src/
│  ├─ components/
│  │  ├─ FeedList.tsx
│  │  ├─ FeedItem.tsx
│  │  ├─ PullToRefresh.tsx
│  │  └─ SkeletonLoading/
│  ├─ hooks/
│  │  └─ useFeed.ts
│  ├─ mocks/
│  │  ├─ handlers.ts
│  │  ├─ browser.ts
│  │  └─ mockFeedData.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
└─ README.md
```

---

## Trade-off Analysis
Prioritized

Robust Mock API (MSW)
Simulates real HTTP requests to ensure stability during development and review.

TanStack Query (useInfiniteQuery)
Handles caching, pagination, loading, refetching, and error states cleanly.

Infinite Scroll Feed UX
Provides a modern social-feed-like experience.

Skeleton Loading UI
Improves perceived performance and avoids layout shifts.

Pull-to-Refresh Interaction
Mobile-first UX with desktop support.

Intentionally Left Out

Real backend / database

Authentication & authorization

Persistent likes or user state

Accessibility polishing (ARIA, keyboard navigation)

End-to-end tests

---

## Future Scope (With 2 More Hours)

If more time were available, the following improvements would be made:

Add optimistic updates for likes with rollback support

Improve error recovery UX (retry banners, empty states)

Add unit tests for hooks and components

Refactor feed rendering to reduce derived state

Add virtualized lists for better performance on large feeds

Improve accessibility (ARIA roles, keyboard navigation)

Add follower feature with MSW mocking data

Add tab for separate feed between follower and suggest

---

## AI Usage (Optional)

AI tools were used to:

Help debug React Query and MSW integration issues

Generate boilerplate for mock handlers and hooks

Refine UX patterns such as skeleton loading and pull-to-refresh logic



## Author

**Kritamtate Kamheang**


---

✨ Thanks for reviewing this project!
