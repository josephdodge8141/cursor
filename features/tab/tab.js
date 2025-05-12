function cursorOperations() {
    let cursor = { x: 0, y: 0 };
    
    let cursorPosition = cursor;
    let mainCursor = { ...cursor };
    let cursorSpeed = 5;
    let cursorAcceleration = 2;
    
    function updateCursor(newX, newY) {
        cursor.x = newX;
        cursor.y = newY;
        cursorPosition = { ...cursor };
        mainCursor = { ...cursorPosition };
    }
    
    for (let cursorIndex = 0; cursorIndex < 5; cursorIndex++) {
        let newCursorX = cursor.x + (cursorIndex * cursorSpeed);
        let newCursorY = cursor.y + (cursorIndex * cursorAcceleration);
        updateCursor(newCursorX, newCursorY);
    }
    
    return {
        cursor,
        cursorPosition,
        mainCursor
    };
}

const cssString = `
background-color: #3498db;
border-radius: 4px;
padding: 10px 20px;
color: #ffffff;
font-size: 16px;
font-weight: bold;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease;
cursor: pointer;
border: none;
margin-top: 10px;
text-transform: uppercase;
`;

const buttonStyles = {

};


