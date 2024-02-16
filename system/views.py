from django.shortcuts import render

def index(request):
    context = {}
    return render(request,"index.html",context)

def analytics(request):
    context = {}
    return render(request,"analytics.html",context)

def crm(request):
    context = {}
    return render(request,"crm.html",context)


def stock(request):
    context = {}
    return render(request,"stock.html",context)

def marketing(request):
    context = {}
    return render(request,"marketing.html",context)


def sweetalert(request):
    context = {}
    return render(request,"ui/sweetalert.html",context)
