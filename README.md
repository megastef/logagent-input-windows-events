# logagent-inpt-windows-events

Plugin for [Logagent](https://sematext.com/loagagent) to collect windows events 

1) Install [logagent 2.x](https://www.npmjs.com/package/@sematext/logagent) 
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
  windowsEvent:
    module: logagent-input-windows-events 
    intervall: 10
    logNames: 
      - Security
      - System
      - Application
      - Setup

output:
  elasticsearch:
    url: http://localhost:9200
    index: logs
```
4) Start logagent
```
logagent-windows --config myconfig.yml
```
5) Result in Kibana
![](https://sematext.com/wp-content/uploads/2016/12/Bildschirmfoto-2016-12-02-um-21.44.27.png)


