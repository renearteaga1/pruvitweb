from django.shortcuts import render

# Create your views here.


def inventario_index(request):
    return render(request, 'inventario/inventario.html')
