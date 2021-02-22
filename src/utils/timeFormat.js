export function timeFormat(time){
    if(!time) return ''
    let date=new Date(time);
    return ((date.getMonth()+1)+'/'+date.getDay()+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes());
}