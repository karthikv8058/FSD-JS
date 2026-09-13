import { useState } from "react";
import useDebounce from "../../customHooks/useDebounce";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import useFetch from "../../customHooks/useFetch";
import { useWindowSize } from "../../customHooks/useWindowSize";
import { useForm } from "../../customHooks/useForm";

function ProductAddSearch() {
  // -------------------------
  // 1. SEARCH STATE
  // -------------------------

  const [query, setQuery] = useState("");

  // useDebounce
  const debouncedQuery = useDebounce(query, 5000);

  // -------------------------
  // 2. LOCAL STORAGE
  // -------------------------

  const [lastSearch, setLastSearch] = useLocalStorage("lastSearch", "");

  // -------------------------
  // 3. WINDOW SIZE
  // -------------------------

  const width = useWindowSize();

  const isMobile = width < 768;

  // -------------------------
  // 4. FETCH PRODUCTS
  // -------------------------

  const url = debouncedQuery
    ? `https://dummyjson.com/products/search?q=${debouncedQuery}`
    : "https://dummyjson.com/products";

  const { data: products, loading, error } = useFetch(url);

  // -------------------------
  // 5. FORM VALIDATION
  // -------------------------

  function validateProduct(data) {
    const errors = {};

    if (!data.title) {
      errors.title = "Title is required";
    }

    if (!data.price) {
      errors.price = "Price is required";
    }

    return errors;
  }

  // -------------------------
  // 6. useForm
  // -------------------------

  const { formData, errors, isSubmitting, handleChange, handleSubmit, reset } =
    useForm(
      {
        title: "",
        price: "",
      },
      validateProduct,
    );

  // -------------------------
  // SEARCH HANDLER
  // -------------------------

  function handleSearch(e) {
    const value = e.target.value;

    setQuery(value);

    setLastSearch(value);
  }

  // -------------------------
  // FORM SUBMIT
  // -------------------------

  async function onSubmit(data) {
    console.log("Product submitted:", data);

    alert(`Product Added: ${data.title}`);

    reset();
  }

  // -------------------------
  // UI
  // -------------------------

  return (
    <div>
      <h1>Product Management</h1>

      {/* RESPONSIVE UI */}

      <p>
        Device:
        {isMobile ? " Mobile" : " Desktop"}
      </p>

      {/* SEARCH */}

      <h2>Search Products</h2>

      <input
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />

      <p>Last Search: {lastSearch}</p>

      {query !== debouncedQuery && <p>Typing...</p>}

      {/* PRODUCTS */}

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>

      {/* ADD PRODUCT FORM */}

      <hr />

      <h2>Add Product</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(onSubmit);
        }}
      >
        <div>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product title"
          />

          {errors.title && <p>{errors.title}</p>}
        </div>

        <div>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Product price"
          />

          {errors.price && <p>{errors.price}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Add Product"}
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default ProductAddSearch;
