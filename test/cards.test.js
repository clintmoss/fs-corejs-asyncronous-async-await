import Test from 'ava';
import Client from '../src/card';


Test.beforeEach(t => {
  t.context = new Client();
});

Test(`#all()`, async t => {
  const client = t.context;
  const results = await client.all();
  t.truthy(results);
});

Test(`#find(id)`, async t => {
  const client = t.context;
  const results = await client.all();
  t.truthy(results);

  const result = await client.find(results[0]._id);
  t.truthy(result);
});
