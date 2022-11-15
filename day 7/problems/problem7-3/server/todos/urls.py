from django.urls import path
from todos import views


urlpatterns = [
    #  /todo/
    path('', views.todo_list_create),
    path('<int:todo_pk>/', views.todo_update_delete),
]