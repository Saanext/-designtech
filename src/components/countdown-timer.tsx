"use client";

import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const TimerCard = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center rounded-lg bg-primary/10 p-3 sm:p-4">
    <div className="text-3xl sm:text-4xl font-bold text-primary">{String(value).padStart(2, '0')}</div>
    <div className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{label}</div>
  </div>
);

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial time left on client-side to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="mt-8 font-semibold text-primary">The offer has expired!</div>;
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto md:mx-0">
        <TimerCard value={timeLeft.days} label="Days" />
        <TimerCard value={timeLeft.hours} label="Hours" />
        <TimerCard value={timeLeft.minutes} label="Minutes" />
        <TimerCard value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
