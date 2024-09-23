import { fromJS } from 'immutable';

const getImmutableObject = (object) => {
    return fromJS(object);
}

const input = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

export default getImmutableObject;