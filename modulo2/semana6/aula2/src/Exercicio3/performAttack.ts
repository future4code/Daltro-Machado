import { Character, validateCharacter } from "../Exercicio1/validateCharacter";

// Letra a

export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.attack > defender.defense) {
        defender.health -= attacker.attack - defender.defense
    }
}

// Letra b

export const performAttackWithInversion = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.attack > defender.defense) {
        defender.health -= attacker.attack - defender.defense
    }
} 