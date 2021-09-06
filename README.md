# club-finder-client

## Docker-compose

Repozytorium zostało rozszezone o kontenery dokera. Cały konfig znajduje się w plikach `docker-compose.yaml` oraz `Dockerfile`.
Przygotowana konfiguracja ma za zadanie ułatwić pracę developerą. W przypadku problemów ze środowiskiem proszę o kontakt z Kamil Jarosiński (kamil.jarosinski@gmail.com, 579522937).

Lab składa się z 3 kontenerów:
1. ts-node-docker-client - kontener zawiera środowisko uruchomieniowe nodejs. Aplikacja jest dostępna na porcie 3001. Niezbędne biblioteki są instalowane podczas procesu budowana (Patrz dalej). Do prawidłowego działa niezbędne są pliki/katalogi `package.json`, `src`, `public`, `tsconfig.json`. Zmiany kodu na hoście przeładują automatycznie serwer ?? - do potwierdzenia przez Franka. 

Aby podnieść środowisku niezbędny jest docker-compose.
Poniej kilka komend pozwalających kontrolować środowisko (naley być w katalogu w którym znajduje się plik `docker-compose.yaml`):
- `docker-compose up -d` - uruchamia środowisko w trybie usługi tzn. po uruchomieniu środowiska mozecie dalej korzystać z terminala
- `docker-compose up -d --build` - uruchamia środowisko w trybie usługi budując wszystkie kontenery od nowa. Obecnie zostanie przebudowany wyłącznie kontener `ts-node-docker`. Przebudowanie kontenera pozwala zainstalować wszystkie niezbędne liby z nodejs znajdujące się w pliku `package.json`
- `docker-compose down` - wyłącza kontenery bez usuwania danych
- `docker-compose down -v` - wyłącza kontenery oraz usuwa dane (voluminy dockera np. z bazy danych) 
- `ddocker-compose exec ts-node-docker bash` - uruchamia powłokę w kontenerze. Dzięki temu mozecie doinstalować nowe liby. Plik `package.json` na hoście zostanie zaktualizowany automatycznie.

Alternatywą do ostatniego polecenia jest uzycie kontenera monitorującego:
```docker run --rm -ti   --name=ctop   --volume /var/run/docker.sock:/var/run/docker.sock:ro   quay.io/vektorlab/ctop:latest```
Dzięki niemu mozecie bez problemu odpalić bash na kontenerach gdzie jest to mozliwe poprzez wybranie odpowiedniego kontenera, klik enter, exec shell
