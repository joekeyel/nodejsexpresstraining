FROM oraclelinux:7-slim

RUN  yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
     yum-config-manager --disable ol7_developer_EPEL && \
     yum -y install oracle-instantclient19.3-basiclite nodejs && \
     rm -rf /var/cache/yum

#   for tunneling   
# RUN yum -y install openssh-server

WORKDIR /myapp
ADD package.json /myapp/
ADD server.js /myapp/


RUN npm install

COPY . .

CMD exec node server.js

EXPOSE 5002


CMD [ "node", "server.js" ]

