# proxy [Address of proxy]
function proxy
    set -Ux all_proxy http://$argv[(count $argv)]:10811
    set -Ux http_proxy http://$argv[(count $argv)]:10811
    set -Ux https_proxy http://$argv[(count $argv)]:10811
    echo all_proxy=$all_proxy
    echo http_proxy=$http_proxy
    echo https_proxy=$https_proxy
end

function noproxy
    set -e all_proxy
    set -e http_proxy
    set -e https_proxy
end
