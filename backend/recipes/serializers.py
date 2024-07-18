from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = [
            'id',
            'title',
            'author',
            'description',
            'ingredients',
            'instructions',
            'category',
            'created_at',
        ]
