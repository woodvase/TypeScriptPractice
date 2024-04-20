import { TreeNode } from "./TreeNode";

function convertBST (root: TreeNode | null): TreeNode | null {
    function helper (root: TreeNode | null, preVal: number[]) {
        if (root === null)
            return;
        helper(root.right, preVal)
        const newVal = root.val + preVal[0];
        root.val = newVal
        preVal[0] = newVal
        console.log({preVal})
        helper(root.left, preVal)
    }

    if (!root) return null;
    helper(root, [0])

    return root;
};