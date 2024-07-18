from rest_framework import viewsets, permissions
from .models import Recipe
from .serializers import RecipeSerializer
from django.shortcuts import render

# Create your views here.
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # The author will be the currently logged in user
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)