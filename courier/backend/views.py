#coding: utf-8
from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse,HttpResponseRedirect
from django.template import Context,Template,RequestContext

# ======================================
# 	名字：登录界面
#   功能：管理员登录
#   人员：黄晓佳
#   日期：2014.10.10
# --------------------------------------
def login(request, template_name):
	return render(request, template_name)

def index(request, template_name):
	return render(request, template_name)