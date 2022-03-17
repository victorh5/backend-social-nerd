import { Request, Response } from "express";
import { UserLoginService } from "../services/UserLoginService"

class UserLoginController {
  async executar(request: Request, response: Response) {
    const { email, password } = request.body

    const service = new UserLoginService()

    const result = await service.validar({ email,password })

    return response.json({message: result})

  }
}

export {UserLoginController}