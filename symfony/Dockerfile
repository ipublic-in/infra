FROM ubuntu:focal
LABEL Author="Sandeep Kumar" Description="Ubuntu latest - Apache2 + PHP 8.1 + modules + composer"

# Web root
RUN mkdir -p /var/www/html/public/

# php8.1
RUN apt-get update && apt-get -y install software-properties-common && add-apt-repository ppa:ondrej/php -y
RUN apt-get update && apt-get upgrade -y

# utils
RUN apt-get -y install \
  vim \
  tree \
  zip \
  unzip \
  curl \
  wget \
  git \
  gnupg \
  iputils-ping \
  net-tools

# Apache2
RUN apt-get -y install apache2 php8.1 libapache2-mod-php8.1

# PHP extensions
RUN apt-get -y install \
  php8.1-cli \
  php8.1-curl \
  php8.1-mbstring \
  php8.1-gd \
  php8.1-mysql \
  php8.1-ldap \
  php8.1-pgsql \
  php8.1-tidy \
  php8.1-intl \
  php8.1-xmlrpc \
  php8.1-soap \
  php8.1-uploadprogress \
  php8.1-zip \
  php8.1-sqlite3 \
  php8.1-xml \
  php8.1-opcache \
  php8.1-xdebug

# Site / Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get -y install libcap2-bin && \
  setcap 'cap_net_bind_service=+ep' /usr/sbin/apache2 && \
  apt-get -y autoremove && \
  a2disconf other-vhosts-access-log && \
  chown -Rh www-data. /var/run/apache2

# Ménage
RUN a2disconf other-vhosts-access-log && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

# Apache
COPY conf/vhost.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite headers expires ext_filter remoteip

# PHP configs copy
COPY conf/php.conf.d/* /etc/php/8.1/apache2/conf.d/

# symfony cli
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN export PATH="$HOME/.symfony5/bin:$PATH"

EXPOSE 80
USER root

ENTRYPOINT ["apache2ctl", "-D", "FOREGROUND"]