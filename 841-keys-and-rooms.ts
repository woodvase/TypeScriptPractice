function canVisitAllRooms(rooms: number[][]): boolean {
    function dfs (rooms: number[][], room: number, state: boolean[]) { 
        if (state[room])
            return;
        state[room] = true;
        const keys = rooms[room]
        for (const key of keys) { 
            dfs(rooms, key, state)
        }
    }

    const visited = Array(rooms.length).fill(false);
    dfs(rooms, 0, visited);
    return visited.every((x) => x)
};

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))