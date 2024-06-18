FROM --platform=linux/x86_64 node:18.15.0-slim

RUN apt-get update && \
    apt-get install -y locales git procps
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /nodejs-study

# 1. node:20.11.0-slim をベースの Docker イメージとして指定します
#    node:18.15.0 のように : (コロン) の後ろにバージョンを置くことで、デフォルトのイメージを指定できます
#    slim : イメージを軽量化したものです
#    slim を使うとコンテナのビルドなどが高速になります
# 4. イメージに含まれていないソフトウェアのインストールや、
# 5. 日本語に関する設定をます
# 7. 日本語や、
# 8. タイムゾーンに関する設定をします
# 9. nodejs-study を作業ディレクトリとします