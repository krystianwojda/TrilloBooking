export default async (country, filters) => {
    const {data, error, refresh} = await useFetch(`/api/travels/${country}`, {
        params: {
            ...filters
        }
    });

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: 'Unable to fetch travels'
        });
    }

    return {
        data,
        refresh
    };
};