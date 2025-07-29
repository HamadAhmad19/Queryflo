import React from 'react';

const CategoriesOfSQLCommand = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">Categories Of SQL Command</h1>
            
            <div className="content-text">
                <h3>Data Definition Language (DDL)</h3>
                <p>
                    DDL commands are used to define, modify, and delete the structure of database objects, such as tables, 
                    views, and indexes. Examples of DDL commands include
                </p>
                
                <div className="command-list">
                    <div className="command-item">
                        <span className="command-name">CREATE TABLE:</span>
                        <span className="command-description">Creates a new table in the database.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">ALTER TABLE:</span>
                        <span className="command-description">Modifies the structure of an existing table.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">DROP TABLE:</span>
                        <span className="command-description">Deletes a table and its associated data from the database.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">CREATE INDEX:</span>
                        <span className="command-description">Creates an index on one or more columns of a table to improve query performance.</span>
                    </div>
                </div>

                <h3>Data Manipulation Language (DML)</h3>
                <p>
                    DML commands are used to manipulate the data stored in the database, such as inserting, updating, and 
                    deleting data. Examples of DML commands include:
                </p>
                
                <div className="command-list">
                    <div className="command-item">
                        <span className="command-name">SELECT:</span>
                        <span className="command-description">Retrieves data from one or more tables based on specified criteria.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">INSERT:</span>
                        <span className="command-description">Adds new data into a table.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">UPDATE:</span>
                        <span className="command-description">Modifies existing data in a table.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">DELETE:</span>
                        <span className="command-description">Removes data from a table.</span>
                    </div>
                </div>

                <h3>Data Control Language (DCL)</h3>
                <p>
                    DCL commands are used to control access to the database by granting or revoking permissions to users 
                    and roles. Examples of DCL commands include
                </p>
                
                <div className="command-list">
                    <div className="command-item">
                        <span className="command-name">GRANT:</span>
                        <span className="command-description">Gives permissions to a user or role to perform a specific action on a database object.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">REVOKE:</span>
                        <span className="command-description">Removes permissions from a user or role to perform a specific action on a database object.</span>
                    </div>
                </div>

                <h3>Transaction Control Language (TCL)</h3>
                <p>
                    TCL commands are used to control transactions, which are sequences of SQL statements that are 
                    executed as a single unit of work. Examples of TCL commands include
                </p>
                
                <div className="command-list">
                    <div className="command-item">
                        <span className="command-name">COMMIT:</span>
                        <span className="command-description">Saves the changes made to the database since the last COMMIT or ROLLBACK statement.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">ROLLBACK:</span>
                        <span className="command-description">Undoes the changes made to the database since the last COMMIT or ROLLBACK statement.</span>
                    </div>
                    <div className="command-item">
                        <span className="command-name">SAVEPOINT:</span>
                        <span className="command-description">Creates a point in a transaction that can be used to rollback the transaction to a specific point if necessary.</span>
                    </div>
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

export default CategoriesOfSQLCommand;