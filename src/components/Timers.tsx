import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  console.log(timers);
  return (
    <ul>
      {timers.map((timer) => (
        <Timer name={timer.name} duration={timer.duration}></Timer>
      ))}
    </ul>
  );
}
