import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import NavBar from '../navbar/Navbar'


// Example items, to simulate fetching from another resources.

var items
var items0
var items1

function Items({ currentItems }) {

  const [fecha, setFecha] = useState("No es posible mostrar la fecha");
  const [hora, setHora] = useState("No es posible mostrar la hora");
  const [descripcion, setDescripcion] = useState("No es posible mostrar la descripción");
  const [dorsal, setDorsal] = useState("No es posible mostrar el dorsal")
  const [tarjeta, setTarjeta] = useState("No es posible mostrar el número de tarjeta");

  

  useEffect(() => {
    fetch("competiciones")
      .then((response) => response.json())
      .then((res) => {

        localStorage.setItem('fecha0', res.message[0].fecha);
        localStorage.setItem('hora0', res.message[0].hora);
        localStorage.setItem('descripcion0', res.message[0].descripcion);
        localStorage.setItem('direccion0', res.message[0].direccion);
        localStorage.setItem('tipo0', res.message[0].tipo);

        localStorage.setItem('fecha1', res.message[1].fecha);
        localStorage.setItem('hora1', res.message[1].hora);
        localStorage.setItem('descripcion1', res.message[1].descripcion);
        localStorage.setItem('direccion1', res.message[1].direccion);
        localStorage.setItem('tipo1', res.message[1].tipo);
        
        setDorsal(res.message[0].dorsal)
        setTarjeta(res.message[0].tarjeta)


      })

  }, [])

  console.log(hora)
 
  const [card, setCard] = useState(<div className="cont">
    <div className="container-hist">
      <div className="fecha">
        <h3>Fecha: </h3>
        <p>{localStorage.getItem('fecha0')}</p>
      </div>
      <div className="hora">
        <h3>Hora: </h3>
        <p>{localStorage.getItem('hora0')}</p>
      </div>
      <div className="descripcion">
        <h3>Lugar: </h3>
        <p>{localStorage.getItem('direccion0')}</p>
      </div>
      <div className="descripcion">
        <h3>Categoría: </h3>
        <p>{localStorage.getItem('tipo0')}</p>
      </div>
      <div className="descripcion">
        <h3>Descripción: </h3>
        <p>{localStorage.getItem('descripcion0')}</p>
      </div>

    </div>
  </div>);

  const [tarjeta1, setTarjeta1] = useState(<div className="cont">
    <div className="container-hist">
    <div className="fecha">
        <h3>Fecha: </h3>
        <p>{localStorage.getItem('fecha1')}</p>
      </div>
      <div className="hora">
        <h3>Hora: </h3>
        <p>{localStorage.getItem('hora1')}</p>
      </div>
      <div className="descripcion">
        <h3>Lugar: </h3>
        <p>{localStorage.getItem('direccion1')}</p>
      </div>
      <div className="descripcion">
        <h3>Categoría: </h3>
        <p>{localStorage.getItem('tipo1')}</p>
      </div>
      <div className="descripcion">
        <h3>Descripción: </h3>
        <p>{localStorage.getItem('descripcion1')}</p>
      </div>

    </div>
  </div>);


  const [hora1, setHora1] = useState("2");

  items0 = [card, tarjeta1];



  items = [items0, items1]


  return (
    <>
      {currentItems &&
        currentItems.map((item) => (

          <div >
            {item}
          </div>
        ))}

    </>
  );
}



function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  

  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items0.slice(itemOffset, endOffset));
    

    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (

    <>

      <Items currentItems={currentItems} />
     
      <ReactPaginate
        breakLabel="..."
        nextLabel="siguiente >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< anterior"
        renderOnZeroPageCount={null}
      />

    </>

  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.


export default PaginatedItems;
