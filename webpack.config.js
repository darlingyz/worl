module.exports = {
	entry:"./app.js",
	output:{
		path:__dirname,
		filename: 'bundle.js'
	},
	devtool:"source-map",
	
 	module: {
        rules: [
        {
            test: /\.js$/,
          exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
            	presets:["es2015","react"]
            }
        },
		  {
            test: /\.css$/,
            exclude:  /node_modules/,
            loader: 'style-loader!css-loader'
        },
          {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader'
        },
        {
        	test:/\.(jpg|png|gif)$/,
        	loader:"url-loader?limit=1024"
        },
        {
        	test:/\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        	loader:'file-loader?name=[name].[ext]'
        }
	
        ]
    }
}
