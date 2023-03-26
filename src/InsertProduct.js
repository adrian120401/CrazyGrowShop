import { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
export const InsertProduct = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [productAdded,setProductAdded] = useState(false);
  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [newImg, setNewImg] = useState('')
    const [img,setImg] = useState([])
    const [option, setOption] = useState('')
    const [options, setOptions] = useState([])
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])

    function authenticate(email, password) {
        if (email === 'CrazyGrowShop' && password === '123456') {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      }


    function handleSubmit(event) {
    event.preventDefault();
    authenticate(email, password);
    }

    async function addProduct(event){
        event.preventDefault();

        try {
         const docRef = await addDoc(collection(db, "productos"), {
            name: name,
            description: description,
            price: price,
            img: newImg.split(';'),
            option:option.split(';'),
            categories:category.split(';')
          });
          setProductAdded(true)
        } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    
    return(
        <div>
        {authenticated && !productAdded && (
          <div>
            <h2>Agregar producto</h2>
            <div>
                <form onSubmit={addProduct}>
                <label>
                    Nombre:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    Descripción:
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                </label>
                <label>
                    Precio:
                    <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                </label>
                <label>
                    Imagenes:
                    <textarea type="text" value={newImg} onChange={(event) => setNewImg(event.target.value)}></textarea>
                </label>
                <label>
                    Opciones:
                    <textarea type="text" value={option} onChange={(event) => setOption(event.target.value)}></textarea>
                </label>
                <label>
                    Categorias:
                    <textarea type="text" value={category} onChange={(event) => setCategory(event.target.value)}></textarea>
                </label>
                <button type="submit">Agregar</button>
                </form>
            </div>
          </div>
        )}
        {!authenticated && !productAdded && (
            <div>
              <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button type="submit">Iniciar sesión</button>
        </form>  
            </div>
        )}
        {productAdded && (
        <div>
            <h3>Producto Agregado</h3>
            <button onClick={() => setProductAdded(false)} type="button">Agregar otro</button>
        </div>)}
      </div>
    )
}