export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    if (user.value.id === '260a3d29-4084-4b66-aa15-2417c7d68a67') {
        return;
    }
    return navigateTo('/login');
});