from django.urls import path
from system.views import index,analytics

urlpatterns = [
    path('',index,name="index"),
    path('analytics/',analytics,name="analytics")
]
