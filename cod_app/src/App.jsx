
import React from 'react';
import { getRandomLoadout } from './randomizer';

function App() {

    const handleButtonClick = () => {
        const loadout = getRandomLoadout();  // Generate random loadout
        const loadoutDisplay = document.getElementById('loadoutDisplay');

        // Check if loadoutDisplay exists before updating
        if (loadoutDisplay) {
            loadoutDisplay.innerHTML = `
                <strong>Primary Weapon:</strong> ${loadout.primaryWeapon.name}<br>
                <strong>Secondary Weapon:</strong> ${loadout.secondaryWeapon.name}<br>
                <strong>Melee Weapon:</strong> ${loadout.meleeWeapon}<br>
                <strong>Perk 1:</strong> ${loadout.perk1}<br>
                <strong>Perk 2:</strong> ${loadout.perk2}<br>
                <strong>Perk 3:</strong> ${loadout.perk3}<br>
                <strong>Tactical:</strong> ${loadout.tactical}<br>
                <strong>Lethal:</strong> ${loadout.lethal}<br>
                <strong>Wildcard:</strong> ${loadout.wildcard}
            `;
        }
    };

    return (
        <div>
            <h1>Warzone Loadout Randomizer</h1>
            <button id="randomizeBtn" onClick={handleButtonClick}>Randomize Loadout</button>
            <div id="loadoutDisplay"></div>
        </div>
    );
}

export default App;  // Export as default so it can be imported in main.jsx


