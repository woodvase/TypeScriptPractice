import { TreeNode } from "./TreeNode";

function levelOrder (root: TreeNode | null): number[][] {
    const ret: number[][] = []
    if (!root) return ret;
    const q: TreeNode[] = []
    q.push(root)
    while (q.length > 0) {
        const levelLen = q.length
        let i = 0;
        const level: number[] = [];
        while (i < levelLen) {
            const n = q.shift()
            if (n) {
                if (n.left) {
                    q.push(n.left)
                }
                if (n.right) {
                    q.push(n.right)
                }
                level.push(n.val)
            }
            i += 1;
        }
        ret.push(level)
    }

    return ret
};