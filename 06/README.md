# splitChunks

## chunks
<pre>
async表示只从异步加载得模块（动态加载import()）里面进行拆分
initial表示只从入口模块进行拆分
all表示以上两者都包括
</pre>

## cacheGroups
<pre>
optimization: {
  splitChunks: {
    chunks: 'initial',
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      }
    }
  }
},
可以改名
optimization: {
  splitChunks: {
    chunks: 'initial',
    cacheGroups: {
      common: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      }
    }
  }
},
可以定义很多个规则
比如我们想react和react-dom打一个包，vue和vuex打一个包
optimization: {
  splitChunks: {
    chunks: 'initial',
    cacheGroups: {
      vue: {
        test: /[\\/]node_modules[\\/](react|react-dom)/,
        priority: -1
      },
      react: {
        test: /[\\/]node_modules[\\/](vue|vuex)/,
        priority: -2
      }
    }
  }
},
</pre>

splitChunks默认有两个缓存组：vender和default

另外还需要说明一下，cacheGroups之外设置的约束条件比如说默认配置里面的chunks、minSize、minChunks等等都会作用于cacheGroups，除了test, priority and reuseExistingChunk，这三个是只能定义在cacheGroup这一层的，这也就解释了第一篇文章里面为什么entry里面引入的第三方库react-dom只被entry1.js引入了一次就会被打包出来，因为默认的minChunks=1，这个属性会作用于所有的cacheGroups，但是cacheGroups也可以将上面的所有属性都重新定义，就会覆盖外面的默认属性，比如default这个缓存组就设置了minChunks=2，他会覆盖掉默认值1。