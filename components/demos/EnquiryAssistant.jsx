"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";

const answers = {
  "Fees for Class 10": "Class 10 board prep is ₹1,500 per month (sample). It includes weekly tests and doubt sessions.",
  "Batch timings": "Morning 7–9 AM and evening 5–7 PM, Monday to Saturday (sample).",
  "Free demo class": "Yes! The first class is free. Can I have the student's name and a phone number to book it?",
  "Where are you located?": "Sunrise Coaching, near Patia Square, Bhubaneswar (sample address).",
};
const now = () => new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

export default function EnquiryAssistant() {
  const [msgs, setMsgs] = useState([{ me: false, t: "Hi 👋 I'm the Sunrise Coaching assistant (demo). Ask me about fees, timings or a free demo class." }]);
  const [rows, setRows] = useState([{ time: "09:12", name: "Priya (sample)", ask: "Fees for Class 12", status: "Replied" }, { time: "08:40", name: "Arjun (sample)", ask: "Free demo class", status: "Booked" }]);
  const [typing, setTyping] = useState(false);
  const [askName, setAskName] = useState(false);
  const [text, setText] = useState("");
  const box = useRef(null);
  useEffect(() => { box.current?.scrollTo({ top: box.current.scrollHeight, behavior: "smooth" }); }, [msgs, typing]);

  const reply = (q, a, row) => {
    setMsgs((m) => [...m, { me: true, t: q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { me: false, t: a }]);
      if (row) setRows((r) => [{ time: now(), ...row }, ...r].slice(0, 7));
    }, 900);
  };
  const quick = (q) => {
    if (q === "Free demo class") setAskName(true);
    reply(q, answers[q], { name: "Website visitor", ask: q, status: q === "Free demo class" ? "Waiting for details" : "Replied" });
  };
  const send = (e) => {
    e.preventDefault();
    const v = text.trim(); if (!v) return; setText("");
    if (askName) {
      setAskName(false);
      reply(v, "Thank you! Your free demo class is booked. We'll confirm on WhatsApp shortly. (Demo — nothing was sent.)", { name: v.slice(0, 24), ask: "Free demo class", status: "Booked" });
    } else {
      const hit = Object.keys(answers).find((k) => k.toLowerCase().split(" ").some((w) => w.length > 3 && v.toLowerCase().includes(w)));
      reply(v, hit ? answers[hit] : "Thanks! A teacher will reply to this shortly. Meanwhile, you can ask about fees, timings or a free demo.", { name: "Website visitor", ask: v.slice(0, 40), status: hit ? "Replied" : "Needs follow-up" });
    }
  };

  return (
    <div className="bot">
      <div className="bot-chat">
        <div className="bot-head"><span className="bot-av">S</span><div><b>Sunrise Coaching</b><small><span className="live-dot" aria-hidden="true" /> Replies instantly</small></div></div>
        <div className="bot-msgs" ref={box} aria-live="polite">
          {msgs.map((m, i) => <p key={i} className={`bm ${m.me ? "me" : ""}`}>{m.t}</p>)}
          {typing && <p className="bm typing" aria-label="Assistant is typing"><i /><i /><i /></p>}
        </div>
        <div className="bot-quick">{Object.keys(answers).map((q) => <button key={q} type="button" onClick={() => quick(q)}>{q}</button>)}</div>
        <form className="bot-input" onSubmit={send}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder={askName ? "Type student name…" : "Type a message…"} aria-label="Message" />
          <button type="submit" aria-label="Send"><Icon name="arrow" size={18} /></button>
        </form>
      </div>
      <div className="bot-sheet">
        <div className="sheet-head"><Icon name="sheet" size={18} /><b>Enquiries — Google Sheet (live demo)</b></div>
        <div className="sheet-scroll">
          <table>
            <thead><tr><th>Time</th><th>Name</th><th>Enquiry</th><th>Status</th></tr></thead>
            <tbody>{rows.map((r, i) => <tr key={r.time + r.ask + i} className={i === 0 ? "new" : ""}><td>{r.time}</td><td>{r.name}</td><td>{r.ask}</td><td><span className={`st st-${r.status.split(" ")[0].toLowerCase()}`}>{r.status}</span></td></tr>)}</tbody>
          </table>
        </div>
        <p className="sheet-note"><Icon name="zap" size={14} /> Every message is saved automatically, and items needing follow-up are flagged for the team.</p>
      </div>
    </div>
  );
}
