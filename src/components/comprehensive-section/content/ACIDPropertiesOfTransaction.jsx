import React from 'react';

const ACIDPropertiesOfTransaction = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">ACID Properties Of Transaction</h1>
            
            <div className="content-text">
                <div className="sql-commands-table">
                    <div className="table-header">
                        <div className="header-cell">SQL Command</div>
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Real-World Analogy</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">Atomicity</div>
                        <div className="table-cell">Ensures all parts of a transaction are completed, or none are.</div>
                        <div className="table-cell">A light switch# It's either entirely on or fully off—no in-between state.</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">Consistency</div>
                        <div className="table-cell">Guarantees that a transaction leaves the database in a valid state and adheres to rules and constraints.</div>
                        <div className="table-cell">A scale# If weight is added to one side, the other side adjusts to maintain balance.</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">Isolation</div>
                        <div className="table-cell">Prevents transactions from interfering with each other, ensuring data is processed as if each transaction runs alone.</div>
                        <div className="table-cell">Grocery checkout# Everyone in line is served individually without mixing up their items.</div>
                    </div>
                    
                    <div className="table-row">
                        <div className="table-cell command-name">Durability</div>
                        <div className="table-cell">Ensures that once a transaction is committed, its changes are permanent, even in a system failure.</div>
                        <div className="table-cell">Saving a document# It remains intact even if your computer crashes.</div>
                    </div>
                </div>
                
                <div className="note-section">
                    <h4>Note:</h4>
                    <p>
                        Transaction management is crucial for maintaining the integrity and consistency of data, especially in 
                        multi-user environments. Transactions are sequences of database operations that are treated as a single 
                        logical unit of work. The ACID properties—Atomicity, Consistency, Isolation, and Durability—define the 
                        essential characteristics of a reliable transaction. Atomicity ensures that a transaction is either fully 
                        completed or entirely rolled back, preventing partial updates. Consistency guarantees that a transaction 
                        brings the database from one valid state to another, adhering to all defined rules. Isolation ensures that 
                        concurrent transactions do not interfere with each other, behaving as if they are executing sequentially. 
                        Durability ensures that once a transaction is committed, the changes are permanent, even in the event of 
                        system failures. Commands like BEGIN TRANSACTION, COMMIT, and ROLLBACK are used to manage 
                        these transactional operations.
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

export default ACIDPropertiesOfTransaction;