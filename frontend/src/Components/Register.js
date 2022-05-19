import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {


 

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

            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Salud
            </label>
            <select
              name="salud"
              className="form-select"

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
  
            >
              <option>Selecionar Opcion</option>
              <option>Fuerza</option>
              <option>Rayos Laser</option>
              <option>Elasticidad</option>
              <option>Volar</option>
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

            />
          </div>
          <button type="submit"  className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
