import { TreeNode } from "./TreeNode";

/**
 * Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
    Output: [3,9,20,null,null,15,7]
 * @param inorder 
 * @param postorder 
 */
function buildTree (inorder: number[], postorder: number[]): TreeNode | null {
    function search (inOrder: number[], is: number, ie: number, t: number) {
        for (let i = is; i <= ie; i++) {
            if (inOrder[i] === t)
                return i;
        }

        return -1;
    }

    function helper (inorder: number[], is: number, ie: number, postorder: number[], ps: number, pe: number) {
        if (pe < ps) {
            return null;
        }

        if (pe == ps) {
            return new TreeNode(postorder[pe]);
        }

        const r = new TreeNode(postorder[pe]);
        const i = search(inorder, is, ie, r.val)
        r.left = helper(inorder, is, i - 1, postorder, ps, ps + (i - is) - 1)
        r.right = helper(inorder, i + 1, ie, postorder, pe - (ie - i), pe - 1)
        return r;
    }

    return helper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};