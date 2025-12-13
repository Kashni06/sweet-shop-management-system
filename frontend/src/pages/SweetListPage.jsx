import { useState } from "react";
import SweetCard from "../components/SweetCard";

function SweetListPage() {
  // Temporary data (frontend only)
  const [sweets] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Filter sweets by name (frontend-only logic)
  const filteredSweets = sweets.filter((sweet) =>
    sweet.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      {/* Page heading */}
      <h2>Available Sweets</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search sweets by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "20px",
        }}
      />

      {/* Sweet list */}
      {filteredSweets.length === 0 ? (
        <p>No sweets available at the moment</p>
      ) : (
        filteredSweets.map((sweet) => (
          <SweetCard key={sweet.id} sweet={sweet} />
        ))
      )}
    </div>
  );
}

export default SweetListPage;
