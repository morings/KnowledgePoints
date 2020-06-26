
# 前端缓存图

 <img src="https://github.com/morings/KnowledgePoints/raw/master/cache.png">

 # WebSql
 Local Storage和Session Storage，这两个是以键值对存储的解决方案，存储少量数据结构很有用，但是对于大量结构化数据就无能为力了，灵活大不够强大。html5引入Web SQL Database概念，它使用 SQL 来操纵客户端数据库的 API，这些 API 是异步的，规范中使用的方言是SQLlite。
 WebSQL是前端的一个独立模块，是web存储方式的一种，我们调试的时候会经常看到，只是一般很少使用。并且，当前只有谷歌支持，ie和火狐均不支持。
 可indexDB的区别就是它是关系型数据库，可以使用sql语句.
 ## 作用域
保存在本地，有同域限制，清除浏览器缓存失效
## 主要概念
<ol>
<li><strong>openDatabase</strong>：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。</li>
<li><strong>transaction</strong>：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。</li>
<li><strong>executeSql</strong>：这个方法用于执行实际的 SQL 查询。</li>
</ol>

## 打开数据库
我们可以使用 openDatabase() 方法来打开已存在的数据库，如果数据库不存在，则会创建一个新的数据库，使用代码如下：
```
var db = openDatabase('test','1.0','测试',2*1024*1024);
```
该方法有五个参数
1.数据库名
2.数据库版本号
3.数据库描述文字
4.数据库大小
5创建完成后的回调

## 执行相关sql操作
```
var db = openDatabase('test','1.0','测试'，2*1024*1024);
db.transaction(function(tx){
  //可以使用tx.executeSql执行sql语句
})
```
## 常用的sql语句
```
//新建表
'CREATE TABLE IF NOT EXISTS 表名 (列名称1 PRIMARY KEY,列名称2 UNIQUE ,列名称3)'
//删除表
'DROP TABLE 表名'
//清空表
'DELETE FROM 表名'
//删除条目
'DELETE FROM 表名 WHERE 列名称1 = ? and 列名称2 = ?'
//新增一条
'INSERT INTO 表名 VALUES (?,?,?,?,?,?,?)'　//为所有列添加值
'INSERT INTO 表名 (列名称2,列名称4,列名称6) VALUES (?,?,?)'　//为指定列添加值
//批量增加
insert into persons 
(id_p, lastname , firstName, city )
values
(200,'haha' , 'deng' , 'shenzhen'),
(201,'haha2' , 'deng' , 'GD'),
(202,'haha3' , 'deng' , 'Beijing')
//更新一条
'UPDATE 表名 SET 列名称1 = ? where 列名称2 = ? AND 列名称3 = ?'
'UPDATE 表名 SET 列名称1 = ?,列名称2 = ?,列名称3 = ? where 列名称2 = ? AND 列名称3 = ?'
　//根据主键存在与否，更新或添加一条数据
'replace into 表名 (列名称1,列名称2,列名称3,列名称4,列名称5) VALUES (?,?,?,?,?) '
　//查找（更多查询请根据自己的需要自由组合）
'select * from 表名 where 列名称1 = ? and 列名称1 >= ?'　//常规查找
'select * from 表名 where 列名称1 = ? or 列名称1 >= ?'　//常规查找

'select * from 表名 ORDER BY ?'　//指定排序项
'select * from 表名 ORDER BY ? LIMIT 2;'//只查找符合条件的2条

WHERE 列名称 IS NOT NULL //非空
WHERE 列名称 LIKE "111%" //111开头的
WHERE 列名称 LIKE "%111" //111结尾的
WHERE 列名称 LIKE "%111%" //包含111的
WHERE 列名称 NOT LIKE "%111%" //不包含111的
'_a_'    //三位且中间字母是a的
'_a'    //两位且结尾字母是a的
'a_'    //两位且开头字母是a的

WHERE 列名称 GLOB > 111　//大于111
WHERE 列名称 GLOB >= 111　//大于等于111
WHERE 列名称 GLOB != 111　//不等于111 

WHERE 列名称 GLOB '111*'　//111开头的
WHERE 列名称 IN ( 25, 27 ) 　//值为25或27的
WHERE 列名称 NOT IN ( 25, 27 ) 　//值不为25或27的
WHERE 列名称 BETWEEN 25 AND 27 　//值在25到27之间的
WHERE 列名称 IN ( '25', '27' ) 　//注意:拼接sql时不要忘记引号

//索引
'CREATE INDEX IF NOT EXISTS 索引名 on 表名 (列名称1, 列名称2) '
'DROP INDEX 索引名'
```
对于sql语句执行成功后的回调函数，高版本浏览器可使用result.rows[i]来获取任一行的结果；