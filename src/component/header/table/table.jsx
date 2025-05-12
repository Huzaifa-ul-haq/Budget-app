
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useContext, useState } from "react";
import UserContext from "../context/context";

export function TableComponent() {
  const { user, setUser } = useContext(UserContext);

  const [editIndex, setEditIndex] = useState(null);
  const [editProduct, setEditProduct] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editPrice, setEditPrice] = useState("");

  if (!user || user.length === 0) {
    return null;
  }

  const handleDelete = (index) => {
    const updated = user.filter((_, i) => i !== index);
    setUser(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditProduct(user[index].product);
    setEditQuantity(user[index].quantity);
    setEditPrice(user[index].price);
  };

  const handleSave = () => {
    const updated = [...user];
    updated[editIndex] = {
      product: editProduct,
      quantity: editQuantity,
      price: editPrice,
    };
    setUser(updated);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  return (
    <div className="overflow-x-auto w-full border-collapse: separate;">
      <Table>
        <TableHead className="text-md">
          <TableRow>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Update</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {user.map((item, index) => (
            <TableRow
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 "
            >
              <TableCell className="text-white">
                {editIndex === index ? (
                  <input
                    className="text-black p-1 rounded"
                    value={editProduct}
                    onChange={(e) => setEditProduct(e.target.value)}
                  />
                ) : (
                  item.product
                )}
              </TableCell>

              <TableCell className="text-white">
                {editIndex === index ? (
                  <input
                    type="number"
                    className="text-black p-1 rounded"
                    value={editQuantity}
                    onChange={(e) => setEditQuantity(e.target.value)}
                  />
                ) : (
                  item.quantity
                )}
              </TableCell>

              <TableCell className="text-white">
                {editIndex === index ? (
                  <input
                    type="number"
                    className="text-black p-1 rounded"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                ) : (
                  item.price
                )}
              </TableCell>

              <TableCell className="font-medium text-gray-900 dark:text-white">
                {editIndex === index ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="p-2 border-2 w-20 bg-blue-500 text-white rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="p-2 border-2 w-20 my-2 bg-gray-500 text-white rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEdit(index)}
                    className="p-2 border-2 w-20 my-2 bg-green-500 text-white rounded"
                  >
                    Edit
                  </button>
                )}
              </TableCell>

              <TableCell className="font-medium text-gray-900 dark:text-white">
                <button
                  onClick={() => handleDelete(index)}
                  className="p-2 border-2 w-20 bg-red-600 text-white rounded" >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
