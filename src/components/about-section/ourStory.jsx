import React from 'react';
import '../../App.css';
import storyLights from '../../assests/story lights.png';
import storyDesignLeft from '../../assests/story design left.png';
import storyImageRight from '../../assests/story image right.png';

const OurStory = () => {
    return (
        <div className="our-story-section">
            {/* Top Right Decorative Image */}
            <img
                src={storyImageRight}
                alt="Story Design Right"
                className="story-design-top-right"
            />

            {/* Bottom Left Decorative Image */}
            <img
                src={storyDesignLeft}
                alt="Story Design Left"
                className="story-design-bottom-left"
            />

            <div className="our-story-content">
                <div className="our-story-text">
                    <h1 className="our-story-title">Our Origin Story</h1>
                    <p className="our-story-description">
                        After training over 1,000 non-technical professionals and helping them transition into various
                        analytics roles, our founder noticed a common struggle:
                    </p>
                    <p className="our-story-quote">
                        "Where can I keep practicing SQL — but not just generic stuff... I want questions
                        related to my field like marketing, product, or finance."
                    </p>
                    <p className="our-story-solution">
                        QueryFlo was born to solve this exact problem — bridging the gap between SQL syntax and real-world business application.
                    </p>
                </div>
                <div className="our-story-image">
                    <img
                        src={storyLights}
                        alt="Story Lights"
                        className="story-lights-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurStory;