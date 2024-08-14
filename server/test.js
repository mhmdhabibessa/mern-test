var isValidBST = function (root) {
    if (root == null) return true;
    let stack = [];
    let current = root;
    let prev = null;

    while (stack.length > 0 || current) {
        while (current) {
            stack.push(current);
            current = current.left;
            console.log("***")
        }
        console.log("___")
        current = stack.pop()

        if (prev != null && current.val <= prev.val) {
            console.log(current.val + "prev:" + prev.val)
            return false
        }
        prev = current;
        current = current.right
    }

    return true
}



isValidBST([2, 1, 3])