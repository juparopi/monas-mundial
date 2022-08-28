export function ManejoError(err){
    var error;
    switch (err.message) {
      case 'Firebase: Error (auth/invalid-email).':
        error = 'Intenta usar un correo válido.';
        break;
  
      case 'Firebase: Error (auth/email-already-in-use).':
        error = 'Este correo ya está en uso.';
        break;
      case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        error = 'La contraseña debe tener al menos 6 caracteres.';
        break;
      case 'Firebase: Error (auth/wrong-password).':
          error = 'Error en email/contraseña. Intenta de nuevo.';
          break;
      case 'Firebase: Error (auth/user-not-found).':
          error = 'Error en email/contraseña. Intenta de nuevo.';
          break;
    
      default:
        error = err.message;
        break;
    }
    return error;
  }