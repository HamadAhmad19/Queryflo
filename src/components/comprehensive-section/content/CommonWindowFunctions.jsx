import React from 'react';

const CommonWindowFunctions = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">Common Window Functions</h1>
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
                        <div className="header-cell">Function Type</div>
                        <div className="header-cell">Function Name</div>
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Common Use Cases</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Ranking</div>
                        <div className="table-cell command-name">ROW_NUMBER()</div>
                        <div className="table-cell">Assigns a unique rank to each row within a partition.</div>
                        <div className="table-cell">Numbering results, identifying the first or last row.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Ranking</div>
                        <div className="table-cell command-name">RANK()</div>
                        <div className="table-cell">Assigns a rank to each row, with gaps for ties.</div>
                        <div className="table-cell">Identifying top performers, leaderboards.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Ranking</div>
                        <div className="table-cell command-name">DENSE_RANK()</div>
                        <div className="table-cell">Assigns a rank to each row, without gaps for ties.</div>
                        <div className="table-cell">Ranking items where consecutive ranks are needed.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Ranking</div>
                        <div className="table-cell command-name">NTILE(n)</div>
                        <div className="table-cell">Divides rows into n groups and assigns a tile number.</div>
                        <div className="table-cell">Calculating percentiles, dividing data into segments.</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Value</div>
                        <div className="table-cell command-name">LAG(column, offset, default)</div>
                        <div className="table-cell">Accesses the value from a preceding row.</div>
                        <div className="table-cell">Comparing current value with the previous one, calculating differences over time.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Value</div>
                        <div className="table-cell command-name">LEAD(column, offset, default)</div>
                        <div className="table-cell">Accesses the value from a succeeding row.</div>
                        <div className="table-cell">Comparing current value with the next one, forecasting.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Value</div>
                        <div className="table-cell command-name">FIRST_VALUE(column)</div>
                        <div className="table-cell">Returns the first value in a partition.</div>
                        <div className="table-cell">Identifying the starting value within a group.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Value</div>
                        <div className="table-cell command-name">LAST_VALUE(column)</div>
                        <div className="table-cell">Returns the last value in a partition.</div>
                        <div className="table-cell">Identifying the ending value within a group.</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">Aggregate</div>
                        <div className="table-cell command-name">SUM() OVER()</div>
                        <div className="table-cell">Calculates a running sum within a partition.</div>
                        <div className="table-cell">Tracking cumulative totals.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Aggregate</div>
                        <div className="table-cell command-name">AVG() OVER()</div>
                        <div className="table-cell">Calculates a moving average within a partition.</div>
                        <div className="table-cell">Smoothing out fluctuations in data.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Aggregate</div>
                        <div className="table-cell command-name">COUNT() OVER()</div>
                        <div className="table-cell">Counts the number of rows within a partition.</div>
                        <div className="table-cell">Determining the size of groups.</div>
                    </div>

                    <div className="table-row">
                        <div className="table-cell">Aggregate</div>
                        <div className="table-cell command-name">MIN() OVER()</div>
                        <div className="table-cell">Finds the minimum value within a partition.</div>
                        <div className="table-cell">Identifying the lowest value within a group.</div>
                    </div>
                </div>

                <div className="note-section">
                    <h4>Conclusion: Mastering SQL for Technical Interviews</h4>
                    <p>
                        This lesson has provided a comprehensive overview of SQL commands, categorized into basic,
                        intermediate, and advanced levels. Understanding the commands within each category is essential for
                        anyone working with relational databases, particularly for software engineers and data scientists
                        preparing for technical interviews.
                    </p>

                    <p>
                        While basic and intermediate SQL commands form the foundation of data interaction, a strong command
                        of advanced SQL concepts is particularly critical for success in technical interviews at FAANG companies.
                        Topics such as window functions, CTEs, stored procedures, triggers, indexing, and transaction
                        management are frequently assessed to gauge a candidate's ability to handle complex data scenarios
                        and optimize database operations.
                    </p>

                    <p>
                        For effective learning and practice, it is recommended that users engage in regular query writing using
                        various online platforms and sample datasets. The focus should be on comprehending the underlying
                        principles behind each command rather than simply memorizing syntax. Exploring different SQL dialects
                        such as PostgreSQL, MySQL, and SQL Server is also advisable, as interviewers may expect familiarity with
                        common syntax variations. Furthermore, the ability to articulate the reasoning behind the SQL queries
                        written is a key aspect of technical interviews. Practicing common SQL interview questions under timed
                        conditions will help solidify understanding and build confidence.
                    </p>

                    <p>
                        In conclusion, proficiency in SQL is an invaluable skill in the technology industry, and thorough
                        preparation, especially in advanced SQL topics, is essential for excelling in technical interviews and
                        effectively working with data in real-world applications.
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

export default CommonWindowFunctions;