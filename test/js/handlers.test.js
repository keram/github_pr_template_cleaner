import test from 'ava';
import { removeComments } from '../../src/js/handlers';

test('removeComments', t => {
  let str = 'xxx';
  let res = removeComments(str);

  t.is(str, res);
});

// test('bar', async t => {
//	const bar = Promise.resolve('bar');

//	t.is(await bar, 'bar');
// });
