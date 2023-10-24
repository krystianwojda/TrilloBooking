import travels from '@/data/travels.json';

export default defineEventHandler((event) => {
    const { country } = event.context.params;
    const { city } = getQuery(event);

    let filteredTravels = travels;

    filteredTravels = filteredTravels.filter(travel => {
       return travel.country.toLowerCase() === country.toLowerCase()
    });

    if (country === 'All') {
        return travels
    }

    if (city) {
        filteredTravels = filteredTravels.filter(travel => {
            return travel.city.toLowerCase() === city.toLowerCase();
        })
    }

    return filteredTravels;
});