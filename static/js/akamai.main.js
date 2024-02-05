window.onload = function(){
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if(item.classList.contains('active')){
            alert("Naay active")
        }
    });
}

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(){
        const Subparent = item.closest('.group')
        if(!Subparent.classList.contains('selected')){
            Subparent.classList.add('selected')
        }else{
            Subparent.classList.remove('selected')
        }
    });
});

document.querySelector('.toggle-navbar').addEventListener('click', function(){
    document.querySelector('.navbar').classList.add('w-full')
    document.querySelector('.sidebar').classList.add('hidden')
});