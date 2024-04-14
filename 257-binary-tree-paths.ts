import { TreeNode } from "./TreeNode"

function binaryTreePaths (root: TreeNode | null): string[] {
    function helper (root: TreeNode | null, path: number[]): number[][] {
        const ret: number[][] = []
        const curPath = [...path]

        if (root) {
            curPath.push(root.val)
        }

        if (root?.left) {
            const leftPaths = helper(root.left, curPath)
            ret.push(...leftPaths)
        }
        if (root?.right) {
            const rightPaths = helper(root.right, curPath)
            ret.push(...rightPaths)
        }

        if (root?.left === null && root?.right === null) {
            ret.push(curPath)
        }

        return ret;
    }

    const tmp = helper(root, [])
    return tmp.map(x => x.join("->"))
};
