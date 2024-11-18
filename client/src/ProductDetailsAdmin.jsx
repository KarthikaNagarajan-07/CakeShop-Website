import React, { useState, useEffect } from 'react';
import './ProductDetailsAdmin.css'; // Import the updated CSS file

const ProductUpload = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    rating: '',
    imageUrl: null
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      const base64 = await convertToBase64(file);
      setProduct({ ...product, imageUrl: base64 });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...product,
      imageUrl: product.imageUrl ? product.imageUrl : null,
    };

    const existingProducts = [...products, productData];
    localStorage.setItem('products', JSON.stringify(existingProducts));
    setProducts(existingProducts);

    setProduct({
      title: '',
      price: '',
      rating: '',
      imageUrl: null
    });

    alert('Product uploaded successfully!');
  };

  const handleRemove = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form className="product-upload-container" onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={product.title}
          onChange={handleChange}
          required
        />
        <label>Amount:</label>
        <input
          type="text"
          name="price"
          placeholder="Price (in INR)"
          value={product.price}
          onChange={handleChange}
          required
        />
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={product.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
        <label>Upload Product Image:</label>
        <input
          type="file"
          name="imageUrl"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Upload Product</button>
      </form>

      {products.length > 0 && (
        <table className="product-list-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price (INR)</th>
              <th>Rating</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <tr key={index}>
                <td>{prod.title}</td>
                <td>₹{prod.price}</td>
                <td>{prod.rating}</td>
                <td>
                  {prod.imageUrl ? (
                    <img
                      src={prod.imageUrl}
                      alt="Product"
                      width="50"
                      height="50"
                    />
                  ) : (
                    'No image'
                  )}
                </td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductUpload;
