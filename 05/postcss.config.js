const autoprefixer = require("autoprefixer");
module.exports = {
  plugins:[
    autoprefixer({// package.json
      "overrideBrowserslist": [ // 注意：是一个数组对象
        "> 1%",
        "last 2 versions"
      ] 
    })
  ]
}