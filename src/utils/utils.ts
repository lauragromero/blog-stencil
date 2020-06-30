
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function transformDate(newDate: string){
  const months=[
    'January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'
];
  const date= new Date(newDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const fullDate= `${months[month]} ${day}, ${year}`;
  return fullDate
}

export function transformTime (newDate: string){
  if(newDate){const date= new Date(newDate);
  const timeHour = date.getHours()
  const timeMinute= date.getMinutes()
  const am = timeHour < 12 ? 'A.M.' : 'P.M.';
  const fullTime= ` ${timeHour}:${timeMinute} ${am}`;
  return fullTime;}

}
export function textLengt(text){
  if (text){const textCut = text.substr(0, 400) + '...'
  return textCut}
};
