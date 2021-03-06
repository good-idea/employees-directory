/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

const PATHS = {
	root: path.resolve(__dirname),
	nodeModules: path.resolve(__dirname, 'node_modules'),
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'build'),
	js: 'static/js',
}

const DEV_SERVER = {
	hot: true,
	hotOnly: true,
	historyApiFallback: true,
	overlay: true,
	contentBase: path.resolve(__dirname, 'public'),
}

module.exports = (env) => {
	const isDev = env !== 'production'
	return {
		mode: isDev ? 'development' : 'production',
		cache: true,
		devtool: isDev ? 'eval-source-map' : 'source-map',
		devServer: isDev ? DEV_SERVER : {},
		context: PATHS.root,
		entry: isDev ? ['./src/index.tsx'] : './src/index.tsx',
		output: {
			path: PATHS.dist,
			filename: isDev
				? `${PATHS.js}/[name].js`
				: `${PATHS.js}/[name].[hash].js`,
			publicPath: '/',
		},
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
			extensions: ['.mjs', '.ts', '.tsx', '.js'],
			alias: isDev
				? {
						'react-dom': '@hot-loader/react-dom',
				  }
				: {},
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					include: PATHS.src,
					use: [
						{ loader: 'babel-loader' },
						{
							loader: 'awesome-typescript-loader',
							options: {
								transpileOnly: !isDev,
								useTranspileModule: false,
								sourceMap: true,
							},
						},
					].filter(Boolean),
				},
			],
		},
		plugins: [
			// new CheckerPlugin(),
			// new HardSourceWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
			// isDev && new webpack.HotModuleReplacementPlugin(),
			isDev && new webpack.NamedModulesPlugin(),
			!isDev &&
				new webpack.LoaderOptionsPlugin({
					minimize: true,
					debug: false,
				}),
			!isDev && new CopyPlugin([{ from: './public/' }]),
			new webpack.DefinePlugin({
				'process.env.API_URL': JSON.stringify(
					isDev
						? 'http://localhost:4000/graphql'
						: 'https://us1.prisma.sh/joseph-thomas-611fed/employee-directory/prod',
				),
				// 'process.env.API_URL': JSON.stringify(
				// 	isDev ? 'http://localhost:4000/graphql' : 'production',
				// ),
				// 'process.env.NODE_ENV': JSON.stringify(
				// 	isDev ? 'development' : 'production',
				// ),
			}),
		].filter(Boolean),
		optimization: {
			minimize: !isDev,
			splitChunks: {
				name: true,
				cacheGroups: {
					commons: {
						chunks: 'initial',
						minChunks: 2,
					},
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all',
						filename: isDev
							? `${PATHS.js}/vendor.[hash].js`
							: `${PATHS.js}/vendor.[contentHash].js`,
						priority: -10,
					},
				},
			},
			runtimeChunk: true,
		},
	}
}
