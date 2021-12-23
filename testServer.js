import {rest} from 'msw';
import {setupServer} from 'msw/node';

const initialData = [
  {
    value: 365,
    type: 'credit',
    id: 1,
  },
]

let data = initialData

const endpointMocks = [
  rest.get('http://localhost:3000/transactions', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data),
    );
  }),
  rest.post('http://localhost:3000/transactions', (_req, res, ctx) => {
    data.push(_req.body);
    return res(
      ctx.status(200),
      ctx.json(data),
    );
  })]

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

let afterEachCounter = 0;

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => {
    
  data = initialData;
  afterEachCounter += 1
  console.log(`after each: ${afterEachCounter}`)
  console.log(data)
})
afterEach(() => {
  server.resetHandlers();
});
