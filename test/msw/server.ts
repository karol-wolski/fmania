import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API}/user`, (req, res, ctx) => {
    return res(
      ctx.json({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        telephone: '400400400',
      }),
    )
  }),
  rest.put(`${process.env.REACT_APP_API}/user`, (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
      }),
    )
  }),
  rest.post(`${process.env.REACT_APP_API}/login`, (req, res, ctx) => {
    return res(ctx.json({ token: 'token' }))
  }),
  rest.post(`${process.env.REACT_APP_API}/register`, (req, res, ctx) => {
    return res(ctx.json({ status: 'created' }))
  }),
  rest.post(`${process.env.REACT_APP_API}/comments`, (req, res, ctx) => {
    return res(ctx.json({ statusCode: 200 }))
  }),
)

export default server
