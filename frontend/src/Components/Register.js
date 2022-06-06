import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {

  const [superHeroe, setSuperHeroe] = useState();
  const [habilidades, setHabilidades] = useState([]);
  const [habilidad, setHabilidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [salud, setSalud] = useState("");
  const [planetaOrigen, setPlanetaOrigen] = useState("");
  const [nivel, setNivel] = useState();
  const [nuevaHabilidad, setNuevaHabilidad] = useState("");

  const obtenerHabilidades = async () => {
    const respuesta = await axios.get("/habilidades");
    const habilidades = await respuesta.data;
    setHabilidades(habilidades);
    console.log(habilidades)
  };

  const submit = async () => {
    const respuesta = await axios.post("/superheroes", {
      name: nombre,
      planetaOrigen: planetaOrigen,
      salud: salud,
      nivel: nivel,
      habilidad: habilidad,
      nuevaHabilidad: nuevaHabilidad
    });
    const superHeroee = await respuesta.data;
    setSuperHeroe(superHeroee);
    console.log(superHeroe)
  };

function handleSubmit (e){
  e.preventDefault()
  submit()
}

  useEffect(() => {
    obtenerHabilidades();
    submit()
  }, []);

 

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form>
        <div className="row mt-4">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre de Heroe
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={nombre}
              onChange={event => setNombre(event.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Lugar de Origen
            </label>
            <input
              name="origen"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={planetaOrigen}
              onChange={event => setPlanetaOrigen(event.target.value)}

            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Salud
            </label>
            <select
              name="salud"
              className="form-select"
              value={salud}
              onChange={event => setSalud(event.target.value)}

            >
              <option>Selecionar Opcion</option>
              <option>Vivo</option>
              <option>Muerto</option>
              <option>Inmortal</option>
            </select>
          </div>{" "}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Habilidades
            </label>
            <select
              name="habilidades"
              className="form-select"
              value={habilidad}
              onChange={event => setHabilidad(event.target.value)}

            >
              <option>Nueva habilidad</option>
              {habilidades.map((element, i)=>(
                <option key={i}>{element.name}</option>
              ))}
            </select>
            {/* <select class="form-select" value={inpval.habilidades} onChange={setData}>
              <option>Selecionar Opcion</option>
              {inpval.habilidades.map((it, i) => (
                <option>
                  <p key={i}>{it.descrip}</p>
                </option>
              ))}
            </select> */}
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Nivel
            </label>
            <input
              name="nivel"
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              value={nivel}
              onChange={event => setNivel(parseInt(event.target.value))}

            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPasswordu1" className="form-label">
              Nueva Habilidad
            </label>
            <input
                name="origen"
                type="text"
                className="form-control"
                id="exampleInputPasswor1"
                value={nuevaHabilidad}
                onChange={event => setNuevaHabilidad(event.target.value)}

            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
