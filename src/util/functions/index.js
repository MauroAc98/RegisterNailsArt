import moment from 'moment';
import 'moment/locale/es';


export const formatter = (caracter, type, max) => {
    moment.locale('es');
    switch (type) {
        case 'reduced':
            return moment(caracter).format('ddd DD/MM');
        case 'normal':
            return moment(caracter).format('dddd, D [de] MMMM ');
        case 'strReduced':
            if (caracter.length <= max) {
                return caracter;
            } else {
                let truncatedText = caracter.substring(0, max - 1);
                if (truncatedText.slice(-1) === "-") {
                    truncatedText = truncatedText.slice(0, -1);
                }
                if (truncatedText.length > max) {
                    return truncatedText.substring(0, max) + "..";
                }
                return truncatedText + "..";
            }
        default:
            return type;
    }
};

export const compareHours = (a, b) => {
    const timeA = getTimeInMinutes(a.hour);
    const timeB = getTimeInMinutes(b.hour);

    if (timeA !== timeB) {
        return timeA - timeB;
    } else {
        return getAmPmValue(a.hour) - getAmPmValue(b.hour);
    }
};


const getTimeInMinutes = (hour) => {
    const [time, ampm] = hour.split(" ");
    const [hours, minutes] = time.split(":");

    let timeInMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);

    if (ampm === "PM") {
        timeInMinutes += 12 * 60;
    }

    return timeInMinutes;
};


const getAmPmValue = (hour) => {
    return hour.endsWith("AM") ? 0 : 1;
};




