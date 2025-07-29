import React from 'react';

const BasicSQLCommand = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">Basic SQL Command</h1>

            <div className="content-text">
                <div className="sql-commands-table">
                    <div className="table-header">
                        <div className="header-cell">SQL Command</div>
                        <div className="header-cell">Category</div>
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Example on use</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">SELECT</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Retrieves data from one or more tables, specifying the columns to be returned.</div>
                        <div className="table-cell code">SELECT column_name FROM table_name;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">FROM</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Specifies the table(s) from which to retrieve data, indicating the source for the SELECT statement.</div>
                        <div className="table-cell code">SELECT column_name FROM table_name;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">WHERE</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Filters the result set to include only rows that meet specified conditions using comparison and logical operators.</div>
                        <div className="table-cell code">SELECT column_name FROM table_name;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">SELECT DISTINCT</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Retrieves only unique rows from the result set, eliminating duplicates based on the selected columns.</div>
                        <div className="table-cell code">SELECT DISTINCT column_name FROM table_name;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">ORDER BY</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Sorts the result set based on specified columns, arranging rows in ascending (ASC) or descending (DESC) order.</div>
                        <div className="table-cell code">SELECT column_name FROM table_name ORDER BY column_name ASC;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">LIMIT</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Restricts the number of rows returned by the query (syntax varies by SQL dialect).</div>
                        <div className="table-cell code">SELECT column_name FROM table_name LIMIT 10;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">TOP</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Restricts the number of rows returned by the query (used in SQL Server).</div>
                        <div className="table-cell code">SELECT TOP 10 column_name FROM table_name;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">FETCH FIRST</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Restricts the number of rows returned by the query (used in Oracle).</div>
                        <div className="table-cell code">SELECT column_name FROM table_name FETCH FIRST 10 ROWS ONLY;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">INSERT INTO</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Adds new rows to a table, allowing population of all or specific columns with data.</div>
                        <div className="table-cell code">INSERT INTO table_name (column1) VALUES (value1);</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">UPDATE</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Modifies existing records in a table by changing the values of specified columns in rows that meet a certain condition.</div>
                        <div className="table-cell code">UPDATE table_name SET column1 = value1 WHERE condition;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">DELETE FROM</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Removes rows from a table based on a specified condition; without a WHERE clause, it deletes all rows.</div>
                        <div className="table-cell code">DELETE FROM table_name WHERE condition;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">CREATE DATABASE</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Creates a new database within the database management system, requiring appropriate privileges.</div>
                        <div className="table-cell code">CREATE DATABASE database_name;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">CREATE TABLE</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Creates a new table within a database, defining its structure including column names, data types, and constraints.</div>
                        <div className="table-cell code">CREATE TABLE table_name (column1 datatype);</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">ALTER TABLE</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Modifies the structure of an existing table, allowing the addition, deletion, or modification of columns and constraints.</div>
                        <div className="table-cell code">ALTER TABLE table_name ADD column_name datatype;</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">DROP TABLE</div>
                        <div className="table-cell">Basic SQL</div>
                        <div className="table-cell">Deletes a table and its associated data permanently from the database.</div>
                        <div className="table-cell code">DROP TABLE table_name;</div>
                    </div>
                </div>
                
                <div className="note-section">
                    <h4>Note:</h4>
                    <p>
                        The SELECT command, in conjunction with FROM and WHERE, forms the bedrock of data retrieval in SQL. 
                        The SELECT statement specifies which columns should be included in the result, while FROM indicates 
                        the table or tables from which this data should be sourced.13 The WHERE clause introduces a crucial 
                        element of filtering, enabling users to pinpoint specific subsets of data based on defined criteria. For 
                        instance, a user might want to retrieve only customers from a specific city or orders placed within a 
                        certain date range. Beyond basic filtering, the SELECT DISTINCT command is used to ensure that only 
                        unique records are returned, which is valuable when dealing with datasets that might contain duplicates.
                    </p>
                    
                    <p>
                        Presenting data in an organized manner is often a requirement, and the ORDER BY clause fulfills this 
                        need by allowing the sorting of the result set based on one or more columns, in either ascending or 
                        descending order. When dealing with large datasets, it's often practical to limit the number of rows 
                        returned. Different SQL dialects offer various methods to achieve this: LIMIT is commonly used in 
                        MySQL and PostgreSQL, TOP in SQL Server, and FETCH FIRST in Oracle. Awareness of these variations is 
                        important for candidates preparing for interviews that might involve different database systems.
                    </p>
                    
                    <p>
                        Data manipulation is another fundamental aspect of SQL, encompassing the ability to add, modify, and 
                        remove data. The INSERT INTO command is used to add new records to a table, specifying either all 
                        columns or a subset thereof along with their corresponding values. To modify existing data, the UPDATE 
                        command is employed, allowing changes to be made to specific columns based on conditions defined in 
                        the WHERE clause.21 Conversely, the DELETE FROM command serves to remove rows from a table that 
                        satisfy a given condition, or all rows if no condition is specified.
                    </p>
                    
                    <p>
                        Finally, the basic structure of a database is defined using Data Definition Language (DDL) commands. 
                        CREATE DATABASE is the initial command to establish a new database. Within a database, CREATE TABLE 
                        is used to define the schema of individual tables, including column names and their data types. Existing 
                        tables can be modified using ALTER TABLE, which allows for adding or dropping columns, as well as 
                        altering their properties. When a table is no longer needed, DROP TABLE is used to permanently remove 
                        it from the database. These basic DDL commands are essential for setting up and managing the database 
                        environment.
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

export default BasicSQLCommand;