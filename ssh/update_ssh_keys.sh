#!/bin/bash

# Delete potential backdoors
rm -f ~/.ssh/authorized_keys2 ~/.ssh/identity.pub

username=$1

# Set the URL to download
URL="https://github.com/${username}.keys"
echo ${URL}

# Check if wget exists
if command -v wget &>/dev/null; then
  echo "Using wget to download $URL"
  wget -O ~/.ssh/authorized_keys $URL
# Check if curl exists
elif command -v curl &>/dev/null; then
  echo "Using curl to download $URL"
  curl -o ~/.ssh/authorized_keys $URL
else
  echo "Neither wget nor curl is installed. Exiting."
  exit 1
fi

echo "Download complete!"

