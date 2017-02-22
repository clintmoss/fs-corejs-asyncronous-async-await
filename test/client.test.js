import Test from 'ava';
import Client from '../src';


Test.beforeEach(t => {
  t.context = Client();
});

Test(`#arenas() is accessible`, async t => t.truthy(t.context.arenas));

Test(`#cards() is accessible`, async t => t.truthy(t.context.cards));

Test(`#chests() is accessible`, async t => t.truthy(t.context.chests));

Test(`#players() is accessible`, async t => t.truthy(t.context.players));
