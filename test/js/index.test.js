import test from 'ava';
import { removeComments } from '../../src/js/index';

test('removeComments', t => {
  let str = 'xxx';
  let res = removeComments(str);
  t.is(str, res);
});
