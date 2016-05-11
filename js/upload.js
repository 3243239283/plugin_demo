/**
 * Created by Administrator on 2016/5/10.
 */
define(function(require,exprots,moudle){
    var $=require('jquery');
    var uploadifycss=require('uploadifycss');
    var uploadify=require('uploadify');
    

    $("#file").uploadify({  
    	'swf': 'plugin/uploadify/uploadify.swf',
        'cancelImage': 'plugin_demo/plugin/uploadify/uploadify-cancel.png',
        'multi': true,
        'buttonText': '文件上传'
    });

});

























