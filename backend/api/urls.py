from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import CategoryViewSet, ProductViewSet, OrderViewSet, OrderItemViewSet, productsByCategory
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'orderitems', OrderItemViewSet)
urlpatterns = [
    path('products/<int:id>/category', productsByCategory),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]

urlpatterns += router.urls

