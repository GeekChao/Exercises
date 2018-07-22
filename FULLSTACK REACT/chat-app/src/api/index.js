const fakeDataBase = {
    byName: {
        France: {
            id: 1,
            name: 'France',
            messages: {'sdf2342': {uid: 'sdf2342', text: 'How are you doing?'}}
        },
        Croatia: {
            id: 2,
            name: 'Croatia',
            messages: {'17dsfg822gf': {uid: '17dsfg822gf', text: 'I am good'}}
        }
    },
    names: ['France', 'Croatia']
};

const delay = (data, time) => new Promise(
        resolve => setTimeout(() => resolve(data), time),
        reject => reject('Fail fetch')
);

export const fetchTabNames = () => {
    const names = fakeDataBase.names;
    return delay(names, 500);
}

export const fetchByName = (tabName) => {
    const tab = fakeDataBase.byName[tabName];
    return delay(tab, 500);
};

export const addMsgFromTab = (tabName, message) => {
    const tab = fakeDataBase.byName[tabName];
    tab.messages[message.uid] = message;
};

export const deleteMsgFromTab = (tabName, uid) => {
    const tab = fakeDataBase.byName[tabName];
    delete tab.messages[uid];
};