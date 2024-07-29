import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import { useEffect, useState } from "react";

dayjs.extend(duration);

export interface Discount{
    id?:number;
    image?: string;
    category?: string;
    name?: string;
    rate?: number;
    newPrice?: number;
    oldPrice?: number;
    comments?: number;
    discountTime?: string;
}

export interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}

export function calculateTimeLeft(targetDate: string): TimeLeft {
    const now = dayjs();
    const target = dayjs(targetDate);
    const diff = target.diff(now);

    const durationLeft = dayjs.duration(diff);

    return {
        hours: Math.floor(durationLeft.asHours()),
        minutes: durationLeft.minutes(),
        seconds: durationLeft.seconds(),
    };
}

export function useTimeLeft(discountTime: string): TimeLeft {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(discountTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(discountTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [discountTime]);

    return timeLeft;
}