// code your solution here

function winCheck(element){
    return (element.result === 'W')
}

function superbowlWin(record){
    if (record.find(winCheck)){
        return record.find(winCheck).year;
    }
    else{
        return undefined;
    }
}