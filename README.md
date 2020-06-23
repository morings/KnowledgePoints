<div id="cnblogs_post_body" class="blogpost-body ">
    <p><span style="font-family: 宋体;">细节叙述见以下链接：<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a></span></p>
<p><span style="color: #000000; font-family: 宋体;"><span style="color: #000000;"><code>1 基本概念：&nbsp;</code></span></span></p>
<p><span style="color: #000000; font-family: 宋体;"><span style="color: #000000;"><code><a title="WindowOrWorkerGlobalScope mixin的fetch（）方法启动从网络获取资源的过程。 这将返回一个promise，该promise将解析为表示对您的请求的响应的Response对象。 承诺不会拒绝HTTP错误 - 相反它只拒绝网络错误;  然后处理程序必须检查HTTP错误。" href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">WindowOrWorkerGlobalScope.fetch()</a></code></span><code></code>用于获取资源的方法。</span></p>
<p><span style="color: #000000; font-family: 宋体;"><a title="Fetch API的Headers接口允许您对HTTP请求和响应头执行各种操作。 这些操作包括检索，设置，添加和删除。 Headers对象具有关联的标题列表，该列表最初为空，由零个或多个名称和值对组成。 您可以使用append（）等方法添加到此（请参阅示例。）在此接口的所有方法中，标题名称由不区分大小写的字节序列匹配。" href="https://developer.mozilla.org/en-US/docs/Web/API/Headers"><span style="color: #000000;"><code>Headers</code></span></a>表示响应/请求标头，允许您查询它们并根据结果采取不同的操作。</span></p>
<p><span style="color: #000000; font-family: 宋体;"><a title="Fetch API的Request接口表示资源请求。" href="https://developer.mozilla.org/en-US/docs/Web/API/Request"><span style="color: #000000;"><code>Request</code></span></a>表示资源请求。</span></p>
<p><span style="color: #000000; font-family: 宋体;"><a title="Fetch API的Response接口表示对请求的响应。" href="https://developer.mozilla.org/en-US/docs/Web/API/Response"><span style="color: #000000;"><code>Response</code></span></a>表示对请求的响应。</span></p>
<p><span style="color: #000000; font-family: 宋体;">2.&nbsp;Fetch API&nbsp;</span></p>
<p><span style="font-family: 宋体;">Fetch API 包含一组类和方法，用来简化 HTTP 请求。其中包含以下方法和类：</span></p>
<p>&nbsp;</p>
<ul>
<li><span style="font-family: 宋体;">fetch 方法：用于发起 HTTP 请求</span></li>
<li><span style="font-family: 宋体;">Request 类：用来描述请求</span></li>
<li><span style="font-family: 宋体;">Response 类：用来表示响应</span></li>
<li><span style="font-family: 宋体;">Headers 类：用来表示 HTTP 头部信息。</span></li>
</ul>
<p>&nbsp;</p>
<h3><span style="font-family: 宋体;">基本用法</span></h3>
<h3><span style="font-family: 宋体;">fetch 接受一个 url 作为参数，发起 GET 请求，返回 Promise ,请求成功后将返回结果封装为一个 Response 对象，该对象上具有一些方法（比如 json 方法），调用 json 方法后同样返回一个 Promise 对象，并用解析 json 字符串得到的对象来 resolve。</span></h3>

```
fetch('/getData').then(function(res){
    return res.json()
  }).then(data=>{
  })
})
```

<h3><span style="font-family: 宋体;">fetch 方法</span></h3>
<p><span style="font-family: 宋体;">fetch 方法有两种调用方法，第一个参数可以是一个 Request 对象，也可以是一个简单的 url，第二个参数是可选参数，包含一些配置信息。</span></p>

```
Promise fetch(String url [, Object options]);
Promise fetch(Request req [, Object options]);
```

<p><span style="font-family: 宋体;">可选的配置信息可以一个简单对象，可以包含下列字段：</span></p>
<ul>
<li><span style="font-family: 宋体;">method: 请求的方法, 比如： GET, POST</span></li>
<li><span style="font-family: 宋体;">headers：请求头部信息，可以是一个 Headers 对象的实例，也可以是一个简单对象</span></li>
<li><span style="font-family: 宋体;">body: 任何希望发送的信息，可以是 Blob, BufferSource, FormData, URLSearchParams, 或者 USVString。需要注意的是 GET 和 HEAD 方法不能包含 body。</span></li>
<li><span style="font-family: 宋体;">mode：请求的模式，可以取这几个值：cors, no-cors, same-origin, navigate</span>
<ul>
<li>same-origin：只允许同源的请求，否则直接报错</li>
<li>cors：允许跨域，但也要要求响应中 Access-Control-Allow-Origin 这样的头部信息表示允许跨域，响应中只有部分头部信息可以读取，但响应内容可以不受限地读取。</li>
<li>no-cors：只允许使用 HEAD、 GET 和 POST 方法，且 JavaScript 不允许访问 response 中的内容。ServiceWorkers 拦截了这些请求，它不能随意添加或者改写任何headers。</li>
<li>navigate：用于支持页面导航。通常使用不到。</li>
</ul>
</li>
<li><span style="font-family: 宋体;">credentials：表示是否发送 cookie，有三个可选值 omit, same-origin, includecache：表示处理缓存的策略，关于此可以参考&nbsp;<a href="https://fetch.spec.whatwg.org/#concept-request-cache-mode" rel="nofollow">https://fetch.spec.whatwg.org</a></span>
<ul>
<li>omit：不发生 cookie</li>
<li>same-origin： 仅在同源时发生 cookie</li>
<li>include：发送 cookie</li>
</ul>
</li>
<li></li>
<li><span style="font-family: 宋体;">redirect：发生重定向时候的策略。有以下可选值：referrer： 一个字符串，可以是 no-referrer, client, 或者是一个 URL。默认值是 client。</span>
<ul>
<li>follow：跟随</li>
<li>error：发生错误</li>
<li>manual：需要用户手动跟随</li>
</ul>
</li>
<li></li>
<li><span style="font-family: 宋体;">integrity：包含一个用于验证子资源完整性的字符串。关于此，可以参看&nbsp;<a href="https://imququ.com/post/subresource-integrity.html" rel="nofollow">Subresource Integrity 介绍</a></span></li>
</ul>
<p><span style="font-family: 宋体;">该函数返回一个 Promise 对象，若请求成功会用 Response 的实例作为参数调用 resolve ，若请求失败会用一个错误对象来调用 reject。</span></p>
<h3><span style="font-family: 宋体;">Headers 类</span></h3>
<p><span style="font-family: 宋体;">Headers 类用来表示 HTTP 的头部信息，其构造函数可以接受一个表示 HTTP 头信息的对象，也可以接受一个 Headers 类的实例作为对象：</span></p>

```
1 var header1 = new Headers({
2   'Content-Type': 'image/jpeg',
3   'Accept-Charset': 'utf-8'
4 });
5 
6 var header2 = new Headers(header1);
```

<h4><span style="font-family: 宋体;">Headers 实例的方法</span></h4>
<h5><span style="font-family: 宋体;">append</span></h5>
<p><span style="font-family: 宋体;">对一个字段追加信息，如果该字段不存在，就创建一个。</span></p>

```
1 var header = new Headers();
2 header.append('Accept-Encoding', 'deflate');
3 header.append('Accept-Encoding', 'gzip');
4 // Accept-Encoding: ['deflate', 'gzip']

```

<h5><span style="font-family: 宋体;">delete</span></h5>
<p><span style="font-family: 宋体;">删除某个字段</span></p>
<h5><span style="font-family: 宋体;">get</span></h5>
<p><span style="font-family: 宋体;">获得某个字段的第一个值</span></p>

```
var header = new Headers();
header.append('Accept-Encoding', 'deflate');
header.append('Accept-Encoding', 'gzip');

header.get('Accept-Encoding'); //=> 'deflate'
```

<h5><span style="font-family: 宋体;">getAll</span></h5>
<p><span style="font-family: 宋体;">获得某个字段所有的值</span></p>

```
var header = new Headers();
header.append('Accept-Encoding', 'deflate');
header.append('Accept-Encoding', 'gzip');

header.getAll('Accept-Encoding'); //=> ['deflate', 'gzip']
```

<h5><span style="font-family: 宋体;">has</span></h5>
<p><span style="font-family: 宋体;">判断是否存在某个字段</span></p>
<h5><span style="font-family: 宋体;">set</span></h5>
<p><span style="font-family: 宋体;">设置一个字段，如果该字段已经存在，那么会覆盖之前的。</span></p>
<h5><span style="font-family: 宋体;">forEach</span></h5>
<p><span style="font-family: 宋体;">遍历所有的字段，接受一个回调函数，和可选的第二个参数。可选的第二个参数地值作为回调函数的 this 值。</span></p>

```
var header = new Headers();
header.append('Accept-Encoding', 'deflate');

header.forEach(function(value, name, header){
  //...
},this);
```

<h3><span style="font-family: 宋体;">Request 类</span></h3>
<p><span style="font-family: 宋体;">Request 对象用于描述请求内容。构造函数接受的参数和 fetch 函数的参数形式一样，实际上 fetch 方法会使用传入的参数构造出一个 Request 对象来。</span></p>
<p><span style="font-family: 宋体;">下面例子从 github 抓取到 react 的 star 数并打印出来。</span></p>

```
var req = new Request('/getData',{
  method:'GET'
});

fetch(req).then(function(res){
  return res.json()
}).then(function(data){
  console.log(data.stargazers_count)
});
```
<h4><span style="font-family: 宋体;">Request 实例的属性</span></h4>
<p><span style="font-family: 宋体;"><em>以下属性均为只读属性。这些属性的意义均在上面介绍 fetch 的参数的时候有过说明。</em></span></p>
<ul>
<li><span style="font-family: 宋体;">method</span></li>
<li><span style="font-family: 宋体;">url</span></li>
<li><span style="font-family: 宋体;">headers</span></li>
<li><span style="font-family: 宋体;">referrer</span></li>
<li><span style="font-family: 宋体;">referrerPolicy：处理来源信息的策略，关于此可以参见<a href="https://w3c.github.io/webappsec-referrer-policy/" rel="nofollow">Referrer Policy</a></span></li>
<li><span style="font-family: 宋体;">mode</span></li>
<li><span style="font-family: 宋体;">credentials</span></li>
<li><span style="font-family: 宋体;">redirect</span></li>
<li><span style="font-family: 宋体;">integrity</span></li>
<li><span style="font-family: 宋体;">cache</span></li>
</ul>
<h3><span style="font-family: 宋体;">Response 类</span></h3>
<p><span style="font-family: 宋体;">Response 用来表示 HTTP 请求的响应。其构造函数形式如下：</span></p>
<div class="highlight highlight-source-js">
<pre><span class="pl-k" style="font-family: 宋体;">var res <span class="pl-k">= <span class="pl-k">new <span class="pl-en">Response(body, init);</span></span></span></span></pre>
</div>
<p><span style="font-family: 宋体;">其中 body 可以是：</span></p>
<ul>
<li><span style="font-family: 宋体;">Blob</span></li>
<li><span style="font-family: 宋体;">BufferSource</span></li>
<li><span style="font-family: 宋体;">FormData</span></li>
<li><span style="font-family: 宋体;">URLSearchParams</span></li>
<li><span style="font-family: 宋体;">USVString</span></li>
</ul>
<p><span style="font-family: 宋体;">init 是一个对象，其中包括以下字段：</span></p>
<ul>
<li><span style="font-family: 宋体;">status：响应的状态码，比如 200，404</span></li>
<li><span style="font-family: 宋体;">statusText：状态信息，比如 OK</span></li>
<li><span style="font-family: 宋体;">headers: 头部信息，可以是一个对象，也可以是一个 Headers 实例</span></li>
</ul>
<h4><span style="font-family: 宋体;">Response 实例属性</span></h4>
<p><span style="font-family: 宋体;"><em>以下属性均为只读属性</em></span></p>
<ul>
<li><span style="font-family: 宋体;">bodyUsed：用于表示响应内容是否有被使用过</span></li>
<li><span style="font-family: 宋体;">headers：头部信息</span></li>
<li><span style="font-family: 宋体;">ok：表明请求是否成功，当响应的状态码是 200~299 时，该值为 true</span></li>
<li><span style="font-family: 宋体;">status：状态码</span></li>
<li><span style="font-family: 宋体;">statusText：状态信息</span></li>
<li><span style="font-family: 宋体;">type：表明了响应的类型，可能是下面几种值：url：响应的地址</span>
<ul>
<li>basic： 同源</li>
<li>cors：跨域</li>
<li>error：出错</li>
<li>opaque：Request 的 mode 设置为 “no-cors” 的响应</li>
</ul>
</li>
<li></li>
</ul>
<h4><span style="font-family: 宋体;">方法</span></h4>
<ul>
<li><span style="font-family: 宋体;">clone：复制一个响应对象</span></li>
</ul>
<p><span style="font-family: 宋体;">要想从 Response 的实例中拿到最终的数据需要调用下面这些方法，这些方法都返回一个 Promise 并且使用对应的数据类型来 resolve。</span></p>
<ul>
<li><span style="font-family: 宋体;">arrayBuffer：把响应数据转化为 arrayBuffer 来 resolve</span></li>
<li><span style="font-family: 宋体;">blob：把响应数据转换为 Blob 来 resolve</span></li>
<li><span style="font-family: 宋体;">formData：把响应数据转化为 formData 来 resolve</span></li>
<li><span style="font-family: 宋体;">json：把响应数据解析为对象后 resolve</span></li>
<li><span style="font-family: 宋体;">text：把响应数据当做字符串来调用 resolve</span></li>
</ul>
</div>