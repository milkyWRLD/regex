import Validator from './validator'

describe('Валидатор', () => {
	let validator

	beforeEach(() => {
		validator = new Validator()
	})

	test('должен возвращать true для допустимых имен пользователей', () => {
		expect(validator.validateUsername('valid_username')).toBe(true)
	})

	test('должен возвращать false для имен пользователей, начинающихся с цифры', () => {
		expect(validator.validateUsername('1invalid_username')).toBe(false)
	})

	test('должен возвращать false для имен пользователей, заканчивающихся цифрой', () => {
		expect(validator.validateUsername('invalid_username1')).toBe(false)
	})

	test('должен возвращать false для имен пользователей с более чем тремя подряд идущими цифрами', () => {
		expect(validator.validateUsername('invalid1234username')).toBe(false)
	})

	test('должен возвращать false для имен пользователей, начинающихся с символа подчеркивания', () => {
		expect(validator.validateUsername('_invalid_username')).toBe(false)
	})

	test('должен возвращать false для имен пользователей, заканчивающихся символом подчеркивания', () => {
		expect(validator.validateUsername('invalid_username_')).toBe(false)
	})
})
