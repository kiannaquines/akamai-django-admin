from django.shortcuts import render

def index(request):
    context = {}
    return render(request,"index.html",context)

def analytics(request):
    context = {}
    return render(request,"analytics.html",context)
