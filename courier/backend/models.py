from django.db import models

# Create your models here.
class Send_user(models.Model):
	name=models.CharField(max_length=20)
	phone=models.CharField(max_length=20)
	addr=models.CharField(max_length=100)
	time=models.CharField(max_length=20)
	send_addr=models.CharField(max_length=100)
	description=models.CharField(max_length=140)
	value_area=models.CharField(max_length=100)
	value_weight=models.CharField(max_length=20)
	value_price=models.CharField(max_length=20)
	datetime=models.DateTimeField(auto_now_add = True)
	end_flag=models.BooleanField(default = False)


class Receive_user(models.Model):
	name=models.CharField(max_length=20)
	phone=models.CharField(max_length=20)
	fetch_addr=models.CharField(max_length=100)
	send_addr=models.CharField(max_length=100)
	send_time=models.CharField(max_length=20)
	description=models.CharField(max_length=140)
	datetime=models.DateTimeField(auto_now_add = True)
	end_flag=models.BooleanField(default = False)