import {rest} from 'msw';
import {setupServer} from 'msw/node';

const data = [
  {
    value: 365,
    type: 'credit',
    id: 1,
  },
];

const endpointMocks = [
  rest.get('http://localhost:3000/transactions', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.post('http://localhost:3000/transactions', (_req, res, ctx) => {
    console.log(_req.body);
    return res(ctx.status(200), ctx.json(_req.body));
  }),
];

const server = setupServer(
  ...endpointMocks,
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
afterEach(() => {
  server.resetHandlers();
});
