import { Router } from 'express';

import marvelController from '../controllers/marvelController';

const router = Router();

router.get(
  '/characters',
  marvelController.getCharacters
  // (req: Request, res: Response) => res.status(200).json(res.locals.data)
);

export default router;
