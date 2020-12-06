from django import forms
from imagesrec.models import otherDetails

class img(forms.ModelForm):
    class Meta:
        model=otherDetails
        fields = "__all__"
        image = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}))
