from django.urls import path
from system.views import index,analytics,stock,crm,marketing

urlpatterns = [
    path('',index,name="index"),
    path('dashboard/analytics/',analytics,name="analytics"),
    path('dashboard/stock/',stock,name="stock"),
    path('dashboard/crm/',crm,name="crm"),
    path('dashboard/marketing/',marketing,name="marketing"),
]
