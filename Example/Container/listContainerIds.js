let Docker = require('dockerode')
let docker = new Docker({host:'abstr.net', port:30001});

async function getContainerIds() {
    data = []
    await docker.listContainers()
        .then(function (containers) {
            containers.forEach(function (containerInfo) {
                data.push(containerInfo["Id"])
            })
        })
        .catch(function (err) {
            console.log(err)
        })

    return data
}

getContainerIds().then(function (value) {
    console.log(value)
})