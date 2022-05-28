import { create, router as _router } from 'json-server'
const server = create()
const router = _router('db/db.json')


// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

router.render = (req, res) => {
  res.status(500).jsonp({
    error: "error message here"
  })
}
