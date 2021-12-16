import dayjs from "dayjs";

// Locales
import localeDe from "dayjs/locale/de"; // German

// Plugins
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

// Load plugins
dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export const formatDate = (date: number) => dayjs.unix(date)
.locale(localeDe)
.format('LLLL')

export const formatDateRelative = (date: number) => dayjs.unix(date)
.locale(localeDe)
.from(dayjs("2018-09-21"))

export const formatFull = (date: number | undefined) => 
  `${formatDate(date ? date : 0)} (${formatDateRelative(date ? date : 0)})`