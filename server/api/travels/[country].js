import travels from '@/data/travels.json';

export default defineEventHandler((event) => {
    const {country} = event.context.params;

    let filteredTravels = travels;

    filteredTravels = filteredTravels.filter(travel => {
       return travel.country.toLowerCase() === country.toLowerCase()
    });

    return filteredTravels;
});