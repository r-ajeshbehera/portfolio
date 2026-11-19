export default function HeroVisual() {
  const rows = [
    ["Sample Coaching Centre", "Website enquiry", "Replied"],
    ["Sample Clinic", "Appointment request", "Booked"],
    ["Sample Store", "Stock question", "Follow-up"],
  ];
  return (
    <div className="hero-visual" aria-label="Illustration of a sample enquiry dashboard">
      <div className="mock-window">
        <div className="mock-bar"><span /><span /><span /><em>Enquiries · sample data</em></div>
        <div className="mock-stats">
          <div><small>New today</small><b>3</b></div>
          <div><small>Replied</small><b>3</b></div>
          <div><small>Pending</small><b>0</b></div>
        </div>
        <table className="mock-table">
          <thead><tr><th>Business</th><th>Request</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} style={{ animationDelay: `${0.4 + i * 0.25}s` }}>
                <td>{r[0]}</td><td>{r[1]}</td><td><span className={`pill pill-${i}`}>{r[2]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mock-float">
        <span className="dot" /> Auto-reply sent in seconds
      </div>
    </div>
  );
}
