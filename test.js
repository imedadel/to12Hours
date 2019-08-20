import test from 'ava';
import to12Hours from '.';

test('main', t => {
	t.is(to12Hours('15:35'), '3:35PM');
});
