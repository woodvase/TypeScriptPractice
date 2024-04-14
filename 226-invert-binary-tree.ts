import { TreeNode } from "./TreeNode";

function invertTree (root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    if (root.left === null && root.right === null) return root;
    invertTree(root.left)
    invertTree(root.right)
    const tmp = root.left;
    root.left = root.right
    root.right = tmp
    return root;
};