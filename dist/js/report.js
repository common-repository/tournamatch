/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/report.js ***!
  \**************************/
(function ($) {
  function convert_time(format, value) {
    var time = moment.utc(value).local();
    return time.format(format);
  }
  $('#challenge_id option').each(function (i, e) {
    if ($(e).val() != '-1') {
      $(e).text(convert_time('lll', $(e).text()));
    }
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUMsV0FBU0EsQ0FBQyxFQUFDO0VBQ1IsU0FBU0MsWUFBWUEsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDakMsSUFBSUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLE9BQU9ILElBQUksQ0FBQ0YsTUFBTSxDQUFDQSxNQUFNLENBQUM7RUFDOUI7RUFFQUYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNRLElBQUksQ0FBQyxVQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUMxQyxJQUFJVixDQUFDLENBQUNVLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtNQUNwQlgsQ0FBQyxDQUFDVSxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDWCxZQUFZLENBQUMsS0FBSyxFQUFFRCxDQUFDLENBQUNVLENBQUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0M7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLEVBQUVDLE1BQU8sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG91cm5hbWF0Y2gvLi9zcmMvanMvcmVwb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKXtcclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRfdGltZShmb3JtYXQsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRpbWUgPSBtb21lbnQudXRjKHZhbHVlKS5sb2NhbCgpO1xyXG4gICAgICAgIHJldHVybiB0aW1lLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNjaGFsbGVuZ2VfaWQgb3B0aW9uJykuZWFjaChmdW5jdGlvbihpLCBlKSB7XHJcbiAgICAgICAgaWYgKCQoZSkudmFsKCkgIT0gJy0xJykge1xyXG4gICAgICAgICAgICAkKGUpLnRleHQoY29udmVydF90aW1lKCdsbGwnLCAkKGUpLnRleHQoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KCBqUXVlcnkgKSk7Il0sIm5hbWVzIjpbIiQiLCJjb252ZXJ0X3RpbWUiLCJmb3JtYXQiLCJ2YWx1ZSIsInRpbWUiLCJtb21lbnQiLCJ1dGMiLCJsb2NhbCIsImVhY2giLCJpIiwiZSIsInZhbCIsInRleHQiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9