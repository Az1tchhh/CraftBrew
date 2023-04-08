from django.http import JsonResponse
from .models import Category, Product

def categories(request):
    categories = Category.objects.all()
    result = []
    for category in categories:
        products = []
        for product in category.products.all():
            products.append({
                'id': product.id,
                'url': f'/api/products/{product.id}/',
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'image_url': product.image_url,
                'rating': product.rating,
            })
        result.append({
            'id': category.id,
            'name': category.name,
            'items': products,
        })
    return JsonResponse(result, safe=False)

def category(request, id):
    category = Category.objects.get(id=id)
    products = []
    for product in category.products.all():
        products.append({
            'id': product.id,
            'url': f'/api/products/{product.id}/',
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'image_url': product.image_url,
            'rating': product.rating,
        })
    result = {
        'id': category.id,
        'name': category.name,
        'items': products,
    }
    return JsonResponse(result)

def products(request):
    products = Product.objects.all()
    result = []
    for product in products:
        result.append({
            'id': product.id,
            'url': f'/api/products/{product.id}/',
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'image_url': product.image_url,
            'rating': product.rating,
            'category': product.category.id,
        })
    return JsonResponse(result, safe=False)

def product(request, id):
    product = Product.objects.get(id=id)
    result = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'image_url': product.image_url,
        'rating': product.rating,
        'category': product.category.id,
    }
    return JsonResponse(result)

def products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = category.products.all()
    products_list = []
    for product in products:
        products_list.append({
            'id': product.id,
            'url': f'/api/products/{product.id}/',
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'image_url': product.image_url,
            'rating': product.rating,
        })
    result = {
        'id': category.id,
        'name': category.name,
        'items': products_list,
    }
    return JsonResponse(result)
