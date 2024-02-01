/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let listS = [];

    for (let i = 0; i < list1.length; i++) {
        listS.push(list1[i])
    }
    for (let i = 0; i < list2.length; i++) {
        listS.push(list2[i])
    }

    let result = listS.filter((a,b) => {return a-b})
    return {result, listS}
};


console.log(mergeTwoLists([, 2, 4], [1, 3, 4]))