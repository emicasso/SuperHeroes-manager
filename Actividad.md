# OBJETIVO:

La siguiente actividad tiene como objetivo evaluar los conocimientos relacionados con el
proceso de modelado de datos y su correspondiente aplicación.

## NOTA IMPORTANTE:

Puede desarrollar la aplicación sin necesidad de crear la DB (no es un
requisito, pero se valorará el diseño de la misma).

ESCENARIO 1: **AGRUPACIÓN UNIVERSAL DE SUPERHÉROES**

- La Agrupación Universal de súper-héroes desea llevar un control sobre sus componentes y las actividades que llevan a cabo. Para esto le han pedido a usted que haga el diseño de una base de datos que cubra sus necesidades. 

- **Los requisitos que quieren recoger son los siguientes**:
  - Cada súper-héroe tiene un nombre que se supone único, un año en el que se da a conocer y, en ocasiones, el nombre de un planeta de origen (si el planeta es la Tierra, no se desea almacenar nada). Existen distintos súper-poderes, con un código y una descripción. Cada súper-héroe posee algunos de estos súper-poderes (evidentemente, al menos, uno). Sin embargo, puede haber súper-poderes que están descritos pero que todavía no posea nadie de la Agrupación. Interesa almacenar, sí, el nivel de un súper-héroe respecto a los poderes que posee (por ejemplo, Superman y el Chapulín Colorado tienen el súper-poder "Fuerza", sin embargo, Superman tiene un nivel 10, mientras que el Chapulín 1,5). Los niveles de poderes son siempre valores positivos. Algunos súper-héroes pueden tener a uno o más acompañantes (Por ejemplo: Batman y Robin; Bombón, Bellota y Burbuja; etc.) aunque no todos, (ya que hay muchos que trabajan solos). La Agrupación está interesada en llevar un control de las misiones que ha llevado a cabo cada miembro. Para ello, lleva a cabo una clasificación de las distintas misiones, con un código y una descripción (ambos valores únicos, definidos por la Agrupación Universal). Existen únicamente dos tipos de misiones: MR (Misiones Rutinarias) y MSU (Misiones para Salvar el Universo). Interesa almacenar todas las misiones de cada tipo que ha llevado a cabo cada súper-héroe, considerando la restricción de que un súper-héroe no puede llevar a cabo una misión MSU si no ha llevado a cabo, al menos, una MR. Una misión, claro está, puede ser ejecutada por unos o más súper-héroes, sean estos acompañantes o no. No todos los súper-héroes son inmortales, sin embargo, aún cuando un súper-héroe muera se desean conservar todos sus datos, súper-poderes, misiones, acompañantes, etc.

---
SE SOLICITA:

1)  Estimar la fecha entrega del presente trabajo e informar a rrhh@desarrollosnea.com

2)  Presentar en la fecha establecida una aplicación para gestionar la agrupación de
     superhéroes
     NOTA: Puede plantee el modelo de datos que soporte los requerimientos aquí
     expresados (puede utilizar o no una base datos)

- Aplicación

  > Si su perfil es .NET puede presentar la aplicación utilizando tecnología web en .NET (preferentemente .NET Core o NET 5.x)

  > Si su perfil es ReactJS presente la aplicación como una SPA

- Datos
  > En ambos casos pueden emular los datos con un modelo de objetos directo
  > utilizando una base de datos.
