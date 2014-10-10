#coding: utf-8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('backend.views',
	url(r'^login/$', 'login', {'template_name':'login.html'}),    # 登录
	url(r'^index/$', 'index', {'template_name':'index.html'}),    # index页面，仅仅为了测试
)