from django.shortcuts import render

def system_info(request):
    context = {}
    return render(request,"index.html",context)
