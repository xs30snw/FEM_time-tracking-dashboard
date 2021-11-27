const loadData = async (period) => {

    const url = 'http://127.0.0.1:3000/activities';
    const res =         await fetch(url);
    const activities =  await res.json();

    activities.forEach(item => {
        let current  =  document.querySelector('.' + item.title.toLowerCase() + '.current');
        current.innerHTML =     `${item.timeframes[period].current}hrs`;

        let previous =  document.querySelector('.'+item.title.toLowerCase() + '.previous');
        previous.innerHTML =    `Last ${period==='daily' ? 'day'  :
                                        period==='weekly'? 'week' :
                                                           'month'} - 
                                      ${item.timeframes[period].previous}hrs`;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btnDaily'  ).addEventListener('click', () => loadData('daily'  ));
    document.querySelector('.btnWeekly' ).addEventListener('click', () => loadData('weekly' ));
    document.querySelector('.btnMonthly').addEventListener('click', () => loadData('monthly'));

    loadData('daily');
});