from django.urls import path
from system.views import index,analytics,stock,crm,marketing,sweetalert,alert,buttons,datatable,blankpage,normaltable,protable

urlpatterns = [
    path('',index,name="index"),
    path('dashboard/analytics/',analytics,name="analytics"),
    path('dashboard/stock/',stock,name="stock"),
    path('dashboard/crm/',crm,name="crm"),
    path('dashboard/marketing/',marketing,name="marketing"),

    path('ui/sweetalert/',sweetalert,name="sweetalert"),
    path('ui/alert/',alert,name="alert"),
    path('ui/buttons/',buttons,name="buttons"),

    path('pages/datatable/',datatable,name="datatable"),
    path('pages/blank/',blankpage,name="blankpage"),
    path('pages/datatable/',datatable,name="datatable"),

    path('table/normal/',normaltable,name="normaltable"),
     path('table/pro/',protable,name="protable"),
]
