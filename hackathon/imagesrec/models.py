from django.db import models

class otherDetails(models.Model):
    image=models.ImageField(blank=False,upload_to='imagesrec/images')
    Learning_Rate=models.DecimalField(max_digits=4, decimal_places=2, default=0.00)
    Filter_Size=models.IntegerField(default=1)
    Layers=models.IntegerField(default=1)

  
