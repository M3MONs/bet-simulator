from django.db import models
from django.contrib.auth.models import User

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


class Match(models.Model):
    home_team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name="home_team"
    )
    away_team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name="away_team"
    )
    date = models.DateTimeField()
    external_id = models.CharField(max_length=100, null=True, blank=True)
    source = models.CharField(max_length=100, null=True, blank=True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.home_team.name} vs {self.away_team.name}"


class Odd(models.Model):
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    home_team_odd = models.FloatField()
    away_team_odd = models.FloatField()
    draw_odd = models.FloatField()
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Odds for {self.match}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.FloatField(default=0)

    def __str__(self):
        return f"{self.user.username} - {self.balance}"
