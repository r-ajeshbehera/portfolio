"use client";

import { useMemo, useState } from "react";
import Icon from "../Icon";

const cats = ["Rent", "Salaries", "Stock", "Marketing", "Utilities", "Other"];
const colors = ["#2f5bd8", "#5b7cf0", "#e8a35a", "#12b76a", "#8a6cf0", "#94a3b8"];
const months = ["Jul", "Aug", "Sep", "Oct", "Nov"];
const seed = [
  ["Jul", "in", "Sales", 82000], ["Jul", "out", "Rent", 15000], ["Jul", "out", "Salaries", 30000], ["Jul", "out", "Stock", 18000],
  ["Aug", "in", "Sales", 91000], ["Aug", "out", "Rent", 15000], ["Aug", "out", "Salaries", 30000], ["Aug", "out", "Stock", 21000], ["Aug", "out", "Marketing", 4000],
  ["Sep", "in", "Sales", 78000], ["Sep", "out", "Rent", 15000], ["Sep", "out", "Salaries", 30000], ["Sep", "out", "Stock", 16000], ["Sep", "out", "Utilities", 3200],
  ["Oct", "in", "Sales", 104000], ["Oct", "out", "Rent", 15000], ["Oct", "out", "Salaries", 32000], ["Oct", "out", "Stock", 26000], ["Oct", "out", "Marketing", 6000],
  ["Nov", "in", "Sales", 96000], ["Nov", "out", "Rent", 15000], ["Nov", "out", "Salaries", 32000], ["Nov", "out", "Stock", 22000], ["Nov", "out", "Utilities", 3500],
].map(([m, type, cat, amt], i) => ({ id: i, m, type, cat, amt }));
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function ExpenseDashboard() {
  const [rows, setRows] = useState(seed);
  const [f, setF] = useState({ m: "Nov", type: "out", cat: "Marketing", amt: "" });
  const [month, setMonth] = useState("Nov");
  const sum = (m, t) => rows.filter((r) => r.m === m && r.type === t).reduce((a, r) => a + r.amt, 0);
  const inc = sum(month, "in"), exp = sum(month, "out"), profit = inc - exp;
  const max = Math.max(...months.map((m) => Math.max(sum(m, "in"), sum(m, "out"))), 1);
  const byCat = useMemo(() => cats.map((c) => rows.filter((r) => r.m === month && r.type === "out" && r.cat === c).reduce((a, r) => a + r.amt, 0)), [rows, month]);
  const tot = byCat.reduce((a, b) => a + b, 0) || 1;
  let acc = 0;
  const add = (e) => {
    e.preventDefault();
    const amt = parseFloat(f.amt); if (!amt) return;
    setRows((r) => [...r, { id: Date.now(), m: f.m, type: f.type, cat: f.type === "in" ? "Sales" : f.cat, amt }]);
    setMonth(f.m); setF({ ...f, amt: "" });
  };
  return (
    <div className="dash">
      <div className="dash-top">
        <div className="dash-months" role="group" aria-label="Month">{months.map((m) => <button key={m} type="button" className={month === m ? "on" : ""} onClick={() => setMonth(m)}>{m}</button>)}</div>
      </div>
      <div className="dash-kpis">
        <div><span>Income</span><b>{inr(inc)}</b></div>
        <div><span>Expenses</span><b>{inr(exp)}</b></div>
        <div className={profit >= 0 ? "pos" : "neg"}><span>Profit</span><b>{inr(profit)}</b></div>
        <div><span>Margin</span><b>{inc ? Math.round((profit / inc) * 100) : 0}%</b></div>
      </div>
      <div className="dash-charts">
        <div className="dash-card">
          <p className="calc-k">Income vs expenses</p>
          <div className="bars">
            {months.map((m) => (
              <button type="button" key={m} className={`bar-g ${m === month ? "on" : ""}`} onClick={() => setMonth(m)} aria-label={`${m}: income ${inr(sum(m, "in"))}, expenses ${inr(sum(m, "out"))}`}>
                <span className="bar in" style={{ height: `${(sum(m, "in") / max) * 100}%` }} />
                <span className="bar out" style={{ height: `${(sum(m, "out") / max) * 100}%` }} />
                <small>{m}</small>
              </button>
            ))}
          </div>
          <div className="legend"><span><i className="in" /> Income</span><span><i className="out" /> Expenses</span></div>
        </div>
        <div className="dash-card">
          <p className="calc-k">{month} spending by category</p>
          <div className="donut-wrap">
            <svg viewBox="0 0 42 42" className="donut" aria-hidden="true">
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#eef1f6" strokeWidth="6" />
              {byCat.map((v, i) => { const pct = (v / tot) * 100; const el = <circle key={i} cx="21" cy="21" r="15.9" fill="none" stroke={colors[i]} strokeWidth="6" strokeDasharray={`${pct} ${100 - pct}`} strokeDashoffset={25 - acc} />; acc += pct; return el; })}
            </svg>
            <ul className="donut-legend">{cats.map((c, i) => byCat[i] > 0 && <li key={c}><i style={{ background: colors[i] }} />{c}<b>{inr(byCat[i])}</b></li>)}</ul>
          </div>
        </div>
      </div>
      <form className="dash-add" onSubmit={add}>
        <b>Add an entry</b>
        <select value={f.m} onChange={(e) => setF({ ...f, m: e.target.value })} aria-label="Month">{months.map((m) => <option key={m}>{m}</option>)}</select>
        <select value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })} aria-label="Type"><option value="out">Expense</option><option value="in">Income</option></select>
        {f.type === "out" && <select value={f.cat} onChange={(e) => setF({ ...f, cat: e.target.value })} aria-label="Category">{cats.map((c) => <option key={c}>{c}</option>)}</select>}
        <input type="number" min="1" placeholder="Amount ₹" value={f.amt} onChange={(e) => setF({ ...f, amt: e.target.value })} aria-label="Amount" />
        <button type="submit" className="btn btn-primary btn-sm"><Icon name="plus" size={16} /> Add</button>
      </form>
    </div>
  );
}
