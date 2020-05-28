//赋值调用
var dataInter = {"name":"Jake","age":31};
var interText = doT.template($("#interpolationtmpl").text());
$("#interpolation").html(interText(dataInter));
//遍历调用
var dataEval  = {"name":"Jake","age":31,"interests":["basketball","hockey","photography"],"contact":{"email":"jake@xyz.com","phone":"999999999"}}
var evalText = doT.template($("#evaluationtmpl").text());
$("#evaluation").html(evalText(dataEval));
//数组调用
var dataArray  = {array:['天赋','努力','坚持']}
var arrText = doT.template($("#arraytmpl").text());
$("#arraytion").html(arrText(dataArray));
//if调用
var dataIf = {"name":"Jake","age":31}
var IfText = doT.template($("#conditionstmpl").text());
$("#condition").html(IfText(dataIf));
//编码调用
var dataEncode = {"uri":"http://bebedo.com/?keywords=Yoga","html":"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"};
var EncodeText = doT.template($("#encodetmpl").text());
$("#encode").html(EncodeText(dataEncode));
//动态模板
var dataPart = {"name":"Jake","age":31,"html":"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"};
var defPart = {"joke":"<div>{{=it.name}} who?</div>"};
var partText = doT.template($("#parttmpl").text(), undefined, defPart);
$("#part").html(partText(dataPart));
