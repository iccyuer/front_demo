/**
 * @desc 获取url上参数
 */
 function getQueryValue(queryName) {
  var search = window.location.search;
  if(!search)return '';
  var reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
  var r = search.substr(1).match(reg);
  if ( r != null ){
     return decodeURI(r[2]);
  }else{
     return null;
  }
}