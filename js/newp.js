let row, column;

// Outer loop for the number of rows (5 in this case)
for (row = 5; row >= 1; row--) {
    // Initialize an empty string for each row
    let line = "";

    // Inner loop for the number of columns in each row
    for (column = 5; column >= row; column--) {
        // Concatenate '*' to the line string for each column
        line += "*";
    }

    // Print the line for each row
    console.log(line);
}
