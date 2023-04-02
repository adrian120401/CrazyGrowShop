import { useState } from "react"
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
export const InsertProduct = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [productAdded,setProductAdded] = useState(false);
  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [newImg, setNewImg] = useState('')
    const [option, setOption] = useState('')
    const [category, setCategory] = useState('')

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
        let img = newImg.split(';')
        img.forEach((imgItem, index) => img[index] = imgItem.replace('https://www.dropbox.com','https://dl.dropboxusercontent.com'))
        try {
         const docRef = await addDoc(collection(db, "productos"), {
            name: name,
            description: description,
            price: price,
            img: img,
            option:option.split(';'),
            categories:category.split(';'),
            date: Timestamp.fromDate(new Date())
          });
          setProductAdded(true)
        } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    
    return(
        <div>
        {authenticated && !productAdded && (
          <div className="d-flex align-items-center flex-column">
            <h2>Agregar producto</h2>
                <form onSubmit={addProduct}>
                  <div className="form-group">
                <label>
                    Nombre:
                    <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                </div>
                <div className="form-group">
                <label>
                    Descripción:
                    <input type="text" className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                </label>
                </div>
                <div className="form-group">
                <label>
                    Precio:
                    <input type="number"  className="form-control" value={price} onChange={(event) => setPrice(event.target.value)} />
                </label>
                </div>
                <div className="form-group">
                <label>
                    Imagenes:
                    <br/>
                    <small id="imgHelp" class="form-text text-muted">Link de imagenes, para agregar mas de una separar con <strong>;</strong></small>
                    <br/>
                    <small id="imgHelp" class="form-text text-muted">Todas deben tener dimensiones similares</small>
                    <textarea type="text" class="form-control" value={newImg} onChange={(event) => setNewImg(event.target.value)}></textarea>
                </label>
                </div>
                <div className="form-group">
                <label>
                    Opciones:
                    <br/>
                    <small id="imgHelp" class="form-text text-muted">Opciones del producto (ej: colores), para agregar mas de una separar con <strong>;</strong></small>
                    <textarea type="text" class="form-control" value={option} onChange={(event) => setOption(event.target.value)}></textarea>
                </label>
                </div>
                <div className="form-group">
                <label>
                    Categorias:
                    <br/>
                    <small id="imgHelp" class="form-text text-muted">Categorias del producto, para agregar mas de una separar con <strong>;</strong></small>
                    <textarea type="text" class="form-control" value={category} onChange={(event) => setCategory(event.target.value)}></textarea>
                </label>
                </div>
                <button className="btn btn-primary mt-3" type="submit">Agregar</button>
                </form>
          </div>
        )}
        {!authenticated && !productAdded && (
        <div className="d-flex align-items-center flex-column">
              <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label>
            Correo electrónico:
            <input type="text" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          </div>
          <div className="form-group">
          <label>
            Contraseña:
            <input type="password" className="form-control"value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          </div>
          <button className="btn btn-primary mt-3" type="submit">Iniciar sesión</button>
        </form>  
            </div>
        )}
        {productAdded && (
        <div className="d-flex align-items-center flex-column">
            <h3>Producto Agregado</h3>
            <button className="btn btn-primary mt-3" onClick={() => setProductAdded(false)} type="button">Agregar otro</button>
        </div>)}
      </div>
    )
}