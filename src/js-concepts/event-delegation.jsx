import React from 'react';

const ListDelegation = () => {
    const handleClick = (event) => {
        // .closest('li') ensures we find the <li> even if a nested <span> is clicked
        const item = event.target.closest('li');

        if (item && event.currentTarget.contains(item)) {
            console.log("Clicked item text:", item.innerText);
            console.log("Item ID from dataset:", item.dataset.id);
        }
    };

    return (
        <ul onClick={handleClick} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <li data-id="1">Item 1 (Click me)</li>
            <li data-id="2">Item 2 (Click me)</li>
            <li data-id="3">Item 3 (Click me)</li>
        </ul>
    );
};

export default ListDelegation;
