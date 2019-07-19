module.exports = {
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
	testMatch: ['**/__tests__/**/*.test.tsx'],
	coveragePathIgnorePatterns: [
		'node_modules',
		'coverage',
		'/__.*__/',
		'jest.config.js',
	],
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['**/**/*.tsx?'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
}
