import contextlib

from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "vite.users"
    verbose_name = _("Users")

    def ready(self):
        with contextlib.suppress(ImportError):
            import vite.users.signals  # noqa: F401
