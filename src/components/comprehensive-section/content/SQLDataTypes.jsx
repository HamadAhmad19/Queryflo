import React from 'react';

const SQLDataTypes = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">SQL Data Types</h1>
            
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
                <h3>INTEGER</h3>
                <p>The "INTEGER" data type is used to store whole numbers.</p>
                <p>It can store values from -2147483648 to 2147483647 (or from -9223372036854775808 to 9223372036854775807 in some databases).</p>

                <h3>FLOAT/Decimal</h3>
                <p>The "FLOAT/Decimal" data type is used to store floating-point numbers.</p>
                <p>The maximum length of the string is also defined when the table is created, but it can be changed later.</p>

                <h3>String/VARCHAR</h3>
                <p>The VARCHAR/NVARCHAR data type is used to store variable-length character strings.</p>
                <p>It can store values from -2147483648 to 2147483647 (or from -9223372036854775808 to 9223372036854775807 in some databases).</p>

                <h3>DATE/DATETIME/TIMESTAMP</h3>
                <p>The DATE/DATETIME/TIMESTAMP data types are used to store dates and times.</p>
                <p>The DATE data type is used to store dates only, the DATETIME data type is used to store both dates and times, and the TIMESTAMP data type is used to store dates and times with higher precision.</p>

                <h3>BOOLEAN/BOOL</h3>
                <p>The BOOLEAN/BOOL data type is used to store Boolean values, such as true or false.</p>
                <p>In some databases, it is represented as 1 (true) or 0 (false).</p>
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

export default SQLDataTypes;