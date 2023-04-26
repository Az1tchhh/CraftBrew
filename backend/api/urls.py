from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import CategoryViewSet, ProductViewSet, OrderViewSet, OrderItemViewSet, ProductByCategory

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'orderitems', OrderItemViewSet)
urlpatterns = [

]

urlpatterns += router.urls

