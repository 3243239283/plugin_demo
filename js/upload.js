/**
 * Created by Administrator on 2016/5/10.
 */
define(function(require,exprots,moudle){
    var $=require('jquery');
    var uploadify=require('uploadify');
    var uploadifycss=require('uploadifycss');


    $("#uploadify").uploadify({
        'uploader': 'plugin/plugin/uploadify/uploadify.swf',
        'cancelImg': 'plugin/plugin/uploadify/cancel.png',
        'queueID': 'fileQueue',
        'auto': true,
        'buttonText': 'select',
        'simUploadLimit' : 1,
        'queueSizeLimit' : 1,
        'fileExt': '*.jpg;*.gif;*.jpeg;*.png;*.bmp;*.zip;*.rar;*.7z',
        onComplete: function(event, queueID, fileObj, response, data) {
            //转换为json对象
            var dataObj = eval("("+response+")");
            saveFile(dataObj);
        },
        onSelect:function(){
        },
        onError: function(event, queueID, fileObj) {
            alert("文件:" + fileObj.name + "上传失败");
        }
    });

});

























