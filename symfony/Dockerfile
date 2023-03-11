FROM ipublicin/lap
LABEL Author="Sandeep Kumar" Description="Symfony on Ubuntu latest - Apache2 + PHP 8.1 + modules + composer"

# symfony cli
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN export PATH="$HOME/.symfony5/bin:$PATH"

EXPOSE 8080
USER root

ENTRYPOINT ["apache2ctl", "-D", "FOREGROUND"]