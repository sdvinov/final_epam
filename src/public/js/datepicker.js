let disabledDays = [0, 6];
let today = new Date();
let prevDay;
today.setDate(today.getDate() + 1);

$('#datepicker').datepicker({
  timepicker: true,
  minDate: today,
  minHours: 9,
  maxHours: 18,
  maxMinutes: 0,
  language: 'en',
  onRenderCell: function (date, cellType) {
    if (cellType == 'day') {
      let day = date.getDay(),
        isDisabled = disabledDays.indexOf(day) != -1;
      return {
        disabled: isDisabled
      }
    }
  },
  onSelect: function (fd, d, picker) {
    // Do nothing if selection was cleared
    if (!d) return;

    var day = d.getDay();

    // Trigger only if date is changed
    if (prevDay != undefined && prevDay == day) return;
    prevDay = day;
  }
});
