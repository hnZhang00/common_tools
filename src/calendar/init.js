import Calendar from './calendar';

export default {
	year: 2018,
	month: 12,
	calendarData: [],
	setCalendar() {
		this.calendarData = [];
		let date = new Date(this.year, this.month-1, 1);
		let weekNumberOfMonth = this.getWeekNumberOfMonth(date);
		let firstDate = this.getFirstDayOfCalendar(date);
		let firstDateTime = firstDate.getTime();
		let dayTime = 24 * 60 * 60 * 1000;
		let weekTime = dayTime * 7;
		for (var w = 0; w < weekNumberOfMonth; w++) {
			let week = [];
			let time = firstDateTime + w * weekTime;
			for (var d = 0; d < 7; d++) {
				let thisTime = time + d * dayTime;
				let thisDate = new Date(thisTime);
				let year = thisDate.getFullYear(), month = thisDate.getMonth(), day = thisDate.getDate(), dayInWeek = thisDate.getDay();
				let lunarInfo = Calendar.solar2lunar(year, month+1, day);
				week.push({
					isToday: thisTime === new Date().getTime(),
					isInThisMonth: month === this.month-1,
					time: thisTime,
					date: thisDate,
					year, 
					month,
					day,
					dayInWeek,
					lunarInfo,
					lunarText: lunarInfo.IDayCn != '初一' ? lunarInfo.IDayCn : lunarInfo.IMonthCn
				});
			}
			this.calendarData.push(week);
		}
	},
	getFirstDayOfCalendar(date) {
		let year = date.getFullYear();
		let month = date.getMonth();
		let firstDate = new Date(year, month, 1);
    let day = firstDate.getDay();
    return new Date(year, month, 1 - day);
	},
	getWeekNumberOfMonth(date) {
		let nowDate = new Date(date);
		let lastDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
		let dayOnWeek = lastDate.getDay() || 7;
		let days = lastDate.getDate();
		return Math.ceil((days + 7 - dayOnWeek) / 7);
	}
};