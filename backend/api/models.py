from django.db import models

class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    items = models.ManyToManyField('Product', related_name='categories', null=True, blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    url = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    image_url = models.CharField(max_length=255)
    rating = models.FloatField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
