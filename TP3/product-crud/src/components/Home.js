
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {
const [products, setProducts] = useState([]);
useEffect(() => {
// Simuler l'appel d'une API pour obtenir la liste des produits
const initialProducts = [
{ id: 1, name: 'Product 1', description: 'Description 1',
price: 100 },
{ id: 2, name: 'Product 2', description: 'Description 2',
price: 200 },
];
setProducts(initialProducts);
}, []);
const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    };
    return (
    <div>
    <h1 className="text-3xl font-bold mb-4">Liste des
    produits</h1>
    <Link to="/add" className="bg-blue-500 text-white px-4 py-2
    rounded-md">Ajouter un produit</Link>
    <ul className="space-y-4 mt-4">
    {products.map(product => (
    <li key={product.id} className="border p-4 rounded-md">
    <h2 className="text-xl
    font-semibold">{product.name}</h2>
    <p>{product.description}</p>
    <p className="font-bold">Prix: {product.price} $</p>
    <div className="mt-2 space-x-2">
    <Link to={`/edit/${product.id}`}
    className="text-blue-500">Modifier</Link>
    <button
    onClick={() => deleteProduct(product.id)}
    className="text-red-500">
    Supprimer
    </button>
    </div>
    </li>
    ))}
    </ul>
    </div>
    );
    }
    export default Home;
    