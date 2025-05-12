import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import UserContext from "../context/context";

export function FormComponent() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const { user , setUser} = useContext(UserContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setUser (prev => [...prev, { product, quantity, price }]);

    setProduct("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="flex justify-center items-center ">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleOnSubmit}>
        <div>
          <div className="mb-2 block w-xs">
            <Label htmlFor="product1">Your Products</Label>
          </div>
          <TextInput
            id="product1"
            type="text"
            placeholder="Products"
            required
            shadow
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="quantity">Quantity</Label>
          </div>
          <TextInput
            id="quantity"
            type="number"
            placeholder="Quantity"
            required
            shadow
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price">Price</Label>
          </div>
          <TextInput className="bg-white"
            id="price"
            type="number"
            placeholder="Price"
            required
            shadow
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <Button type="submit">Add into Budget</Button>
      </form>
    </div>
  );
}
