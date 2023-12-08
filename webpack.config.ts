import path from 'path';
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type TEnv = {
  mode?: 'production' | 'development';
};

const devServerConfig: DevServerConfiguration = {
  port: 3000,
  static: {
    directory: path.resolve(__dirname, 'public')
  },
  hot: true,
  open: true,
  historyApiFallback: true
};

export default ({ mode }: TEnv): Configuration => ({
  mode: mode || 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    clean: true,
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: devServerConfig,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
});