# hexo-env

This is the plugin for [Hexo](https://github.com/hexojs/hexo) that tell development or production.

## Installation

```
npm install hexo-env --save
```

## Usage

``` javascript
var hexo_env = require('hexo-env');

if( hexo_env.env(hexo) == 'development' ){
	// Currently, the hexo server is running.
}else if( hexo_env.env(hexo) == 'production'){
	// hexo is currently deploying your website.
}
```

If you want to get the current mode on template, use `cache` variable . For details please see the following .
[https://github.com/hexojs/hexo/issues/371](https://github.com/hexojs/hexo/issues/371)

## License

MIT

[Hexo]: http://hexo.io/