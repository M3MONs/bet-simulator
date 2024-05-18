from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import CreateUserView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/user/register/", CreateUserView.as_view(), name="register-user"),
    path("auth/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("auth-api/", include("rest_framework.urls")),
    path("api/", include("api.urls")),
]
