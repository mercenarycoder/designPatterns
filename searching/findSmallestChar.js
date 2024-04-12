/* 
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
*/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function getAsciiCode(character){
    return character.charCodeAt(0);
}
var nextGreatestLetter = function(letters, target) {
    let high = letters.length;
    if(getAsciiCode(target)> getAsciiCode(letters[high-1]))
    {
        return letters[0];
    }
    let letters2 = [...new Set(letters)];
    high = letters2.length;
    let low = 0;
    let mid = Math.floor((high+low)/2);
    while(high>=low){
        mid = Math.floor((high+low)/2);
        if(letters2[mid]===target){
            if(mid+1 >= letters2.length){
                return letters2[0];
            }
            return letters2[mid+1];
        } else if(getAsciiCode(letters2[mid])<getAsciiCode(target)){
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return letters2[low];
};

let arr = ["c","f","j","j"];
let unique = [...new Set(arr)];
console.log(unique);
let target = "c";
console.log(nextGreatestLetter(arr,target)); 