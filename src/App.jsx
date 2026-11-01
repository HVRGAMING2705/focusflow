import { useState } from "react";

const FEATURES = ["session tracking", "break management", "productivity dashboard"];

export default function App() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("focusflow_pomodoro_study_timer_items") || "[]"));
  const [text, setText] = useState("");
  const add = () => { if (!text.trim()) return; const next = [...items, text]; setItems(next); localStorage.setItem("focusflow_pomodoro_study_timer_items", JSON.stringify(next)); setText(""); };
  return (<div><h1>FocusFlow - Pomodoro Study Timer</h1>{FEATURES.map(f => <div key={f}>{f}</div>)}<input value={text} onChange={e => setText(e.target.value)} placeholder="Add an entry…" /><button onClick={add}>Add</button><ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul></div>);
}
