let Docker = require('dockerode')
let docker = new Docker({host:'abstr.net', port:30001});

async function getContainerIds() {
    data = []
    await docker.listContainers({all:true})
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

async function stopAllContainers() {
    (await getContainerIds()).forEach(function (value){
        docker.getContainer(value).stop();
    })
}

async function removeAllContainers(){
    (await getContainerIds()).forEach(function (value){
        docker.getContainer(value).remove();
    })
}

async function clearContainers(){
    stopAllContainers()
    removeAllContainers()
}

clearContainers()