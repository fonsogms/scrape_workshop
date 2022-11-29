let events = document.querySelectorAll(
  '[data-testid="categoryResults-eventCard"]'
);
let eventsInfo = [];
for (let event of events) {
  const text = event.innerText;
  const textArray = text.split('\n');
  const anchorTag = event.querySelector('a');
  const link = anchorTag.getAttribute('href');
  const eventInfo = {
    date: textArray[0],
    name: textArray[1],
    attendes: Number(textArray[6].split(' ')[0]),
    link: link,
  };
  console.log(eventInfo);
  eventsInfo.push(eventInfo);
}
console.log(eventsInfo);

//convert final object into JSON with JSON.stringify() and then copy and paste in a csv converter
