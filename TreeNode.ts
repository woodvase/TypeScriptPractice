export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function preorderTraversal (root: TreeNode | null): number[] {
    function preOrder (root: TreeNode | null, buffer: number[]) {
        if (root === null)
            return;
        buffer.push(root.val)
        preOrder(root.left, buffer)
        preOrder(root.right, buffer)

    }
    const ret: number[] = []
    preOrder(root, ret)
    return ret
};

export function preorderTraversalIterative (root: TreeNode | null): number[] {
    const stack: (TreeNode | null)[] = []
    const ret: number[] = []
    stack.push(root)
    while (stack.length > 0) {
        const n = stack.pop()
        if (n) {
            ret.push(n.val)
            stack.push(n.right)
            stack.push(n.left)
        }
    }
    return ret
};



export function inorderTraversal (root: TreeNode | null): number[] {
    function inOrder (root: TreeNode | null, buffer: number[]) {
        if (root === null)
            return;
        inOrder(root.left, buffer)
        buffer.push(root.val)
        inOrder(root.right, buffer)

    }
    const ret: number[] = []
    inOrder(root, ret)
    return ret
};

export function inorderTraversalIterative (root: TreeNode | null): number[] {
    const stack: (TreeNode | null)[] = []
    const ret: number[] = []
    let curr: TreeNode | null | undefined = root;
    while (curr || stack.length > 0) {
        if (curr) {
            stack.push(curr)
            curr = curr.left
        } else {
            curr = stack.pop()
            if (curr) {
                ret.push(curr.val)
                curr = curr.right
            }
        }
    }

    return ret
};

export function postorderTraversal (root: TreeNode | null): number[] {
    function postOrder (root: TreeNode | null, buffer: number[]) {
        if (root === null)
            return;
        postOrder(root.left, buffer)
        postOrder(root.right, buffer)
        buffer.push(root.val)
    }
    const ret: number[] = []
    postOrder(root, ret)
    return ret
};

export function postorderTraversalIterative (root: TreeNode | null): number[] {
    const stack: (TreeNode | null)[] = []
    const ret: number[] = []
    stack.push(root)
    while (stack.length > 0) {
        const n = stack.pop()
        if (n) {
            ret.push(n.val)
            stack.push(n.left)
            stack.push(n.right)
        }
    }
    return ret.reverse()
};
