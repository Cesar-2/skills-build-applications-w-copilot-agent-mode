
from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone
from django.conf import settings
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        self.stdout.write(self.style.WARNING('Deleting old data (direct MongoDB cleanup)...'))
        client = MongoClient(settings.DATABASES['default']['CLIENT']['host'], settings.DATABASES['default']['CLIENT']['port'])
        db = client[settings.DATABASES['default']['NAME']]
        db['leaderboard'].delete_many({})
        db['activities'].delete_many({})
        db['users'].delete_many({})
        db['workouts'].delete_many({})
        db['teams'].delete_many({})

        self.stdout.write(self.style.SUCCESS('Creating teams...'))
        marvel = Team.objects.create(name='Marvel', description='Marvel superheroes')
        dc = Team.objects.create(name='DC', description='DC superheroes')

        self.stdout.write(self.style.SUCCESS('Creating users...'))
        users = []
        users.append(User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel, is_superhero=True))
        users.append(User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel, is_superhero=True))
        users.append(User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc, is_superhero=True))
        users.append(User.objects.create(name='Batman', email='batman@dc.com', team=dc, is_superhero=True))

        self.stdout.write(self.style.SUCCESS('Creating workouts...'))
        w1 = Workout.objects.create(name='Cardio Blast', description='High intensity cardio', suggested_for='Marvel')
        w2 = Workout.objects.create(name='Strength Training', description='Build muscle', suggested_for='DC')

        self.stdout.write(self.style.SUCCESS('Creating activities...'))
        Activity.objects.create(user=users[0], type='Running', duration=30, date=timezone.now())
        Activity.objects.create(user=users[1], type='Cycling', duration=45, date=timezone.now())
        Activity.objects.create(user=users[2], type='Swimming', duration=60, date=timezone.now())
        Activity.objects.create(user=users[3], type='Yoga', duration=50, date=timezone.now())

        self.stdout.write(self.style.SUCCESS('Creating leaderboard...'))
        Leaderboard.objects.create(team=marvel, points=100)
        Leaderboard.objects.create(team=dc, points=90)

        self.stdout.write(self.style.SUCCESS('Database populated with test data!'))
