from django.db import models
from django.conf import settings


class Review(models.Model):
    img = models.ImageField(upload_to='uploads/%Y/%m/%d/', blank=True)


class Comment(models.Model):
    content = models.CharField(max_length=100)
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
