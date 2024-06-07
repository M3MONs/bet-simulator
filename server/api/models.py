from django.db import models

# Create your models here.

# TODO: Create models: Match, Team, Bet, Result, Odd


class Team(models.Model):
    name = models.CharField(max_length=100)
    founded = models.DateField(null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    external_id = models.CharField(max_length=100, null=True, blank=True)
    source = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name
