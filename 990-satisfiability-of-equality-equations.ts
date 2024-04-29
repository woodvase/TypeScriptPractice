import { UnionFind } from "./UnionFind";

/**
 * You are given an array of strings equations that represent relationships between variables where each string equations[i] is of length 4 
 * and takes one of two different forms: "xi==yi" or "xi!=yi".Here, xi and yi are lowercase letters (not necessarily different)
 * that represent one-letter variable names. 
 * Return true if it is possible to assign integers to variable names so as to satisfy all the given equations, or false otherwise.
 * @param equations 
 */
function equationsPossible (equations: string[]): boolean {
    function destructInput (i: string): [string, number, number] {
        const aChar = "a".charCodeAt(0)
        const o = i.slice(1, 2)
        const fc = i[0];
        const ec = i[3];
        return [o, fc.charCodeAt(0) - aChar, ec.charCodeAt(0) - aChar]
    }

    const destructed = equations.map(destructInput)
    const equf = new UnionFind(26);
    for (const e of destructed.filter(x => x[0] === "=")) {
        equf.union(e[1], e[2])
    }

    for (const e of destructed.filter(x => x[0] === "!")) {
        if (equf.find(e[1]) === equf.find(e[2])) {
            return false
        }
    }

    return true;
}


console.log(equationsPossible(["a==b", "b!=c", "c==a"]))