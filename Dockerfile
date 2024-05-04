FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/
COPY dist/ /var/wwww/html/cms/html/