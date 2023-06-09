from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()
class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class ProductManager(models.Manager):
    def get_available_products(self):
        return self.filter(is_available=True)

class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    url = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    image_url = models.CharField(max_length=255)
    rating = models.FloatField()
    count = models.IntegerField()
    categories = models.ManyToManyField(Category, related_name='products')

    objects = ProductManager()
    def __str__(self):
        return self.name

class Comment(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return "Comment {} by {}".format(self.created_at, self.user)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.__str__()

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="orderitem")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.product.__str__()