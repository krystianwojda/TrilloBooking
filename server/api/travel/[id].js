import travels from '@/data/travels.json';

export default defineEventHandler((event) => {
    const {id} = event.context.params;

    const travel = travels.find(c => {
        return c.id === parseInt(id);
    });

    if (!travel) {
        throw createError({
            statusCode: 404,
            statusMessage: `Travel witch ID of ${id} does not exist`
        })
    }

    return travel;
});