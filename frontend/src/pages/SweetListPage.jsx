import { useState } from "react";
import SweetCard from "../components/SweetCard";

function SweetListPage() {
  // Temporary frontend data
  const [sweets] = useState([
    {
      id: 1,
      name: "Gulab Jamun",
      category: "Indian",
      price: 50,
      quantity: 10,
    },
    {
      id: 2,
      name: "Chocolate Bar",
      category: "Chocolate",
      price: 30,
      quantity: 0,
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Apply filters (frontend only)
  const filteredSweets = sweets.filter((sweet) => {
    const matchesName = sweet.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || sweet.category === selectedCategory;

    const matchesMinPrice = minPrice === "" || sweet.price >= Number(minPrice);

    const matchesMaxPrice = maxPrice === "" || sweet.price <= Number(maxPrice);

    return matchesName && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>Available Sweets</h2>

      {/* Filters section */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Indian">Indian</option>
          <option value="Chocolate">Chocolate</option>
        </select>

        {/* Price range */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

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
