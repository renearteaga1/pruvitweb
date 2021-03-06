# Generated by Django 3.2 on 2022-01-21 19:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0002_auto_20220120_0402'),
    ]

    operations = [
        migrations.AlterField(
            model_name='precio',
            name='iva',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=3),
        ),
        migrations.AlterField(
            model_name='precio',
            name='precio_anterior',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5),
        ),
        migrations.AlterField(
            model_name='precio',
            name='producto',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='precio', to='inventario.producto'),
        ),
    ]
