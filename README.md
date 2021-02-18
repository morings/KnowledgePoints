 <article>
 JavaScript引擎，不是逐条解释执行javaScript代码，而是按照代码块  
一段段解释执行。所谓代码块就是使用< script >标签分隔的代码段。

编译阶段：
    对于常见编译型语言（例如：Java）来说，编译步骤分为：词法分析->  
语法分析->语义检查->代码优化和字节生成。

    对于解释型语言（例如JavaScript）来说，通过词法分析和语法分析得到  
语法树后，就可以开始解释执行了。

（1）词法分析是将字符流(char stream)转换为记号流(token stream)，就  
像英文句子一个个单词独立翻译，举例：

代码：var result = testNum1 - testNum2; 

词法分析后 ：

    NAME "result"  
    EQUALS  
    NAME "testNum1"  
    MINUS  
    NAME "testNum2"  
    SEMICOLON 

（2）语法分析得到语法树，举例：
    条件语句 if(typeof a == "undefined" ){ a = 0; } else { a = a; } alert(a);
当JavaScript解释器在构造语法树的时候，如果发现无法构造，就会报语  
法错误，并结束整个代码块的解析。

 （3）“预编译”（并非完全的顺序执行，不是真正意义上的预编译）
    “function函数”是一等公民！编译阶段，会把定义式的函数优先执行，  
也会把所有var变量创建，默认值为undefined，以提高程序的执行效率！

总结：当JavaScript引擎解析脚本时，它会在预编译期对所有声明的变量  
和函数进行处理！并且是先预声明变量，再预定义函数！

JavaScript执行过程：

 二、JavaScript执行过程

 在解释过程中，JavaScript引擎是严格按着作用域机制（scope）来执行  
的。JavaScript语法采用的是词法作用域（lexcical scope），  
也就是说JavaScript的变量和函数作用域是在定义时决定的，  
而不是执行时决定的，由于词法作用域取决于源代码结构，所以  
 JavaScript解释器只需要通过静态分析就能确定每个变量、函数  
的作用域，这种作用域也称为静态作用域（static scope）。  
补充：但需要注意，with和eval的语义无法仅通过静态技术实现，  
实际上，只能说JS的作用域机制非常接近lexical scope。

JavaScript中的变量作用域在函数体内有效，无块作用域；

function func(){
    for(var i = 0; i < array.length; i++){  
       //do something here.  
    }  
    //此时i仍然有值，及i== array.length  
    print(i);//如果在java语言中，则无效
}

    JavaScript引擎在执行每个函数实例时，都会创建一个  
执行环境（execution context）。  
执行环境  中包含一个调用对象（call object）, 调用对   
象是一个scriptObject结构    
（“运行期上下文”），用来保存内部变量表varDecls、  
内嵌函数表  funDecls、父级引用列表upvalue等  
语法分析 结构（注意：varDecls  
和funDecls等信息是在语法分析阶段就已经得到，并  
保存在语法树中。  
函数实例执行时，会将这些信息从语法树复制到  
 scriptObject上）。  
scriptObject是与函数相关的一套静态系统，与函数实  
例的生命周期  
保持一致，函数执行完毕，该对象销毁。

    JavaScript引擎通过作用域链（scope chain）把多个  
嵌套的作用域串连在一起，并借助这个链条帮助JavaScript  
解释器检索变量的值  。这个作用域链相当于一个索引表，  
并通过编号来存 储它们的嵌套关系。当JavaScript解释器  
检索变量的值，会按着这个索引编号进行  
快速查找，直到找到全局对象（global object）为止，如  
果没有找到值，则传递一个特殊的undefined值。

案例分析：

var scope = "global";
scopeTest();
function scopeTest(){  
    alert(scope);  
    var scope = "local";  
    alert(scope);  
}

打印结果：undefined，local；
分析：省略词法分析等过程...执行遇到函数调用scopeTest()，  
创建一个调用对象（运行期上下文，函数执行完毕，该对象销毁）  
，构造它的作用域链时，搜索函数中用var声明的变量放入该链（  
在语法分析阶段就已经得到放在语法树中，此时只是拷贝过来）  
，因此scope在整个函数 
scopeTest内都是可见的(从函数体的第一行到最后一行)。虽  
然函数scopeTest的作用域链上有全局对象，自然能够访问  
到全局的scope， 但寻找变量时会沿着自身作用域链向上  
逐个找，因此首先找到自己的scope：undefined。 

    如果函数引用了外部变量的值，则JavaScript引擎会为该函数创建  
一个闭包体（closure），闭包体是一个完全封闭和独立的作用域，  
它不会在函数调用完毕后就被JavaScript引擎当做垃圾进行回收。  
闭包体可以长期存在，因此开发人员常把闭包体当做内存中的蓄水  
池，专门用来长期保存变量的值。只有当闭包体的外部引用被全部  
设置为null值时，该闭包才会被回收。当然，也容易引发垃圾泛滥，  
甚至出现内存外溢的现象。
</article>