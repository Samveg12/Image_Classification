from django.db import models

class otherDetails(models.Model):
    image=models.FileField(blank=True,upload_to='imagesrec/images')
    
