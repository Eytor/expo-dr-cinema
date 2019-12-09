import * as constants from '../constants/index';

const initialState = {
    id: null,
    name: '',
    address: '',
    city: '',
    phone: '',
    website: '',
    description: '',
    showtimes: [],
    certificateColor: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
    case constants.CHANGE_CINEMA:
        return {
            id: action.payload.id,
            name: action.payload.name,
            address: action.payload.address,
            city: action.payload.city,
            phone: action.payload.phone ? action.payload.phone : '',
            website: action.payload.website,
            description: action.payload.description ? action.payload.description : '',
            showtimes: action.payload.showtimes ? action.payload.showtimes : [],
        };
    default: return state;
    }
}
