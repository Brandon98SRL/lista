/* eslint-disable no-unused-vars */
import { cloneDeep } from "lodash";

/**
 * 
 * @param {Object} state: el objeto de estado actual 
 * @param {Object} input: argumentos adicionales
 * @returns {Object}: el estado actualizado
 */
function reducer (state, input) { 
    const newState = cloneDeep(state);
    switch (input.case) {

        case 'eliminar': {
            let {displayedUsers, existingUsers} = newState;
            const { elementoSeleccionado } = input;
            displayedUsers = displayedUsers
                .filter((elemento) => elemento.id !== elementoSeleccionado.id);
            existingUsers = existingUsers
                .filter((elemento) => elemento.id !== elementoSeleccionado.id);
            console.log(displayedUsers, existingUsers)
            break;
        }

        default:
            break;
    }
    return {...newState};
}

export default reducer;
