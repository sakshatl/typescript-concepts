## Setting up Webpack

### Installing Webpack and Related Packages

`yarn add --dev webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin`

This installs Webpack and the Webpack CLI, Webpack Development Server and `ts-loader` which allows Webpack to compile TypeScript files and `html-webpack-plugin` simplifies creation of HTML files to serve webpack bundles.

### Creating Webpack configuration file

Create a file name `webpack.config.js` in project's root directory and add the following code:

```
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const path = require('path');

  module.exports = {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html'
      })
    ],
    devtool: 'source-map',
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
    },
    mode: "development"
  }
```

The above configuration tells Webpack to:

- Use `src/index.ts` file as entry point
- Output the bundled JavaScript file as a `bundle.js` in the dist directory
- Use `ts-loader` to compile TypeScript files
- Resolve `.ts`, `.tsx` and `.js` extensions
- Include support to enable `html-webpack-plugin`
- Generate source maps for easy debugging
- Setup a development server and serve files from the `dist` directory on port 3000



## Create a Sample Application

Now that we have TypeScript and Webpack setup we can setup a simple TypeScript application to test our configuration.

Inside the `src` folder create a new file `index.html` this will enable Webpack to serve HTML from the `dist` folder. Add the following code to the file - 

```
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
```

Create another file named `index.ts` inside the `src` directory and add following code - 

```
  const rootElem = document.getElementById('root');
  if(rootElem) {
    rootElem.innerHTML = `<p>HELLO WORLD -- this is a simple para</p>`;
  }
```


### Adding Scripts to `package.json`

Now, let’s add some scripts to your `package.json` file to make it easier to run Webpack and the development server. Add the following scripts to the "scripts" section of your package.json - 

```
  "scripts": {
    "dev": "webpack serve",
    "build": "webpack"
  }
```

## Starting the development server

Simply write `yarn run dev` or `npm run dev` to start a development server

## Build the application

`yarn run build` or `npm run build`
