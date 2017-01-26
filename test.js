import test from 'ava';
import env from './';

test('get env value', t => {
	t.is(env('FOO_BAR'), 'BAR');
	t.is(env('APP_KEY'), '[jlkajsdlkjj23423nn324k1;090]');
	t.is(env('MY_SPECIAL_NUMBER'), undefined);
});

test('set env value', t => {
	t.is(env('MY_SPECIAL_NUMBER', 500), '500');
	t.is(env('MY_SPECIAL_NUMBER'), '500');

	t.is(env('FOO_BAR', 'fooBar'), 'BAR');
	t.is(env('FOO_BAR'), 'BAR');

	t.is(env('SECRET_CODE1', '200'), '200');
	t.is(env('SECRET_CODE2', 212), '212');
});

test('get process.env value', t => {
	t.is(process.env.MY_SPECIAL_NUMBER, '500');
	t.is(process.env.SECRET_CODE1, '200');
	t.is(process.env.SECRET_CODE2, '212');
	t.is(process.env.FOO_BAR, 'BAR');
});
