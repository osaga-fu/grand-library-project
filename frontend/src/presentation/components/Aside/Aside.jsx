import { Dialog } from "primereact/dialog";
import "./Aside.css";
import { useState } from "react";
import "primeicons/primeicons.css";
import { useBookContext } from "../../../middleware/context/BookContext";
import { useMemberContext } from "../../../middleware/context/MemberContext";

export default function Aside() {
  const {
    addBook,
    visibleBooks,
    setVisibleBooks,
    successMessageBooks,
    setSuccessMessageBooks,
    errorMessageBooks,
    setErrorMessageBooks,
  } = useBookContext();

  const {
    addMember,
    visibleMembers,
    setVisibleMembers,
    successMessageMembers,
    setSuccessMessageMembers,
    errorMessageMembers,
    setErrorMessageMembers,
  } = useMemberContext();

  const [showFormBooks, setShowFormBooks] = useState(true);
  const [showFormMembers, setShowFormMembers] = useState(true);

  const handleSubmitBooks = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (!data.title || !data.author || !data.isbn || !data.sectionCode) {
      setErrorMessageBooks("Error al agregar el libro");
      return;
    }
    try {
      await addBook(data);
      setSuccessMessageBooks("¡Libro agregado con éxito!");
      setErrorMessageBooks("");
      setShowFormBooks(false);
    } catch (error) {
      console.error("Error al agregar el libro", error);
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
      await addMember(data);
      setSuccessMessageMembers("¡Socio agregado con éxito!");
      setErrorMessageMembers("");
      setShowFormMembers(false);
    } catch (error) {
      console.error("Error al agregar el socio", error);
      setErrorMessageMembers("Error al agregar el socio");
      setSuccessMessageMembers("");
    }
    setVisibleMembers(true);
  };

  return (
    <aside>
      <button className="buttonAddBook" onClick={() => setVisibleBooks(true)}>
        <i className="pi pi-book" style={{ fontSize: "2.5rem" }}></i>
        AÑADIR LIBRO
      </button>
      <Dialog
        visible={visibleBooks}
        style={{ width: "65rem" }}
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
            <input type="text" name="title" />
            <label htmlFor="author">Autor</label>
            <input type="text" name="author" />
            <label htmlFor="isbn">ISBN</label>
            <input type="text" name="isbn" />
            <label htmlFor="sectionCode">Sección</label>
            <input type="text" name="sectionCode" />
            <button className="acceptButton" type="submit">
              <i
                className="pi pi-plus-circle"
                style={{ fontSize: "2.5rem" }}
              ></i>
              ACEPTAR
            </button>
          </form>
        )}
      </Dialog>

      <button
        className="buttonAddMember"
        onClick={() => setVisibleMembers(true)}
      >
        <i className="pi pi-user" style={{ fontSize: "2.5rem" }}></i>
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
              <i className="pi pi-plus-circle" style={{ fontSize: "3rem" }}></i>
              ACEPTAR
            </button>
          </form>
        )}
      </Dialog>
    </aside>
  );
}
