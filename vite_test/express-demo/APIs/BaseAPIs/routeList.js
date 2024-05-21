import { Router } from 'express';
import routes from '../../data/router.json' assert {type:'json'}

const router = Router()

export default router.get( '/getRouteList', (req, res) => {
    res.send(routes)
})