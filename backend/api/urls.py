from django.urls import path
from .views import CategoryViewSet, ProductViewSet, OrderViewSet, OrderItemViewSet, productsByCategory, commentsByUser

urlpatterns = [
    path('categories/', CategoryViewSet.as_view({'get': 'list', 'post': 'create'}), name='category-list'),
    path('categories/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='category-detail'),
    path('categories/<int:pk>/products', productsByCategory, name='products-by-category'),

    path('products/', ProductViewSet.as_view({'get': 'list', 'post': 'create'}), name='product-list'),
    path('products/<int:pk>/', ProductViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='product-detail'),
    path('products/<int:pk>/comments/', ProductViewSet.as_view({'get': 'commentsByProduct'}), name='comments-by-product'),

    path('orders/', OrderViewSet.as_view({'get': 'list', 'post': 'create'}), name='order-list'),
    path('orders/<int:pk>/', OrderViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='order-detail'),

    path('orderitems/', OrderItemViewSet.as_view({'get': 'list', 'post': 'create'}), name='orderitem-list'),
    path('orderitems/<int:pk>/', OrderItemViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='orderitem-detail'),

    path('users/<int:user_id>/comments/', commentsByUser, name='comments-by-user'),
]
