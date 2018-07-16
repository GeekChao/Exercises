export default {
    addMsg: (type, activeThreadId, uid, text) => ({
        type,
        activeThreadId,
        uid,
        text
    }),
    deleteMsg: (type, activeThreadId, uid) => ({
        type,
        activeThreadId,
        uid
    }),
    openThread: (type, activeThreadId) => ({
        type,
        activeThreadId
    })
};