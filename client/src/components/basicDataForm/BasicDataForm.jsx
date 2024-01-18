import React, { useState } from "react";
import { useForm } from "../../Hooks/UseForms.js";
import styles from "./basicDataForm.module.css";
import validationForm from "../../utils/ValidationForm";
import closeImage from "../../assets/img/close1.png";
import { helpHttp } from "../../Helpers/helpHttps.js";

const url = "http://localhost:3000/patients";
let api = helpHttp();

const createData = async (data) => {
  const options = {
    method: "POST",
    body: data,
    headers: { "content-type": "application/json" },
  };

  try {
    const result = await api.post(url, options);

    if (!result.err) {
      console.log("Solicitud POST exitosa:", result);
      return result;
    } else {
      console.error("Error en la solicitud POST:", result);
      throw result;
    }
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
    throw error;
  }
};

const initialForm = {
  firstName: "",
  secondName: "",
  firstSurName: "",
  secondSurName: "",
  kindDoc: "",
  docNumber: "",
  nataleDate: "",
  maritalStatus: "",
  disability: "",
  gender: "",
  occupation: "",
  email: "",
  phoneNumber: "",
};

const BasicDataForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    touchedFields,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  const handleCloseForm = () => {
    closeForm();
  };

  const onSubmit = async () => {
    try {
      const result = await createData(form);
      console.log("Respuesta del servidor:", result);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.basicDataForm}>
        <fieldset className={styles.fieldset}>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/*COLUMNA 1*/}
            <div id="form-column-one" className={styles.formcolumn}>
              {/*PRIMER NOMBRE COL 1*/}

              <div id="question-nameOne" className={styles.question}>
                <label htmlFor="firstNameInput">Primer Nombre: </label>
                <input
                  type="text"
                  id="firstNameInput"
                  name="firstName"
                  style={{
                    backgroundColor:
                      touchedFields.firstName && errors.firstName
                        ? "rgb(255, 224, 224)"
                        : form.firstName
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.firstName
                      ? "0 0 3px #FF0000"
                      : form.firstName
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    touchedFields.firstName && errors.firstName
                      ? "✍🏼...campo requerido primer nombre"
                      : "✍🏼 Primer nombre . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.firstName}
                  required
                />
                <span className={styles.errordiv}>
                  {touchedFields.firstName &&
                    errors.firstName &&
                    errors.firstName}
                </span>
              </div>

              {/*SEGUNDO NOMBRE COL 1*/}

              <div id="question-nameTwo" className={styles.question}>
                <label htmlFor="secondNameInput">Segundo Nombre </label>
                <input
                  type="text"
                  id="secondNameInput"
                  name="secondName"
                  style={{
                    backgroundColor:
                      touchedFields.secondName && errors.secondName
                        ? "#ffcbca"
                        : form.secondName
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.secondName
                      ? "0 0 3px #FF0000"
                      : form.secondName
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    errors.secondName
                      ? "Campo opcional segundo nombre"
                      : "✍🏻 Segundo nombre . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.secondName}
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.secondName &&
                    errors.secondName &&
                    errors.secondName}
                </span>{" "}
              </div>

              {/*PRIMER APELLIDO COL 1*/}

              <div id="question-nameTree" className={styles.question}>
                <label htmlFor="firstSurNameInput"> Primer Apellido</label>
                <input
                  type="text"
                  id="firstSurNameInput"
                  name="firstSurName"
                  style={{
                    backgroundColor:
                      touchedFields.firstSurName && errors.firstSurName
                        ? "rgb(255, 224, 224)"
                        : form.firstSurName
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.firstSurName
                      ? "0 0 3px #FF0000"
                      : form.firstSurName
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    errors.firstSurName
                      ? "✍🏼 campo requerido primer apellido"
                      : "✍🏼 Primer apellido . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.firstSurName}
                  required
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.firstSurName &&
                    errors.firstSurName &&
                    errors.firstSurName}
                </span>{" "}
              </div>

              {/*SEGUNDO APELLIDO COL 1*/}

              <div id="question-nameFour" className={styles.question}>
                <label htmlFor="secondSurNameInput">Segundo apellido:</label>
                <input
                  type="text"
                  id="secondSurNameInput"
                  name="secondSurName"
                  style={{
                    backgroundColor:
                      touchedFields.secondSurName && errors.secondSurName
                        ? "rgb(255, 224, 224)"
                        : form.secondSurName
                        ? " #d1ffa2"
                        : "white",
                    boxShadow:
                      touchedFields.secondSurName && errors.secondName
                        ? "0 0 3px #FF0000"
                        : form.secondSurName
                        ? "0 0 4px  #d1ffa2"
                        : "none",
                  }}
                  placeholder={
                    errors.secondSurName
                      ? "Campo opcional segundo apellido"
                      : "✍🏻 Segundo apellido . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.secondSurName}
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.secondSurName &&
                    errors.secondSurName &&
                    errors.secondSurName}
                </span>{" "}
              </div>
            </div>

            {/*COLUMNA 2*/}
            <div id="form-column-two" className={styles.formcolumn}>
              {/* TIPO DOCUMENTO  COL 2 */}

              <div id="questionFive" className={styles.question}>
                <label htmlFor="kindDocSelect">Tipo de documento:</label>
                <select
                className={styles.selects}
                  id="kindDocSelect"
                  name="kindDoc"
                  style={{
                    backgroundColor:
                      touchedFields.kindDoc && errors.kindDoc
                        ? "rgb(255, 224, 224)"
                        : form.kindDoc
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.kindDoc
                      ? "0 0 3px #FF0000"
                      : form.kindDoc
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.kindDoc}
                  required
                >
                  <option value="" disabled hidden>
                  🪪 Tipo de documento:
                  </option>
                  <option value="Registro civil">Registro civil</option>
                  <option value="Tarjeta de identidad">
                    Tarjeta de identidad
                  </option>
                  <option value="Cédula de ciudadanía">
                    Cédula de ciudadanía
                  </option>
                  <option value="Permiso de permanencia">
                    Permiso especial de permanencia
                  </option>
                  <option value="Cédula extranjería">
                    Cédula de extranjería
                  </option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Visa">Visa</option>
                  <option value="Sin documento">Sin documento</option>
                  <option value="Otro">Otro</option>
                </select>
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.kindDoc && errors.kindDoc && errors.kindDoc}
                </span>{" "}
              </div>

              {/* NUMERO DOCUMENTO  COL 2 */}

              <div id="questionSix" className={styles.question}>
                <label htmlFor="docNumberInput">Numero de documento:</label>
                <input
                  type="number"
                  inputMode="numeric"
                  id="docNumberInput"
                  name="docNumber"
                  style={{
                    backgroundColor:
                      touchedFields.docNumber && errors.docNumber
                        ? "rgb(255, 224, 224)"
                        : form.docNumber
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.docNumber
                      ? "0 0 3px #FF0000"
                      : form.docNumber
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    errors.docNumber ? "Campo requerido numero doc" : "✍🏽 Numero de documento . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.docNumber}
                  required
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.docNumber &&
                    errors.docNumber &&
                    errors.docNumber}
                </span>{" "}
              </div>

              {/* FECHA NACIMIENTO   COL 2 */}

              <div id="questionSeventh" className={styles.question}>
                <label htmlFor="nataleDateInput">Fecha Nacimiento:</label>
                <input
                  type="date"
                  className={styles.dateInput}
                  id="nataleDateInput"
                  name="nataleDate"
                  style={{
                    backgroundColor:
                      touchedFields.nataleDate && errors.nataleDate
                        ? "rgb(255, 224, 224)"
                        : form.nataleDate
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.nataleDate
                      ? "0 0 3px #FF0000"
                      : form.nataleDate
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.nataleDate}
                  required
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.nataleDate &&
                    errors.nataleDate &&
                    errors.nataleDate}
                </span>{" "}
              </div>

              {/* ESTADO CIVIL COL 2 */}

              <div id="questionEight" className={styles.question}>
                <label htmlFor="maritalStatusInput">Estado civil:</label>
                <select
                  id="maritalStatusInput"
                  name="maritalStatus"
                  style={{
                    backgroundColor:
                      touchedFields.maritalStatus && errors.maritalStatus
                        ? "rgb(255, 224, 224)"
                        : form.maritalStatus
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.maritalStatus
                      ? "0 0 3px #FF0000"
                      : form.maritalStatus
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.maritalStatus}
                  required
                >
                  <option value="" disabled hidden>
                  ❓Estado civil
                  </option>
                  <option value="Soltero/a">Soltero/a</option>
                  <option value="Casado/a">Casado/a</option>
                  <option value="Divorciado/a">Divorciado/a</option>
                  <option value="Viudo/a">Viudo/a</option>
                  <option value="Unión marital de hecho">
                    Unión marital de hecho
                  </option>
                  <option value="Religioso/a">Religioso/a</option>
                  <option value="Otro/a">Otro/a</option>
                  <option value="N/A">N/A</option>
                </select>
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.maritalStatus &&
                    errors.maritalStatus &&
                    errors.maritalStatus}
                </span>{" "}
              </div>
            </div>

            {/*COLUMNA 3 */}
            <div id="form-column-tree" className={styles.formcolumn}>
              {/* DISCAPACIDAD COL 3 */}

              <div id="questionNine" className={styles.question}>
                <label htmlFor="disabilitySelect">Discapacidad:</label>
                <select
                  id="disabilitySelect"
                  name="disability"
                  style={{
                    backgroundColor:
                      touchedFields.disability && errors.disability
                        ? "rgb(255, 224, 224)"
                        : form.disability
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.disability
                      ? "0 0 3px #FF0000"
                      : form.disability
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.disability}
                  required
                >
                  <option value="" disabled hidden>
                  👨🏼‍🦽 Discapacidad:
                  </option>
                  <option value="No">No</option>
                  <option value="Si">Si</option>
                </select>
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.disability &&
                    errors.disability &&
                    errors.disability}
                </span>{" "}
              </div>

              {/* SEXO COL 3 */}
              <div id="questionTen" className={styles.question}>
                <label htmlFor="genderSelect"> Género:</label>
                <select
                  id="genderSelect"
                  name="gender"
                  style={{
                    backgroundColor:
                      touchedFields.gender && errors.gender
                        ? "rgb(255, 224, 224)"
                        : form.gender
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.gender
                      ? "0 0 3px #FF0000"
                      : form.gender
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.gender}
                  required
                >
                  <option value="" disabled hidden>
                  ♀️ ⚧️ ♂️ Género
                  </option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="LGTBIQ+">LGTBIQ+</option>
                  <option value="Otro">Otro</option>
                </select>
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.gender && errors.gender && errors.gender}
                </span>{" "}
              </div>

              {/* OCUPACIÓN COL 3 */}
              <div id="questionEleven" className={styles.question}>
                <label htmlFor="occupationInput">Ocupación: </label>
                <input
                  type="text"
                  id="occupationInput"
                  name="occupation"
                  style={{
                    backgroundColor:
                      touchedFields.occupation && errors.occupation
                        ? "rgb(255, 224, 224)"
                        : form.occupation
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.occupation
                      ? "0 0 3px #FF0000"
                      : form.occupation
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    errors.occupation ? "Campo requerido ocupación" : "✍🏽 Ocupación . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.occupation}
                  required
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.occupation &&
                    errors.occupation &&
                    errors.occupation}
                </span>{" "}
              </div>

              {/*TELEFONO*/}
              <div id="questionTwelve" className={styles.question}>
                <label htmlFor="phoneNumberInput">Número de contacto</label>
                <input
                  type="number"
                  inputMode="tel"
                  id="phoneNumberInput"
                  name="phoneNumber"
                  style={{
                    backgroundColor:
                      touchedFields.phoneNumber && errors.phoneNumber
                        ? "rgb(255, 224, 224)"
                        : form.phoneNumber
                        ? " #d1ffa2"
                        : "white",
                    boxShadow: errors.phoneNumber
                      ? "0 0 3px #FF0000"
                      : form.phoneNumber
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    errors.phoneNumber
                      ? "📱 campo requerido numero contacto"
                      : " ✍🏻 Número telefónico 📱. . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.phoneNumber}
                  required
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.phoneNumber &&
                    errors.phoneNumber &&
                    errors.phoneNumber}
                </span>{" "}
              </div>
            </div>

            {/*  COLUMNA 4 */}
            <div id="form-column-four" className={styles.formcolumn}>
              {/* CORREO COL 3 */}
              <div id="questionThirteen" className={styles.question}>
                <label htmlFor="emailInput"> Correo electrónico: </label>
                <input
                  type="email"
                  id="emailInput"
                  name="email"
                  style={{
                    backgroundColor:
                      touchedFields.email && errors.email
                        ? "rgb(255, 224, 224)"
                        : form.email
                        ? " #d1ffa2 "
                        : "white",
                    boxShadow: errors.email
                      ? "0 0 3px #FF0000"
                      : form.email
                      ? "0 0 4px  #d1ffa2"
                      : "none",
                  }}
                  placeholder={
                    errors.email ? "📧 campo requerido e-mail" : "📧 e-mail . . ."
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  required
                />
                <span className={styles.errordiv}>
                  {" "}
                  {touchedFields.email && errors.email && errors.email}
                </span>{" "}
              </div>
              <div className={styles.actionbuttons}>
              <input type="submit" value="Enviar" />
            </div>
            </div>

          
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default BasicDataForm;
