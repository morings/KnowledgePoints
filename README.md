# responsetype和响应头contenttype的优先级
## responsetype>contenttype
<article id="wikiArticle">
  <p><strong>XMLHttpRequest.responseType&nbsp;</strong>属性是一个枚举类型的属性，返回响应数据的类型。它允许我们手动的设置返回数据的类型。如果我们将它设置为一个空字符串，它将使用默认的"text"类型。</p>
  <p>在工作环境(Work Environment)中将responseType的值设置为"document"通常会被忽略. 当将responseType设置为一个特定的类型时，你需要确保服务器所返回的类型和你所设置的返回值类型是兼容的。那么如果两者类型不兼容呢?恭喜你，你会发现服务器返回的数据变成了null，即使服务器返回了数据。还有一个要注意的是，给一个同步请求设置responseType会抛出一个<code>InvalidAccessError</code>&nbsp;的异常。</p>
  <p>responseType支持以下几种值：</p>
  <dl>
  <dt><code>""</code></dt>
  <dd><code>responseType</code> 为空字符串时，采用默认类型 <a href="/zh-CN/docs/Web/API/DOMString"><code>DOMString</code></a>，与设置为 <code>text</code> 相同。</dd>
  <dt><code>arraybuffer</code></dt>
  <dd><a href="/zh-CN/docs/Web/API/XMLHttpRequest/response"><code>response</code></a> 是一个包含二进制数据的 JavaScript <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>。</dd>
  <dt><code>blob</code></dt>
  <dd><code>response</code> 是一个包含二进制数据的 <a href="/zh-CN/docs/Web/API/Blob"><code>Blob</code></a> 对象 。</dd>
  <dt><code>document</code></dt>
  <dd><code>response</code> 是一个 <a href="/zh-CN/docs/Glossary/HTML">HTML</a> <a href="/zh-CN/docs/Web/API/Document"><code>Document</code></a> 或 <a href="/zh-CN/docs/Glossary/XML">XML</a> <a href="/zh-CN/docs/Web/API/XMLDocument"><code>XMLDocument</code></a>，这取决于接收到的数据的 MIME 类型。请参阅 <a href="/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">XMLHttpRequest 中的 HTML</a> 以了解使用 XHR 获取 HTML 内容的更多信息。</dd>
  <dt><code>json</code></dt>
  <dd><code>response</code> 是一个 JavaScript 对象。这个对象是通过将接收到的数据类型视为 <a href="/zh-CN/docs/Glossary/JSON">JSON</a> 解析得到的。</dd>
  <dt><code>text</code></dt>
  <dd><code>response</code> 是一个以 <a href="/zh-CN/docs/Web/API/DOMString"><code>DOMString</code></a> 对象表示的文本。</dd>
  <dt><code>ms-stream</code> <span class="icon-only-inline" title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
  <dd><code>response</code> 是下载流的一部分；此响应类型仅允许下载请求，并且仅受 Internet Explorer 支持。</dd>
  </dl>
</article>
