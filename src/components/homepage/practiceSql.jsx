import React from 'react';
import '../../App.css';
import practiceSqlImg from '../../assests/practice sql img.png';
import getStarted from '../../assests/get started.png';

const PracticeSQL = () => {
    return (
        <div className="practice-sql-section">
            {/* Practice SQL Image - Bottom Right Corner */}
            <img src={practiceSqlImg} alt="Practice SQL" className="practice-sql-image" />

            {/* Main Content */}
            <div className="practice-sql-content">
                {/* Header Section */}
                <div className="practice-sql-header">
                    <h2>Practice SQL coding for technical Interviews</h2>
                    <p>Tired of endless textbooks and dry tutorials? QueryFlo unique SQL-to-text functionality transforms intricate code into clear, comprehensible explanations, revealing the logic and insights behind each statement. With this feature, every line of code becomes a conversation, inviting you to explore data's untold stories.</p>
                </div>

                {/* Get Started Button */}
                <div className="practice-sql-button-container">
                    <img src={getStarted} alt="Get Started" className="practice-sql-get-started-button" />
                </div>
            </div>
        </div>
    );
};

export default PracticeSQL;