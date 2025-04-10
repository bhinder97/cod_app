// src/randomizer.js
export function getRandomLoadout() {
    const primaryWeapons = ["Krig C", "Maelstrom Shotgun", "M4", "MP5", "AK-47", "Sniper X", "LMG Bravo"];
    const secondaryWeapons = ["1911 Pistol", "RPG-7", "Desert Eagle", "Combat Knife", "Launcher Alpha"];
    const meleeWeapons = ["Combat Knife", "Machete", "Tonfa", "Sledgehammer"];

    const attachmentCategories = {
        optics: ["Red Dot Sight", "Holographic Sight", "ACOG Scope", "Sniper Scope"],
        barrel: ["Extended Barrel", "Short Barrel", "Silencer Barrel"],
        underbarrel: ["Foregrip", "Angled Grip", "Bipod"],
        muzzle: ["Muzzle Brake", "Suppressor", "Flash Hider"],
        magazine: ["Extended Mag", "Fast Mag", "Drum Mag"],
        stock: ["Tactical Stock", "No Stock", "Heavy Stock"],
        laser: ["Red Laser", "Green Laser"],
        reargrip: ["Rubberized Grip", "Stippled Grip"]
    };

    const perks = {
        blue: ["Grenadier", "Dexterity", "Scavenger", "Survivor", "Veteran", "Reflexes"],
        red: ["Quartermaster", "Bomb Squad", "Tracker", "Sprinter", "Cold-Blooded", "Quick Fix"],
        yellow: ["Gung-Ho", "Resolute", "Ghost", "Birdseye", "Tempered", "Alertness"]
    };

    const equipment = {
        tactical: ["Flashbang", "Smoke Grenade", "Stun Grenade", "Stim"],
        lethal: ["Frag Grenade", "Semtex", "Throwing Knife", "C4"]
    };

    const wildcards = ["Overkill", "Bandolier", "Gunfighter", "Battle Ready"];

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function getUniqueAttachments(count) {
        const availableCategories = Object.keys(attachmentCategories);
        let selectedAttachments = [];

        while (selectedAttachments.length < count && availableCategories.length > 0) {
            let category = getRandomItem(availableCategories);
            let attachment = getRandomItem(attachmentCategories[category]);

            selectedAttachments.push(attachment);
            availableCategories.splice(availableCategories.indexOf(category), 1); // Remove category to prevent duplicates
        }

        return selectedAttachments;
    }

    let selectedWildcard = getRandomItem(wildcards);

    let primaryWeapon = getRandomItem(primaryWeapons);
    let secondaryWeapon = selectedWildcard === "Overkill" ? getRandomItem(primaryWeapons) : getRandomItem(secondaryWeapons);

    let primaryAttachments = getUniqueAttachments(selectedWildcard === "Gunfighter" ? 8 : 5);
    let secondaryAttachments = getUniqueAttachments(5);

    return {
        primaryWeapon: { name: primaryWeapon, attachments: primaryAttachments },
        secondaryWeapon: { name: secondaryWeapon, attachments: secondaryAttachments },
        meleeWeapon: getRandomItem(meleeWeapons),
        perk1: getRandomItem(perks.blue),
        perk2: getRandomItem(perks.red),
        perk3: getRandomItem(perks.yellow),
        tactical: getRandomItem(equipment.tactical),
        lethal: getRandomItem(equipment.lethal),
        wildcard: selectedWildcard
    };
}
