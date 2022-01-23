Plan
    Restate
        Make a 16x16 grid of squares. Relationship between the squares and the grid size must remain the same regardless of the size of the squares. 
        Add functionality so that user can enter desired grid size
    Reduce
        Make a 4x4 grid of squares. 
            create 2 rows. Add 2 cells to each row.
        Make an 8x8 grid of squares.
        Add grid size functionality
            ask user for a number.
            This number is then used as the limiting factor when creating the grid. As long as the i and y variables used to create the grid are less than the user entered number the program will continue to add cells to the grid. 
        Remove previous grid before adding new grid.
            remove all children of container. Get all rows. for each row remove the row from container.
