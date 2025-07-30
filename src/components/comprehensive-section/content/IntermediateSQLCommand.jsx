import React from 'react';

const IntermediateSQLCommand = ({ currentSection, onNavigate, sidebarItems }) => {
    // Find current index and calculate previous/next sections
    const currentIndex = sidebarItems.findIndex(item => item.id === currentSection);
    const previousSection = currentIndex > 0 ? sidebarItems[currentIndex - 1] : null;
    const nextSection = currentIndex < sidebarItems.length - 1 ? sidebarItems[currentIndex + 1] : null;

    const handlePrevious = () => {
        if (previousSection) {
            onNavigate(previousSection.id);
        }
    };

    const handleNext = () => {
        if (nextSection) {
            onNavigate(nextSection.id);
        }
    };

    return (
        <div className="content-page">
            <h1 className="content-title">Intermediate SQL Command</h1>

            {/* Top Navigation */}
            <div className="content-navigation">
                <button 
                    className={`nav-button prev-button ${!previousSection ? 'disabled' : ''}`}
                    onClick={handlePrevious}
                    disabled={!previousSection}
                >
                    &lt; Previous
                </button>
                <button 
                    className={`nav-button next-button ${!nextSection ? 'disabled' : ''}`}
                    onClick={handleNext}
                    disabled={!nextSection}
                >
                    Next &gt;
                </button>
            </div>

            <div className="content-text">
                <div className="sql-commands-table">
                    <div className="table-header">
                        <div className="header-cell">SQL Command</div>
                        <div className="header-cell">Category</div>
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Example on use</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">JOIN / INNER JOIN</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns rows only when there is a match in both joined tables based on a related column.</div>
                        <div className="table-cell code">SELECT t1.col, t2.col FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">LEFT JOIN / LEFT OUTER JOIN</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns all rows from the left table and matching rows from the right table; NULL values are used for non-matching right table columns.</div>
                        <div className="table-cell code">SELECT t1.col, t2.col FROM table1 t1 LEFT JOIN table2 t2 ON t1.id = t2.id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">RIGHT JOIN / RIGHT OUTER JOIN</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns all rows from the right table and matching rows from the left table; NULL values are used for non-matching left table columns.</div>
                        <div className="table-cell code">SELECT t1.col, t2.col FROM table1 t1 RIGHT JOIN table2 t2 ON t1.id = t2.id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">FULL OUTER JOIN / FULL JOIN</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns all rows when there is a match in either the left or the right table; NULL values are used for non-matching columns.</div>
                        <div className="table-cell code">SELECT t1.col, t2.col FROM table1 t1 FULL OUTER JOIN table2 t2 ON t1.id = t2.id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CROSS JOIN</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns the Cartesian product of rows from all tables in the join, combining every row from the first table with every row from the second.</div>
                        <div className="table-cell code">SELECT t1.col, t2.col FROM table1 t1 CROSS JOIN table2 t2;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">SELF JOIN</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Joins a table to itself, allowing comparison of rows within the same table using aliases.</div>
                        <div className="table-cell code">SELECT e1.name, e2.name FROM employees e1, employees e2 WHERE e1.manager_id = e2.employee_id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">COUNT()</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns the number of rows in a result set or meeting a condition.</div>
                        <div className="table-cell code">SELECT COUNT(*) FROM table_name WHERE condition;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">SUM()</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns the sum of values in a specified numeric column.</div>
                        <div className="table-cell code">SELECT SUM(numeric_column) FROM table_name;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">AVG()</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns the average value of a specified numeric column.</div>
                        <div className="table-cell code">SELECT AVG(numeric_column) FROM table_name;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">MIN()</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns the minimum value in a specified column.</div>
                        <div className="table-cell code">SELECT MIN(column) FROM table_name;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">MAX()</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns the maximum value in a specified column.</div>
                        <div className="table-cell code">SELECT MAX(column) FROM table_name;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">GROUP BY</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Groups rows with the same values in one or more columns into a summary row, often used with aggregate functions.</div>
                        <div className="table-cell code">SELECT group_column, COUNT(*) FROM table_name GROUP BY group_column;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">HAVING</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Filters the results of a GROUP BY clause based on specified conditions applied to the groups.</div>
                        <div className="table-cell code">SELECT group_column, COUNT(*) FROM table_name GROUP BY group_column HAVING COUNT(*) 10;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Subquery</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">A query nested inside another SQL query, used in SELECT, FROM, WHERE, or HAVING clauses to retrieve data for the outer query.</div>
                        <div className="table-cell code">SELECT column FROM table WHERE column IN (SELECT another_column FROM another_table);</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">UNION</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Combines the result sets of two or more SELECT statements, removing duplicate rows to ensure uniqueness.</div>
                        <div className="table-cell code">SELECT column FROM table1 UNION SELECT column FROM table2;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">UNION ALL</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Combines the result sets of two or more SELECT statements, including all rows without removing duplicates.</div>
                        <div className="table-cell code">SELECT column FROM table1 UNION ALL SELECT column FROM table2;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">INTERSECT</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns rows that are common to the result sets of two or more SELECT statements.</div>
                        <div className="table-cell code">SELECT column FROM table1 INTERSECT SELECT column FROM table2;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">EXCEPT / MINUS</div>
                        <div className="table-cell">Intermediate SQL</div>
                        <div className="table-cell">Returns rows from the first SELECT statement that are not present in the result set of the second SELECT statement.</div>
                        <div className="table-cell code">SELECT column FROM table1 EXCEPT SELECT column FROM table2;</div>
                    </div>
                </div>

                <div className="note-section">
                    <h4>Note:</h4>
                    <p>
                        Intermediate SQL commands build upon the basics, enabling more complex data interactions. Joining
                        tables is a fundamental skill for working with relational databases, where data is often spread across
                        multiple tables to ensure normalization and reduce redundancy.
                    </p>

                    <p>
                        The JOIN clause, in its various forms (INNER, LEFT, RIGHT, FULL OUTER), allows users to combine data
                        from two or more tables based on relationships defined by common columns.
                        INNER JOIN retrieves only the matching rows from both tables, whereas LEFT JOIN includes all rows from
                        the left table and the matching rows from the right, filling in NULL for unmatched columns from the
                        right table. RIGHT JOIN operates similarly but prioritizes the right table, and FULL OUTER JOIN returns
                        all rows from both tables, with NULL for non-matches. The CROSS JOIN creates a Cartesian product,
                        combining every row from one table with every row from another, which can be useful for generating all
                        possible combinations. Lastly, a SELF JOIN allows a table to be joined with itself, which is particularly
                        useful for analyzing hierarchical data or comparing rows within the same table.
                    </p>

                    <p>
                        Aggregate functions provide the ability to summarize and analyze data. COUNT(), SUM(), AVG(), MIN(), and
                        MAX() are essential for performing calculations on sets of data, such as counting the number of records,
                        calculating totals, averages, and identifying extreme values. The GROUP BY clause works in tandem with
                        these functions by grouping rows based on one or more columns, allowing aggregate functions to be
                        applied to each group. The HAVING clause then filters these grouped results based on specified
                        conditions, similar to how WHERE filters individual rows.
                    </p>

                    <p>
                        Subqueries, or nested queries, are a powerful tool for performing more intricate data retrieval. A subquery
                        can be used within the SELECT, FROM, WHERE, or HAVING clauses of an outer query to provide a set of
                        values or a table that the outer query can then use.3 This allows for the construction of queries that
                        depend on the results of other queries.
                    </p>

                    <p>
                        Set operations enable the combination or comparison of the results of multiple SELECT statements.
                        UNION merges the result sets of two or more queries, removing any duplicate rows. UNION ALL performs
                        a similar merge but includes all rows, even duplicates. INTERSECT returns only the rows that are present
                        in the result sets of all combined queries, effectively finding the common elements.21 Finally, EXCEPT (or
                        MINUS in Oracle) returns the rows from the first query that are not present in the result set of the second
                        query, allowing for the identification of differences between datasets.
                    </p>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="content-navigation">
                <button
                    className={`nav-button prev-button ${!previousSection ? 'disabled' : ''}`}
                    onClick={handlePrevious}
                    disabled={!previousSection}
                >
                    &lt; Previous
                </button>
                <button
                    className={`nav-button next-button ${!nextSection ? 'disabled' : ''}`}
                    onClick={handleNext}
                    disabled={!nextSection}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default IntermediateSQLCommand;