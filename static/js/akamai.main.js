window.onload = function(){
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if(item.classList.contains('active')){
            // alert("Naay active")
        }
    });
}

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(){
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
    document.querySelector('.sidebar').classList.add('hidden')
    document.querySelector('.navbar').classList.add('w-full')
});


document.querySelector('#profile-container').addEventListener('click',function(e){
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