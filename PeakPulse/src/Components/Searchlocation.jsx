import React, { useState } from 'react';
import './Searchlocation.css';
import data from "./data.json";

function Searchlocation() {
    const [searchTerm, setSearchTerm] = useState('');
    const [autoFillSuggestions, setAutoFillSuggestions] = useState([]);

    // Function to filter data based on user input
    const filterData = (input) => {
        const filteredSuggestions = data.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
        setAutoFillSuggestions(filteredSuggestions);
    }

    // Function to handle input change
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchTerm(inputValue);
        filterData(inputValue);
    }

    // Function to handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        console.log("Clicked suggestion:", suggestion);
    }

    return (
        <div className="flex">
            <div>
                <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search location..."
                />
                <div id="location">
                    {/* Display autofill suggestions */}
                    {autoFillSuggestions.map((suggestion, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleSuggestionClick(suggestion)} // Handle click event
                            className="suggestion" // Add CSS class for styling
                        >
                            {suggestion.name}
                        </div>
                    ))}
                </div>
            </div>
            <img src="./src/assets/Image-of-irvine.png" alt="Irvine" />
        </div>
    )
}

export default Searchlocation;
