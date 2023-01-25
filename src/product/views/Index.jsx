import { Link } from "react-router-dom"

function Index()
{
    return(
        <div>
            <h1>Index - Product</h1>
            <Link to="/product/create">Create</Link>
        </div>
    )
}

export default Index