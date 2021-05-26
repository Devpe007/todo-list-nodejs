import { Router } from 'express';

const routes = Router();

routes.get('/teste', (req, res) => {
    return res.json({ ok: true });
});

export default routes;