import Docker from 'dockerode';

let docker = new Docker({host: 'abstr.net', port: 30001});

async function getContainerIds() {
    let data = [];
    try {
        let containers = await docker.listContainers({});
        for (let info of containers) {
            data.push(info.Id);
        }
    } catch (e) {
        console.error('ERROR', e);
    }
    return data;
}

let value = await getContainerIds();
console.log(value);