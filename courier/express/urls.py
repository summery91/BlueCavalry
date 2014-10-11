#coding: utf-8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('express.views',
	url(r'^recevie/$', 'recevie', {'template_name':'recevie.html'}),    # 我要收件
	url(r'^send/$', 'send', {'template_name':'send.html'}),    # 我要发件
)