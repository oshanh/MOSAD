import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import "./Itemtable.css";

// React Modal setup
Modal.setAppElement("#root");

const ItemTable = () => {

  const location = useLocation();
  const { title } = location.state || {}; // Extract the title from the state

  const getInitialFormData=(title)=>{
    switch(title){
      case "CEAT":
        console.log("CEAT");
        return {
          itemId: "",
          size: "",
          pattern: "",
          pr: 0,
          availableQty: 0,
          cp: 0,
          osp: 0,
        };
        
      case "PRESA":
        console.log("PRESA");
    
    }
  }





  const [items, setItems] = useState(["1","2","3","4","5","6","7","8"]);
  const [currentItem, setCurrentItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(getInitialFormData(title));

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    console.log("fetchMethod = "+title);
    axios
      .get(`http://localhost:8080/api/v1/tyre/${title}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const deleteItem = (id) => {
    console.log("deleteMEthod = "+title);
    axios
      .delete(`http://localhost:8080/api/v1/tyre/${title}/${id}`)
      .then(() => fetchItems())
      .catch((error) => console.error("Error deleting item:", error));
  };

  const openModal = (item) => {
    if (item) {
      setCurrentItem(item);
      setFormData(item);
    } else {
      setCurrentItem(null);
      setFormData(getInitialFormData(title));
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = currentItem
      ? axios.put(`http://localhost:8080/api/v1/tyre/${title}/${formData.itemId}`, formData)
      : axios.post(`http://localhost:8080/api/v1/tyre/${title}`, formData);

    request
      .then(() => {
        fetchItems();
        closeModal();
      })
      .catch((error) => console.error("Error saving item:", error));
  };











  return (
    <div >
      <h1 >{title} Items</h1>
      <button
        onClick={() => openModal(null)}
        style={{
          backgroundColor: "#03DAC6",
          color: "#121212",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        Add New Item
      </button>
      <table >
        <thead>
          <tr >
            <th>Item ID</th>
            <th>Size</th>
            <th>Pattern</th>
            <th>PR</th>
            <th>Available Qty</th>
            <th>CP</th>
            <th>OSP</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemId} >
              <td>{item.itemId}</td>
              <td>{item.size}</td>
              <td>{item.pattern}</td>
              <td>{item.pr}</td>
              <td>{item.availableQty}</td>
              <td>{item.cp}</td>
              <td>{item.osp}</td>

              <td>
                <button
                  onClick={() => openModal(item)}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#BB86FC",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => deleteItem(item.itemId)}
                  style={{
                    backgroundColor: "#CF6679",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            backgroundColor: "#1E1E1E",
            color: "#FFFFFF",
            borderRadius: "18px",
            padding: "40px",
            maxWidth: "500px",
            maxHeight: "50vh",
            margin: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <h2>{currentItem ? "Edit Item" : "Add New Item"}</h2>
        <form onSubmit={handleSubmit}>
            
          <div>
            <label>Item ID:</label>
            <input
              type="text"
              value={formData.itemId}
              onChange={(e) => setFormData({ ...formData, itemId: e.target.value })}
              required
              disabled={!!currentItem}
              style={{
                backgroundColor: "#2E2E2E",
                color: "#FFFFFF",
                border: "1px solid #444",
                width: "100%",
                marginBottom: "10px",
              }}
            />
          </div>

          <div>
            <label>Size:</label>
            <input
              type="text"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              required
              style={{
                backgroundColor: "#2E2E2E",
                color: "#FFFFFF",
                border: "1px solid #444",
                width: "100%",
                marginBottom: "10px",
              }}
            />
          </div>

          <div>
            <label>Pattern:</label>
            <input
              type="text"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              required
              style={{
                backgroundColor: "#2E2E2E",
                color: "#FFFFFF",
                border: "1px solid #444",
                width: "100%",
                marginBottom: "10px",
              }}
            />
          </div>

          <div>
            <label>Count:</label>
            <input
              type="text"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              required
              style={{
                backgroundColor: "#2E2E2E",
                color: "#FFFFFF",
                border: "1px solid #444",
                width: "100%",
                marginBottom: "10px",
              }}
            />
          </div>


          <button type="submit" style={{ backgroundColor: "#03DAC6", color: "#121212", padding: "10px 20px", border: "none", marginRight: "10px" }}>
            Submit
          </button>
          <button onClick={closeModal} style={{ backgroundColor: "#CF6679", color: "#FFFFFF", padding: "10px 20px", border: "none" }}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ItemTable;
