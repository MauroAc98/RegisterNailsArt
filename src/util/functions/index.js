import moment from 'moment';
import 'moment/locale/es';


export const formatter = (caracter, type) => {
    moment.locale('es');
    switch (type) {
        case 'reduced':
            return moment(caracter).format('ddd DD/MM');
        case 'normal':
            return moment(caracter).format('dddd, D [de] MMMM ');
        case 'strReduced':
            if (caracter.length > 15) {
                return caracter.substring(0, 15) + "..";
            }
            return caracter;
        default:
            return type;
    }
};

