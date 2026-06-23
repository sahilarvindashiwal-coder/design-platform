import { useEffect, useState } from "react";

const SALE_DURATION_MS = 12 * 60 * 60 * 1000;
const STORAGE_KEY = "dv_sale_ends_at";

const pad = (n) => String(n).padStart(2, "0");

export function formatSaleRemaining(ms) {
  const total = Math.max(0, ms);
  const hours = Math.floor(total / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function getSaleEndTime() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = Number(stored);
    if (!Number.isNaN(parsed)) return parsed;
  }
  const endsAt = Date.now() + SALE_DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(endsAt));
  return endsAt;
}

export default function useSaleCountdown() {
  const [remainingMs, setRemainingMs] = useState(null);

  useEffect(() => {
    const endsAt = getSaleEndTime();

    const tick = () => {
      setRemainingMs(Math.max(0, endsAt - Date.now()));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return {
    remainingMs: remainingMs ?? SALE_DURATION_MS,
    formatted: formatSaleRemaining(remainingMs ?? SALE_DURATION_MS),
    expired: remainingMs === 0,
  };
}
