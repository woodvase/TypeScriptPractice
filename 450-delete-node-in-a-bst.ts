import { TreeNode } from "./TreeNode";

function deleteNode (root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;
    if (root.val === key) {
        const n = insertInBst(root.right, root.left)
        root.right = null;
        root.left = null;
        return n;
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root;
};

function insertInBst (root: TreeNode | null, node: TreeNode | null): TreeNode | null {
    if (!root)
        return node;
    if (!node)
        return root;
    if (root.val > node.val) {
        root.left = insertInBst(root.left, node)
    } else {
        root.right = insertInBst(root.right, node)
    }

    return root;
}