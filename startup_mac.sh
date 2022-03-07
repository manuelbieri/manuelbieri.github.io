ps aux |grep jekyll |awk '{print $2}' | xargs kill -9
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
rbenv rehash
bundle exec jekyll serve