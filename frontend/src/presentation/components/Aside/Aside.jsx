import { Dialog } from "primereact/dialog";
import "./Aside.css";
import { useState } from "react";
import 'primeicons/primeicons.css';

export default function Aside() {
  const [visibleBooks, setVisibleBooks] = useState(false);
  const [visibleMembers, setVisibleMembers] = useState(false);
  const [showFormBooks, setShowFormBooks] = useState(true);
  const [showFormMembers, setShowFormMembers] = useState(true);
  const [successMessageBooks, setSuccessMessageBooks] = useState("");
  const [successMessageMembers, setSuccessMessageMembers] = useState("");
  const [errorMessageBooks, setErrorMessageBooks] = useState("");
  const [errorMessageMembers, setErrorMessageMembers] = useState("");

  const handleSubmitBooks = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (!data.title || !data.author || !data.isbn || !data.sectionCode) {
      setErrorMessageBooks("Error al agregar el libro");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        setSuccessMessageBooks(
          `${responseData.title},${responseData.author},${responseData.isbn},${responseData.sectionCode}`
        );
        setErrorMessageBooks("");
        setShowFormBooks(false);
      } else {
        setErrorMessageBooks("Error al agregar el libro");
        setSuccessMessageBooks("");
      }
    } catch (error) {
      console.error("Error al buscar", error);
      setErrorMessageBooks("Error al agregar el libro");
      setSuccessMessageBooks("");
    }
    setVisibleBooks(true);
  };

  const handleSubmitMembers = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (!data.firstName || !data.lastName || !data.dni || !data.email) {
      setErrorMessageMembers("Error al agregar el socio");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        setSuccessMessageMembers(
          `${responseData.firstName},${responseData.lastName},${responseData.dni},${responseData.email}`
        );
        setErrorMessageMembers("");
        setShowFormMembers(false);
      } else {
        setErrorMessageMembers("Error al agregar el socio");
        setSuccessMessageMembers("");
      }
    } catch (error) {
      console.error("Error al buscar", error);
      setErrorMessageMembers("Error al agregar el socio");
      setSuccessMessageMembers("");
    }
    setVisibleMembers(true);
  };
  return (
    <aside>
      <button className="buttonAddBook" onClick={() => setVisibleBooks(true)}>
      <i className="pi pi-book" style={{fontSize: '2.5rem'}}></i>
        AÑADIR LIBRO
      </button>
      <Dialog
        visible={visibleBooks}
        style={{ width: "65rem"}}
        onHide={() => {
          setVisibleBooks(false);
          setSuccessMessageBooks("");
          setErrorMessageBooks("");
        }}
        className="addDialog"
      >
        {errorMessageBooks && (
          <p className="errorMessage">{errorMessageBooks}</p>
        )}
        {successMessageBooks && (
          <>
            <p className="successMessage">¡Libro agregado con éxito!</p>
            <div className="successInfo">
              <p>
                <strong> {successMessageBooks.split(",")[0]}</strong>
              </p>
              <p>{successMessageBooks.split(",")[1]}</p>
              <p>{successMessageBooks.split(",")[2]}</p>
              <p>{successMessageBooks.split(",")[3]}</p>
            </div>
          </>
        )}
        {showFormBooks && (
          <form className="addForm" onSubmit={handleSubmitBooks}>
            <label htmlFor="title">Título</label>
            <input type="text" name="title"  />
            <label htmlFor="author">Autor</label>
            <input type="text" name="author" />
            <label htmlFor="isbn">ISBN</label>
            <input type="text" name="isbn"  />
            <label htmlFor="sectionCode">Sección</label>
            <input type="text" name="sectionCode" />
            <button className="acceptButton" type="submit">
            <i className="pi pi-plus-circle" style={{fontSize: '2.5rem'}}></i>
              ACEPTAR
            </button>
          </form>
        )}
      </Dialog>

      <button className="buttonAddMember" onClick={() => setVisibleMembers(true)}>
      <i className="pi pi-user" style={{fontSize: '2.5rem'}}></i>
        AÑADIR SOCIO
      </button>
      <Dialog
        visible={visibleMembers}
        style={{ width: "65rem" }}
        onHide={() => {
          setVisibleMembers(false);
          setSuccessMessageMembers("");
          setErrorMessageMembers("");
        }}
        className="addDialog"
      >
        {errorMessageMembers && (
          <p className="errorMessage">{errorMessageMembers}</p>
        )}
        {successMessageMembers && (
          <>
            <p className="successMessage">¡Socio agregado con éxito!</p>
            <div className="successInfo">
              <p>
                <strong> {successMessageMembers.split(",")[0]}</strong>
              </p>
              <p>{successMessageMembers.split(",")[1]}</p>
              <p>{successMessageMembers.split(",")[2]}</p>
              <p>{successMessageMembers.split(",")[3]}</p>
            </div>
          </>
        )}
        {showFormMembers && (
          <form className="addForm" onSubmit={handleSubmitMembers}>
            <label htmlFor="firsName">Nombre</label>
            <input type="text" name="firstName" />
            <label htmlFor="lastName">Apellidos</label>
            <input type="text" name="lastName" />
            <label htmlFor="dni">DNI</label>
            <input type="text" name="dni" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <button className="acceptButton" type="submit">
            <i className="pi pi-plus-circle" style={{fontSize: '3rem'}}></i>
              ACEPTAR
            </button>
          </form>
        )}
      </Dialog>
    </aside>
  );
}
