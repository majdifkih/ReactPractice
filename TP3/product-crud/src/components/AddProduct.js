import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const navigate = useNavigate();
const handleSubmit = (e) => {
e.preventDefault();
const newProduct = {
id: Math.floor(Math.random() * 1000),
name,
description,
price: parseFloat(price),
};
// Ajouter le produit à la liste
// Simuler un envoi vers l'API et naviguer vers la page d'accueil
navigate('/');
};
return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Ajouter un
    produit</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
    <label className="block font-bold">Nom :</label>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="border px-4 py-2 rounded-md w-full"
    />
    </div>
    <div>
    <label className="block font-bold">Description :</label>
    <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="border px-4 py-2 rounded-md w-full"
    />
    </div>
    <div>
<label className="block font-bold">Prix :</label>
<input
type="number"
value={price}
onChange={(e) => setPrice(e.target.value)}
className="border px-4 py-2 rounded-md w-full"
/>
</div>
<button type="submit" className="bg-green-500 text-white
px-4 py-2 rounded-md">Ajouter</button>
</form>
</div>
);
}
export default AddProduct;