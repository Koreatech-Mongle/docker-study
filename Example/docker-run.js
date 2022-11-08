import Docker from 'dockerode';

let docker = new Docker({host: 'abstr.net', port: 30001});

let imageName = 'sansam1010/testimage';

let image = docker.getImage(imageName);
console.log(image);

try {
    let data = await docker.run(imageName, ['/bin/bash'], process.stdout, {}, {});
    console.log('LOG', data);
} catch (e) {
    console.error('ERROR', e);
}
