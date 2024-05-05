FROM ubuntu
RUN useradd -ms /bin/bash defaultUser
WORKDIR /home/defaultUser/
RUN apt update && apt upgrade -y
RUN apt install curl nano sudo -y
RUN echo 'defaultUser:password' | chpasswd
RUN echo "defaultUser ALL=(ALL) ALL" >> /etc/sudoers
USER defaultUser