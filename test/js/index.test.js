import test from 'ava';
import removeComments from '../../src/js/index';

test('removeComments', t => {
  let str = 'xxx';
  debugger;
  let res = removeComments(str);
  t.is(str, res);
//  t.pass();
});

// test('bar', async t => {
//	const bar = Promise.resolve('bar');

//	t.is(await bar, 'bar');
// });
