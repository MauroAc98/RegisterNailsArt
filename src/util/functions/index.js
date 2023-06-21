import moment from 'moment';
import 'moment/locale/es';

export const formatterDate = (date) => {
    moment.locale('es');
    return moment(date).format('dddd, D [de] MMMM [del] YYYY');
}
