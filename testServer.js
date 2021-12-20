import {rest} from 'msw';
import {setupServer} from 'msw/node';

const server = setupServer(
  rest.get('http://localhost:3000/transactions', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          value: 365,
          type: 'credit',
          id: 1,
        },
      ]),
    );
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({error: 'You must add request handler.'}),
    );
  }),
);

export {server, rest};

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
