const stores = [
  { name: "Industrial Area Shop", address: "Industrial Area, Nairobi", hours: "Mon–Sat, 8am–6pm" },
  { name: "Westlands Pop-up", address: "Westlands, Nairobi", hours: "Fri–Sun, 10am–7pm" },
];

export default function Stores() {
  return (
    <div className="container section">
      <h1>Where to find us</h1>
      <div className="grid grid-3">
        {stores.map((s) => (
          <div key={s.name} className="card quote">
            <h3>📍 {s.name}</h3>
            <p>{s.address}</p>
            <p>{s.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}