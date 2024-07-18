from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = [
            'title',
            'author',
            'ingredients',
            'instructions',
            'category',
            'created_at'
        ]
