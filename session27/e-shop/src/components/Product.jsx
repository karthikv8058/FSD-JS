function Product({ name, price, inStock }) {
  return (
    <div>
      <h4>{name} </h4>
      <p>Price : {price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
export default Product;
