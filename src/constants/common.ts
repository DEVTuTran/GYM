export const REGEX = {
  URL: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  TIMESTAMP: /^\d{13}$/,
  DOMAIN: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  PHONE_NUMBER:
    /^(090|080|070|050|03|06|042|043|044|045|046|047|048|049)[0-9]{7}$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()_+-=~`{}|””'<>?]).{8,20}$/,
  TIME: /^([0-1][0-9]|2[0-3]):([0-5]{0,1}[0-9])$/,
};

export const DAY_OF_THE_WEEK = {
  monday: "月曜日",
  tuesday: "火曜日",
  wednesday: "水曜日",
  thursday: "木曜日",
  friday: "金曜日",
  saturday: "土曜日",
  sunday: "日曜日",
};

export const ITEMS_PER_PAGE = 10;
