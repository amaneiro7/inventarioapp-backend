/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/tests/**/*.test.ts'],
	transform: {
		'^.+.(ts|tsx)$': [
			'babel-jest',
			{
				presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript']
			}
		]
	}
}
