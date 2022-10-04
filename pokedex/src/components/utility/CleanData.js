export default function CleanData (arr, moves){
    // console.log(arr) 1st argument is array.
    // 2nd argument is how to handle it. for example moves is up first.

    if (typeof moves === 'string') {
        console.log("in the moves == string in CleanData")
        console.log(moves)
        console.log(arr)
    }

}

// this is specifically for the
// apiv2/pokemon/id/moves endpoint
// the moves array comes back needing .split() for commas and separations.
// its an array[0] 1 value array with as many moves as the pokemon has available
// its not a clean array with moves[30] iterable values ready to go.

// modularizing this code but prepackaging it to specifically work with moves.
// i don't believe this function will be used in another way.