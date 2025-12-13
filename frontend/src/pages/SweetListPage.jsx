import { useEffect, useState } from "react";
import api from "../api/api";
const role = localStorage.getItem("role");

function SweetListPage() {
  /* -------------------- STATE -------------------- */

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);

  /* -------------------- FETCH SWEETS -------------------- */

  useEffect(() => {
    fetchSweets();
  }, []);

  async function fetchSweets() {
    try {
      const res = await api.get("/sweets");
      setSweets(res.data);
    } catch (err) {
      console.error("Failed to load sweets");
    } finally {
      setLoading(false);
    }
  }

  /* -------------------- FILTER LOGIC -------------------- */

  const filteredSweets = sweets.filter((sweet) => {
    const matchesName = sweet.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || sweet.category === selectedCategory;

    const matchesMinPrice = minPrice === "" || sweet.price >= Number(minPrice);
    const matchesMaxPrice = maxPrice === "" || sweet.price <= Number(maxPrice);

    return matchesName && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  /* -------------------- ACTIONS -------------------- */

  async function handlePurchase(id) {
    try {
      const res = await api.post(`/sweets/${id}/purchase`);

      // update UI instantly
      setSweets(sweets.map((sweet) => (sweet._id === id ? res.data : sweet)));
    } catch {
      alert("Purchase failed");
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/sweets/${id}`);
      setSweets(sweets.filter((sweet) => sweet._id !== id));
    } catch {
      alert("Admin only action");
    }
  }

  async function handleAddSweet(e) {
    e.preventDefault();
    const form = e.target;

    const newSweet = {
      name: form.name.value,
      category: form.category.value,
      price: Number(form.price.value),
      quantity: Number(form.quantity.value),
    };

    try {
      const res = await api.post("/sweets", newSweet);
      setSweets([...sweets, res.data]);
      form.reset();
    } catch {
      alert("Only admin can add sweet");
    }
  }

  /* -------------------- UI -------------------- */

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading sweets...</h2>;
  }

  return (
    <div style={{ padding: "40px", background: "#fafafa" }}>
      <h1 style={{ textAlign: "center", color: "#7b2cbf" }}>
        🍭 Available Sweets
      </h1>

      {/* -------- Filters -------- */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.input}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.input}
        >
          <option value="All">All Categories</option>
          <option value="Indian">Indian</option>
          <option value="Chocolate">Chocolate</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* -------- Sweet Cards -------- */}
      <div style={styles.cardGrid}>
        {filteredSweets.map((sweet) => (
          <div key={sweet._id} style={styles.card}>
            <h2>{sweet.name}</h2>
            <p>
              <b>Category:</b> {sweet.category}
            </p>
            <p>
              <b>Price:</b> ₹{sweet.price}
            </p>
            <p>
              <b>Available Quantity:</b> {sweet.quantity}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                disabled={sweet.quantity === 0}
                onClick={() => handlePurchase(sweet._id)}
                style={{
                  ...styles.purchaseBtn,
                  background: sweet.quantity === 0 ? "#ccc" : "#4caf50",
                }}
              >
                Purchase
              </button>

              <button
                onClick={() => handleDelete(sweet._id)}
                style={styles.deleteBtn}
              >
                Delete (Admin)
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* -------- Admin Panel -------- */}
      <hr style={{ margin: "50px 0" }} />

      <h2 style={{ textAlign: "center", color: "#ec4899" }}>
        🔐 Admin Panel – Add New Sweet
      </h2>

      <form onSubmit={handleAddSweet} style={styles.adminForm}>
        <input name="name" placeholder="Name" required style={styles.input} />
        <input
          name="category"
          placeholder="Category"
          required
          style={styles.input}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          required
          style={styles.input}
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.addBtn}>
          Add Sweet
        </button>
      </form>
    </div>
  );
}

/* -------------------- STYLES (UNCHANGED) -------------------- */

const styles = {
  filters: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    margin: "30px 0",
    flexWrap: "wrap",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minWidth: "160px",
  },
  cardGrid: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    width: "300px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  purchaseBtn: {
    border: "none",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#ff4d4d",
    border: "none",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  adminForm: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  addBtn: {
    background: "linear-gradient(135deg, #f97316, #ec4899)",
    border: "none",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default SweetListPage;
