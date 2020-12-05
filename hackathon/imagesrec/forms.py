from django import forms
from imagesrec.models import otherDetails

class img(forms.ModelForm):
    class Meta:
        model=otherDetails
        fields = "__all__"
