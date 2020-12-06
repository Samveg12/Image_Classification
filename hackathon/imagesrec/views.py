from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import otherDetails
from django.contrib import messages
from django.contrib import messages
from django.views.generic.edit import FormView

from .forms import img


def index(request):
    return render(request, 'home.html')

def backend(request):
    return HttpResponse("Hello there")


def bulk(request):
    if request.method == "POST":
        form = img(request.POST, request.FILES)
        if form.is_valid():
            object = form.save(commit=False)
            object.save()

            messages.success(request, "Your entry has been noted")
            return redirect("/backend")
        else:
            messages.success(request, "Sorry wrong")
            return redirect("/")


    else:
        form = img()
        return render(request, 'bulk.html', {"form": form})
def video(request):
    if request.method == "POST":
        form = img(request.POST, request.FILES)
        print(form)
        if form.is_valid():
            object = form.save(commit=False)
            object.save()

            messages.success(request, "Your entry has been noted")
            return redirect("/backend")
        else:
            print("(**********")
            print("Hi")
            print("*******")
            return redirect("/")


    else:
        form = img()
        print("uuuuuuuuu")
        return render(request, 'video.html', {"form": form})