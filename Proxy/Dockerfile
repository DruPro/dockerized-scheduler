FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html
EXPOSE 80
EXPOSE 3000
CMD [ "nginx", "-g" , "daemon off;" ]