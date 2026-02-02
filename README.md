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

## 📂 Project Structure

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

## Data Source Strategy

This project uses Robust Mock API**.

### Why Mock API?

* Stable during review & demo
* No external API downtime
* Full control over data shape
* Easy to simulate latency & errors

### Mock API details

* Implemented using **MSW (Mock Service Worker)**
* Intercepts `/api/feed` requests
* Supports pagination
* Adds artificial delay to simulate real network

Example response:

```json
{
  "data": [ ...posts ],
  "nextPage": 2
}
```

---

## Infinite Scroll Implementation

* Uses `useInfiniteQuery`
* Loads next page when user scrolls near bottom
* Preserves previously loaded pages

Key TanStack config:

```ts
useInfiniteQuery({
  queryKey: ['feed'],
  queryFn,
  initialPageParam: 1,
  getNextPageParam: (lastPage) => lastPage.nextPage,
})
```

---

## Pull-to-Refresh UX

* Works on **mobile (touch)** and **desktop (mouse / trackpad)**
* Only triggers when scroll position is at top
* Resets cached pages and reloads fresh feed

Implemented by:

* Tracking drag distance
* Triggering `queryClient.resetQueries(['feed'])`

---

## Loading & Error States

### Loading

* Skeleton UI shown during initial load
* Spinner shown during pull-to-refresh

### Error

* Friendly error message
* Retry button calls refetch

---

## Design Decisions

* **TanStack Query** for predictable cache & refetch behavior
* **MSW** instead of real backend for reliability
* **Axios** for clean request handling
* **Tailwind** for layout & spacing
* **Ant Design** for polished UI components

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


## Author

**Kritamtate Kamheang**


---

✨ Thanks for reviewing this project!
