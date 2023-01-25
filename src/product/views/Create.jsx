import { useState } from "react"

function Create()
{
    const [product, setProduct] = useState("product1");

    const handleChange = (e) => {
        setProduct(e.target.value);
    }

    return(
        <div>
            <h1>Create - Product</h1>
            <form>
                <input type="text" placeholder="Product Name..." onChange={handleChange} value={product} />
                <button>Add</button>
            </form>

            <p>{ product }</p>
        </div>
    )
}

export default Create