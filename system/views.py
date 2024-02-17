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

def alert(request):
    context = {}
    return render(request,"ui/alert.html",context)

def buttons(request):
    context = {}
    return render(request,"ui/buttons.html",context)

def datatable(request):
    context = {}
    return render(request,"pages/datatable.html",context)

def normaltable(request):
    context = {}
    return render(request,"table/normal.html",context)

def protable(request):
    context = {}
    return render(request,"table/pro.html",context)

def blankpage(request):
    context = {}
    return render(request,"pages/datatable.html",context)


def error404page(request):
    context = {}
    return render(request,"pages/datatable.html",context)
