// 1 Disk

let moves_counter = 0; 

move = (f, t) => {
    moves_counter+= 1
    console.log(`${moves_counter}: Move disc from ${f} to ${t}!`)
    
}

// 1 Disk with 3 Pegs
moveVia = (f, v, t) => {
    move(f, v)
    move(v, t)
}

// n = number of disks, f = from position, h = helper position, t = target position
hanoi = (n, f, h, t) => {
    if (n == 0) {
        null
    } else {
        hanoi(n-1, f, t, h)
        move(f,t)
        hanoi(n-1,h,f,t)
    }


}


// hanoi(1, "A", "B", "C")
// hanoi(2, "A", "B", "C")
hanoi(4, "A", "B", "C")

// hanoi(3, "A", "C", "B")
// move("A", "C")
// hanoi(3, "B", "A", "C")

