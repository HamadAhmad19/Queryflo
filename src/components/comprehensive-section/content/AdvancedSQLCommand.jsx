import React from 'react';

const AdvancedSQLCommand = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">Advanced SQL Command</h1>

            <div className="content-text">

                <div className="sql-commands-table">
                    <div className="table-header">
                        <div className="header-cell">SQL Command</div>
                        <div className="header-cell">Category</div>
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Example on use</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell command-name">ROW_NUMBER()</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Assigns a unique sequential integer to each row within a partition of a result set, based on the order specified.</div>
                        <div className="table-cell code">SELECT col, ROW_NUMBER() OVER (ORDER BY order_col) AS rn FROM table;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">RANK()</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Assigns a rank to each row within a partition, with gaps for ties in the ranking.</div>
                        <div className="table-cell code">SELECT col, RANK() OVER (ORDER BY order_col DESC) AS rnk FROM table;</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell command-name">DENSE_RANK()</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Assigns a rank to each row within a partition, without gaps for ties, resulting in consecutive ranks.</div>
                        <div className="table-cell code">SELECT col, DENSE_RANK() OVER (ORDER BY order_col DESC) AS drnk FROM table;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">NTILE(n)</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Distributes rows in a partition into n approximately equal groups, assigning a group number to each row.</div>
                        <div className="table-cell code">SELECT col, NTILE(4) OVER (ORDER BY order_col) AS quartile FROM table;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">LAG(col, offset, default)</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Accesses data from a previous row in the same result set, relative to the current row.</div>
                        <div className="table-cell code">SELECT col, LAG(col, 1, 0) OVER (ORDER BY order_col) AS prev_val FROM table;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">LEAD(col, offset, default)</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Accesses data from a subsequent row in the same result set, relative to the current row.</div>
                        <div className="table-cell code">SELECT col, LEAD(col, 1, 0) OVER (ORDER BY order_col) AS next_val FROM table;</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell command-name">FIRST_VALUE(col)</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Returns the value of the specified column from the first row of the window frame.</div>
                        <div className="table-cell code">SELECT col, FIRST_VALUE(col) OVER (PARTITION BY part_col ORDER BY order_col) AS first FROM table;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">LAST_VALUE(col)</div>
                        <div className="table-cell">Advanced SQL<br />(Window Function)</div>
                        <div className="table-cell">Returns the value of the specified column from the last row of the window frame.</div>
                        <div className="table-cell code">SELECT col, LAST_VALUE(col) OVER (PARTITION BY part_col ORDER BY order_col) AS last FROM table;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">WITH (CTE)</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Defines a temporary, named result set (Common Table Expression) that can be referenced within a single query, improving readability and allowing for recursive queries.</div>
                        <div className="table-cell code">WITH temp_table AS (SELECT * FROM another_table) SELECT * FROM temp_table WHERE condition;</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell command-name">CREATE PROCEDURE</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a stored procedure, a named set of SQL statements stored in the database that can be executed by name, often accepting parameters.</div>
                        <div className="table-cell code">CREATE PROCEDURE GetOrdersByCustomer (IN cust_id INT) BEGIN SELECT * FROM orders WHERE customer_id = cust_id; END;</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell command-name">CREATE TRIGGER</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a trigger, a database object associated with a table that activates in response to specific events (e.g., INSERT, UPDATE, DELETE) to automate actions.</div>
                        <div className="table-cell code">CREATE TRIGGER LogOrderInsert AFTER INSERT ON orders FOR EACH ROW BEGIN INSERT INTO order_log (order_id) VALUES (NEW.id); END;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CREATE INDEX</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates an index on one or more columns of a table to enhance the speed of data retrieval operations.</div>
                        <div className="table-cell code">CREATE INDEX idx_customer_id ON customers (customer_id);</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">DROP INDEX</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Deletes an existing index from a table.</div>
                        <div className="table-cell code">DROP INDEX idx_customer_id ON customers;</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell command-name">BEGIN TRANSACTION / START TRANSACTION</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Marks the beginning of a database transaction, a sequence of operations treated as a single logical unit.</div>
                        <div className="table-cell code">BEGIN TRANSACTION;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">COMMIT</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Saves all changes made within the current transaction to the database permanently.</div>
                        <div className="table-cell code">COMMIT;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">ROLLBACK</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Undoes all changes made within the current transaction, reverting the database to its state before the transaction began.</div>
                        <div className="table-cell code">ROLLBACK;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">SAVEPOINT</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Sets a point within a transaction to which you can later roll back, allowing for partial transaction rollback.</div>
                        <div className="table-cell code">SAVEPOINT savepoint_name;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">EXPLAIN PLAN / EXPLAIN</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Provides information about the execution plan the database will use for a query, aiding in performance analysis and optimization.</div>
                        <div className="table-cell code">EXPLAIN SELECT * FROM table WHERE column = 'value';</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CREATE VIEW</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a virtual table based on the result of a SQL statement, simplifying complex queries and providing data abstraction.</div>
                        <div className="table-cell code">CREATE VIEW customer_orders AS SELECT c.name, o.order_id FROM customers c JOIN orders o ON c.id = o.customer_id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">DROP VIEW</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Removes an existing view from the database.</div>
                        <div className="table-cell code">DROP VIEW customer_orders;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">ALTER VIEW</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Modifies an existing view in the database.</div>
                        <div className="table-cell code">ALTER VIEW customer_orders AS SELECT c.name, o.order_id, o.order_date FROM customers c JOIN orders o ON c.id = o.customer_id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">TRUNCATE TABLE</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Removes all rows from a table quickly, without logging individual row deletions, but keeps the table structure.</div>
                        <div className="table-cell code">TRUNCATE TABLE orders;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CREATE USER</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a new user account in the database system.</div>
                        <div className="table-cell code">CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">ALTER USER</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Modifies an existing user account.</div>
                        <div className="table-cell code">ALTER USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">DROP USER</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Removes a user account from the database system.</div>
                        <div className="table-cell code">DROP USER 'new_user'@'localhost';</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">GRANT</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Grants specific privileges or permissions to a user or role on database objects.</div>
                        <div className="table-cell code">GRANT SELECT ON customers TO 'new_user'@'localhost';</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">REVOKE</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Revokes previously granted privileges or permissions from a user or role.</div>
                        <div className="table-cell code">REVOKE SELECT ON customers FROM 'new_user'@'localhost';</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CREATE FUNCTION (User-Defined Function)</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a user-defined function that can be called within SQL statements to perform custom logic and return a scalar value or a table.</div>
                        <div className="table-cell code">CREATE FUNCTION CalculateTax (price DECIMAL, rate DECIMAL) RETURNS DECIMAL AS BEGIN RETURN price * rate; END;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">DROP FUNCTION</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Removes an existing user-defined function from the database.</div>
                        <div className="table-cell code">DROP FUNCTION CalculateTax;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CREATE MATERIALIZED VIEW</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a materialized view, which is a pre-computed snapshot of data from a query, stored in the database to improve performance of complex queries.</div>
                        <div className="table-cell code">CREATE MATERIALIZED VIEW monthly_sales AS SELECT DATE_TRUNC('month', order_date), SUM(amount) FROM orders GROUP BY 1;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">DROP MATERIALIZED VIEW</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Removes an existing materialized view from the database.</div>
                        <div className="table-cell code">DROP MATERIALIZED VIEW monthly_sales;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">MERGE INTO</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Performs insert, update, or delete operations on a target table based on the results of a join with a source table.</div>
                        <div className="table-cell code">MERGE INTO target_table AS target USING source_table AS source ON (target.id = source.id) WHEN MATCHED THEN UPDATE SET target.col = source.col WHEN NOT MATCHED THEN INSERT (id, col) VALUES (source.id, source.col);</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">CROSS APPLY</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Invokes a table-valued function for each row of an outer table, returning the combined results (similar to an inner join).</div>
                        <div className="table-cell code">SELECT o.order_id, ca.product_name FROM orders o CROSS APPLY GetOrderItems(o.order_id) ca;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">OUTER APPLY</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Invokes a table-valued function for each row of an outer table, returning the combined results, including rows from the outer table even if the function returns no rows (similar to a left join).</div>
                        <div className="table-cell code">SELECT c.customer_id, oa.order_id FROM customers c OUTER APPLY GetLatestOrder(c.customer_id) oa;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Table Variables</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Declares a temporary, table-like structure that exists only for the duration of a batch or procedure, used to store and process temporary data.</div>
                        <div className="table-cell code">DECLARE @temp_orders TABLE (order_id INT, order_date DATE); INSERT INTO @temp_orders SELECT id, date FROM orders WHERE customer_id = 1; SELECT * FROM @temp_orders;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Hierarchical Queries (CONNECT BY PRIOR)</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Constructs queries to retrieve data organized in a hierarchy, defining parent-child relationships within a table.</div>
                        <div className="table-cell code">SELECT employee_id, employee_name, manager_id FROM employees START WITH manager_id IS NULL CONNECT BY PRIOR employee_id = manager_id;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Fulltext Search (MATCH AGAINST)</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Performs searches on text columns using fulltext indexes, allowing for natural language queries and various search modes.</div>
                        <div className="table-cell code">SELECT title FROM articles WHERE MATCH (body) AGAINST ('search terms' IN NATURAL LANGUAGE MODE);</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Dynamic SQL (EXECUTE IMMEDIATE)</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Allows the construction and execution of SQL statements at runtime, providing flexibility for queries where the structure or parameters are not known in advance.</div>
                        <div className="table-cell code">DECLARE @sql VARCHAR(MAX) = 'SELECT * FROM ' + @table_name + ' WHERE ' + @condition; EXECUTE (@sql);</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Row-Level Security (RLS)</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Implements security policies to control access to rows in a database table based on user context or group membership.</div>
                        <div className="table-cell code">CREATE SECURITY POLICY SalesFilter ON sales.Orders FILTER FUNCTION sales.fn_securitypredicate(SalesPersonID) WITH SCHEMABINDING;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Indexed Views</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a view that is physically stored in the database, similar to a materialized view, improving query performance for the view.</div>
                        <div className="table-cell code">CREATE UNIQUE CLUSTERED INDEX idx_customer ON Sales.vw_CustomerOrders (CustomerID, OrderID);</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Cursors</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Creates a view that is physically stored in the database, similar to a materialized view, improving query performance for the view.</div>
                        <div className="table-cell code">DECLARE cursor_name CURSOR FOR SELECT column FROM table; OPEN cursor_name; FETCH NEXT FROM cursor_name INTO @variable; WHILE @@FETCH_STATUS = 0 BEGIN -- Perform operations SET @variable =... FETCH NEXT FROM cursor_name INTO @variable; END; CLOSE cursor_name; DEALLOCATE cursor_name;</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell command-name">Table Partitioning</div>
                        <div className="table-cell">Advanced SQL</div>
                        <div className="table-cell">Divides a large table into smaller, more manageable segments called partitions, improving query performance and manageability.</div>
                        <div className="table-cell code">CREATE TABLE orders (order_id INT, order_date DATE, amount DECIMAL) PARTITION BY RANGE (YEAR(order_date)) (PARTITION p0 VALUES LESS THAN (2023), PARTITION p1 VALUES LESS THAN (2024));</div>
                    </div>
                </div>

                <div className="note-section">
                    <h4>Note:</h4>
                    <p>
                        Advanced SQL commands unlock sophisticated data manipulation and analysis capabilities, crucial for
                        tackling complex problems in technical interviews, especially those at FAANG companies. Window
                        functions, identified as a key advanced SQL concept, allow for calculations across a set of table rows that
                        are related to the current row. Ranking functions like ROW_NUMBER(), RANK(), and DENSE_RANK() are
                        used to assign ranks to rows within a partition of a result set, based on specified criteria. Value functions
                        such as LAG() and LEAD() enable access to data in preceding or succeeding rows, facilitating comparisons
                        across rows. Aggregate functions can also be used as window functions with the OVER() clause to
                        compute running totals, averages, and other aggregate values within a defined window of rows.
                    </p>

                    <p>
                        Common Table Expressions (CTEs), defined using the WITH clause, provide a way to define temporary
                        result sets that can be referenced within a single query. CTEs enhance query readability and allow for the
                        construction of recursive queries, which are particularly useful for navigating hierarchical data structures.
                        Stored procedures, created with CREATE PROCEDURE, are named sets of SQL statements stored in the
                        database that can be executed by calling their name. They offer benefits such as improved security,
                        modularity, and performance. Triggers, created using CREATE TRIGGER, are database objects that
                        automatically execute a predefined set of SQL statements in response to certain events on a table, such
                        as INSERT, UPDATE, or DELETE. They are often used for auditing, maintaining data integrity, and
                        enforcing business rules.
                    </p>
                    <p>
                        Indexing, managed with CREATE INDEX and DROP INDEX, is a critical technique for optimizing query
                        performance. Creating indexes on frequently queried columns can significantly speed up data retrieval.
                        Transaction management commands, including BEGIN TRANSACTION, COMMIT, ROLLBACK, and
                        SAVEPOINT, are essential for ensuring data consistency and integrity when performing multiple related
                        database operations.
                    </p>

                    <p>
                        For performance analysis, the EXPLAIN PLAN (or EXPLAIN) command provides insights into how the
                        database will execute a query, allowing for identification of potential bottlenecks and areas for
                        optimization. Views, created with CREATE VIEW, offer a way to encapsulate complex queries and provide
                        simplified, virtual representation of data, enhancing security and ease of use. TRUNCATE TABLE offers a
                        fast way to remove all rows from a table while retaining the table structure. Managing database access
                        involves commands like CREATE USER, ALTER USER, DROP USER, GRANT, and REVOKE to control user
                        accounts and their permissions. User-defined functions, created with CREATE FUNCTION, allow users to
                        extend the functionality of SQL by writing custom functions that can be used in queries. Materialized
                        views, created with CREATE MATERIALIZED VIEW, store the results of a query to improve performance for
                        frequently executed, complex queries. The MERGE INTO statement provides a way to perform conditional
                        updates and inserts in a single operation. CROSS APPLY and OUTER APPLY are used to invoke table-
                        valued functions for each row of an outer table, offering more flexible ways to join tables with functions.
                        Table variables, declared using DECLARE @variable TABLE (...), are temporary table-like structures useful
                        for storing data within a batch or procedure. Hierarchical queries, often using CONNECT BY PRIOR in
                        Oracle, are designed for retrieving and manipulating data with parent-child relationships. Fulltext search
                        capabilities, accessed via commands like MATCH AGAINST, allow for efficient searching of text data using
                        specialized indexes. Dynamic SQL enables the construction and execution of SQL statements that are
                        not fully known at compile time. Row-level security (RLS) provides fine-grained control over data access
                        at the row level. Indexed views are materialized views that are automatically updated when the base
                        tables change. Cursors allow for sequential processing of rows in a result set. Table partitioning divides
                        large tables into smaller, more manageable parts to improve performance and manageability.
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
                    Previous
                </button>
                <button
                    className={`nav-button next-button ${!nextSection ? 'disabled' : ''}`}
                    onClick={handleNext}
                    disabled={!nextSection}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdvancedSQLCommand;