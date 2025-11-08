const ProductCard = ({ name, price, status }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
        width: "200px",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{name}</h3>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default ProductCard;
