# cookie小知识
## http请求携带cookie必须满足下面几个条件
拿一个Http POST请求来说 http://aaa.www.com/xxxxx/list
<ol>
  <li>浏览器端某个Cookie的domain字段等于http://aaa.www.com或者http://www.com (在同一个域内)</li>
  <li>都是http或者https，或者不同的情况下Secure属性为false</li>
  <li>要发送请求的路径，即上面的xxxxx跟浏览器端Cookie的path属性必须一致，或者是浏览器端Cookie的path的子目录，比如浏览器端Cookie的path为/test，那么xxxxxxx必须为/test或者/test/xxxx等子目录(如果cookie设置在http://www.com/list中，那么请求http://aaa.www.com/xxxxx/list可以携带)</li>
</ol>

## SameSite小知识
<div class="Post-RichTextContainer"><div class="RichText ztext Post-RichText"><p>如果你最近有关注过chrome的控制台，可能会发现经常报一些warning：</p><blockquote> A cookie associated with a cross-site resource at <a href="https://link.zhihu.com/?target=http%3A//baidu.com/" class=" external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043"><span class="invisible">http://</span><span class="visible">baidu.com/</span><span class="invisible"></span></a> was set without the <code>SameSite</code> attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with <code>SameSite=None</code> and <code>Secure</code>.<br> </blockquote><figure data-size="normal"><noscript><img src="https://pic2.zhimg.com/v2-55af282e63ecd03b9f54943b5965a367_b.jpg" data-caption="" data-size="normal" data-rawwidth="1911" data-rawheight="68" class="origin_image zh-lightbox-thumb" width="1911" data-original="https://pic2.zhimg.com/v2-55af282e63ecd03b9f54943b5965a367_r.jpg"/></noscript><img src="https://pic2.zhimg.com/80/v2-55af282e63ecd03b9f54943b5965a367_720w.jpg" data-caption="" data-size="normal" data-rawwidth="1911" data-rawheight="68" class="origin_image zh-lightbox-thumb lazy" width="1911" data-original="https://pic2.zhimg.com/v2-55af282e63ecd03b9f54943b5965a367_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-55af282e63ecd03b9f54943b5965a367_b.jpg" data-lazy-status="ok"></figure><p>出现这个警告的原因是：chrome在80版本之后，更新了cookies的携带机制，把原来Cookie的<code>SameSite</code>属性值，由<code>None</code>改成了<code>Lax</code>，这就会导致一些需要第三方cookie的应用产生了异常。</p><p>在介绍<code>SameSite</code>属性之前，我们先来复习一下cookie的基础知识</p><h3>Cookie基础</h3><p>Cookie常见的属性: </p><p><i>Name: cookie名。 </i> </p><p>Value: cookie值。 </p><p><i>Domain: cookie的域。如果设成<code>.deepred.com</code>，那么<code>a.deepred.com</code>和<code>b.deepred.com</code>域名下，都可以使用<code>.deepred.com</code>的cookie。 </i></p><p>Path: cookie的路径。请求资源的路径一定要包含这个path才能携带cookie。一般设置成<code>/</code>即可。 </p><p><i>Expires/Max-Age: cookie过期时间。默认不设置，则是<code>Session</code>会话，关闭页面后，该cookie立即失效。 </i> </p><p>HttpOnly: 设成<code>true</code>后，JS使用<code>document.cookie</code>则访问不到。常用于避免XSS攻击。</p><p><i>Secure: 标记为Secure的cookie只应通过被HTTPS协议加密过的请求发送给服务端。 </i></p><p> SameSite: 用来限制第三方Cookie。</p><p><b>最后一个属性非常重要，也就是我们即将要说的<code>SameSite</code>了。</b></p><h3>Cookie携带的场景</h3><p>我们假设有一个名字为<code>sessionId</code>的<code>cookie</code>，<code>domain</code>设置成了<code>.demo.com</code>。</p><p>1.在<code>a.demo.com</code>域名下，ajax在该域名下的所有请求，都会自动带上<code>sessionId</code></p><div class="highlight"><pre><code class="language-js"><span class="nx">ajax</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/api/data'</span><span class="p">)</span> <span class="c1">// 自动带上sessionId
</span></code></pre></div><p>2.在<code>b.demo.com</code>域名下，ajax在该域名下的所有请求，都会自动带上<code>sessionId</code></p><div class="highlight"><pre><code class="language-js"><span class="nx">ajax</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="s1">'/api2/data2'</span><span class="p">)</span> <span class="c1">// 自动带上sessionId
</span></code></pre></div><p>3.在<code>b.demo.com</code>域名下，ajax请求<code>a.demo.com</code>的api，需要设置<code>withCredentials</code>才能带上<code>sessionId</code></p><div class="highlight"><pre><code class="language-js"><span class="nx">ajax</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'https://a.demo.com/api/data'</span><span class="p">)</span> <span class="c1">// 不能自动带上sessionId
</span><span class="c1"></span>
<span class="nx">ajax</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'https://a.demo.com/api/data'</span><span class="p">,</span> <span class="p">{</span><span class="nx">withCredentials</span><span class="o">:</span> <span class="kc">true</span><span class="p">})</span> <span class="c1">// 自动带上sessionId
</span></code></pre></div><p><b>注意一下： <code>https://a.demo.com/api/data</code>需要支持cors跨域，并且<code>Access-Control-Allow-Origin</code>不能设成<code>*</code>，要设置成<code>https://b.demo.com</code>，只有这样，<code>withCredentials</code>才有用</b></p><div class="highlight"><pre><code class="language-js"><span class="nx">router</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/api/data'</span><span class="p">,</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">next</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'Access-Control-Allow-Origin'</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">headers</span><span class="p">.</span><span class="nx">origin</span><span class="p">);</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'Access-Control-Allow-Headers'</span><span class="p">,</span> <span class="s1">'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , myheader'</span><span class="p">);</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'Access-Control-Allow-Methods'</span><span class="p">,</span> <span class="s1">'PUT, POST, GET, DELETE, OPTIONS'</span><span class="p">);</span>
  <span class="nx">ctx</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'Access-Control-Allow-Credentials'</span><span class="p">,</span> <span class="s1">'true'</span><span class="p">);</span>
<span class="p">};</span>
</code></pre></div><p>4.在<code>b.demo.com</code>域名下，使用<code>iframe</code>加载<code>a.demo.com</code>，会自动带上<code>sessionId</code></p><p><b><code>a.demo.com</code>和<code>b.demo.com</code>同属一个域名下的子域名(同站)</b></p><p>5.在<code>a.demo2.com</code>域名下，ajax请求<code>a.demo.com</code>的api，需要设置<code>withCredentials</code>才能带上<code>sessionId</code></p><div class="highlight"><pre><code class="language-js"><span class="nx">ajax</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'https://a.demo.com/api/data'</span><span class="p">)</span> <span class="c1">// 不能自动带上sessionId
</span><span class="c1"></span>
<span class="nx">ajax</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'https://a.demo.com/api/data'</span><span class="p">,</span> <span class="p">{</span><span class="nx">withCredentials</span><span class="o">:</span> <span class="kc">true</span><span class="p">})</span> <span class="c1">// 自动带上sessionId
</span></code></pre></div><p>6.在<code>a.demo2.com</code>域名下，使用<code>iframe</code>加载<code>a.demo.com</code>，会自动带上<code>sessionId</code></p><p><b><code>a.demo.com</code>和<code>a.demo2.com</code>属于完全不相干的两个网站(跨站)</b></p><p>目前为止，都是我们所熟知的cookie携带场景。</p><p>然而，在chrome 80版本之后，谷歌把cookie的<code>SameSite</code>属性，从<code>None</code>改成了<code>Lax</code>。这时候，会导致第5和第6种场景<code>sessionId</code>因为<b>跨站</b>而导致丢失！ </p><p class="ztext-empty-paragraph"><br></p><p><b>跨站解释</b><br><br><a href="https://link.zhihu.com/?target=http%3A//a.demo.com" class=" external" target="_blank" rel="nofollow noreferrer"><span class="invisible">http://</span><span class="visible">a.demo.com</span><span class="invisible"></span></a>和<a href="https://link.zhihu.com/?target=http%3A//b.demo.com" class=" external" target="_blank" rel="nofollow noreferrer"><span class="invisible">http://</span><span class="visible">b.demo.com</span><span class="invisible"></span></a>属于同站，<a href="https://link.zhihu.com/?target=http%3A//a.demo.com" class=" external" target="_blank" rel="nofollow noreferrer"><span class="invisible">http://</span><span class="visible">a.demo.com</span><span class="invisible"></span></a>和<a href="https://link.zhihu.com/?target=http%3A//a.demo2.com" class=" external" target="_blank" rel="nofollow noreferrer"><span class="invisible">http://</span><span class="visible">a.demo2.com</span><span class="invisible"></span></a>属于跨站</p><p>注意和<b><i>跨域</i></b>做比较:  <a href="https://link.zhihu.com/?target=http%3A//a.demo.com" class=" external" target="_blank" rel="nofollow noreferrer"><span class="invisible">http://</span><span class="visible">a.demo.com</span><span class="invisible"></span></a>和<a href="https://link.zhihu.com/?target=http%3A//b.demo.com" class=" external" target="_blank" rel="nofollow noreferrer"><span class="invisible">http://</span><span class="visible">b.demo.com</span><span class="invisible"></span></a>属于<b><i>跨域</i></b></p><h3>SameSite</h3><p>cookie的<code>SameSite</code>属性用来限制第三方Cookie，从而减少安全风险(防止CSRF)</p><p><code>SameSite</code>可以有下面三种值：</p><ol><li><code>Strict</code>仅允许一方请求携带Cookie，即浏览器将只发送相同站点请求的Cookie，即当前网页URL与请求目标URL完全一致。</li><li><code>Lax</code>允许部分第三方请求携带Cookie</li><li><code>None</code>无论是否跨站都会发送Cookie</li></ol><table>
<thead>
<tr>
<th>请求类型</th>
<th style="text-align:center">示例</th>
<th style="text-align:right">正常情况</th>
<th>Lax</th>
</tr>
</thead>
<tbody>
<tr>
<td>链接</td>
<td style="text-align:center"><code>&lt;a href="..."&gt;&lt;/a&gt;</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>发送 Cookie</td>
</tr>
<tr>
<td>预加载</td>
<td style="text-align:center"><code>&lt;link rel="prerender" href="..."/&gt;</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>发送 Cookie</td>
</tr>
<tr>
<td>GET 表单</td>
<td style="text-align:center"><code>&lt;form method="GET" action="..."&gt;</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>发送 Cookie</td>
</tr>
<tr>
<td>POST 表单</td>
<td style="text-align:center"><code>&lt;form method="POST" action="..."&gt;</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>不发送</td>
</tr>
<tr>
<td>iframe</td>
<td style="text-align:center"><code>&lt;iframe src="..."&gt;&lt;/iframe&gt;</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>不发送</td>
</tr>
<tr>
<td>AJAX</td>
<td style="text-align:center"><code>$.get("...")</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>不发送</td>
</tr>
<tr>
<td>Image</td>
<td style="text-align:center"><code>&lt;img src="..."&gt;</code></td>
<td style="text-align:right">发送 Cookie</td>
<td>不发送</td>
</tr>
</tbody>
</table><p>从上图可以看出，<code>SameSite</code>从<code>None</code>改成了<code>Lax</code>后，<code>Form</code>,<code>Iframe</code>,<code>Ajax</code>和<code>Image</code>中<b>跨站</b>的请求受到的影响最大。</p><h3>解决方法</h3><p>解决方法也很简单粗暴：强行把<code>SameSite</code>设置成<code>None</code>。不过需要特别注意几点：</p><p>1.<code>SameSite</code>设置成<code>None</code>后，Cookie就必须同时加上<code>Secure</code>属性</p><div class="highlight"><pre><code class="language-js"><span class="nx">ctx</span><span class="p">.</span><span class="nx">cookies</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'sessionId'</span><span class="p">,</span> <span class="p">{</span>
  <span class="nx">maxAge</span><span class="o">:</span> <span class="mi">1000</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">60</span><span class="p">,</span>
  <span class="nx">secure</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
  <span class="nx">sameSite</span><span class="o">:</span> <span class="s1">'none'</span><span class="p">,</span>
<span class="p">});</span>
</code></pre></div><p>这也意味着，你的网站需要支持<code>https</code>！(<code>Lax</code>和<code>Strict</code>不需要支持https)</p><p>如果线上的网站同时支持<code>http</code>和<code>https</code>，你可能需要让运维将<code>http</code>强制重定向到<code>https</code>(建议使用307状态码而不是302状态码)</p><p>2.部分浏览器不能加<code>SameSite=none</code>，比如IOS 12的Safari，以及一些老版本的chrome浏览器，它们会错误的把<code>SameSite=none</code>识别成<code>SameSite=strict</code>。</p><p>具体不兼容的浏览器可以见<b><a href="https://link.zhihu.com/?target=https%3A//www.chromium.org/updates/same-site/incompatible-clients" class=" wrap external" target="_blank" rel="nofollow noreferrer">这里</a></b> </p><p>因此后端要根据<code>UA</code>来判断是否加上<code>SameSite=none</code></p></div></div>

## 同站和同源
### 同源
<p>具有相同协议，主机名和端口的组合的网站被视为 相同来源 。其他所有内容均视为 跨域 </p>

### 站
<img src="https://img1.3s78.com/codercto/401a086a0e4b39c6602a07e2c4550654">
<p>像 .com 和 .org 这样的顶级域名( tld )会在根区域 数据库 中被列出。在上面的示例中， site 是 TLD 和它前面的部分域的组合。例如，给定一个URL   https://www.example.com:443/foo ， site 就是 example.com 。

然而，对于 .co.jp 或 .github 这样的域名。仅仅使用 .jp 或 .io 的 TLD 是不够细粒度的。而且也没有办法通过算法确定特定 TLD 的可注册域名级别。这就是创建“有效顶级域名”列表的原因。它们在公共后缀列表中定义。 etld 列表在 publicsuffix.org/list 上维护。

整个站点命名为 eTLD + 1 。例如，假定 URL 为 https://my-project.github.io ，则 eTLD 为 .github.io ，而 eTLD + 1 为 my-project.github.io ，这被视为 site 。换句话说， eTLD+1 是有效的 TLD 紧接其之前的域的一部分。</p>
<img src="https://img1.3s78.com/codercto/a4147e93d4816835b52cae7ece227954">

### 同站(same-site) 和 跨站(cross-site)
<p>具有相同 eTLD+1 的网站被视为 “同站”。具有不同 eTLD+1 的网站是 “跨站”。</p>

### schemeful same-site
<p>尽管 “同站” 忽略了协议(“无协议的同站”)，但在某些情况下，必须严格区分协议，以防止 HTTP 被用作弱通道。在这些情况下，一些文档将 “同站” 更明确地称为 schemeful same-site 。在这种情况下， http://www.example.com 和 https://www.example.com 被认为是跨站点的，因为协议不匹配。</p>

### 如何检查请求是否为 “同站”，“同源”，或“跨站”
<p> <code>Chrome</code> 发送请求时会附带一个 &nbsp; <code>Sec-Fetch-Site HTTP Header</code> 。截至2020年4月，还没有其他浏览器支持 <code>Sec-Fetch-Site</code> ，这个 <code>HTTP Header</code> 将有以下值之一: </p>
<ul> 
  <li> <p>cross-site</p> </li> 
  <li> <p>same-site</p> </li> 
  <li> <p>same-origin</p> </li> 
  <li> <p>none</p> </li> 
</ul>
<p>通过检查 Sec-Fetch-Site 的值，您可以确定请求是 “同站”，“同源” 还是 “跨站”。</p>

## 设置domain
<p>假设当前域名为blog.xiaoming.com，经测试发现，JS在写入cookie时：</p>

```
xei.setCookie('test1', 'abcd', 30, '/'); // 成功，默认写入当前域名
xei.setCookie('test2', 'abcd', 30, '/', 'blog.xiaoming.com'); // 成功，前面追加一个“.”
xei.setCookie('test3', 'abcd', 30, '/', 'abcd.xiaoming.com'); // 写入不成功
xei.setCookie('test4', 'abcd', 30, '/', '.xiaoming.com'); // 成功
xei.setCookie('test5', 'abcd', 30, '/', 'xiaoming.com'); // 成功，前面追加一个“.”
xei.setCookie('test6', 'abcd', 30, '/', 'www.qq.com'); // 写入不成功

```
<ol>
<li>不传domain，默认当前域名；</li>
<li>只要传了domain，则会强制在前面加上一个<code>.</code>，不管是一级还是二级域名；</li>
<li>domain只能是自身或者它的上级域名，否则写入不成功；</li>
</ol>