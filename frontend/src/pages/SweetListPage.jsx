import { useState } from "react";
import SweetCard from "../components/SweetCard";

function SweetListPage() {
  // Admin-controlled sweets (frontend only)
  const [sweets, setSweets] = useState([
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

  // Filters
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Admin form state
  const [newSweet, setNewSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  // Filter logic
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

  // Admin: add new sweet
  function handleAddSweet(e) {
    e.preventDefault();

    const sweetToAdd = {
      ...newSweet,
      id: Date.now(),
      price: Number(newSweet.price),
      quantity: Number(newSweet.quantity),
    };

    setSweets([...sweets, sweetToAdd]);

    // Reset form
    setNewSweet({ name: "", category: "", price: "", quantity: "" });
  }

  // Admin: delete sweet
  function handleDeleteSweet(id) {
    setSweets(sweets.filter((sweet) => sweet.id !== id));
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>Available Sweets</h2>

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Indian">Indian</option>
          <option value="Chocolate">Chocolate</option>
        </select>

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

      {/* Sweet cards */}
      {filteredSweets.map((sweet) => (
        <div key={sweet.id}>
          <SweetCard sweet={sweet} />
          <button
            onClick={() => handleDeleteSweet(sweet.id)}
            style={{ marginBottom: "20px", color: "red" }}
          >
            Delete (Admin)
          </button>
        </div>
      ))}

      <hr />

      {/* Admin Panel */}
      <h3>Admin Panel – Add New Sweet</h3>

      <form onSubmit={handleAddSweet} style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Name"
          value={newSweet.name}
          onChange={(e) => setNewSweet({ ...newSweet, name: e.target.value })}
          required
        />

        <input
          placeholder="Category"
          value={newSweet.category}
          onChange={(e) =>
            setNewSweet({ ...newSweet, category: e.target.value })
          }
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={newSweet.price}
          onChange={(e) => setNewSweet({ ...newSweet, price: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={newSweet.quantity}
          onChange={(e) =>
            setNewSweet({ ...newSweet, quantity: e.target.value })
          }
          required
        />

        <button type="submit">Add Sweet</button>
      </form>
    </div>
  );
}

export default SweetListPage;
