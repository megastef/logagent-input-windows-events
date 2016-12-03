# logagent-inpt-windows-events

Plugin to collect windows events 

1) Install logagent 2.x 
```
npm i -g @sematext/logagent
```
2) Install this plugin 
```
npm i -g logagent-input-windows-events  
```
3) configure logagent 
```
input:
  win-event:
    module: logagent-input-windows-events 
    intervall: 10
    providers: 
      - Microsoft-Windows-Security-SPP
      - Microsoft-Windows-Security-Auditing
      - Microsoft-Windows-DNS-Client
      - Service Control Manager
      - Microsoft-Windows-Kernel-General
      - MsiInstaller
      - Microsoft-Windows-RestartManager
      - Microsoft-Windows-CAPI2

output:
  elasticsearch:
    url: http://localhost:9200
    index: logs
```
4) Start logagent
```
logagent --config myconfig.yml
```
5) Result in Kibana
![](https://sematext.com/wp-content/uploads/2016/12/Bildschirmfoto-2016-12-02-um-21.44.27.png)


