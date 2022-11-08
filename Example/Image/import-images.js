import Docker from 'dockerode';

let docker = new Docker({host: 'abstr.net', port: 30001});

try {
    let data = await docker.importImage('../../file/image/export.tar', {repo: 'sansam1010/testimage'});
    console.log(data);
} catch (e) {
    console.error(e);
}
