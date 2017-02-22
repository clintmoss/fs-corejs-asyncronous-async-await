import Test from 'ava';
import Arena from '../src/arena';


Test.beforeEach(t => {
  t.context = new Arena();
});

Test(`#all()`, async t => {
  const arena = t.context;
  const results = await arena.all();
  t.truthy(results);
});

Test(`#find(id)`, async t => {
  const arena = t.context;
  const results = await arena.all();
  t.truthy(results);

  const result = await arena.find(results[0]._id);
  t.truthy(result);
});
