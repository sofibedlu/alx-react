import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const object = fromJS(object);
    return object.getIn(array);
}