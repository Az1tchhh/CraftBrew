from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products, name='products'),
    path('products/<int:id>/', views.product, name='product'),
    path('categories/', views.categories, name='categories'),
    path('categories/<int:id>/', views.category, name='category'),
    path('categories/<int:id>/products/', views.products_by_category, name='products_by_category'),
]
