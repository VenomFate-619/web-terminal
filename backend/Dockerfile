FROM ubuntu
RUN apt update && apt upgrade -y
RUN apt install curl nano -y
RUN apt install sudo -y
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && apt install -y nodejs
# RUN echo "PS1='\w '" >> ~/.bashrc
# RUN echo 'root:password' | chpasswd
# WORKDIR /root