import Docker from 'dockerode';

let docker = new Docker({host: 'abstr.net', port: 30001});

async function getContainerIds() {
    let data = [];
    try {
        let containers = await docker.listContainers({all: true});
        for (let info of containers) {
            data.push(info.Id);
        }
    } catch (e) {
        console.error('ERROR', e);
    }
    return data;
}

async function stopAllContainers() {
    let containerIds = await getContainerIds();
    for (let id of containerIds) {
        docker.getContainer(id).stop({}, _ => _);
    }
}

async function removeAllContainers() {
    let containerIds = await getContainerIds();
    for (let id of containerIds) {
        docker.getContainer(id).remove({}, _ => _);
    }
}

async function clearContainer() {
    await stopAllContainers();
    await removeAllContainers();
}

await clearContainer();