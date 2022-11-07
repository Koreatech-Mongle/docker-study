let Docker = require('dockerode')
let docker = new Docker({host:'abstr.net', port:30001});

docker.importImage("../..//file/image/export.tar", {repo:"sansam1010/testimage"})
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err){
        console.log(err)
    })