import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
    const list1 = List(page1);
    const list2 = List(page2);
    return list1.concat(list2);
}   // concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

export function mergeElements(object1, object2) {
    const map1 = Map(object1);
    const map2 = Map(object2);
    return map1.merge(map2);
}   // merge() method is used to merge two or more objects. This method does not change the existing objects, but instead returns a new object.
