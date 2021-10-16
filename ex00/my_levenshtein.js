// Instructions
// Your function must take in 2 strings with the exact number of characters and return an integer representing the difference between them.

// If your parameters are not the same size then your function will return -1.

// If the two strings are the same size, you must then iterate through each string and determine which characters are different.
//  Each time there is a difference, it counts as 1.


function my_levenshtein (word1, word2){
    //this is where im storing how many occurences there are
    var total = 0;
    var index = 0;

    if (word1.length != word2.length){
        return -1;
    }else{
        while (index < word1.length){
            if (word1[index] != word2[index]){
                total++;
            }
            index++;
        }
    }
    return total;
};
