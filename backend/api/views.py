from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import action, api_view, permission_classes
from django.contrib.auth.models import User
from rest_framework import generics

from .models import Category, Product, Order, OrderItem, Comment
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer, OrderItemSerializer, CommentSerializer, UserSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        categories_data = serializer.data

        return Response(categories_data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        products_data = serializer.data

        return Response(products_data)

    @action(detail=True, methods=['GET', 'POST'])
    def commentsByProduct(self, request, pk=None):
        if request.method == 'GET':
            product = self.get_object()
            comments = product.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticated]


class UserCreateView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username and password:
            User.objects.create_user(username=username, password=password)
            return Response({'success': True})
    return Response({'success': False})
@api_view(['GET'])
@permission_classes([AllowAny])
def productsByCategory(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def commentsByUser(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        comments = Comment.objects.filter(user=user)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
