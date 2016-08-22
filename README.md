



Change Gruntfile 
`hostname: grunt.option('hostname') || '192.168.0.103',`

Change config.js
Update openshift url

Change master-config.yaml
`corsAllowedOrigins:
 - 127.0.0.1
 - 192.168.0.103:8443
 - localhost
 - 192.168.0.103:9000`


start openshift with same config
`oc cluster up --host-config-dir=/Users/subin/development/origin/subin --use-existing-config`


start the app 
`grunt serve`

