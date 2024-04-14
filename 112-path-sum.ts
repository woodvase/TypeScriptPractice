import { TreeNode } from "./TreeNode";

function hasPathSum (root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;
    if (root.val === targetSum && root.left === null && root.right === null) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};