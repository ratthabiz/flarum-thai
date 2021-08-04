// Based on: https://github.com/iamkun/dayjs/blob/dev/src/locale/ja.js

dayjs.locale({
  name: 'th',
  weekdays: 'วันอาทิตย์_วันจันทร์_วันอังคาร_วันพุธ_วันพฤหัสบดี_วันศุกร์_วันเสาร์'.split('_'),
  weekdaysShort: 'จ._อ._พ._พฤ._ศ._ส._อา.'.split('_'),
  weekdaysMin: 'จ._อ._พ._พฤ._ศ._ส._อา.'.split('_'),
  months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
  monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
  ordinal: n => `${n}日`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'วันที่ D M ค.ศ. YYYY',
    LLL: 'วันที่ D M ค.ศ. YYYY HH:mm',
    LLLL: 'วันที่ D M ค.ศ. YYYY dddd HH:mm',
    l: 'DD/MM/YYYY',
    ll: 'วันที่ D M ค.ศ. YYYY',
    lll: 'วันที่ D M ค.ศ. YYYY HH:mm',
    llll: 'วันที่ D M ค.ศ. YYYY (ddd) HH:mm'
  },
  meridiem: hour => (hour < 12 ? 'ช่วงเช้า' : 'ช่วงบ่าย'),
  relativeTime: {
    future: 'อีก %s',
    past: '%s ที่แล้ว',
    s: 'หลายวินาที',
    m: '1 นาที',
    mm: '%d นาที',
    h: '1 ชั่วโมง',
    hh: '%d ชั่วโมง',
    d: '1 วัน',
    dd: '%d วัน',
    M: '1 เดือน',
    MM: '%d เดือน',
    y: '1 ปี',
    yy: '%d ปี'
  }
}, null, false);
