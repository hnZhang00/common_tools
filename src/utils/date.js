import Moment from 'moment';

export default {
	validate(date) {
		if(!date)
			return '';
		if(typeof date === 'number')
			return date;
		return date.replace(/-/g, '/');
	},
	format(date, isShowTime) {
		if(!date)
			return '';
		date = this.validate(date);
		if(!isShowTime)
			return Moment(new Date(date)).format('YYYY-MM-DD');
	  return Moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss');
	}
}