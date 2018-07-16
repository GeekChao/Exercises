function actionCreator(type, ...rest){
    let [activeThreadId, id, text] = rest;
    switch(type){
        case 'ADD_MSG':
            return {
                type,
                uid: id,
                text,
                activeThreadId,
            };
        case 'DEL_MSG':
            return{
                type,
                uid: id,
                activeThreadId,
            };
        case 'OPEN_THREAD':
            return{
                type,
                activeThreadId,
            };
        default:
            break;
    }
}

export default actionCreator;