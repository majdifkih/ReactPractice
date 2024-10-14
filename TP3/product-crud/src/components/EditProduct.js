import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function EditProduct() {
const { id } = useParams();
const navigate = useNavigate();
const [product, setProduct] = useState({ name: '', description:
'', price: '' });
useEffect(() => {
// Simuler la récupération des données d'un produit existant
const existingProduct = {
id,
name: `Product ${id}`,
description: `Description ${id}`,
price: 100 * id,
};
setProduct(existingProduct);
}, [id]);
const handleSubmit = (e) => {
e.preventDefault();
// Simuler la mise à jour du produit
navigate('/');
};
return (
<div>
<h1 className="text-2xl font-bold mb-4">Modifier le
produit</h1>
<form onSubmit={handleSubmit} className="space-y-4">
<div>
<label className="block font-bold">Nom :</label>
<input
type="text"
value={product.name}
onChange={(e) => setProduct({ ...product, name:
e.target.value })}
className="border px-4 py-2 rounded-md w-full"
/>
</div>
<div>
<label className="block font-bold">Description :</label>
<textarea
value={product.description}
onChange={(e) => setProduct({ ...product, description:
e.target.value })}
className="border px-4 py-2 rounded-md w-full"
/>
</div>
<div>
<label className="block font-bold">Prix :</label>
<input
type="number"
value={product.price}
onChange={(e) => setProduct({ ...product, price:
parseFloat(e.target.value) })}
className="border px-4 py-2 rounded-md w-full"
/>
</div>
<button type="submit" className="bg-blue-500 text-white px-4
py-2 rounded-md">Mettre à jour</button>
</form>
</div>
);
}
export default EditProduct;