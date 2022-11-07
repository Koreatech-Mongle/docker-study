let Docker = require('dockerode')
let docker = new Docker({host:'abstr.net', port:30001});

imageName = "sansam1010/testimage"

image = docker.getImage(imageName)
docker.run(imageName, ["/bin/bash"], process.stdout).then(function (data) {
    console.log("LOG")
    console.log(data)
})
    .catch(function (err) {
        console.log("ERROR")
        console.log(err)
    })