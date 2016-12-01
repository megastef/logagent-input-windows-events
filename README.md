# logagent-tcp-input

Plugin to collect windows events 

1. Install logagent 2.x 

```
npm i -g @sematext/logagent
```

2. Install this plugin 
```
npm i -g @sematext/logagent-tcp-input  
```
3. configure logagent 

```
input:
  win-event:
    module: logagent-input-win-event
    intervall: 10
    providers: 
      - TestApp2
      - Microsoft-Windows-DNS-Client
output:
  elasticsearch:
    url: http://localhost:9200
    index: logs
```

4. Start logagent

```
logagent --config myconfig.yml
```


