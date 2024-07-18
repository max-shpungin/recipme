from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=50)
    author= models.ForeignKey(User, on_delete=models.CASCADE)
    description= models.TextField(default="No description provided")
    ingredients = models.TextField(default="No ingredients provided")
    instructions = models.TextField(default="No instructions provided")
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now=True)
