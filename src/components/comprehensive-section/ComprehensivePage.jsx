import React, { useState, useEffect, Suspense } from 'react';
import { sidebarItems, componentMap } from './sidebarData';
import Header from '../../ReuseableComponents/header';
import Footer from '../../ReuseableComponents/footer';
import '../../App.css';

const ComprehensivePage = () => {
    const [activeSection, setActiveSection] = useState('introduction-of-sql');
    const [ContentComponent, setContentComponent] = useState(null);

    // Dynamic component loading
    useEffect(() => {
        const loadComponent = async () => {
            try {
                const componentLoader = componentMap[activeSection];
                if (componentLoader) {
                    const module = await componentLoader();
                    setContentComponent(() => module.default);
                }
            } catch (error) {
                console.error('Error loading component:', error);
            }
        };
        loadComponent();
    }, [activeSection]);

    return (
        <div>
            <Header />
            <div className="comprehensive-container">
                {/* Sidebar */}
                <div className="comprehensive-sidebar">
                    <h2 className="sidebar-title">SQL Tutorial</h2>
                    <div className="sidebar-items">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="comprehensive-content">
                    <Suspense fallback={<div className="loading">Loading...</div>}>
                        {ContentComponent && (
                            <ContentComponent 
                                currentSection={activeSection}
                                onNavigate={setActiveSection}
                                sidebarItems={sidebarItems}
                            />
                        )}
                    </Suspense>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ComprehensivePage;