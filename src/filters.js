export function dateFormat(date, fmt) {
    date = date * 1000;
    date = date || new Date;
    fmt = fmt || 'yyyy-MM-dd hh:mm';
    var _date = new Date(date);
    var o = {
        'M+': _date.getMonth() + 1,
        'd+': _date.getDate(),
        'h+': _date.getHours(),
        'm+': _date.getMinutes(),
        's+': _date.getSeconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
}

export function cover_pic(item){
    if(item[0]){
      return item[0].url


    }
}

export function toNumber(item){
    
  return item = parseInt(item)
}

export function contenttype(item){
  let obj = {}
    
  switch(item){
        case '1': obj.contenttype = '话题';return obj.contenttype;
        case '3': item.contenttype = '视频';return obj.contenttype;
        case '4': obj.contenttype = '直播';return obj.contenttype;
        case '5': item.contenttype = 'H5';return obj.contenttype;
        case '6': obj.contenttype = '人物';return obj.contenttype;
        case '7': item.contenttype = '活动';return obj.contenttype;
        case '8': item.contenttype = '逛街';return obj.contenttype;
        case '9': item.contenttype = '长文';return obj.contenttype;

      } 
      
}