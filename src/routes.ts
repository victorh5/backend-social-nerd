import { Router } from 'express'
import { UserLoginController } from './controllers/UserLoginController'

const router = Router()

const userLoginController = new UserLoginController()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/login', userLoginController.executar)

export { router }
