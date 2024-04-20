FROM ubuntu
RUN useradd -ms /bin/bash aman
WORKDIR /home/aman/
RUN apt update && apt upgrade -y
RUN apt install curl nano -y
RUN apt install sudo -y
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && apt install -y nodejs
RUN echo "PS1='\w '">>/home/aman/.bashrc
WORKDIR /home/aman/code

RUN chown -R aman:aman /home/aman/code