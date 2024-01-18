const validationForm = (form) => {
  let errors = {};
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!form.firstName) {
    errors.firstName =
      "El campo no puede estar vacío";
  } else if (/\s/.test(form.firstName)) {
    errors.firstName = "El campo no debe contener espacios";
  } else if (/\d/.test(form.firstName)) {
    errors.firstName = "El campo no debe contener números";
  }

  if (/\d/.test(form.secondName) && form.secondName) {
    errors.secondName = "El campo no debe contener números";
  }

  if (!form.firstSurName) {
    errors.firstSurName =
      "El campo no puede estar vacío";
  } else if (/\s/.test(form.firstSurName)) {
    errors.firstSurName = "El campo no debe contener espacios";
  } else if (/\d/.test(form.firstSurName)) {
    errors.firstSurName = "El campo no debe contener números";
  }

  if (form.secondSurName && /\d/.test(form.secondSurName)) {
    errors.secondSurName = "El campo no debe contener números";
  }

  if (!form.kindDoc) {
    errors.kindDoc = "Debes seleccionar un tipo de documento";
  }
  

  if (!form.docNumber) {
    errors.docNumber = "El campo no puede estar vacío";
  } else {
    const cleanedNumber = form.docNumber.replace(/\s|-/g, "");
  
    // Verificar si el número contiene solo dígitos después de limpiarlo
    if (!/^\d+$/.test(cleanedNumber)) {
      errors.docNumber = "El campo debe contener solo números";
    } else {
      const numericValue = parseInt(cleanedNumber, 10);
  
      // Verificar si el número es menor que 0
      if (numericValue <= 0) {
        errors.docNumber= "El número debe ser mayor o igual a 0";
      }
    }
  }
  
  
  

  if (!form.nataleDate) {
    errors.nataleDate = "El campo no puede estar vacío.";
  }

  if (!form.maritalStatus) {
    errors.maritalStatus = "Debes seleccionar un estado civil";
  }

  if (!form.disability) {
    errors.disability =
      "Debes seleccionar una opción";
  }

  if (!form.gender) {
    errors.gender = "Debes seleccionar el genero del consultante.";
  }

  if (!form.occupation) {
    errors.occupation = "El campo no puede estar vacío";
  } else if (/\d/.test(form.occupation)) {
    errors.occupation = "El campo no debe contener números";
  }
  
  if (!form.email) {
    errors.email = "El campo no puede estar vacío";
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Ingresa una dirección de correo electrónico válida";
  }

  if (!form.phoneNumber) {
    errors.phoneNumber = "El campo no puede estar vacío";
  } else {
    const cleanedNumber = form.phoneNumber.replace(/\s|-/g, "");

    // Verificar si el número contiene solo dígitos después de limpiarlo
    if (!/^\d+$/.test(cleanedNumber)) {
      errors.phoneNumber = "El campo debe contener solo números";
    }
  }

  return errors;
};

export default validationForm;
