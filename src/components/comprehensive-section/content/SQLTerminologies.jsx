import React from 'react';

const SQLTerminologies = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">SQL Terminologies</h1>
            
            <div className="content-text">
                <h3>SQL</h3>
                <ol>
                    <li>SQL stands for Structured Query Language.</li>
                    <li>SQL is a programming language used for managing relational databases.</li>
                    <li>Relational databases store data in tables, which are organized into rows and columns.</li>
                </ol>

                <h3>What is RDBMS?</h3>
                <ol>
                    <li>RDBMS stands for Relational Database Management System.</li>
                    <li>RDBMS is a software system used for creating, maintaining, and managing relational databases.</li>
                    <li>Examples of RDBMS include MySQL, Oracle, Microsoft SQL Server, and PostgreSQL.</li>
                </ol>

                <h3>What is a Database?</h3>
                <ol>
                    <li>A database is a collection of data that is organized and stored in a structured manner.</li>
                    <li>Databases can be used for various purposes, such as storing customer information, financial data, or product inventory.</li>
                    <li>Examples of databases include sales databases, employee databases, and customer databases.</li>
                </ol>

                <h3>What is a Schema?</h3>
                <ol>
                    <li>A schema is a logical container for database objects, such as tables, views, and indexes.</li>
                    <li>Schemas can be used to organize database objects and grant access to specific objects to specific users.</li>
                    <li>Examples of schemas include HR schema, Sales schema, and Marketing schema.</li>
                </ol>

                <h3>What is a Table?</h3>
                <ol>
                    <li>A table is a collection of related data that is organized into rows and columns.</li>
                    <li>Tables are the fundamental unit of storage in a relational database.</li>
                    <li>Tables can be used to store information about customers, products, or employees.</li>
                </ol>

                <h3>What is a Field?</h3>
                <ol>
                    <li>A field is a column in a table that represents a specific attribute of the data.</li>
                    <li>Fields are also called columns or attributes.</li>
                    <li>Examples of fields include customer name, product price, and employee salary.</li>
                </ol>

                <h3>What is a Record?</h3>
                <ol>
                    <li>A record is a row in a table that contains information about a specific entity.</li>
                    <li>Records are also called rows or tuples.</li>
                    <li>Examples of records include a customer record, a product record, or an employee record.</li>
                </ol>

                <h3>What is a Primary Key?</h3>
                <ol>
                    <li>A primary key is a unique identifier for a record in a table.</li>
                    <li>Primary keys are used to ensure that each record in a table is unique and can be identified.</li>
                    <li>Primary keys can be composed of one or more columns.</li>
                </ol>

                <h3>What is a Foreign Key?</h3>
                <ol>
                    <li>A foreign key is a column in a table that is used to reference the primary key of another table.</li>
                    <li>Foreign keys are used to establish relationships between tables.</li>
                    <li>Foreign keys are used to enforce referential integrity between tables.</li>
                </ol>

                <h3>What is a Null Value?</h3>
                <ol>
                    <li>A null value is a value that indicates that no data is present in a field.</li>
                    <li>Null values are used to represent missing or unknown data.</li>
                    <li>Null values are used to enforce data integrity and consistency in a database.</li>
                </ol>

                <h3>What are SQL Constraints?</h3>
                <ol>
                    <li>SQL constraints are rules that are used to enforce data integrity in a database.</li>
                    <li>SQL constraints can be used to enforce rules such as unique values, not null values, and referential integrity.</li>
                    <li>Examples of SQL constraints include primary key constraints, foreign key constraints, unique constraints, and check constraints.</li>
                </ol>

                <h3>What is a Query?</h3>
                <ol>
                    <li>A request for data from a database. Queries are used to retrieve, modify, and delete data from tables.</li>
                </ol>
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

export default SQLTerminologies;