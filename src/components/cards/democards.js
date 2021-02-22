import {Card} from 'antd'
import './democard.less'
export function DCard(props){
    console.log(props);
    let cName;
    if(!props.cardcolor ){
        cName='graycard';
}else if(props.cardcolor === 'blue'){
    cName='bluecard';
}
else if(props.cardcolor === 'green'){
    cName='greencard';
}else if(props.cardcolor === 'yellow'){
    cName='yellowcard';
}
console.log(cName);
    return (<Card bordered='true' {...props} className={cName}></Card>)
}