
interface Login {
  email: string;
  password: string;
}

class UserLoginService {
  async validar({ email, password } : Login) {

    if (email && password) return 'Logado'
    else return 'Deslogado'

  }
}

export {UserLoginService}