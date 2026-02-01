import { Spin } from "antd";
import { useRef, useState } from "react";

type Props = {
  onRefresh: () => Promise<any>;
  children: React.ReactNode;
};

const THRESHOLD = 70;
const MAX_PULL = 120;

export function PullToRefresh({ onRefresh, children }: Props) {
  const startY = useRef(0);
  const isDragging = useRef(false);

  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  /* ---------------- Touch ---------------- */

  function onTouchStart(e: React.TouchEvent) {
    if (window.scrollY === 0) {
      startY.current = e.touches[0].clientY;
    }
  }

  function onTouchMove(e: React.TouchEvent) {
    if (window.scrollY !== 0 || refreshing) return;

    const diff = e.touches[0].clientY - startY.current;
    if (diff > 0) {
      setPull(Math.min(diff, MAX_PULL));
    }
  }

  async function onTouchEnd() {
    await handleRelease();
  }

  /* ---------------- Mouse ---------------- */

  function onMouseDown(e: React.MouseEvent) {
    if (window.scrollY === 0) {
      isDragging.current = true;
      startY.current = e.clientY;
    }
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || refreshing) return;

    const diff = e.clientY - startY.current;
    if (diff > 0) {
      setPull(Math.min(diff, MAX_PULL));
    }
  }

  async function onMouseUp() {
    isDragging.current = false;
    await handleRelease();
  }

  /* ---------------- Shared ---------------- */

  async function handleRelease() {
    if (pull > THRESHOLD) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
    setPull(0);
  }

  return (
    <div
      className="relative select-none"
      role="button"
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onRefresh();
        }
      }}
    >
      {/* Pull indicator */}
      <div
        className="flex justify-center items-center transition-all"
        style={{
          height: pull,
          opacity: pull > 10 ? 1 : 0,
        }}
      >
        {refreshing ? (
          <Spin />
        ) : (
          <span className="text-sm text-gray-500">
            Pull to refresh
          </span>
        )}
      </div>

      {children}
    </div>
  );
}
