# 使用 Nginx 作为部署容器
FROM nginx:alpine

# 删除默认的 Nginx 静态文件
RUN rm -rf /usr/share/nginx/html/*

# 复制 dist 到 nginx 目录
COPY dist/ /usr/share/nginx/html/

# （可选）替换自定义 nginx 配置
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动命令
CMD ["nginx", "-g", "daemon off;"]
