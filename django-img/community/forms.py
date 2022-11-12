from django import forms
from community.models import Review, Comment


class ReviewForm(forms.ModelForm):
    
    class Meta:
        model = Review
        fields = '__all__'


class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        exclude = ['review', 'user']
