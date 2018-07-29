const reg =/\/:(\D+)$/i;

const containDynamicParam = (pathname) => {
    const found = pathname.match(reg);
    if(found){
        return {param: found[1], pathname: pathname.substr(0, found.index)}
    }

    return {pathname};
};

module.exports = containDynamicParam;