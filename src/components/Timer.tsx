import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useEffect, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime > 0 ? prevTime - 50 : 0;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const formattedRemaingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemaingTime}</p>
    </Container>
  );
}
