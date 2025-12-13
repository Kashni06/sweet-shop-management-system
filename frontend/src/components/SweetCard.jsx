function SweetCard({ sweet }) {
  const isOutOfStock = sweet.quantity === 0;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        maxWidth: "300px",
      }}
    >
      {/* Sweet name */}
      <h3>{sweet.name}</h3>

      {/* Quantity info */}
      <p>Available Quantity: {sweet.quantity}</p>

      {/* Purchase button */}
      <button
        disabled={isOutOfStock}
        style={{
          padding: "8px 12px",
          backgroundColor: isOutOfStock ? "#ccc" : "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: isOutOfStock ? "not-allowed" : "pointer",
        }}
      >
        Purchase
      </button>
    </div>
  );
}

export default SweetCard;
