window.addEventListener("load",() => {
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if(item.classList.contains('active')){
            item.closest('.group').classList.add('selected')
        }
    });
})


document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault()
        const Subparent = item.closest('.group')
        if(!Subparent.classList.contains('selected')){
            Subparent.classList.add('selected')
            item.classList.add('active')
        }else{
            Subparent.classList.remove('selected')
            item.classList.remove('active')
        }
    });
});

document.querySelector('.toggle-navbar').addEventListener('click', function(e){

    e.preventDefault()

    var sidebar = document.querySelector('.sidebar')
    var navbar = document.querySelector('.navbar')
    var content = document.querySelector('.content')

    if(sidebar.classList.contains('hidden')){
        sidebar.classList.remove('hidden')
    }else{
        sidebar.classList.add('hidden')        
    }

    if(content.classList.contains('w-[calc(100%-256px)]')){
        content.classList.remove('w-[calc(100%-256px)]')
        content.classList.remove('ml-64')
    }else{
        content.classList.add('w-[calc(100%-256px)]')
        content.classList.add('ml-64')
    }

    if(navbar.classList.contains('sm:w-[calc(100%-256px)]')){
        navbar.classList.remove('sm:w-[calc(100%-256px)]')
        navbar.classList.remove('md:w-[calc(100%-256px)]')
        navbar.classList.remove('lg:w-[calc(100%-256px)]')
    }else{
        navbar.classList.add('sm:w-[calc(100%-256px)]')
        navbar.classList.add('md:w-[calc(100%-256px)]')
        navbar.classList.add('lg:w-[calc(100%-256px)]')
    }

});


document.querySelector('#profile-container').addEventListener('click',function(e){
    e.preventDefault()

    const parent = document.querySelector('.dropdown')
    const userInfo = document.querySelector('.user-info')
    if(parent.classList.contains('hidden')){
        parent.classList.remove('hidden')
        userInfo.classList.remove('active')
    }else{
        parent.classList.add('hidden')
        userInfo.classList.add('active')
    }
});