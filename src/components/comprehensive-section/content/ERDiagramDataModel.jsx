import React from 'react';
import erDiagram from '../../../assests/ER Diagram.png';

const ERDiagramDataModel = ({ currentSection, onNavigate, sidebarItems }) => {
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
            <h1 className="content-title">ER Diagram & Data Model</h1>
            
            <div className="content-text">
                <p>
                    Data modeling is the process of creating a conceptual representation of data, called a data model, which 
                    describes the data and its relationships to other data. One common tool used for data modeling is the 
                    Entity-Relationship (ER) diagram.
                </p>
                
                <p>
                    An ER diagram visually represents entities (things that exist in the world, such as customers or orders) 
                    and their relationships to each other.
                </p>
                
                <p>
                    Entities. Entities are the building blocks of an ER diagram. They represent things that exist in the world 
                    and that we want to store data about.
                </p>
                
                <p>
                    In ER diagrams, entities are uniquely identified by their primary keys, which are one or more attributes 
                    that uniquely identify each instance of the entity. For example, in the customer entity, the primary key 
                    might be the customer ID.
                </p>
                
                <p>
                    When one entity has a relationship with another entity, it often includes a foreign key, which is an 
                    attribute in one entity that refers to the primary key of another entity. For example, in the orders entity, 
                    the customer ID might be a foreign key that refers to the primary key of the customer entity.
                </p>
                
                <p>
                    For example, in a retail business, we might have entities for customers, orders, and products.
                </p>
                
                <p>
                    <strong>• Attributes:</strong> Entities have attributes, which are characteristics or properties that describe the entity. For 
                    example, a customer entity might have attributes like name, email, and address.
                </p>
                
                <p>
                    <strong>• Relationships:</strong> Entities are connected to each other through relationships, which describe how they 
                    are related to each other.
                </p>
                
                <p>There are several types of relationships in ER diagrams, including:</p>
                
                <p>
                    <strong>1. One-to-One (1:1) Relationship:</strong> A one-to-one relationship exists when one instance of an entity is 
                    associated with exactly one instance of another entity. For example, each employee may have one 
                    manager.
                </p>
                
                <p>
                    <strong>2. One-to-Many (1:N) Relationship:</strong> A one-to-many relationship exists when one instance of an entity is 
                    associated with zero, one, or many instances of another entity. For example, each customer may place 
                    one, or many orders.
                </p>
                
                <p>
                    <strong>3. Many-to-One (N:1) Relationship:</strong> A many-to-one relationship exists when many instances of an entity 
                    are associated with one instance of another entity. For example, many orders may be placed by one 
                    customer.
                </p>
                
                <p>
                    <strong>4. Many-to-Many (N:N) Relationship:</strong> A many-to-many relationship exists when many instances of an 
                    entity are associated with many instances of another entity. For example, many customers may place 
                    many orders.
                </p>
                
                {/* ER Diagram Image */}
                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <img 
                        src={erDiagram} 
                        alt="ER Diagram Example" 
                        style={{ 
                            maxWidth: '100%', 
                            height: 'auto',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                        }} 
                    />
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

export default ERDiagramDataModel;