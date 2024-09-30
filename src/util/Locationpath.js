export const hidelayout = (pathname)=>{
    const hideRoutes = [
        '/Dashboard',
        '/dash_resume',
        '/dash_cv',
        '/dash_cover',
        '/cv',
        '/resume',
        '/cover',
        '/choose_resume',
        '/choose_cv',
        '/choose_cover',
        '/templets'
    ]
    const header = document.querySelector('.header__Wrapper')
    const footer = document.querySelector('.footer')
    if(hideRoutes.includes(pathname)){
        header.classList.add('d-none');
        footer.classList.add('d-none');
    }else{
        header.classList.remove('d-none');
        footer.classList.remove('d-none');
    }
}