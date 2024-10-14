import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
function App() {
return (
<Router>
<div className="container mx-auto p-4">
<nav className="mb-4">
<Link to="/" className="text-xl font-bold
text-blue-500">Product CRUD</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/add" element={<AddProduct />} />
<Route path="/edit/:id" element={<EditProduct />} />
</Routes>
</div>
</Router>
);
}
export default App;